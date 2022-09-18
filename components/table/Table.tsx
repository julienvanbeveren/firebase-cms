import React, { useContext, useEffect, useState } from "react";
import { Content, Schema } from "../../types";
import HeaderRow from "./header/HeaderRow";
import {
  collection,
  DocumentData,
  limit,
  onSnapshot,
  query,
  QueryDocumentSnapshot,
  Unsubscribe,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import BodyRow from "./body/BodyRow";

interface TableProps {
  content: Content;
}

interface useTableProps {
  schema: Schema;
  setSchema: React.Dispatch<React.SetStateAction<Schema>>;
}

const TableContext = React.createContext<useTableProps>({
  schema: { name: "", fields: [] },
  setSchema: () => {
    return { name: "", fields: [] };
  },
});

export function useTableData() {
  return useContext(TableContext);
}

export default function Table({ content }: TableProps) {
  const [schema, setSchema] = useState(content.schema);
  const [data, setData] = useState<QueryDocumentSnapshot<DocumentData>[]>([]);

  useEffect(() => {
    setSchema(content.schema);
  }, [content.schema]);

  useEffect(() => {
    let unsub: Unsubscribe;
    (async () => {
      const q = query(collection(db, content.firebasePath), limit(10));
      unsub = onSnapshot(q, (querySnapshot) => {
        const entries = querySnapshot.docs;
        setData(entries);
      });
    })();
    return () => {
      unsub();
    };
  }, [content.firebasePath]);

  const value = {
    schema: schema,
    setSchema: setSchema,
  };

  return (
    <TableContext.Provider value={value}>
      <div className="table-wrapper">
        <div className="table">
          <HeaderRow schema={content.schema} />
          {data.map((row, i) => {
            return <BodyRow key={i} data={row} />;
          })}
        </div>
        <div className="pagination"></div>
      </div>
    </TableContext.Provider>
  );
}
