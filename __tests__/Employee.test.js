const Employee = require(`../lib/Employee`);

test(`creates an employee object`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.name).toBe(`John`);
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.stringContaining(`@`));
});

test(`gets employee's name`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.getName()).toBe(`John`);
});

test(`gets employee's id`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.getId()).toBe(1);
});

test(`gets employee's email`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.getEmail()).toEqual(expect.stringContaining(`@`));
});

test(`gets employee's role`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.getRole()).toBe(`Employee`);
});
