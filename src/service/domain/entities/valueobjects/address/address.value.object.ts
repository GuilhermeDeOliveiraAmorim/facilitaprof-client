
import AddressInterface from "./address.interface";

enum Brazil {
  NAME = "Brazil",
}

export type AddressProps = {
  city: string;
  state: string;
  country: string;
};

export default class Address implements AddressInterface {
  private _city: string;
  private _state: string;
  private _country: string;

  constructor(props: AddressProps) {
    this._city = props.city;
    this._state = props.state;
    this._country = props.country;

  }
  
  get city(): string {
    return this._city;
  }

  get state(): string {
    return this._state;
  }

  get country(): string {
    return this._country;
  }
}
