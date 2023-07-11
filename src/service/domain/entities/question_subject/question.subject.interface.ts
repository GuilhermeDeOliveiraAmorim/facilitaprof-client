import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface QuestionSubjectInterface
    extends BaseEntityInterface {
    get questionId(): string;
    get subjectId(): string;
}
