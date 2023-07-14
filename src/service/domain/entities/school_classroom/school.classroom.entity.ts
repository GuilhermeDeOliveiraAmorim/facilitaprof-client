import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import SchoolClassroomInterface from "./school.classroom.interface";

export type SchoolClassroomProps = BaseEntityProps & {
    schoolId: string;
    classroomId: string;
};

export default class SchoolClassroom extends BaseEntity implements SchoolClassroomInterface {
    private _schoolId: string;
    private _classroomId: string;

    constructor(props: SchoolClassroomProps) {
        super(props);

        this._schoolId = props.schoolId;
        this._classroomId = props.classroomId;
    }
    get classroomId(): string {
        return this._classroomId;
    }

    get schoolId(): string {
        return this._schoolId;
    }

}
