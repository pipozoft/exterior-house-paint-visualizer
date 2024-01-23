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
import { cn } from "@/lib/utils";
import schemes from "@/lib/data/door-schemes.json";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Label } from "@/components/ui/label";
import { Check, ChevronsUpDown } from "lucide-react";

const options = schemes.map((s) => {
    return {
      value: s.id,
      label: s.name,
    };
  });
  
  export function DoorSelector() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [open, setOpen] = useState(false);
  
    const doorIdParam = searchParams.get("doorId");
  
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
      (name: string, value: string) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set(name, value);
  
        return params.toString();
      },
      [searchParams]
    );
  
    const [value, setValue] = useState(
      options.find((o) => o.value === doorIdParam)?.value || ""
    );
  
    return (
      <>
        <Label htmlFor="roofColor">Select Approved Door Scheme:</Label>
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
                      const doorId = currentValue === value ? "" : currentValue;
                      setValue(doorId);
                      router.push(
                        `${location.pathname}?${createQueryString(
                          "doorId",
                          doorId
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