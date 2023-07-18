import Subject from "./subject.entity";

export interface SubjectGateway {
  create(input: Input): Promise<Output>;
  find(id: string): Promise<Output>;
  findAll(active: boolean): Promise<Output[]>;
  update(input: Input): Promise<void>;
  activate(input: Input): Promise<void>;
  findAllByTeacherId(teacherId: string, active: boolean): Promise<Subject[]>;
}
