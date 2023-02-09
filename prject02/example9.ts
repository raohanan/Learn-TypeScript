//Function types...

// Either function return string or number.
let returnStringOrNumber: () => string | number;

// Either function return string or it is just number.
let returnStringOrNumber2: ( () => string) | number;

// Either function return string or number it is just number.
let returnStringOrNumber3: ( () => string | number) | number;

// Either function return string or number it is just string.
let returnStringOrNumber4: ( () => string | number) | string;