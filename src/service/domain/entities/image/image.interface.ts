import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface ImageInterface extends BaseEntityInterface {
  get name(): string;
  get size(): number;
  get extension(): string;
  get alternativeText(): string;
}
