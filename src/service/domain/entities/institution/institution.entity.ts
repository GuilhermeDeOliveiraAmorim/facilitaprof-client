import { stringNotNullAndBlankSpace } from "../../util/regex";
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import Question from "../question/question.entity";
import InstitutionInterface from "./institution.interface";

export type InstitutionProps = BaseEntityProps & {
  name: string;
  acronym: string;
  teacherId: string;
  questions?: Question[];
};

export default class Institution
  extends BaseEntity
  implements InstitutionInterface {
  private _name: string;
  private _acronym: string;
  private _teacherId:string;
  private _questions: Question[];

  constructor(props: InstitutionProps) {
    super(props);

    this._name = props.name;
    this._acronym = props.acronym;
    this._teacherId = props.teacherId;
    this._questions = props.questions || [];

  }

  get name(): string {
    return this._name;
  }

  get acronym(): string {
    return this._acronym;
  }
  get teacherId(): string {
    return this._teacherId;
  }
  get questions(): Question[] {
    return this._questions;
  }

}
