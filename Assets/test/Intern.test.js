const Intern = require("../js/Intern");

describe("Intern", () => {
  // Test for all use cases when initializing a new Employee object
  describe("constructor", () => {
    it("Should create a object using name, id and email and school", () => {
      const employee = new Intern('Jaymen', 3, 'jaymen100@gmail.com', "Bert Church");

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual('Jaymen');
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual('jaymen100@gmail.com');
      expect(employee.school).toEqual("Bert Church");
    });
  });

  describe("getSchool", () => {
    it("Should return the school of the employee", () => {
        const employee = new Intern('Jaymen', 3, 'jaymen100@gmail.com', "Bert Church");

        expect(employee.getSchool()).toEqual("Bert Church")
    })
  })

  describe("GetRole", () => {
    it("Should return the role of the employee", () => {
        const employee = new Intern('Jaymen', 3, 'jaymen100@gmail.com', "Bert Church");

        expect(employee.getRole()).toEqual('Intern')
    })
  })
});
