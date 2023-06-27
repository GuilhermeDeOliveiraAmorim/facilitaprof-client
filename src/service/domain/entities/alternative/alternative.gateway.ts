import Alternative from "./alternative.entity";

export interface AlternativeGateway {
  activate(teacherId: string, headerId: string): Promise<Alternative>;
}
