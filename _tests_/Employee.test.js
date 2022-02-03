const Employee = require('..lib/Employee');

describe('Employee class', () => {
  it('Creates an object with three properties', () => {
    const employee = new Employee('Bob', '1', 'bob@email.com')

    expect(employee.name).toEqual("Bob");
    expect(employee.id).toEqual(1);
    expect(employee.email).toEqual("bob@email.com");
  });

  it("should throw an error if no name provided", () => {
    // Wrap the object initialization in a callback function that Jest will run
    const cb = () => new Employee.getName();

    // Verify that an error was thrown in the callback function
    expect(cb).toThrow();
  });

  it("should throw an error if 'name' is not a string", () => {
    const cb = () => new Employee.getName(2);
    const err = new Error("Expected parameter 'name' to be a non-empty string");

    expect(cb).toThrowError(err);
  });

  it("should throw an error if id is not provided", () => {
    const cb = () => new Employee.getId();

    // Define the error message that is expected to be thrown
    const err = new Error(err);

    // Verify that the correct error was thrown when the callback is executed
    expect(cb).toThrowError(err);
  });

  it("should throw an error if email is not provided", () => {
    const cb = () => new Employee.getEmail();

    // Define the error message that is expected to be thrown
    const err = new Error(err);

    // Verify that the correct error was thrown when the callback is executed
    expect(cb).toThrowError(err);
  });

  it('should return true if role is employee', () => {
    const role = new Employee.getRole('Employee');

    expect(role).toEqual(true);
});

it('should return false if role is not employee', () => {
    const role = new Employee.getRole(!'Employee');

    expect(role).toEqual(false);
});
});
