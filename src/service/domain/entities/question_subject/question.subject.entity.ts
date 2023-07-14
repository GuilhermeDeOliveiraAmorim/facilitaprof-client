import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import QuestionSubjectInterface from "./question.subject.interface";
export type QuestionSubjectProps = BaseEntityProps & {
    questionId: string;
    subjectId: string;
};

export default class QuestionSubject
    extends BaseEntity
    implements QuestionSubjectInterface {
    private _questionId: string;
    private _subjectId: string;

    constructor(props: QuestionSubjectProps) {
        super(props);

        this._questionId = props.questionId;
        this._subjectId = props.subjectId;

    }

    get questionId(): string {
        return this._questionId;
    }

    get subjectId(): string {
        return this._subjectId;
    }

}
