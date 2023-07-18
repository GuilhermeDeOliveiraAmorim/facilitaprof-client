import { SharedGateway } from "../@shared/shared.gateway";
import User from "./user.entity";

export interface UserGateway extends SharedGateway<User> {}
