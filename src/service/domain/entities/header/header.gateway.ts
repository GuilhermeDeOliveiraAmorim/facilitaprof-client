import { SharedGateway } from "../@shared/shared.gateway";
import Header from "./header.entity";

export interface HeaderGateway extends SharedGateway<Header>{
    findAllByTeacherId(teacherId: string, active: boolean): Promise<Header[]>;
    findAllBySubjectId(subjectId: string, active: boolean): Promise<Header[]>;
    findAllBySchoolId(schoolId: string, active: boolean): Promise<Header[]>;
    findAllByClassroomId(classroomId: string, active: boolean): Promise<Header[]>;
    findByTeacherId(
      teacherId: string,
      headerId: string,
      active: boolean
    ): Promise<Header>;
}