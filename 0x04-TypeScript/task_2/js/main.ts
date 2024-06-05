// Define the DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Define the TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Implement the Director class
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Implement the Teacher class
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// Define the createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

// Test the createEmployee function
console.log(createEmployee(200)); // Output: Teacher
console.log(createEmployee(1000)); // Output: Director
console.log(createEmployee('$500')); // Output: Director

const employee1 = createEmployee(400);
if (employee1 instanceof Teacher) {
  console.log(employee1.workFromHome()); // Output: Cannot work from home
  console.log(employee1.getCoffeeBreak()); // Output: Cannot have a break
  console.log(employee1.workTeacherTasks()); // Output: Getting to work
} else {
  console.log(employee1.workFromHome()); // Output: Working from home
  console.log(employee1.getCoffeeBreak()); // Output: Getting a coffee break
  console.log(employee1.workDirectorTasks()); // Output: Getting to director tasks
}

const employee2 = createEmployee(600);
if (employee2 instanceof Director) {
  console.log(employee2.workFromHome()); // Output: Working from home
  console.log(employee2.getCoffeeBreak()); // Output: Getting a coffee break
  console.log(employee2.workDirectorTasks()); // Output: Getting to director tasks
} else {
  console.log(employee2.workFromHome()); // Output: Cannot work from home
  console.log(employee2.getCoffeeBreak()); // Output: Cannot have a break
  console.log(employee2.workTeacherTasks()); // Output: Getting to work
}

// Define the Director and Teacher interfaces
interface Director {
  workDirectorTasks(): string;
}

interface Teacher {
  workTeacherTasks(): string;
}

// Define the type predicate isDirector
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// Define the executeWork function
function executeWork(employee: Director | Teacher): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// Create a Director instance
const director: Director = {
  workDirectorTasks() {
    return "Performing director tasks";
  },
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  }
};

// Create a Teacher instance
const teacher: Teacher = {
  workTeacherTasks() {
    return "Performing teacher tasks";
  },
  workFromHome: function (): string {
    throw new Error("Function not implemented.");
  },
  getCoffeeBreak: function (): string {
    throw new Error("Function not implemented.");
  }
};

// Test the executeWork function
executeWork(director); // Output: Performing director tasks
executeWork(teacher); // Output: Performing teacher tasks

// Define the Subjects string literal type
type Subjects = "Math" | "History";

// Define the teachClass function
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else if (todayClass === "History") {
    return "Teaching History";
  } else {
    throw new Error("Invalid subject");
  }
}

// Test the teachClass function
console.log(teachClass("Math")); // Output: Teaching Math
console.log(teachClass("History")); // Output: Teaching History
