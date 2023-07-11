import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface QuestionAlternativeInterface
  extends BaseEntityInterface {
  get questionId(): string;
  get alternativeId(): string;
  get alternativePosition(): number;
}
