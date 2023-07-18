import { SharedGateway } from "../@shared/shared.gateway";
import Question from "./question.entity";

export interface QuestionGateway extends SharedGateway <Question>{
    findAllByTeacherId(teacherId: string, active: boolean): Promise<Question[]>;
    findAllByInstitutionId(institutionId: string, active: boolean): Promise<Question[]>;
    findAllByType(type: string, active?: boolean): Promise<Question[]>;
}