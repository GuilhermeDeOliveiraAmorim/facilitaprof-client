import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface InstitutionQuestionInterface
  extends BaseEntityInterface {
  get questionId(): string;
  get institutionId(): string;
}
