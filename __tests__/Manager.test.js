const Manager = require(`../lib/Manager`);

test(`creates a manager object`, () => {
  const manager = new Manager(`John`, 1, `john@nothing.com`, 101);

  expect(manager.name).toBe(`John`);
  expect(manager.id).toBe(1);
  expect(manager.email).toBe(`john@nothing.com`);
  expect(manager.officeNumber).toBe(101);
});

test(`gets manager's name`, () => {
  const manager = new Manager(`John`, 1, `john@nothing.com`, 101);

  expect(manager.getName()).toBe(`John`);
});

test(`gets manager's id`, () => {
  const manager = new Manager(`John`, 1, `john@nothing.com`, 101);

  expect(manager.getId()).toBe(1);
});

test(`gets manager's email`, () => {
  const manager = new Manager(`John`, 1, `john@nothing.com`, 101);

  expect(manager.getEmail()).toBe(`john@nothing.com`);
});

test(`gets manager's role`, () => {
  const manager = new Manager(`John`, 1, `john@nothing.com`, 101);

  expect(manager.getRole()).toBe(`Manager`);
});
