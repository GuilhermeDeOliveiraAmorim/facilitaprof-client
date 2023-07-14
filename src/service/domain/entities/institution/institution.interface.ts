import BaseEntityInterface from "../base_entity/base.entity.interface";
import Question from "../question/question.entity";

export default interface InstitutionInterface extends BaseEntityInterface {
  get name(): string;
  get acronym(): string;
  get teacherId(): string;
  get questions(): Question[];
}
