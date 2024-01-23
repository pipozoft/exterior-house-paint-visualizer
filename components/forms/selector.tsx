"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import schemes from "@/lib/data/hoa-schemes.json";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { DEFAULT_ROOF_COLOR } from "@/lib/constants";

const options = schemes.map((s) => {
  return {
    value: s.id,
    label: s.name,
  };
});

function RoofSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const roofColor = searchParams.get("roofColor") || DEFAULT_ROOF_COLOR;
  const handleOnChange = (e: any) => {
    const cleanValue = e.target.value.replace("#", "");
    router.push(
      `${location.pathname}?${createQueryString("roofColor", cleanValue)}`
    );
  };

  return (
    <div className="mb-4">
      <Label htmlFor="roofColor">Select Roof Color:</Label>
      <Input type="color" value={`#${roofColor}`} onChange={handleOnChange} />
    </div>
  );
}

function SchemeSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);

  const schemeIdParam = searchParams.get("schemeId");

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const [value, setValue] = React.useState(
    options.find((o) => o.value === schemeIdParam)?.value || ""
  );

  return (
    <>
      <Label htmlFor="roofColor">Select Approve Paint Scheme:</Label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between"
          >
            {value
              ? options.find((option) => option.value === value)?.label
              : "Select scheme..."}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0">
          <Command>
            <CommandInput placeholder="Search approved scheme..." />
            <CommandEmpty>No scheme found.</CommandEmpty>
            <CommandGroup className="max-h-96 overflow-scroll">
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    const schemeId = currentValue === value ? "" : currentValue;
                    setValue(schemeId);
                    router.push(
                      `${location.pathname}?${createQueryString(
                        "schemeId",
                        schemeId
                      )}`
                    );
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </>
  );
}

export function SelectorForm() {
  return (
    <React.Suspense>
      <RoofSelector />
      <SchemeSelector />
    </React.Suspense>
  );
}
