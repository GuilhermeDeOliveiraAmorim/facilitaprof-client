export interface SharedGateway<AnyEntity> {
  add(entity: AnyEntity): Promise<void>;
  find(id: string): Promise<AnyEntity | null>;
  findAll(active: boolean): Promise<AnyEntity[]>;
  update(entity: AnyEntity): Promise<void>;
  activate(entity: AnyEntity): Promise<void>;
}
