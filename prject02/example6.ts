//Two Objects with Or syntax defined and then assignability.
//Either this or that.

export {};

type ImranInPakistan = { name: string; age: number; type: "Pakistan" };
type ImranInOverseas = {
  name: string;
  age: number;
  type: "Overseas";
  nickName: string;
};

type Imran = ImranInPakistan | ImranInOverseas;

const imran: Imran =
  Math.random() > 0.5
    ? { name: "Imran", age: 30, type: "Pakistan" }
    : {
        name: "Imran",
        age: 21,
        type: "Overseas",
        nickName: "Alexander",
      };

if (imran.type === "Pakistan") {
  console.log(`He is from Pakistan so we'll call him hello ${imran.name}`);
} else {
  console.log(`He is from Overseas so we'll call him hello ${imran.nickName}`);
}
