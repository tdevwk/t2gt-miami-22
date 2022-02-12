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
    eventual_price = eventual_price.toFixed(2)
    alert(eventual_price)

    var newParagraph = document.createElement("p");
    newParagraph.style.color = "white"; //creates a new paragraph element
    var newText = document.createTextNode(eventual_price); //creates text along with output to be displayed
    newParagraph.appendChild(newText); //created text is appended to the paragraph element created
    document.body.appendChild(newParagraph); // created paragraph and text along with output is appended to the document body

}
