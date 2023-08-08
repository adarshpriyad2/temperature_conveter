function convert() {
    const temperature = Number(document.getElementById("temperature").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
    let result;
    if (from === "Celsius" && to === "Fahrenheit") {
    result = (temperature * 9/5) + 32;
    } else if (from === "Fahrenheit" && to === "Celsius") {
    result = (temperature - 32) * 5/9;
    } else if (from === "Celsius" && to === "Kelvin") {
    result = temperature + 273.15;
    } else if (from === "Kelvin" && to === "Celsius") {
    result = temperature - 273.15;
    } else if (from === "Fahrenheit" && to === "Kelvin") {
    result = (temperature + 459.67) * 5/9;
    } else if (from === "Kelvin" && to === "Fahrenheit") {
    result = (temperature * 9/5) - 459.67;
    }
    document.getElementById("result").innerHTML = result.toFixed(2) + " " + to;
    }
