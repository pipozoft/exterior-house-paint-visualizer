import { getSchemeFromId } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useCallback } from "react";

export default function BrandSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const brand = searchParams.get("brand");

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      params.delete('schemeId')

      return params.toString();
    },
    [searchParams]
  );

  const handleChange = (value: string) => {
    router.push(
      `${location.pathname}?${createQueryString("brand", value)}`
    );
  };

  return (
    <div className="my-4">
      <Label>Select Paint Brand</Label>
      <Select value={brand ? brand : ''} onValueChange={handleChange}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Select paint brand..." />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="BM">
                Benjamin Moore
              </SelectItem>
              <SelectItem value="SW">
                Sherwin Williams
              </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
