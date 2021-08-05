const Employee = require(`../lib/Employee`);

test(`creates an employee object`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.name).toBe(`John`);
  expect(employee.id).toBe(1);
  expect(employee.email).toBe(`john@nothing.com`);
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

  expect(employee.getEmail()).toBe(`john@nothing.com`);
});

test(`gets employee's role`, () => {
  const employee = new Employee(`John`, 1, `john@nothing.com`);

  expect(employee.getRole()).toBe(`Employee`);
});
