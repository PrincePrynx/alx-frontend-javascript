
export default function updateStudentGradeByCity(studentList, city, newGrades) {
    return studentList
      .filter(({ location }) => location === city)
      .map((obj) => {
        const updatedGrade = newGrades.filter(({ studentId }) => studentId === obj.id);
        const { grade = 'N/A' } = updatedGrade.length > 0 ? updatedGrade[0] : {};
        return { ...obj, grade };
      });
  }
  