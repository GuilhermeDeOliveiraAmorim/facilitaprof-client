import { Text } from "@chakra-ui/react";

type SubTitleProps = {
  subTitle: string;
};

export function SubTitle({ subTitle }: SubTitleProps) {
  return <Text fontSize={"xs"}>{subTitle}</Text>;
}
