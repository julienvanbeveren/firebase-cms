import React from "react";
import ExtendedSidebar from "./ExtendedSidebar";
import content from "../../config/content";
import Link from "../sidebar/Link";
import { useRouter } from "next/router";

export default function ExtendedContent() {
  const router = useRouter();

  return (
    <ExtendedSidebar title="Content">
      {content.map((el, i) => {
        return (
          <Link
            key={i}
            active={router.asPath.startsWith(`/content/${slugSafe(el.name)}`)}
            text={el.name}
            event={`/content/${slugSafe(el.name)}`}
          />
        );
      })}
    </ExtendedSidebar>
  );
}

export function slugSafe(name: string) {
  return name.replaceAll(" ", "_").toLowerCase();
}
