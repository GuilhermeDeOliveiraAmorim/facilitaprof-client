import { SharedGateway } from "../@shared/shared.gateway";
import QuestionSubject from "./question.subject.entity";

export interface QuestionSubjectGateway extends SharedGateway<QuestionSubject>{
    findAllSubjectByQuestionId(questionId: string, active: boolean): Promise<QuestionSubject[]>;
}