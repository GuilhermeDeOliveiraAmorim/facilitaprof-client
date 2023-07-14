import TestAlternative from "./test.alternative.ov";

interface TestQuestionInterface {
	get questionId(): string;
	get questionType(): string;
	get position(): number;
	get statement(): string;
	get images(): string[];
	get alternatives(): TestAlternative[];
}

export type TestQuestionProps = {
	questionId: string;
	questionType: string;
	position: number;
	statement: string;
	images: string[];
	alternatives: TestAlternative[];
};

export default class TestQuestion implements TestQuestionInterface {
	private _questionId: string;
	private _questionType: string;
	private _position: number;
	private _statement: string;
	private _images: string[];
	private _alternatives: TestAlternative[];

	constructor(props: TestQuestionProps) {
		this._questionId = props.questionId;
		this._questionType = props.questionType;
		this._position = props.position;
		this._statement = props.statement;
		this._images = props.images;
		this._alternatives = props.alternatives;
	}
	
	get questionId(): string {
		return this._questionId;
	}

	get questionType(): string {
		return this._questionType;
	}

	get position(): number {
		return this._position;
	}

	get statement(): string {
		return this._statement;
	}

	get images(): string[] {
		return this._images;
	}

	get alternatives(): TestAlternative[] {
		return this._alternatives;
	}
}
