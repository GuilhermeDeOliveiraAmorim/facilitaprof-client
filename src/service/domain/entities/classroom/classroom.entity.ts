import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import Subject from "../subject/subject.entity";
import ClassroomInterface from "./classroom.interface";

export type ClassroomProps = BaseEntityProps & {
	name: string;
	schoolId: string;
	teacherId: string;
	studentsNumber: number;
	subjects?: Subject[];
};

export default class Classroom
	extends BaseEntity
	implements ClassroomInterface {
	private _name: string;
	private _schoolId: string;
	private _teacherId: string;
	private _studentsNumber: number;
	private _subjects: Subject[];

	constructor(props: ClassroomProps) {
		super(props);

		this._name = props.name;
		this._schoolId = props.schoolId;
		this._teacherId = props.teacherId;
		this._studentsNumber = props.studentsNumber;
		this._subjects = props.subjects || [];
	}

	get name(): string {
		return this._name;
	}

	get schoolId(): string {
		return this._schoolId;
	}

	get teacherId(): string {
		return this._teacherId;
	}

	get studentsNumber(): number {
		return this._studentsNumber;
	}

	get subjects(): Subject[] {
		return this._subjects;
	}

}
