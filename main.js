//Function to Convert Temp Celsius to Fahrenhite
celTofahrenheit = () => {
    let num = document.getElementById("temp").value;
    if (num == '') {
         document.getElementById("result").innerHTML = `Please Enter Temprature Value`;//if user not fill any value show msg
    }
    else {
        let result = (num * 9) / 5 + 32;
        document.getElementById("result").innerHTML = `${result} °Fahrenheit`
    }
}
//Function to Convert Temp Fahrenhite to Celsius
ferToCelsius = () => {
    let num = document.getElementById("temp").value;
    if (num == '') {
        document.getElementById("result").innerHTML = `Please Enter Temprature Value`//if user not fill any value show msg
    }
    else {
        document.querySelector
        let result = ((num - 32) * 5) / 9;;
        document.getElementById("result").innerHTML = `${result} °Celsius`
    }
}