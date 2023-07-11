import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface AlternativeImageInterface
  extends BaseEntityInterface {
  get alternativeId(): string;
  get imageId(): string;

}
