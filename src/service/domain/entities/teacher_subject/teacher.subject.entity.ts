import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import TeacherSubjectInterface from "./teacher.subject.interface";

export type TeacherSubjectProps = BaseEntityProps & {
  teacherId: string;
  subjectId: string;
};

export default class TeacherSubject
  extends BaseEntity
  implements TeacherSubjectInterface
{
  private _teacherId: string;
  private _subjectId: string;

  constructor(props: TeacherSubjectProps) {
    super(props);

    this._teacherId = props.teacherId;
    this._subjectId = props.subjectId;
  }
  get classroomId(): string {
    throw new Error("Method not implemented.");
  }

  get teacherId(): string {
    return this._teacherId;
  }

  get subjectId(): string {
    return this._subjectId;
  }
}
