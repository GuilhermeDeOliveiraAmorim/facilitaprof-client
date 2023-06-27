import EntityInterface from "../base_question_alternative/base.question.alternative.interface";
import Image from "../image/image.entity";
import Question from "../question/question.entity";

export default interface AlternativeInterface extends EntityInterface {
  get alternative(): string;
  get answer(): string;
  get questions(): Question[];
  get images(): Image[];
}
