import BaseEntityInterface from "../base_entity/base.entity.interface";

export default interface SubjectInterface extends BaseEntityInterface {
  get course(): string;
  get subject(): string;
}
