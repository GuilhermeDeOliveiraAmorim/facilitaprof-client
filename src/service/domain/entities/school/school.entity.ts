import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import Classroom from "../classroom/classroom.entity";
import SchoolInterface from "./school.interface";

export type SchoolProps = BaseEntityProps & {
  name: string;
  teacherId: string;
  imageId?: string;
  classrooms?: Classroom[];
};

export default class School extends BaseEntity implements SchoolInterface {
  private _name: string;
  private _teacherId: string;
  private _imageId: string;
  private _classrooms: Classroom[];

  constructor(props: SchoolProps) {
    super(props);

    this._name = props.name;
    this._teacherId = props.teacherId;
    this._imageId = props.imageId || "";
    this._classrooms = props.classrooms || [];
  }

  get name(): string {
    return this._name;
  }

  get imageId(): string {
    return this._imageId;
  }

  get classrooms(): Classroom[] {
    return this._classrooms;
  }

  get teacherId(): string {
    return this._teacherId;
  }

  
}
