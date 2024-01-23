import { getSwColorById } from "@/lib/utils";
import React from "react";

export default function Color({id, title}: {id: string, title: string}) {
    const value = getSwColorById(id);
  return (
    <div className="flex items-center">
      <div
        className="size-10 m-2"
        style={{ background:  value?.hex}}
      ></div>
      <div>
        <p className="uppercase text-xxs text-gray-500">{title}</p>
        <small className="text-xs">
          {value?.brandKey}{" "}
          {value?.colorNumber} -{" "}
          {value?.name}
        </small>
      </div>
    </div>
  );
}
