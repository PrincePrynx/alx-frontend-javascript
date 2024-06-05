
export default function getStudentsByLocation(listsStudents, city) {
    return listsStudents.filter(({ location }) => location === city);
  }
