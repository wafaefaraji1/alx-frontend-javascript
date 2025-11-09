// ---------------- Interfaces ----------------

// Teacher Interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: any; // يسمح لأي property إضافية
}

// Directors Interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Interface for printTeacher function
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// Interface for Student class constructor
interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

// Interface describing Student class
interface StudentClassInterface {
  firstName: string;
  lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

// ---------------- Implementations ----------------

// Example Director object
const director1: Directors = {
  firstName: "John",
  lastName: "Doe",
  location: "London",
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

// printTeacher function implementation
const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

// Example usage of printTeacher
console.log(printTeacher("John", "Doe"));      // Output: J. Doe
console.log(printTeacher("Wafae", "Faraji"));  // Output: W. Faraji

// StudentClass implementation
class StudentClass implements StudentClassInterface {
  constructor(public firstName: string, public lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Test StudentClass
const student = new StudentClass("Wafae", "Faraji");
console.log(student.displayName());       // Wafae
console.log(student.workOnHomework());    // Currently working
