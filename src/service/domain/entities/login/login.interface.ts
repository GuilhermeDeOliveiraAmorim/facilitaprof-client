import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface LoginInterface extends BaseEntityInterface {
    get userId(): string;
    get hostname(): string;
    get token(): string;
    get loggedOut(): boolean;
}
