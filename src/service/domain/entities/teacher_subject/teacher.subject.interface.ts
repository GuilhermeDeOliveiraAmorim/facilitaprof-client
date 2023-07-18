import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface TeacherSubjectInterface extends BaseEntityInterface {
  get teacherId(): string;
  get subjectId(): string;
}
