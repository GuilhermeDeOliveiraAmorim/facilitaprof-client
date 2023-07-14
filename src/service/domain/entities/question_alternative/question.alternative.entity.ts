import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import QuestionAlternativeInterface from "./question.alternative.interface";

export type QuestionAlternativeProps = BaseEntityProps & {
  questionId: string;
  alternativeId: string;
  alternativePosition: number;
};

export default class QuestionAlternative
  extends BaseEntity
  implements QuestionAlternativeInterface {
  private _questionId: string;
  private _alternativeId: string;
  private _alternativePosition: number;

  constructor(props: QuestionAlternativeProps) {
    super(props);

    this._questionId = props.questionId;
    this._alternativeId = props.alternativeId;
    this._alternativePosition = props.alternativePosition;

  }

  get questionId(): string {
    return this._questionId;
  }

  get alternativeId(): string {
    return this._alternativeId;
  }

  get alternativePosition(): number {
    return this._alternativePosition;
  }

}
