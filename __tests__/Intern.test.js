const Intern = require(`../lib/Intern`);

test(`creates an intern object`, () => {
  const intern = new Intern(`John`, 1, `john@nothing.com`, `UW Extended Campus`);

  expect(intern.name).toBe(`John`);
  expect(intern.id).toBe(1);
  expect(intern.email).toBe(`john@nothing.com`);
  expect(intern.school).toBe(`UW Extended Campus`);
});

test(`gets intern's name`, () => {
  const intern = new Intern(`John`, 1, `john@nothing.com`, `UW Extended Campus`);

  expect(intern.getName()).toBe(`John`);
});

test(`gets intern's id`, () => {
  const intern = new Intern(`John`, 1, `john@nothing.com`, `UW Extended Campus`);

  expect(intern.getId()).toBe(1);
});

test(`gets intern's email`, () => {
  const intern = new Intern(`John`, 1, `john@nothing.com`, `UW Extended Campus`);

  expect(intern.getEmail()).toBe(`john@nothing.com`);
});

test(`gets intern's school`, () => {
  const intern = new Intern(`John`, 1, `john@nothing.com`, `UW Extended Campus`);

  expect(intern.getSchool()).toBe(`UW Extended Campus`);
});

test(`gets intern's role`, () => {
  const intern = new Intern(`John`, 1, `john@nothing.com`, `UW Extended Campus`);

  expect(intern.getRole()).toBe(`Intern`);
});