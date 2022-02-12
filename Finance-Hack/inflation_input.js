function returnText(){
    let price = document.getElementById("price").value;
    alert(price)

    let years = document.getElementById("years").value;
    alert(years)

    let inflation = document.getElementById("inflation_rate").value;
    inflation_percentage = inflation * 0.01
    alert(inflation_percentage)

    let eventual_price = parseFloat(price)
    for (let i = 0; i < years; i++) {
      eventual_price += (eventual_price * inflation_percentage)
    }
    alert(eventual_price)
}
