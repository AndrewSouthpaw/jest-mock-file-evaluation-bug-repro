import { dep } from "../dependency";
import { aExport } from "../a";

jest.mock("../dependency");

// only happens when using an "auto-mock" from jest. If a module factory function is provided
// instead, the problem goes away, even if it returns the original module.
jest.mock("../a");
// jest.mock("../a", () => ({
//   ...jest.requireActual("../a"),
// }));


it("does something", () => {
  // this is necessary, something from a.ts needs to be evaluated. If this line is commented out,
  // the issue goes away.
  aExport;
  // same for something from dependency, if this line is commented out the manual mock isn't
  // exercised.
  dep;
});
