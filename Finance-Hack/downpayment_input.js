function returnText(){
  let price = document.getElementById("house-cost").value;

  let years = document.getElementById("years").value;

  let inflation = document.getElementById("inflation_rate").value;
  inflation_percentage = inflation * 0.01

  let eventual_price = parseFloat(price);
  for (let i = 0; i < years; i++) {
    eventual_price += (eventual_price * inflation_percentage)
  }
  eventual_price = eventual_price.toFixed(2);

  let downpayment = document.getElementById("downpayment").value;
  downpayment_percentage = downpayment * 0.01

  downpayment_amount = eventual_price * downpayment_percentage;
  downpayment_amount = downpayment_amount.toFixed(2);

  var newParagraph = document.createElement("p");
  newParagraph.style.color = "white";

  var newText = document.createTextNode("In " + years + " years, this house will cost $" +  + eventual_price + " and will have a " + downpayment + "% downpayment of $" + downpayment_amount);

  newParagraph.appendChild(newText);
  document.body.appendChild(newParagraph);
  
}