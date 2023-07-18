import { SharedGateway } from "../@shared/shared.gateway";
import School from "./school.entity";

export interface SchoolGateway extends SharedGateway<School> {
    findAllByTeacherId(teacherId: string, active: boolean): Promise<School[]>;
	findByTeacherId(teacherId: string, schoolId: string, active: boolean): Promise<School | null>;
}