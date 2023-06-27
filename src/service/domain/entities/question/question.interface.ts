import Alternative from "../alternative/alternative.entity";
import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface QuestionInterface extends BaseEntityInterface {
  get type(): string;
  get statement(): string;
  get level(): number;
  get author(): string;
  get alternatives(): Alternative[];
}
