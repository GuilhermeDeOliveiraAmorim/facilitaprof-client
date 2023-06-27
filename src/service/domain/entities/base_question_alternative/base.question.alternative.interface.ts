import BaseEntity from "../base_entity/base.entity";

export default interface BaseQuestionAlternativeInterface extends BaseEntity {
  get year(): number;
  get institutionId(): string;
  get teacherId(): string;
  get subjectId(): string;
}
