
let sideOfCoin;

const coinValue = () => {
  const valueCollector = prompt('Наж натисніть "x" , що розпочати гру ', "x");

  let sideOfCoin = 0;

  if (valueCollector !== "x") {
    console.log("Можливо Ви помилились у літері.");
    return;
  }

  sideOfCoin = Math.round(Math.random(0, 1) + 1);

  if (sideOfCoin == 1) {
    console.log("Вам випав орел!");
  } else {
    console.log("Вам випала решка!");
  }

  return sideOfCoin;
}

coinValue();

