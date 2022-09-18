import React from "react";
import { Schema } from "../../../types";
import BodyItem from "./BodyItem";
import { DocumentData, QueryDocumentSnapshot } from "firebase/firestore";
import { useTableData } from "../Table";

interface BodyRowProps {
  data: QueryDocumentSnapshot<DocumentData>;
}

export default function BodyRow({ data }: BodyRowProps) {
  const { schema } = useTableData();

  return (
    <div className="body-row">
      <BodyItem width={200} data={data.id} />
      {schema.fields.map((field, i) => {
        return (
          <BodyItem
            width={field.interface?.width}
            data={data.data()[field.id]}
            key={i}
          />
        );
      })}
    </div>
  );
}
