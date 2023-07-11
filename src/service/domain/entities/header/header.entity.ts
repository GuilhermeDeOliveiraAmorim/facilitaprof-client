import { stringNotNullAndBlankSpace } from "../../util/regex";
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import HeaderInterface from "./header.interface";

export type HeaderFields = {
  teacher: {
		isHeaderField: boolean,
		teacherName: string,
	},
	course: {
		isHeaderField: boolean,
		courseName: string,
	},
	subject: {
		isHeaderField: boolean,
		subjectName: string,
	},
	classroom: {
		isHeaderField: boolean,
		classroomName: string,
	},
	title: {
		isHeaderField: boolean,
		title: string,
	},
	schoolName: {
		isHeaderField: boolean,
		name: string,
	},
	schoolImage: {
		isHeaderField: boolean,
		imageId: string,
	},
};

export type HeaderProps = BaseEntityProps & {
  name: string;
  teacherId: string;
  fields: HeaderFields;
};

export default class Header extends BaseEntity implements HeaderInterface {
  private _name: string;
  private _teacherId: string;
  private _fields: HeaderFields;

  constructor(props: HeaderProps) {
    super(props);

    this._name = props.name;
    this._teacherId = props.teacherId;

    this._fields = props.fields;

  }

  get teacherId(): string {
    return this._teacherId;
  }

  get name(): string {
    return this._name;
  }

  get fields(): HeaderFields {
    return this._fields;
  }

}
