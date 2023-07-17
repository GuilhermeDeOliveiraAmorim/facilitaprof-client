import { SharedGateway } from "../@shared/shared.gateway";
import InstitutionQuestion from "./institution.question.entity";

export interface InstitutionQuestionGateway extends SharedGateway<InstitutionQuestion> {
    findAllByQuestionId(questionId: string, active: boolean): Promise<InstitutionQuestion[]>;
    findAllByInstitutionId(institutioneId: string, active: boolean): Promise<InstitutionQuestion[]>;
}