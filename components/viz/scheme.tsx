import { HoaScheme } from "@/lib/models";
import { getSwColorById } from "@/lib/utils";
import React from "react";
import Color from "./color";

interface Props {
  value?: HoaScheme;
}

export default function Scheme({ value }: Props) {
  return (
    <>
      {value && (
        <div className="grid lg:grid-rows-3 lg:grid-cols-3 p-4">
          <Color id={value.body || 'WHITE'} title="Body" />
          <Color id={value.fascia || 'WHITE'} title="fascia" />
          <Color id={value.accent || 'WHITE'} title="accent" />
          <Color id={value.bands || 'WHITE'} title="Stucco Moldings" />
          <Color id={value.garage || 'WHITE'} title="Garage Door" />
          <Color id={value.frontDoor || 'WHITE'} title="Front Door" />
        </div>
      )}
    </>
  );
}
