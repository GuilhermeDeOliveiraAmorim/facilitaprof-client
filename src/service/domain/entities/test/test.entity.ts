import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import TestAnswer from "./ov/test.answer.ov";
import TestDate from "./ov/test.date.ov";
import TestQuestion from "./ov/test.question.ov";
import TestInterface from "./test.interface";

export type TestFields = {
	testTitle: {
		isHeaderField: boolean,
		title: string,
	},
	testDate: {
		isHeaderField: boolean,
		date: TestDate,
	},
	blankFieldStudentName: {
		isHeaderField: boolean,
	},
	blankFieldTestScore: {
		isHeaderField: boolean,
	},
};

export type TestProps = BaseEntityProps & {
	teacherId: string;
	value: number;
	headerId: string;
	fields: TestFields;
	description?: string;
	level?: number;
	footer?: string;
	questions?: TestQuestion[];
	answers?: TestAnswer[];
	isPublic?: boolean;
};

export default class Test extends BaseEntity implements TestInterface {
	private _teacherId: string;
	private _value: number;
	private _headerId: string;
	private _fields: TestFields;
	private _description: string;
	private _level: number;
	private _footer: string;
	private _questions: TestQuestion[];
	private _answers: TestAnswer[];
	private _isPublic: boolean;

	constructor(props: TestProps) {
		super(props);

		this._teacherId = props.teacherId;
		this._value = props.value;
		this._headerId = props.headerId;
		this._fields = props.fields;
		this._description = props.description || "";
		this._level = props.level || 0;
		this._footer = props.footer || "";
		this._questions = props.questions || [];
		this._answers = props.answers || [];
		this._isPublic = props.isPublic || false;

	}
	
	get teacherId(): string {
		return this._teacherId;
	}

	get headerId(): string {
		return this._headerId;
	}

	get fields(): TestFields {
		return this._fields;
	}

	get description(): string {
		return this._description;
	}

	get value(): number {
		return this._value;
	}

	get level(): number {
		return this._level;
	}

	get questions(): TestQuestion[] {
		return this._questions;
	}

	get footer(): string {
		return this._footer;
	}

	get answers(): TestAnswer[] {
		return this._answers;
	}

	get isPublic(): boolean {
		return this._isPublic;
	}
}
