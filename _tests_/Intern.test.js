const Intern = require('..lib/Intern');

describe('Intern class', () => {
    it('Creates an object with four properties', () => {
        const intern = new Intern('Bob', '1', 'bob@email.com', 'Stanford');

        expect(intern.school).toEqual("Stanford");
    });

    it("should throw an error if school value is not provided", () => {
        const cb = () => new Intern.getSchool();

        // Define the error message that is expected to be thrown
        const err = new Error(err);

        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError(err);
    });

    it('should return true if role is intern', () => {
        const role = new Intern.getRole('Intern');

        expect(role).toEqual(true);
    });

    it('should return false if role is not engineer', () => {
        const role = new Intern.getRole(!'Intern');

        expect(role).toEqual(false);
    });

});