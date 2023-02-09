// Arrays...

const numberOfArray: number[] = [12, 12, 32, 344, 4556, 767];

// A Function in which you can store values type of string is array.

let imranNames: () => string[];

imranNames = () => ["imran", "Alexander"];

// A Function in which you can store multiple functions type of string in array.

let funtionArray: (() => string)[];

funtionArray = [() => "Alexander", () => "Alex"];

// Union type of arrays.

let imranData: (string | number)[];

imranData = ["7", 3];

// Multi Dimension arrays.

let studentsOfWmd: number[][];
studentsOfWmd = [
  [12, 12, 32, 344, 4556, 767],
  [12, 12, 32, 344, 4556, 767],
];

// Spread operator for combining more than one array.

let nickNames: string[] = ["Alexander", "Alex"];
let numbers: number[] = [12, 13];

const combined = [...nickNames, ...numbers];
