import { sayByeWorld, sayHelloWorld } from "@sschanhee/example-library";
import { add } from "@sschanhee/example-library";

console.log(
  "=========== Running code using @sschanhee/example-library from Github Packages==========="
);
sayHelloWorld();
sayByeWorld();

console.log(
  "Calling add function from example-library: 1 + 2 equals ",
  add(1, 2)
);
