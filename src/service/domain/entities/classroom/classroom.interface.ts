import BaseEntityInterface from "../base_entity/base.entity.interface";
import Subject from "../subject/subject.entity";
import Classroom from "./classroom.entity";

export default interface ClassroomInterface extends BaseEntityInterface {
	get name(): string;
	get schoolId(): string;
	get teacherId(): string;
	get studentsNumber(): number;
	get subjects(): Subject[];
}
