
import BaseEntity, { BaseEntityProps } from "../base_entity/base.entity";
import AlternativeImageInterface from "./alternative.image.interface";

export type AlternativeImageProps = BaseEntityProps & {
  alternativeId: string;
  imageId: string;
};

export default class AlternativeImage
  extends BaseEntity
  implements AlternativeImageInterface {
  private _alternativeId: string;
  private _imageId: string;

  constructor(props: AlternativeImageProps) {
    super(props);

    this._alternativeId = props.alternativeId;
    this._imageId = props.imageId;

  }

  get alternativeId(): string {
    return this._alternativeId;
  }

  get imageId(): string {
    return this._imageId;
  }

}
