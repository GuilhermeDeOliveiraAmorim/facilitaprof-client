import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import SubjectInterface from "./subject.interface";

export type SubjectProps = BaseEntityProps & {
  course: string;
  subject: string;
};

export default class Subject extends BaseEntity implements SubjectInterface {
  private _course: string;
  private _subject: string;

  constructor(props: SubjectProps) {
    super(props);

    this._course = props.course;
    this._subject = props.subject;
  }

  get course(): string {
    return this._course;
  }

  get subject(): string {
    return this._subject;
  }
}
