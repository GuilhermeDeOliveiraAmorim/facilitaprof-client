import BaseEntityInterface from "../base_entity/base.entity.interface";
import Header, { HeaderFields } from "./header.entity";

export default interface HeaderInterface extends BaseEntityInterface {
  get name(): string;
  get teacherId(): string;
  get fields(): HeaderFields;
}
