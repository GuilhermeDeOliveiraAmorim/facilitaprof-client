
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import AlternativeSubjectInterface from "./alternative.subject.interface";
export type AlternativeSubjectProps = BaseEntityProps & {
    alternativeId: string;
    subjectId: string;
};

export default class AlternativeSubject
    extends BaseEntity
    implements AlternativeSubjectInterface {
    private _alternativeId: string;
    private _subjectId: string;

    constructor(props: AlternativeSubjectProps) {
        super(props);

        this._alternativeId = props.alternativeId;
        this._subjectId = props.subjectId;

    }

    get alternativeId(): string {
        return this._alternativeId;
    }

    get subjectId(): string {
        return this._subjectId;
    }

}
