import Alternative from "../alternative/alternative.entity";
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import Header from "../header/header.entity";
import Question from "../question/question.entity";
import Test from "../test/test.entity";
import Address from "../valueobjects/address/address.value.object";
import TeacherInterface from "./teacher.interface";

export type TeacherProps = BaseEntityProps & {
  userId: string;
  teacherName: string;
  firstName: string;
  lastName: string;
  bio: string;
  address: Address;
  headers?: Header[];
  tests?: Test[];
  questions?: Question[];
  alternatives?: Alternative[];
  imageId?: string;
};

export default class Teacher extends BaseEntity implements TeacherInterface {
  private _userId: string;
  private _teacherName: string;
  private _firstName: string;
  private _lastName: string;
  private _bio: string;
  private _address: Address;
  private _headers: Header[];
  private _tests: Test[];
  private _questions: Question[];
  private _alternatives: Alternative[];
  private _imageId: string;

  constructor(props: TeacherProps) {
    super(props);

    this._userId = props.userId;
    this._teacherName = props.teacherName;
    this._firstName = props.firstName;
    this._lastName = props.lastName;
    this._bio = props.bio;
    this._address = props.address;
    this._headers = props.headers || [];
    this._tests = props.tests || [];
    this._questions = props.questions || [];
    this._alternatives = props.alternatives || [];
    this._imageId = props.imageId || "";

  }

  get userId(): string {
    return this._userId;
  }

  get teacherName(): string {
    return this._teacherName;
  }

  get firstName(): string {
    return this._firstName;
  }

  get lastName(): string {
    return this._lastName;
  }

  get headers(): Header[] {
    return this._headers;
  }

  get bio(): string {
    return this._bio;
  }

  get address(): Address {
    return this._address;
  }

  get tests(): Test[] {
    return this._tests;
  }

  get questions(): Question[] {
    return this._questions;
  }

  get alternatives(): Alternative[] {
    return this._alternatives;
  }

  get imageId(): string {
    return this._imageId;
  }

}
