function myFunction() {

function calculateLogarithm(base, x) {
	var a = Math.log(x);
    var b = Math.log(base);
  
    return a / b;
}

var podstawaLogarytmu = prompt("Wprowadź podstawę logarytmu")
var liczbaLogarytmowana = prompt("Wprowadź liczbę logarytmowaną")
var wynik = calculateLogarithm(podstawaLogarytmu, liczbaLogarytmowana)
alert(`Logarytm log${podstawaLogarytmu}  ${liczbaLogarytmowana} wynosi: ${wynik}`)
}