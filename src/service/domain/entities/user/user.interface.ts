import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface UserInterface extends BaseEntityInterface {
    get accountId(): string;
    get username(): string;
    get password(): string;
    get email(): string;
    get isAdmin(): boolean;
}