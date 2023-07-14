import Alternative from "../alternative/alternative.entity";
import BaseEntityInterface from "../base_entity/base.entity.interface";
import Header from "../header/header.entity";
import Question from "../question/question.entity";
import Test from "../test/test.entity";
import Address from "../valueobjects/address/address.value.object";

export default interface TeacherInterface extends BaseEntityInterface {
  get userId(): string;
  get teacherName(): string;
  get firstName(): string;
  get lastName(): string;
  get headers(): Header[];
  get bio(): string;
  get address(): Address;
  get tests(): Test[];
  get questions(): Question[];
  get alternatives(): Alternative[];
  get imageId(): string;
}
