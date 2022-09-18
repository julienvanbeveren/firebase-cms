import React, { useState } from "react";
import { useThrottle } from "@julienvanbeveren/hooks";
import { useTableData } from "../Table";

interface HeaderItemProps {
  name: string;
  icon?: React.ReactElement;
  resize?: boolean;
  id: string;
}

export default function HeaderItem({
  name,
  icon,
  resize = true,
  id,
}: HeaderItemProps) {
  const { schema, setSchema } = useTableData();
  const [width, setWidth] = useState(200);
  const [mouseEvent, setMouseEvent] = useState<
    React.DragEvent<HTMLDivElement> | undefined
  >();

  function handleResize(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (!resize) return;
    // @ts-ignore
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    let tempSchema = schema;
    let tempField = schema.fields.find((field) => field.id == id);
    if (!tempField) return;
    if (tempField.interface?.width) {
      tempField.interface.width = Math.floor(x);
    }
    setSchema(tempSchema);
    setWidth((prev) => {
      return prev + Math.floor(x);
    });
  }

  useThrottle(
    () => {
      mouseEvent && handleResize(mouseEvent);
    },
    [mouseEvent],
    50
  );

  return (
    <div className="header-item" style={{ width: width + "px" }}>
      {icon}
      {name}
      {resize && (
        <div className="handle" draggable onDrag={(e) => setMouseEvent(e)} />
      )}
    </div>
  );
}
