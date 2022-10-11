const Manager = require("../js/Manager");

describe("Manager", () => {
  // Test for all use cases when initializing a new Employee object
  describe("constructor", () => {
    it("Should create a object using name, id and email and office number", () => {
      const employee = new Manager('Jaymen', 3, 'jaymen100@gmail.com', 4);

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual('Jaymen');
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual('jaymen100@gmail.com');
      expect(employee.officeNumber).toEqual(4);
    });
  });

  describe("getOffice", () => {
    it("Should return the office of the employee", () => {
        const employee = new Manager('Jaymen', 3, 'jaymen100@gmail.com', 4);

        expect(employee.getOffice()).toEqual(4)
    })
  })

  describe("GetRole", () => {
    it("Should return the role of the employee", () => {
        const employee = new Manager('Jaymen', 3, 'jaymen100@gmail.com', 4);

        expect(employee.getRole()).toEqual('Team Manager')
    })
  })
});
