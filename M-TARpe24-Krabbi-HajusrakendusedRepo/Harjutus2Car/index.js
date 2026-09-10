const myJson = [
    {
        "Car0": {
            "property": "Car0",
            "color": "red",
            "tinted windows": true,
            "wheels": 4,
            "roof cargo": true,
            "entertainment": ["FM radio", "CD player", "Bluetooth"],
            "accessories": ["GPS navigation", "backup camera", "heated seats"],
            "price": 10000,
        },

        "Car1": {
            "property": "Car1",
            "color": "blue",
            "tinted windows": true,
            "wheels": 4,
            "roof cargo": false,
            "entertainment": ["FM radio"],
            "accessories": ["GPS navigation"],
            "price": 10000,
        }
    }
];

let dataHtml = `
<div id="json"> 
    <h1>Car Properties</h1>`
    for (let i = 0; i < myJson.length; i++) {
    dataHtml += `

    <h2>${i}. car</h2>
    <p>Car ${myJson[i].property}</p>
    <p>Color: ${myJson[i].color}</p>
    <p>Tinted Windows: ${myJson[i]["tinted windows"]}</p>
    <p>Wheels: ${myJson[i].wheels}</p>
    <p>Roof Cargo: ${myJson[i]["roof cargo"]}</p>
    <p>Entertainment: ${myJson[i].entertainment}</p>
    <p>Accessories: ${myJson[i].accessories}</p>
    <p>Price: $${myJson[i].price}</p>
`;
dataHtml += "</div>"
    };