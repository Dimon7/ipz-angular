export class Dtos {


  constructor() {}

  public editStudentDTO = {
    ids : '',
    idteam: ''
  };

  public subjectDTO = {
    name: '',
    type: '',
    teacherId: ''

  };

  public teamDTO = {
    number: ''
  };

  public examDTO = {
    teamId: '',
    subjectId: '',
    date: '',

    id: '',
    grade: ''
  };

}
