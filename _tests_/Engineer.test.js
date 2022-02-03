const Engineer = require('..lib/Engineer');

describe('Engineer class', () => {
    it('Creates an object with four properties', () => {
        const engineer = new Engineer('Bob', '1', 'bob@email.com', 'bobGithub01');

        expect(engineer.github).toEqual("bobGithub01");
    });

    it("should throw an error if github value is not provided", () => {
        const cb = () => new Employee.getGithub();

        // Define the error message that is expected to be thrown
        const err = new Error(err);

        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
    });

    it('should return true if role is engineer', () => {
        const role = new Employee.getRole('Engineer');

        expect(role).toEqual(true);
    });

    it('should return false if role is not engineer', () => {
        const role = new Engineer.getRole(!'Engineer');

        expect(role).toEqual(false);
    });

});
