const Manager = require('..lib/Manager');

describe('Manager class', () => {
    it('Creates an object with four properties', () => {
        const manager = new Manager ('Bob', '1', 'bob@email.com', '5550505');

        expect(manager.officeNumber).toEqual("5550505");
    });

    it("should throw an error if officeNumber value is not provided", () => {
        const cb = () => new Manager.officeNumber();

        // Define the error message that is expected to be thrown
        const err = new Error(err);

        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
    });

    it('should return true if role is manager', () => {
        const role = new Manager.getRole('Manager');

        expect(role).toEqual(true);
    });

    it('should return false if role is not manager', () => {
        const role = new Manager.getRole(!'Manager');

        expect(role).toEqual(false);
    });

});