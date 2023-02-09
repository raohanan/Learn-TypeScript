// Tuples.

// TUple requires same no of index with same types.
let imranData: [number, string];

imranData = [7, "Alexander"];

// Unlike array, array just want the types to match not on indexes.

let imranDataArray: (string | number)[];

imranDataArray = [12, "Ali", 32, 21, 45, 56, 7, "Alex"];

export {};

// Another example in which typescript recognize the tuple's type automatically.

let [name, age, country] =
  Math.random() > 0.5 ? ["Imran", 30, true] : ["Alexander", 30, false];
