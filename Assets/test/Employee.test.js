const Employee = require("../js/Employee");

describe("Employee", () => {
  // Test for all use cases when initializing a new Employee object
  describe("constructor", () => {
    it("Should create a object using name, id and email", () => {
      const employee = new Employee('Jaymen', 3, 'jaymen100@gmail.com');

      // Verify that the new object has the correct properties
      expect(employee.name).toEqual('Jaymen');
      expect(employee.id).toEqual(3);
      expect(employee.email).toEqual('jaymen100@gmail.com');
    });
  });

  describe("getName", () => {
    it("Should return the name of the employee", () => {
        const employee = new Employee('Jaymen', 3, 'jaymen100@gmail.com');

        expect(employee.getName()).toEqual('Jaymen')
    })
  })

  describe("getId", () => {
    it("Should return the id of the employee", () => {
        const employee = new Employee('Jaymen', 3, 'jaymen100@gmail.com');

        expect(employee.getId()).toEqual(3)
    })
  })

  describe("GetEmail", () => {
    it("Should return the email of the employee", () => {
        const employee = new Employee('Jaymen', 3, 'jaymen100@gmail.com');

        expect(employee.getEmail()).toEqual('jaymen100@gmail.com')
    })
  })

  describe("getRole", () => {
    it("Should return the role of the employee", () => {
        const employee = new Employee('Jaymen', 3, 'jaymen100@gmail.com');

        expect(employee.getRole()).toEqual('Employee')
    })
  })
});
