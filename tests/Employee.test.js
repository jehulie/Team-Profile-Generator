const Employee = require('..Employee/lib/');

describe('Employee class', () => {
    it('Creates an object with four properties', () => {
        const name = new Employee.getName();
        const id = new Employee.getId();
        const email = new Employee.getEmail();
        const role = getRole('employee');

        expect(role).toEqual(true);
    });

    it('should return false if role is not employee', () => {
        const name = new Employee.getName();
        const id = new Employee.getId();
        const email = new Employee.getEmail();
        const role = getRole('employee');

        expect(role).toEqual(false);
    });

    // test of getName()
    // Employee.name,length > 0
    // test of getId()
    // Employee.Id.length> 0
    // test of getEmail()
    // verify email
});
