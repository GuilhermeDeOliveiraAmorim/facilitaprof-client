interface TestAnswerInterface {
	get questionId(): string;
	get alternativeId(): string;
	get questionPosition(): number;
	get alternativePosition(): number;
	get answer(): string;
}

export type TestAnswerProps = {
	questionId: string;
	alternativeId: string;
	questionPosition: number;
	alternativePosition: number;
	answer: string;
};

export default class TestAnswer implements TestAnswerInterface {
	private _questionId: string;
	private _alternativeId: string;
	private _questionPosition: number;
	private _alternativePosition: number;
	private _answer: string;

	constructor(props: TestAnswerProps) {
		this._questionId = props.questionId;
		this._alternativeId = props.alternativeId;
		this._questionPosition = props.questionPosition;
		this._alternativePosition = props.alternativePosition;
		this._answer = props.answer;

	}

	get questionId(): string {
		return this._questionId;
	}

	get alternativeId(): string {
		return this._alternativeId;
	}

	get questionPosition(): number {
		return this._questionPosition;
	}

	get alternativePosition(): number {
		return this._alternativePosition;
	}

	get answer(): string {
		return this._answer;
	}
}
