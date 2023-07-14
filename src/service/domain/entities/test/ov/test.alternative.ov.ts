interface TestAlternativeInterface {
	get alternativeId(): string;
	get position(): number;
	get alternative(): string;
	get images(): { imageId: string; image: string; }[];

}

export type TestAlternativeProps = {
	alternativeId: string;
	position: number;
	alternative: string;
	images?: {
		imageId: string;
		image: string;
	}[];
};

export default class TestAlternative implements TestAlternativeInterface {
	private _alternativeId: string;
	private _position: number;
	private _alternative: string;
	private _images: {
		imageId: string;
		image: string;
	}[];

	constructor(props: TestAlternativeProps) {
		this._alternativeId = props.alternativeId;
		this._position = props.position;
		this._alternative = props.alternative;
		this._images = props.images || [];

		
	}

	get alternativeId(): string {
		return this._alternativeId;
	}

	get position(): number {
		return this._position;
	}

	get alternative(): string {
		return this._alternative;
	}

	get images(): { imageId: string; image: string; }[] {
		return this._images;
	}
}
