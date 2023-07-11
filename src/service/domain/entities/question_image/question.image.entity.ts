import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import QuestionImageInterface from "./question.image.interface";

export type QuestionImageProps = BaseEntityProps & {
  questionId: string;
  imageId: string;
};

export default class QuestionImage
  extends BaseEntity
  implements QuestionImageInterface {
  private _questionId: string;
  private _imageId: string;

  constructor(props: QuestionImageProps) {
    super(props);

    this._questionId = props.questionId;
    this._imageId = props.imageId;

  }

  get questionId(): string {
    return this._questionId;
  }

  get imageId(): string {
    return this._imageId;
  }

}
