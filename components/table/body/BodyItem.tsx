import React from "react";

interface BodyItemProps {
  data: string;
  width: number | undefined;
}

export default function BodyItem({ data, width = 200 }: BodyItemProps) {
  return (
    <div className="body-item" style={{ width: width + "px" }}>
      {data}
    </div>
  );
}
