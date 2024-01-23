import { HoaScheme } from "@/lib/models";
import React from "react";

interface Props {
  value: HoaScheme;
}

export default function Scheme({ value }: Props) {
  return (
    <div className="grid grid-rows-3 grid-cols-3 p-4">
      <div className="flex items-center">
        <div
          className="w-8 h-8 m-2"
          style={{ background: value.body }}
        ></div>
        <small>Body</small>
      </div>
      <div className="flex items-center">
        <div
          className="w-8 h-8 m-2"
          style={{ background: value.fascia }}
        ></div>
        <small>Fascia</small>
      </div>
      <div className="flex items-center">
        <div
          className="w-8 h-8 m-2"
          style={{ background: value.accent }}
        ></div>
        <small>Accent</small>
      </div>
      
      <div className="flex items-center">
        <div
          className="w-8 h-8 m-2"
          style={{ background: value.bands }}
        ></div>
        <small>Stucco Moldings</small>
      </div>
      <div className="flex items-center">
        <div
          className="w-8 h-8 m-2"
          style={{ background: value.garage }}
        ></div>
        <small>Garage Door</small>
      </div>
      <div className="flex items-center">
        <div
          className="w-8 h-8 m-2"
          style={{ background: value.frontDoor }}
        ></div>
        <small>Front Door</small>
      </div>
    </div>
  );
}
