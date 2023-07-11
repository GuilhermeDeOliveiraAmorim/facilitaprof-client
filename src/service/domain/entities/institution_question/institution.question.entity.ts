import { stringNotNullAndBlankSpace } from "../../util/regex";
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import InstitutionQuestionInterface from "./institution.question.interface";

export type InstitutionQuestionProps = BaseEntityProps & {
    questionId: string;
    institutionId: string;
};

export default class InstitutionQuestion
    extends BaseEntity
    implements InstitutionQuestionInterface {
    private _questionId: string;
    private _institutionId: string;

    constructor(props: InstitutionQuestionProps) {
        super(props);

        this._questionId = props.questionId;
        this._institutionId = props.institutionId;

    }
    get institutionId(): string {
        return this._institutionId;
    }

    get questionId(): string {
        return this._questionId;
    }

}
