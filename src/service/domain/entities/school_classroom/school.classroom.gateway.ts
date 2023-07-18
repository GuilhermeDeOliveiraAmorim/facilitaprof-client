import { SharedGateway } from "../@shared/shared.gateway";

export interface SchoolClassroom extends SharedGateway<SchoolClassroom>{
    findAllBySchoolId(schoolId: string, active: boolean): Promise<SchoolClassroom[]>;
    findAllByClassroomId(classroomId: string, active: boolean): Promise<SchoolClassroom[]>;
}