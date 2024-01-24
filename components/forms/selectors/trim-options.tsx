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

export default function TrimOptionsSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const schemeId = searchParams.get("schemeId");
  const trimOption = searchParams.get("trimOption");

  const scheme = schemeId && getSchemeFromId(schemeId);

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

  const handleChange = (value: string) => {
    router.push(
      `${location.pathname}?${createQueryString("trimOption", value)}`
    );
  };

  if (!(scheme && scheme.trimOptions)) return <></>;

  return (
    <div className="my-4">
      <Label>Select Trim Option</Label>
      <Select value={trimOption || "0"} onValueChange={handleChange}>
        <SelectTrigger className="bg-white">
          <SelectValue placeholder="Trim" />
        </SelectTrigger>
        <SelectContent>
          {scheme.trimOptions
            .map((t, index) => {
              return {
                value: index,
                label: `Trim ${index + 1}`,
              };
            })
            .map((o) => (
              <SelectItem key={o.value} value={o.value.toString()}>
                {o.label}
              </SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
  );
}
