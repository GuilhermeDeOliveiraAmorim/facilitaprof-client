import { ReactNode } from "react";

type SubTitleProps = {
  children: ReactNode;
  action: () => void;
};

export function Root({ children, action }: SubTitleProps) {
  return <div onChange={action}>{children}</div>;
}
