import { SharedGateway } from "../@shared/shared.gateway";
import Subject from "./subject.entity";

export interface SubjectGateway extends SharedGateway<Subject> {
    findAllByTeacherId(teacherId: string, active: boolean): Promise<Subject[]>;
}
