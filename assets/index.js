const valor = [10, 244, 99, 2, 22, 30, 250];
let finalValueComDescont = 0;
let finalValue = 0;

valor.forEach(valuesem => {
    
finalValue = finalValue + valuesem

});



function desconto (porcen,descont) {
  const result = (porcen * descont) / 100;

  return result;
}

valor.forEach((value) => {
  if (value > 30) {
    const descont = desconto(value, 10);

    finalValueComDescont = finalValueComDescont + (value - descont);
  } else {
    finalValueComDescont += value;
  }

finalValue - finalValueComDescont



});
console.log(`este e o  valor final ${finalValueComDescont.toFixed(2)}
, este eo  valor  sem desconto ${finalValue.toFixed(2)} este e o foi de  desconto e  ${finalValue - finalValueComDescont.toFixed(0)}`);
