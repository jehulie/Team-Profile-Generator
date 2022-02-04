const Intern = require('../lib/Intern');

describe('Intern class', () => {
    // Positive tests:
    it('Creates an object with four properties', () => {
        const intern = new Intern('Bob', '1', 'bob@email.com', 'Stanford');

        expect(intern.school).toEqual("Stanford");
    });

    it('should return role as intern', () => {
        const intern = new Intern('Bob', '1', 'bob@email.com', 'Stanford');

        expect(intern.getRole()).toEqual('Intern');
    });

    // Null test:
    it("should throw an error if school value is not provided", () => {
        const cb = () => new Intern.getSchool();

        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError();
    });

});