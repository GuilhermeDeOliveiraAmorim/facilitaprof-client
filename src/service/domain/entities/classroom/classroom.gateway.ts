import { SharedGateway } from "../@shared/shared.gateway";
import Classroom from "./classroom.entity";

export interface ClassroomGateway extends SharedGateway<Classroom> {
    findAllBySchoolId(schoolId: string, active: boolean): Promise<Classroom[]>;
	findAllByTeacherId(teacherId: string, active: boolean): Promise<Classroom[]>;
}
