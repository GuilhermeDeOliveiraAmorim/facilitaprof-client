import BaseQuestionAlternative, {
  BaseQuestionAlternativeProps,
} from "../base_question_alternative/base.question.alternative.entity";
import Image from "../image/image.entity";
import Question from "../question/question.entity";
import AlternativeInterface from "./alternative.interface";

export type AlternativeProps = BaseQuestionAlternativeProps & {
  alternative?: string;
  answer: string;
  questions?: Question[];
  images?: Image[];
};

export default class Alternative
  extends BaseQuestionAlternative
  implements AlternativeInterface
{
  private _alternative: string;
  private _answer: string;
  private _questions: Question[];
  private _images: Image[];

  constructor(props: AlternativeProps) {
    super(props);

    this._alternative = props.alternative || "";
    this._answer = props.answer;
    this._questions = props.questions || [];
    this._images = props.images || [];
  }

  get alternative(): string {
    return this._alternative;
  }

  get answer(): string {
    return this._answer;
  }

  get questions(): Question[] {
    return this._questions;
  }

  get images(): Image[] {
    return this._images;
  }
}
