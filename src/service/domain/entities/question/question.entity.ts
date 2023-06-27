import Alternative from "../alternative/alternative.entity";
import BaseQuestionAlternative, {
  BaseQuestionAlternativeProps,
} from "../base_question_alternative/base.question.alternative.entity";
import QuestionInterface from "./question.interface";

export const QuestionType = {
  DISCURSIVE: "Discursive",
  MULTIPLE_CHOICE: "Multiple Choice",
};

export type QuestionProps = BaseQuestionAlternativeProps & {
  type: string;
  statement: string;
  level: number;
  author: string;
  alternatives?: Alternative[];
};

export default class Question
  extends BaseQuestionAlternative
  implements QuestionInterface
{
  private _type: string;
  private _statement: string;
  private _level: number;
  private _author: string;
  private _alternatives: Alternative[];

  constructor(props: QuestionProps) {
    super(props);

    this._type = props.type;
    this._statement = props.statement;
    this._level = props.level;
    this._author = props.author;
    this._alternatives = props.alternatives || [];
  }

  get type(): string {
    return this._type;
  }

  get statement(): string {
    return this._statement;
  }

  get level(): number {
    return this._level;
  }

  get author(): string {
    return this._author;
  }

  get alternatives(): Alternative[] {
    return this._alternatives;
  }
}
