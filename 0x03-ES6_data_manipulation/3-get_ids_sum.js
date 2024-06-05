
export default function getStudentIdsSum(studentList) {
    return studentList.reduce((sumUp, { id }) => sumUp + id, 0);
  }
  