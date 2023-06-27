import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import ImageInterface from "./image.interface";

export type ImageProps = BaseEntityProps & {
  name: string;
  size: number;
  extension: string;
  alternativeText: string;
};

export default class Image extends BaseEntity implements ImageInterface {
  private _name: string;
  private _size: number;
  private _extension: string;
  private _alternativeText: string;

  constructor(props: ImageProps) {
    super(props);

    this._name = props.name;
    this._size = props.size;
    this._extension = props.extension;
    this._alternativeText = props.alternativeText;
  }

  get name(): string {
    return this._name;
  }

  get size(): number {
    return this._size;
  }

  get extension(): string {
    return this._extension;
  }

  get alternativeText(): string {
    return this._alternativeText;
  }
}
