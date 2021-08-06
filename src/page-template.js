const generatePage = templateData => {
  console.log(templateData);

  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Team</title>
  <link rel="stylesheet" href="./style.css" />
</head>
<body>
  <header>
    <h1>My Team</h1>
  </header>
  <main>
    <div class="employee">
      <div class="employee-header">
        <h2>Name</h2>
        <h3>Role</h3>
      </div>
      <div class="employee-main">
        <div class="employee-info">
          <div class="employee-id">
            <p>ID:</p>
          </div>
          <div class="employee-email">
            <p>Email:</p>
          </div>
          <div class="employee-special">
            <p>Office Number/GitHub/School:</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</body>
</html>
  `
};

module.exports = generatePage;