import { SharedGateway } from "../@shared/shared.gateway";

export interface AlternativeImage extends SharedGateway<AlternativeImage> {
    findAllByAlternativeId(alternativeId: string, active: boolean): Promise<AlternativeImage[]>;
    findAllByImageId(imageId: string, active: boolean): Promise<AlternativeImage[]>;
}
