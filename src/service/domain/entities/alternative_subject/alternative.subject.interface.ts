import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface AlternativeSubjectInterface
    extends BaseEntityInterface {
    get alternativeId(): string;
    get subjectId(): string;
}
