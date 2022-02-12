export const getEmployees = (count = 200) =>
  fetch(`https://randomuser.me/api/?results=${count}&nat=us`).then((res) =>
    res.json()
  );
