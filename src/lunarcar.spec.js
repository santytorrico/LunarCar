import Car from "./lunarcar.js"


let roadster = new Car();
describe("Movement", () => {
    it("Return actual position", () => {
      expect(roadster.execute(" ")).toEqual("0,0N");
    });
  });