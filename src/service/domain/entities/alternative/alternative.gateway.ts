
import { SharedGateway } from "../@shared/shared.gateway";
import Alternative from "./alternative.entity";

export interface AlternativeGateway extends SharedGateway<Alternative>{
  findAllByTeacherId(teacherId: string, active: boolean): Promise<Alternative[]>;
	findAllByInstitutionId(institutionId: string, active: boolean): Promise<Alternative[]>;
}
