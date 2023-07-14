import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface QuestionImageInterface
  extends BaseEntityInterface {
  get questionId(): string;
  get imageId(): string;
}
