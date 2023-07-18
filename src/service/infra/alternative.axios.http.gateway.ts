import Alternative from "../domain/entities/alternative/alternative.entity";
import { AlternativeGateway } from "../domain/entities/alternative/alternative.gateway";

export class AlternativeHttpGateway implements AlternativeGateway {
  findAllByTeacherId(teacherId: string, active: boolean): Promise<Alternative[]> {
    throw new Error("Method not implemented.");
  }
  findAllByInstitutionId(institutionId: string, active: boolean): Promise<Alternative[]> {
    throw new Error("Method not implemented.");
  }
  add(entity: Alternative): Promise<void> {
    throw new Error("Method not implemented.");
  }
  find(id: string): Promise<Alternative | null> {
    throw new Error("Method not implemented.");
  }
  findAll(active: boolean): Promise<Alternative[]> {
    throw new Error("Method not implemented.");
  }
  update(entity: Alternative): Promise<void> {
    throw new Error("Method not implemented.");
  }
  activate(entity: Alternative): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
 
