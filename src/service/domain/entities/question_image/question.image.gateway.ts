import { SharedGateway } from "../@shared/shared.gateway";
import QuestionImage from "./question.image.entity";

export interface QuestionImageGateway extends SharedGateway<QuestionImage>{
    findAllByQuestionId(questionId: string, active: boolean): Promise<QuestionImage[]>;
    findAllByImageId(imageId: string, active: boolean): Promise<QuestionImage[]>;
}