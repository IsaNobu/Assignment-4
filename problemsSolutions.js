function calculateMoney(numOfTickets) {
  if (numOfTickets < 0) {
    return "Invalid Number";
  }

  const ticketPrice = numOfTickets * 120;

  const guardExpenses = 500;
  const staffExpenses = 8 * 50;

  const totalExpenses = guardExpenses + staffExpenses;

  const profit = ticketPrice - totalExpenses;

  return profit;
}

function checkName(name) {
  if (typeof name !== "string") {
    return "invalid";
  }
  const endCharacter = name.slice(-1).toLocaleLowerCase();

  const goodNameQualification = ["a", "y", "i", "e", "o", "u", "w"];

  for (const element of goodNameQualification) {
    if (endCharacter === element) {
      return "Good Name";
    }
  }
  return "Bad Name";
}

function deleteInvalids(arr) {
  if (Array.isArray(arr) !== true) {
    return "Invalid Array";
  }

  const onlyNumArr = [];

  for (const element of arr) {
    if (
      onlyNumArr.includes(element) === (typeof element !== "number") &&
      !isNaN(element)
    ) {
      onlyNumArr.push(element);
    }
  }
  return onlyNumArr;
}

function password(info) {
  const getYear = String(info.birthYear);
  const makeString = getYear.split("");

  if (Object.keys(info).length !== 3 || makeString.length !== 4) {
    return "invalid";
  }

  const getFirstCharacter =
    info.siteName.charAt(0).toUpperCase() + info.siteName.slice(1);

  const password = getFirstCharacter
    .concat("#")
    .concat(info.name)
    .concat("@")
    .concat(getYear);

  return password;
}

function monthlySavings(arr, livingCost) {
  if (
    Array.isArray(arr) !== true ||
    (typeof livingCost !== "number" && !isNaN(livingCost))
  ) {
    return "invalid input";
  }

  const tax = 20 / 100;
  const moreThan3000 = [];
  const under3000 = [];
  const afterTax = [];

  for (const element of arr) {
    if (element >= 3000) {
      moreThan3000.push(element);
    }
  }

  for (const element of arr) {
    if (element < 3000) {
      under3000.push(element);
    }
  }

  for (const element of moreThan3000) {
    const calculationTax = element - element * tax;
    afterTax.push(calculationTax);
  }
  const earnings = under3000.concat(afterTax);
  let totalEarnings = 0;

  for (const element of earnings) {
    totalEarnings += element;
  }

  const savings = totalEarnings - livingCost;

  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}
