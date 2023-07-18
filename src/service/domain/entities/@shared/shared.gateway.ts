export interface SharedGateway<Input, Output> {
  create(input: Input): Promise<Output>;
  find(id: string): Promise<Output>;
  findAll(active: boolean): Promise<Output[]>;
  update(input: Input): Promise<void>;
  activate(input: Input): Promise<void>;
}
