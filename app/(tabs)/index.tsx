import { SelectPreview } from "@/components/SelectPreview";
import type { Option } from "@rn-primitives/select";
import React from "react";
import { Text, View } from "react-native";

export default function Home() {
  const [selected, setSelected] = React.useState<Option | undefined>(undefined);

  return (
    <View className="flex-1 justify-center items-center gap-2">
      <Text>Select Component</Text>
      <SelectPreview onSelect={setSelected} />
      <Text className="mt-4 font-medium">Selected fruit is {selected?.label}</Text>
    </View>
  );
}
