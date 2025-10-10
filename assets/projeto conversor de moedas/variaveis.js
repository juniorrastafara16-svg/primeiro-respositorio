const convertButton = document.querySelector(".convert-button");
const currencySelecteValue = document.querySelector(".currency-selecto-valuer");
const currencySelecteChanger = document.querySelector(".currency-selecto-changer");



function convertvalues() {
  const inputCurrencyvalue = document.querySelector(".input-currency").value; // valor em pegar todas as moedas //
  
  const currencyvalueconverte = document.querySelector(".currency-value-convert");
    
 // valoe em real //
  const currencyValueConverted = document.querySelector(".currency-value-converted");
    
   
  const dolarToday = 5.25;
  const euroToday = 6.27;
  const libraToday = 7.34;
  const bitcoinToday = 654.25987;
  const realToday = 1.0;
  // valor a dividir pelo dolar//
    let valueReal = 0;


/// converte de qualquer moeda para o real ///

     if (currencySelecteChanger.value == "reall") {
        valueReal = inputCurrencyvalue * realToday
    }

    if (currencySelecteChanger.value == "dolarr") {
        valueReal = inputCurrencyvalue * dolarToday
    }

    if (currencySelecteChanger.value == "euroo") {
        valueReal = inputCurrencyvalue * euroToday
    }

    if (currencySelecteChanger.value  == "libraa") {
        valueReal = inputCurrencyvalue * libraToday
    }

    if ( currencySelecteChanger.value  == "bitcoinn") {
        valueReal = inputCurrencyvalue * bitcoinToday
    }

     
  if (currencySelecteChanger.value == "reall") {
       currencyvalueconverte.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyvalue)
    }
     /// selecter /// um 



    if (currencySelecteChanger.value == "dolarr") {
        currencyvalueconverte.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyvalue)
    }

    if (currencySelecteChanger.value == "euroo") {
        currencyvalueconverte.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyvalue)
    }

    if (currencySelecteChanger.value == "libraa") {
        currencyvalueconverte.innerHTML = new Intl.NumberFormat("uk-UK", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyvalue)
    }

    if (currencySelecteChanger.value == "bitcoinn") {
        currencyvalueconverte.innerHTML = new Intl.NumberFormat("en-US", {                                                                                                                                                                                                                                                                                                                                                                             
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyvalue)
    }      
      
    

  if (currencySelecteValue.value == "dolar") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format( valueReal / dolarToday);
  } // VALOR EM DOLAR //

  if (currencySelecteValue.value == "euro") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format( valueReal / euroToday);
  }

  if (currencySelecteValue.value == "libra") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "GBP",
    }).format( valueReal / libraToday);
  }

  if (currencySelecteValue.value == "bitcoin") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
    }).format( valueReal / bitcoinToday);
  }

if (currencySelecteValue.value == "real") {
    currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format( valueReal / realToday);
  }

}

convertvalues()

function changecurrency() {
  const currencyName = document.getElementById("currency-name");
  const currencyimg = document.querySelector(".currency-img");

  if (currencySelecteValue.value == "dolar") {
    currencyName.innerHTML = "dolar americano";
    currencyimg.src = "./image/usa.png";
  }
  if (currencySelecteValue.value == "euro") {
    currencyName.innerHTML = "euro";
    currencyimg.src = "./image/euro.png";
  }

  if (currencySelecteValue.value == "libra") {
    currencyName.innerHTML = "libra";
    currencyimg.src = "./image/libra.png";
  }

  if (currencySelecteValue.value == "bitcoin") {
    currencyName.innerHTML = "bitcoin";
    currencyimg.src = "./image/bitcoin 1.png";
  }

  if (currencySelecteValue.value == "real") {
    currencyName.innerHTML = "real";
    currencyimg.src = "./image/brasil 2.png";
  }

  convertvalues();
}


function changeCurrency2(){
    const imageCoin = document.querySelector(".img-2")
    const nameCoin = document.querySelector(".coin")
    

if (currencySelecteChanger.value == "reall") { 
    imageCoin.src = "./image/brasil 2.png";
     nameCoin.innerHTML = " Real brasileiro ";}



    if (currencySelecteChanger.value == "dolarr") { 
    imageCoin.src = "./image/usa.png";
     nameCoin.innerHTML = " Dolar americano ";}

  

    if (currencySelecteChanger.value == "euroo") { 
    imageCoin.src = "./image/euro.png";
     nameCoin.innerHTML = " Euro ";}



    if (currencySelecteChanger.value == "libraa") { 
    imageCoin.src = "./image/libra.png";
     nameCoin.innerHTML = " Libra ";}


 if (currencySelecteChanger.value == "bitcoinn") { 
    imageCoin.src = "./image/bitcoin 1.png";
     nameCoin.innerHTML = " Bitcoin ";}

  
  convertvalues();



}


// mais um projeto concluido /// 


currencySelecteChanger.addEventListener("change",changeCurrency2);
currencySelecteValue.addEventListener("change", changecurrency);

convertButton.addEventListener("click", convertvalues);
