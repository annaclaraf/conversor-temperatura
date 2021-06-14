const tempcelcius = document.querySelector("#tempcelsius");
const tempfarenheit = document.querySelector("#tempfahrenheit");
const tempkelvin = document.querySelector("#tempkelvin");

function converter() {
    let celsius, fahrenheit, kelvin;
    const select = document.querySelector("#select");
    const opcao = select.options[select.selectedIndex].value;
    const grau = parseFloat(document.querySelector("#grau").value);

    switch (opcao) {
        case "Celsius":
            celsius = grau;
            fahrenheit = (1.8 * grau) + 32;
            kelvin = grau + 273.15;

            break;

        case "Fahrenheit":
            fahrenheit = grau;
            celsius = (grau - 32) / 1.8;
            kelvin = ((grau - 32) / 1.8) + 273.15;

            break;

        case "Kelvin":
            kelvin = grau;
            celsius = grau - 273.15;
            fahrenheit = ((grau - 273.15) * 1.8) + 32;

            break;
    }

    tempcelcius.value = celsius.toFixed(2) + " °C";
    tempfarenheit.value = fahrenheit.toFixed(2) + " °F";
    tempkelvin.value = kelvin.toFixed(2) + " °K";
}
