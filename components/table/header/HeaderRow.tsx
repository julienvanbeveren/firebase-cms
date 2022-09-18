import React from "react";
import { FiFileText } from "react-icons/fi";
import { RiText } from "react-icons/ri";
import { AiOutlineNumber } from "react-icons/ai";
import { Schema } from "../../../types";
import HeaderItem from "./HeaderItem";

interface HeaderRowProps {
  schema: Schema;
}

export default function HeaderRow({ schema }: HeaderRowProps) {
  return (
    <div className="header-row">
      <HeaderItem id="id" name="ID" resize={false} />
      {schema.fields.map((field, i) => {
        return (
          <HeaderItem
            key={i}
            name={field.displayName}
            id={field.id}
            icon={GetIcon(field.type)}
            resize={false}
          />
        );
      })}
    </div>
  );
}

function GetIcon(type: string) {
  switch (type) {
    case "Single Line":
      return <RiText />;
    case "Number":
      return <AiOutlineNumber />;
  }
  return <></>;
}
