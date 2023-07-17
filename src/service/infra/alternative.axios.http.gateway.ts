import Alternative from "../domain/entities/alternative/alternative.entity";
import { AlternativeGateway } from "../domain/entities/alternative/alternative.gateway";

export class AlternativeHttpGateway implements AlternativeGateway {
  activate(teacherId: string, headerId: string): Promise<Alternative> {
    throw new Error("Method not implemented.");
  }
}
