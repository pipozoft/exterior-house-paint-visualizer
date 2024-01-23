"use client";

import * as React from "react";
import { RoofSelector } from "./selectors/roof";
import { SchemeSelector } from "./selectors/approved-schemes";


export function SelectorForm() {
  return (
    <React.Suspense>
      <RoofSelector />
      <SchemeSelector />
    </React.Suspense>
  );
}
