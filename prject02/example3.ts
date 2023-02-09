// Objects with types defined and then assignability.


type imranType = {
  name: { firstName: string; lastName: string };
  age: number;
  teaching: boolean;
  dod: Date;
  certifications: string[];
};

let imran: imranType;

imran = {
  name: { firstName: "Adil", lastName: "Altaf" },
  age: 21,
  teaching: true,
  dod: new Date(),
  certifications: ["AWS", "Azure", "Rust"],
};

export {};
