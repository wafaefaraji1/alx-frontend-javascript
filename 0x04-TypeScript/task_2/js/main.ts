// Director Interface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// Teacher Interface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// Director class
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

// Teacher class
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

// createEmployee function
function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === "number" && salary < 500) {
    return new Teacher();
  }
  return new Director();
}

// Testing outputs
console.log(createEmployee(200));   // Teacher
console.log(createEmployee(1000));  // Director
console.log(createEmployee('$500')); // Director
// ---- Add these new functions ----

// Type Predicate
function isDirector(employee: Director | Teacher): employee is Director {
  return employee instanceof Director;
}

// executeWork function
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Tests
console.log(executeWork(createEmployee(200)));   // Getting to work
console.log(executeWork(createEmployee(1000)));  // Getting to director tasks
// ---- Add this at the bottom of task_2/js/main.ts ----

// String literal type
type Subjects = "Math" | "History";

// Function teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  return "Teaching History";
}

// Tests
console.log(teachClass("Math"));     // Teaching Math
console.log(teachClass("History"));  // Teaching History
