function calculator (num1, num2, operator)
{
  switch (operator) {
    case '*':
      console.log(`${num1} * ${num2} = ${num1 * num2}`);
      break;
    case '+':
      console.log(`${num1} + ${num2} = ${num1 + num2}`);
      break;
    case '-':
      console.log(`${num1} - ${num2} = ${num1 - num2}`);
      break;
    case '/':
      console.log(`${num1} / ${num2} = ${num1 - num2}`);
      break;
    default:
      console.log("ERROR: UNKNOWN OPERATOR");
  }
};

calculator(1, 3, '*');
calculator(5, 2, '-');
calculator(2, 5, '+');
calculator(13, 33, '/');
calculator(1110, 1111, '&&');
