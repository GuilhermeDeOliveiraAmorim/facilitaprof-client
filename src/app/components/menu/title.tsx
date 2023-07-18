import { Text } from "@chakra-ui/react";

type TitleProps = {
  title: string;
  textSize: number;
};

export function Title({ title, textSize }: TitleProps) {
  return <Text fontSize={textSize}>{title}</Text>;
}
