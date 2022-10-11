const Engineer = require("../js/Engineer");

describe("Engineer", () => {
  // Test for all use cases when initializing a new Employee object
  describe("constructor", () => {
    it("Should create a object using name, id and email and github username", () => {
      const employee = new Engineer('Jaymen', 3, 'jaymen100@gmail.com', "CanadianMRE");

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual('Jaymen');
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual('jaymen100@gmail.com');
      expect(employee.github).toEqual("CanadianMRE");
    });
  });

  describe("getGithub", () => {
    it("Should return the github of the employee", () => {
        const employee = new Engineer('Jaymen', 3, 'jaymen100@gmail.com', "CanadianMRE");

        expect(employee.getGithub()).toEqual('https://github.com/CanadianMRE')
    })
  })

  describe("GetRole", () => {
    it("Should return the role of the employee", () => {
        const employee = new Engineer('Jaymen', 3, 'jaymen100@gmail.com', "CanadianMRE");

        expect(employee.getRole()).toEqual('Engineer')
    })
  })
});
