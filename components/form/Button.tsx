import { useRouter } from "next/router";
import React, { CSSProperties } from "react";

interface ButtonProps {
  icon?: React.ReactElement;
  text: string;
  event: string | Function;
  variant?: "accent" | "outline";
  style?: CSSProperties;
}

export default function Button({
  icon,
  text,
  event,
  variant = "accent",
  style,
}: ButtonProps) {
  const router = useRouter();

  function handleClick() {
    if (typeof event == "string") {
      router.push(event);
    } else {
      event();
    }
  }

  return (
    <button
      type="button"
      style={style}
      className={`button ${variant}`}
      onClick={handleClick}
    >
      {icon}
      {text}
    </button>
  );
}
