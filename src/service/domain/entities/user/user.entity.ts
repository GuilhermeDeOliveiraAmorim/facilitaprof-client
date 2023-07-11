import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import UserInterface from "./user.interface";

export type UserProps = BaseEntityProps & {
	accountId: string;
	username: string;
	password: string;
	email: string;
	isAdmin?: boolean;
};

export default class User extends BaseEntity implements UserInterface {
	private _accountId: string;
	private _username: string;
	private _password: string;
	private _email: string;
	private _isAdmin: boolean;

	constructor(props: UserProps) {
		super(props);

		this._accountId = props.accountId;
		this._username = props.username;
		this._password = props.password;
		this._email = props.email;
		this._isAdmin = props.isAdmin || false;
		
	}

	get accountId(): string {
		return this._accountId;
	}

	get username(): string {
		return this._username;
	}

	get password(): string {
		return this._password;
	}

	get email(): string {
		return this._email;
	}

	get isAdmin(): boolean {
		return this._isAdmin;
	}
}
