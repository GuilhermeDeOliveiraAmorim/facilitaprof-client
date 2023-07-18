import { SharedGateway } from "../@shared/shared.gateway";
import QuestionAlternative from "./question.alternative.entity";

export interface QuestionAlternativeGateway
  extends SharedGateway<QuestionAlternative> {
    findAllByQuestionId(questionId: string, active: boolean): Promise<QuestionAlternative[]>;
    findAllByAlternativeId(alternativeId: string, active: boolean): Promise<QuestionAlternative[]>;
  }
