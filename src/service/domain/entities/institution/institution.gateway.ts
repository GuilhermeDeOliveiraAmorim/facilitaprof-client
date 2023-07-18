import { SharedGateway } from "../@shared/shared.gateway";
import Institution from "./institution.entity";

export interface InstitutionGatway extends SharedGateway<Institution> {
    findByUserId(UserId: string, headerId: string, active: boolean): Promise<Institution>;
}