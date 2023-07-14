import { stringNotNullAndBlankSpace } from "../../util/regex";
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import ClassroomSubjectInterface from "./classroom.subject.interface";

export type ClassroomSubjectProps = BaseEntityProps & {
    classroomId: string;
    subjectId: string;
};

export default class ClassroomSubject
    extends BaseEntity
    implements ClassroomSubjectInterface {
    private _classroomId: string;
    private _subjectId: string;

    constructor(props: ClassroomSubjectProps) {
        super(props);

        this._classroomId = props.classroomId;
        this._subjectId = props.subjectId;

    }

    get classroomId(): string {
        return this._classroomId;
    }

    get subjectId(): string {
        return this._subjectId;
    }

}
