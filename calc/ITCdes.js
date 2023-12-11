function i400kbelow(x) {
    var tax = (x-250000) * 0.20
    var profit = x - tax;
    document.getElementById("tax").innerHTML = tax.toFixed(2);    
    document.getElementById("aftertax").innerHTML = profit.toFixed(2); 
}

function i800kbelow(x) {
    var tax = (x-400000) * 0.25 + 30000;
    var profit = x - tax;
    document.getElementById("tax").innerHTML = tax.toFixed(2);  
    document.getElementById("aftertax").innerHTML = profit.toFixed(2);  
}

function i2mbelow(x) {
    var tax = (x-800000) * 0.30 + 130000
    var profit = x - tax;
    document.getElementById("tax").innerHTML = tax.toFixed(2);
    document.getElementById("aftertax").innerHTML = profit.toFixed(2);    
}

function i8mbelow(x) {
    var tax = (x-2000000) * 0.32 + 490000
    var profit = x - tax;
    document.getElementById("tax").innerHTML = tax.toFixed(2);  
    document.getElementById("aftertax").innerHTML = profit.toFixed(2);  
}

function i8mabove(x) {
    var tax = (x-8000000) * 0.35 + 2410000
    var profit = x - tax;
    document.getElementById("tax").innerHTML = tax.toFixed(2);   
    document.getElementById("aftertax").innerHTML = profit.toFixed(2); 
}

document.getElementById("incomelevel").addEventListener("click", function incomelevel() {
    var income = parseFloat(document.getElementById("income").value);
    document.getElementById("beforetax").innerHTML = income.toFixed(2);
    if (income >= 0 && income <= 250000) {
        document.getElementById("tax").innerHTML = "0";
        document.getElementById("aftertax").innerHTML = income;
    }
    else if (income > 250000 && income <= 400000) {
        i400kbelow(income);
    }
    else if (income > 400000 && income <= 800000) {
        i800kbelow(income);
    }
    else if (income > 800000 && income <= 2000000) {
        i2mbelow(income);
    }
    else if (income > 2000000 && income <= 8000000) {
        i8mbelow(income);
    }
    else if (income > 8000000) {
        i8mabove(income);
    }
    else {
        alert("Please enter a valid annual income");
    }
});


