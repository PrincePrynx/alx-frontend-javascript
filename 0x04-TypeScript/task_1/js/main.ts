// Define the Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  readonly location: string;
  [key: string]: any;
}

// Creates a teacher object
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);


// Define the Directors interface
interface Directors extends Teacher {
  numberOfReports: number;
}

// Test Example for Directors
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };

  console.log(director1);


// Define the printTeacherFunction interface
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Implement the printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  const firstLetter = firstName.charAt(0);
  return `${firstLetter}. ${lastName}`;
};

// Test the function
console.log(printTeacher("John", "Doe")); // Output: J. Doe


// Define the StudentInterface
interface StudentInterface {
  firstName: string;
  lastName: string;
}

// Define the StudentClassInterface
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Implement the StudentClass
class StudentClass implements StudentClassInterface {
  private firstName: string;
  private lastName: string;

  constructor(student: StudentInterface) {
    this.firstName = student.firstName;
    this.lastName = student.lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Create a student object
const student: StudentInterface = {
  firstName: "John",
  lastName: "Doe",
};

// Create an instance of StudentClass
const studentObj = new StudentClass(student);

// Test the methods
console.log(studentObj.workOnHomework()); // Output: Currently working
console.log(studentObj.displayName()); // Output: John