const Engineer = require(`../lib/Engineer`);

test(`creates an engineer object`, () => {
  const engineer = new Engineer(`John`, 1, `john@nothing.com`, `john1234`);

  expect(engineer.name).toBe(`John`);
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe(`john@nothing.com`);
  expect(engineer.github).toBe(`john1234`);
});

test(`gets engineer's name`, () => {
  const engineer = new Engineer(`John`, 1, `john@nothing.com`, `john1234`);

  expect(engineer.getName()).toBe(`John`);
});

test(`gets engineer's id`, () => {
  const engineer = new Engineer(`John`, 1, `john@nothing.com`, `john1234`);

  expect(engineer.getId()).toBe(1);
});

test(`gets engineer's email`, () => {
  const engineer = new Engineer(`John`, 1, `john@nothing.com`, `john1234`);

  expect(engineer.getEmail()).toBe(`john@nothing.com`);
});

test(`gets engineer's role`, () => {
  const engineer = new Engineer(`John`, 1, `john@nothing.com`, `john1234`);

  expect(engineer.getRole()).toBe(`Engineer`);
});

