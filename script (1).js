function validateInput() {
    const inputField = document.getElementById('temperatureInput');
    inputField.value = inputField.value.replace(/[^0-9.-]/g, ''); // Allow only numbers and dot
}

function convertTemperature() {
    const inputTemperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.getElementById('unitSelect').value;
    let convertedTemperature;

    if (isNaN(inputTemperature)) {
        document.getElementById('resultArea').innerText = 'Please enter a valid number.';
        return;
    }

    switch (unit) {
        case 'celsius':
            convertedTemperature = (inputTemperature - 32) * (5 / 9);
            break;
        case 'fahrenheit':
            convertedTemperature = (inputTemperature * (9 / 5)) + 32;
            break;
        case 'kelvin':
            convertedTemperature = inputTemperature + 273.15;
            break;
        default:
            break;
    }

    document.getElementById('resultArea').innerText = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${unit.toUpperCase()}`;
}