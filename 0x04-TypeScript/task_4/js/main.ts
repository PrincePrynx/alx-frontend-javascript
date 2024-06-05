import { Subjects } from './subjects';

export const cTeacher: Subjects.Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10
}

export const cpp: Subjects.Cpp = new Subjects.Cpp(cTeacher);
export const java: Subjects.Java = new Subjects.Java(cTeacher);
export const react: Subjects.React = new Subjects.React(cTeacher);

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
