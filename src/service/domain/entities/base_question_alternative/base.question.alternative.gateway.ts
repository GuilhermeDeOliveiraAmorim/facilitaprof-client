
import { SharedGateway } from "../@shared/shared.gateway";
import BaseQuestionAlternative from "./base.question.alternative.entity";

export interface BaseQuestionGateway extends SharedGateway<BaseQuestionAlternative>{
    findAllByInsitutionId(institutionId: string, active: boolean): Promise<BaseQuestionAlternative[]>;
    findAllByTeacherId(teacherId: string, active: boolean): Promise<BaseQuestionAlternative[]>;
    findAllBySubjectId(subjectId: string, active: boolean): Promise<BaseQuestionAlternative[]>;
}