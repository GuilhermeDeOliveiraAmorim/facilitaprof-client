import { SharedGateway } from "../@shared/shared.gateway";
import TeacherSubject from "./teacher.subject.entity";

export interface TeacherSubjectGateway extends SharedGateway<TeacherSubject>{
    findAllSubjectByTeacherId(teacherId: string, active: boolean): Promise<TeacherSubject[]>;
}