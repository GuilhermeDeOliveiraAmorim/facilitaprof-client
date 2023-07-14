import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface ClassroomSubjectInterface
    extends BaseEntityInterface {
    get classroomId(): string;
    get subjectId(): string;
}
