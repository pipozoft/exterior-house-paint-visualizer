"use client";

import * as React from "react";
import { RoofSelector } from "./selectors/roof";
import { SchemeSelector } from "./selectors/approved-schemes";
import { DoorSelector } from "./selectors/door-schemes";
import TrimOptionsSelector from "./selectors/trim-options";
import ReversibleSelector from "./selectors/reversible";
import BrandSelector from "./selectors/brand";


export function SelectorForm() {
  return (
    <React.Suspense>
      <RoofSelector />
      <BrandSelector />
      <SchemeSelector />
      <TrimOptionsSelector />
      <ReversibleSelector />
      <hr className="mb-4" />
      <DoorSelector />
    </React.Suspense>
  );
}
