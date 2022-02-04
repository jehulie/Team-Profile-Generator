const Manager = require('../lib/Manager');

describe('Manager class', () => {
    // Positive tests:
    it('Creates an object with four properties', () => {
        const manager = new Manager('Bob', '1', 'bob@email.com', '5550505');

        expect(manager.officeNumber).toEqual("5550505");
    });

    it('should return role as manager', () => {
        const manager = new Manager('Bob', '1', 'bob@email.com', '5550505');

        expect(manager.getRole()).toEqual('Manager');
    });

    // Null test:
    it("should throw an error if officeNumber value is not provided", () => {
        const cb = () => new Manager.officeNumber();

        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError();
    });

});