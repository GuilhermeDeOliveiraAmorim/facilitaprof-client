import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface SchoolClassroomInterface
  extends BaseEntityInterface {
  get schoolId(): string;
  get classroomId(): string;
}
