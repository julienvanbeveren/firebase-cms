import { useRouter } from "next/router";
import React from "react";

interface LinkProps {
  icon: React.ReactElement;
  text: string;
  event: string | Function;
  active?: boolean;
}

export default function Link({ icon, text, event, active }: LinkProps) {
  const router = useRouter();

  function handleClick() {
    if (typeof event == "string") {
      router.push(event);
    } else {
      event();
    }
  }

  return (
    <div className={`menu-link ${active && "active"}`} onClick={handleClick}>
      {icon}
      <span>{text}</span>
    </div>
  );
}
