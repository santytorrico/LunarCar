import Car from "./lunarcar.js"


let roadster = new Car();
describe("Movement", () => {
    it("Return actual position", () => {
      expect(roadster.execute(" ")).toEqual("0,0N");
    });

    it("Go forward once on the same direction and Return actual position", () => {
        expect(roadster.execute("A")).toEqual("0,1N");
      });

  });