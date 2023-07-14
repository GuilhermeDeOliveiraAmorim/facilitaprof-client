interface TestDateInterface {
    get day(): string;
    get month(): string;
    get year(): string;

}

export type TestDateProps = {
    day: string;
    month: string;
    year: string;
};

export default class TestDate implements TestDateInterface {
    private _day: string;
    private _month: string;
    private _year: string;

    constructor(props: TestDateProps) {
        this._day = props.day;
        this._month = props.month;
        this._year = props.year;

    }

    get day(): string {
        throw new Error("Method not implemented.");
    }

    get month(): string {
        throw new Error("Method not implemented.");
    }

    get year(): string {
        throw new Error("Method not implemented.");
    }
}