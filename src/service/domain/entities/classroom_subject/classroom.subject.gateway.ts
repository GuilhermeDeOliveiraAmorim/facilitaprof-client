import { SharedGateway } from "../@shared/shared.gateway";
import ClassroomSubject from "./classroom.subject.entity";

export interface ClassroomSubjectGateway extends SharedGateway<ClassroomSubject>{
    findAllSubjectByClassroomId(classroomId: string, active: boolean): Promise<ClassroomSubject[]>;
}