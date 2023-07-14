import CpfInterface from "./cpf.interface";

export type CpfProps = {
  digits: string;
};

export default class Cpf implements CpfInterface {
  private _digits: string;

  constructor(props: CpfProps) {
    this._digits = props.digits;
  }

  get digits(): string {
    return this._digits;
  }
}
