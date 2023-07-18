import { SharedGateway } from "../@shared/shared.gateway";
import Teacher from "./teacher.entity";

export interface TeacherGateway extends SharedGateway<Teacher>{
    findAllByUserId(userId: string, active: boolean): Promise<Teacher[]>;
}