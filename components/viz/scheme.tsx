import { HoaScheme } from "@/lib/models";
import { getSwColorById } from "@/lib/utils";
import React from "react";
import Color from "./color";

interface Props {
  value?: HoaScheme;
}

export default function Scheme({ value }: Props) {
  return (
    <div className="mt-8">
      <h1 className="text-xl px-6">{value?.name}</h1>
      {value && (
        <div className="grid lg:grid-rows-2 lg:grid-cols-3 p-4">
          <Color id={value.body || 'WHITE'} title="Body" />
          <Color id={value.fascia || 'WHITE'} title="fascia" />
          <Color id={value.accent || 'WHITE'} title="accent" />
          <Color id={value.bands || 'WHITE'} title="Stucco Moldings" />
          <Color id={value.garage || 'WHITE'} title="Garage Door" />
          <Color id={value.frontDoor || 'WHITE'} title="Front Door" />
        </div>
      )}
      <small className="text-gray-800 px-6 italic">* {value?.notes}</small>
    </div>
  );
}
