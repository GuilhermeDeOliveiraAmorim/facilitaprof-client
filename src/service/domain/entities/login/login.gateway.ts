import { SharedGateway } from "../@shared/shared.gateway";
import Login from "./login.entity";

export interface LoginGateway extends SharedGateway<Login> {}
