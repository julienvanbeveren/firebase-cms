import React from "react";

interface LabelProps {
  text: string;
}

export default function Label({ text }: LabelProps) {
  return <div className="label">{text}</div>;
}
