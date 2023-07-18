import { SharedGateway } from "../@shared/shared.gateway";
import Test from "./test.entity";

export interface TestGateway extends SharedGateway<Test>{
    findAllByTeacherId(teacherId: string, active: boolean): Promise<Test[]>;
}