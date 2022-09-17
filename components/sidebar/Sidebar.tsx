import React from "react";
import Link from "./Link";
import { FiLayers, FiPenTool } from "react-icons/fi";
import { useRouter } from "next/router";

interface SidebarProps {}

export default function Sidebar({}: SidebarProps) {
  const router = useRouter();

  return (
    <div className="sidebar">
      <div className="upper">
        <div className="logo">Firebase CMS</div>
        <div className="user">
          <img
            src={`https://avatars.dicebear.com/api/initials/${"Julien Van Beveren"}.svg`}
            alt="Profile Picture"
          />
          <div>
            <h1>Julien Van Beveren</h1>
            <p>julien.vanbeveren@gmail.com</p>
          </div>
        </div>
        <div className="links">
          <Link
            text="Schema"
            icon={<FiLayers size="15px" />}
            event="/schema"
            active={/^\/schema(\/|$)/.test(router.asPath)}
          />
          <Link
            text="Content"
            icon={<FiPenTool size="15px" />}
            event="/content"
            active={/^\/content(\/|$)/.test(router.asPath)}
          />
        </div>
      </div>
      <div className="bottom"></div>
    </div>
  );
}
