import { ReactNode } from "react";

type TitleRootProps = {
  titleType: ReactNode;
};

export function TitleRoot({ titleType }: TitleRootProps) {
  return <div>{titleType}</div>;
}
