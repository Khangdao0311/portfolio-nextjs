"use client";
import { useState } from "react";
import { Drawer } from "antd";
import { FaList, FaRegCircleXmark } from "react-icons/fa6";

import Navigation from "./Navigation";

function Sidebar() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <div onClick={() => setOpenDrawer(true)} className="center-flex">
        <FaList className="w-5 h-5" />
      </div>
      <Drawer
        title="Menu"
        placement="right"
        closable
        closeIcon={<FaRegCircleXmark className="text-white" />}
        onClose={() => setOpenDrawer(false)}
        open={openDrawer}
        zIndex={50}
        width="min(40vw, 300px)"
        styles={{
          body: { background: "black", backdropFilter: "blur(8px)" },
          header: {
            background: "black",
            color: "#fff",
            borderBottom: "1px solid white",
          },
        }}
      >
        <div className="flex flex-col gap-4">
          <Navigation />
        </div>
      </Drawer>
    </>
  );
}

export default Sidebar;
