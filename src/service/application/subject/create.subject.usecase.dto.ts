import Subject from "@/service/domain/entities/subject/subject.entity";

export interface InputCreateSubjectDto {
  teacherId: string;
  course: string;
  subject: string;
}

export interface OutputCreateSubjectDto {
  subject: Subject;
}
