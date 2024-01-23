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
          <Color id={value.body} title="Body" />
          <Color id={value.fascia} title="fascia" />
          <Color id={value.accent} title="accent" />
          <Color id={value.bands} title="Stucco Moldings" />
          <Color id={value.garage} title="Garage Door" />
          <Color id={value.frontDoor} title="Front Door" />
        </div>
      )}
    </>
  );
}
