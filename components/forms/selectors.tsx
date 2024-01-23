"use client";

import * as React from "react";
import { RoofSelector } from "./selectors/roof";
import { SchemeSelector } from "./selectors/approved-schemes";
import { DoorSelector } from "./selectors/door-schemes";


export function SelectorForm() {
  return (
    <React.Suspense>
      <RoofSelector />
      <SchemeSelector />
      <hr className="mb-4" />
      <DoorSelector />
    </React.Suspense>
  );
}
