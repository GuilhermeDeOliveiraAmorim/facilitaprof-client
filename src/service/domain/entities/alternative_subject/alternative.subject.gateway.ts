import { SharedGateway } from "../@shared/shared.gateway";
import AlternativeSubject from "./alternative.subject.entity";

export interface AlternativeSubjectGateway extends SharedGateway<AlternativeSubject> {
    findAllByAlternativeId(alternativeId: string, active: boolean): Promise<AlternativeSubject[]>;
    findAllBySubjectId(subjectId: string, active: boolean): Promise<AlternativeSubject[]>;
}