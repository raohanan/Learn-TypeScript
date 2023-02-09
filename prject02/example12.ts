// Rest and spread operators, how they works...

let nickNames: string[] = ["Imran", "Alexander", "Alex", "Alexander the great"];

// In function bellow rest operatop is used in params.
function logNames(greeting: string, ...nickNames: string[]) {
  for (const nickName of nickNames) {
    console.log(`${greeting} ${nickNames}`);
  }
}

// in function call bellow spread operator is used.
logNames("Hello", ...nickNames);

export {};
