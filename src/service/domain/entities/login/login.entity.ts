import { stringNotNullAndBlankSpace } from "../../util/regex";
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import LoginInterface from "./login.interface";

export type LoginProps = BaseEntityProps & {
    userId: string;
    hostname: string;
    token: string;
    loggedOut: boolean;
};

export default class Login extends BaseEntity implements LoginInterface {
    private _userId: string;
    private _hostname: string;
    private _token: string;
    private _loggedOut: boolean;

    constructor(props: LoginProps) {
        super(props);

        this._userId = props.userId;
        this._hostname = props.hostname;
        this._token = props.token;
        this._loggedOut = props.loggedOut;

    }

    get userId(): string {
        return this._userId;
    }

    get hostname(): string {
        return this._hostname;
    }

    get token(): string {
        return this._token;
    }

    get loggedOut(): boolean {
        return this._loggedOut;
    }

    
}