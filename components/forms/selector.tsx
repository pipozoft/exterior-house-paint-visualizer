"use client";

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"
import schemes from '@/app/data/hoa-schemes.json';

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useRouter, useSearchParams } from "next/navigation";

const options = schemes.map(s => {
    return {
        value: s.id,
        label: s.name,
    }
});

interface Props {
    onSelect?: (value: string) => void;
}

export function SelectorForm({onSelect}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [open, setOpen] = React.useState(false);

  const schemeIdParam = searchParams.get('schemeId');
  
  const [value, setValue] = React.useState(options.find(o => o.value === schemeIdParam)?.value || ''); 

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[280px] justify-between"
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
                  router.push(`${location.pathname}?schemeId=${schemeId}`);
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
  )
}
