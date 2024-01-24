import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { DEFAULT_ROOF_COLOR } from "@/lib/constants";
import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

export function RoofSelector() {
    const router = useRouter();
    const searchParams = useSearchParams();
  
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
        <Input className="bg-white" id="roofColor" name="roofColor" type="color" value={`#${roofColor}`} onChange={handleOnChange} />
      </div>
    );
  }