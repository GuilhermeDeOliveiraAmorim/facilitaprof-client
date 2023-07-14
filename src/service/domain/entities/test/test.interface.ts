import BaseEntityInterface from "../base_entity/base.entity.interface";
import TestAnswer from "./ov/test.answer.ov";
import TestQuestion from "./ov/test.question.ov";
import { TestFields } from "./test.entity";

export default interface TestInterface extends BaseEntityInterface {
  get teacherId(): string;
  get value(): number;
  get fields(): TestFields;
  get description(): string;
  get level(): number;
  get footer(): string;
  get headerId(): string;
  get questions(): TestQuestion[];
  get answers(): TestAnswer[];
  get isPublic(): boolean;
}
