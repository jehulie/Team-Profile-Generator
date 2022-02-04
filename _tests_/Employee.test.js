const Employee = require('../lib/Employee');

describe('Employee class', () => {
  // Positive tests:
  it('Creates an object with three properties', () => {
    const employee = new Employee('Bob', '1', 'bob@email.com')

    expect(employee.name).toEqual("Bob");
    expect(employee.id).toEqual('1');
    expect(employee.email).toEqual("bob@email.com");
  });

  it('should return role as employee', () => {
    const employee = new Employee('Bob', '1', 'bob@email.com')

    expect(employee.getRole()).toEqual('Employee');
  });

// Null tests:
  it("should throw an error if no name provided", () => {
    // Wrap the object initialization in a callback function that Jest will run
    const cb = () => new Employee.getName();

    // Verify that an error was thrown in the callback function
    expect(cb).toThrow();
  });

  it("should throw an error if id is not provided", () => {
    const cb = () => new Employee.getId();

    // Verify that the correct error was thrown when the callback is executed
    expect(cb).toThrow();
  });

  it("should throw an error if email is not provided", () => {
    const cb = () => new Employee.getEmail();

    // Verify that the correct error was thrown when the callback is executed
    expect(cb).toThrow();
  });

});
