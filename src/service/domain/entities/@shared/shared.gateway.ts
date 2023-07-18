export interface SharedGateway<AnyEntity> {
  add(entity: AnyEntity): Promise<AnyEntity>;
  find(id: string): Promise<AnyEntity | null>;
  findAll(active: boolean): Promise<AnyEntity[]>;
  update(entity: AnyEntity): Promise<AnyEntity>;
  activate(entity: AnyEntity): Promise<AnyEntity>;
}
