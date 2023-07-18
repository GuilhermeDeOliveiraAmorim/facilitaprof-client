import { ReactNode } from "react";
import { Button } from "@chakra-ui/react";

type MenuButtonProps = {
  title: ReactNode;
  color: string;
};

export function MenuButton({ title, color }: MenuButtonProps) {
  return <Button colorScheme={color}>{title}</Button>;
}
