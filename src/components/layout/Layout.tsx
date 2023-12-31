import { Outlet } from "react-router-dom";

import { LeftSidebar, RightSidebar } from "./index.ts";

interface LayoutProps {
  content: React.ReactNode;
}

export default function Layout({ content }: LayoutProps) {
  return (
    <div className="flex h-screen justify-between">
      <LeftSidebar />
      <div className="w-full">
        {content}
        <Outlet />
      </div>
      <RightSidebar />
    </div>
  );
}
