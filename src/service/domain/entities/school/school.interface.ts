import BaseEntityInterface from "../base_entity/base.entity.interface";
import Classroom from "../classroom/classroom.entity";
import School from "./school.entity";

export default interface SchoolInterface extends BaseEntityInterface {
  get name(): string;
  get imageId(): string;
  get classrooms(): Classroom[];
  get teacherId(): string;
}
