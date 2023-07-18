import { Text } from "@chakra-ui/react";

type TitleRootProps = {
  title: string;
  textSize: number;
};

export function TitleSmall({ title, textSize }: TitleRootProps) {
  return <Text fontSize={textSize}>{title}</Text>;
}
