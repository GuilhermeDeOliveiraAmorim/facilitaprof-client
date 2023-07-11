import School from "./school.entity";

export interface InputActivateSchoolFacadeDto {
  teacherId: string;
  schoolId: string;
  active: boolean;
}

export interface OutputActivateSchoolFacadeDto {
  active: boolean;
}

export interface InputCreateSchoolFacadeDto {
  teacherId: string;
  name: string;
  imageId: string;
  classrooms: {
    name: string;
    teacherId: string;
    studentsNumber: number;
    subjects: {
      subjectId: string;
    }[];
  }[];
}

export interface OutputCreateSchoolFacadeDto {
  school: School;
}

export interface InputFindAllSchoolFacadeDto {
  teacherId: string;
}

export interface OutputFindAllSchoolFacadeDto {
  schools: School[];
}

export interface InputFindSchoolBySchoolIdFacadeDto {
  teacherId: string;
  schoolId: string;
}

export interface OutputFindSchoolBySchoolIdFacadeDto {
  school: School;
}

export default interface SchoolFacadeInterface {
  activateSchool(
    input: InputActivateSchoolFacadeDto
  ): Promise<OutputActivateSchoolFacadeDto>;

  createSchool(
    input: InputCreateSchoolFacadeDto
  ): Promise<OutputCreateSchoolFacadeDto>;

  findAllSchool(
    input: InputFindAllSchoolFacadeDto
  ): Promise<OutputFindAllSchoolFacadeDto>;

  findSchoolBySchoolId(
    input: InputFindSchoolBySchoolIdFacadeDto
  ): Promise<OutputFindSchoolBySchoolIdFacadeDto>;
}
