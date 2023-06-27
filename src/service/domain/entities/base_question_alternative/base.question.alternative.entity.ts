import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import Subject from "../subject/subject.entity";
import BaseQuestionAlternativeInterface from "./base.question.alternative.interface";

export type BaseQuestionAlternativeProps = BaseEntityProps & {
  year: number;
  institutionId: string;
  teacherId: string;
  subjects?: Subject[];
};

export default class BaseQuestionAlternative
  extends BaseEntity
  implements BaseQuestionAlternativeInterface
{
  private _year: number;
  private _institutionId: string;
  private _teacherId: string;
  private _subjects: Subject[];

  constructor(props: BaseQuestionAlternativeProps) {
    super(props);

    this._year = props.year;
    this._institutionId = props.institutionId;
    this._teacherId = props.teacherId;
    this._subjects = props.subjects || [];
  }

  get subjectId(): string {
    throw new Error("Method not implemented.");
  }

  get year(): number {
    return this._year;
  }

  get institutionId(): string {
    return this._institutionId;
  }

  get teacherId(): string {
    return this._teacherId;
  }

  get subjects(): Subject[] {
    return this._subjects;
  }
}
