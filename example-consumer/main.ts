import { sayHelloWorld, sayByeWorld } from "example-library";
import { add } from "example-library";

console.log(
  "=========== Running code using example-library from GitHub Private Repo ==========="
);
sayHelloWorld();
sayByeWorld();

console.log(
  "Calling add function from example-library: 1 + 2 equals ",
  add(1, 2)
);
