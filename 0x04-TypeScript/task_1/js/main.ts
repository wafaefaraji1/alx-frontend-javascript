interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// ---- New Part Below ----

// Interface for the function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("John", "Doe")); // Output: J. Doe
// -------------- Previous Code Above --------------

// Interface for constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing the class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// Class implementation
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test
const student = new StudentClass("Wafae", "Faraji");
console.log(student.displayName());       // Wafae
console.log(student.workOnHomework());    // Currently working
