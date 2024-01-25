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
import { Switch } from "@/components/ui/switch";

export default function ReversibleSelector() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const schemeId = searchParams.get("schemeId");
  const reverse = searchParams.get("reverse");

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

  const handleChange = (value: boolean) => {
    router.push(`${location.pathname}?${createQueryString("reverse", value ? '1' : '0')}`);
  };

  if (!(scheme && scheme.isReversible)) return <></>;

  return (
    <div className="my-4 flex items-center space-x-2">
      <Switch checked={reverse === '1' ? true : false} onCheckedChange={handleChange} id="is-reversible" />
      <Label className="font-normal" htmlFor="airplane-mode">
        Reverve Body and Trim Colors
      </Label>
    </div>
  );
}
