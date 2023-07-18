import { SubjectGateway } from "@/service/domain/entities/subject/subject.gateway";
import { InputCreateSubjectDto } from "./create.subject.usecase.dto";
import Subject from "@/service/domain/entities/subject/subject.entity";

export class CreateSubjectUseCase {
  constructor(private subjectGateway: SubjectGateway) {}

  async execute(input: InputCreateSubjectDto): Promise<Subject> {
    return await this.subjectGateway.create(input);
  }
}
