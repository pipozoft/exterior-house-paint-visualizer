"use client";

import * as React from "react";
import { RoofSelector } from "./selectors/roof";
import { SchemeSelector } from "./selectors/approved-schemes";
import { DoorSelector } from "./selectors/door-schemes";
import TrimOptionsSelector from "./selectors/trim-options";


export function SelectorForm() {
  return (
    <React.Suspense>
      <RoofSelector />
      <SchemeSelector />
      <TrimOptionsSelector />
      <hr className="mb-4" />
      <DoorSelector />
    </React.Suspense>
  );
}
