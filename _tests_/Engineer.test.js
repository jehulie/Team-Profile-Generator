const Engineer = require('../lib/Engineer');

describe('Engineer class', () => {
    // Positive tests:
    it('Creates an object with four properties', () => {
        const engineer = new Engineer('Bob', '1', 'bob@email.com', 'bobGithub01');

        expect(engineer.github).toEqual("bobGithub01");
    });

    it('should return role as engineer', () => {
        const engineer = new Engineer('Bob', '1', 'bob@email.com', 'bobGithub01');

        expect(engineer.getRole()).toEqual('Engineer');
    });

    // Null test:
    it("should throw an error if github value is not provided", () => {
        const cb = () => new Engineer.getGithub();

        // Verify that the correct error was thrown when the callback is executed
        expect(cb).toThrowError();
    });

});

