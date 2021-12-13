// For the calculation of expenses
let resultTotalExpenses;
document.getElementById("totalExpenses").addEventListener("click", () => {
    let inputDepenses1 = document.getElementById("depenses1").value;
    let inputDepenses2 = document.getElementById("depenses2").value;
    let inputDepenses3 = document.getElementById("depenses3").value;
    let inputDepenses4 = document.getElementById("depenses4").value;
    let inputDepenses5 = document.getElementById("depenses5").value;
    let inputDepenses6 = document.getElementById("depenses6").value;
    let inputDepenses7 = document.getElementById("depenses7").value;
    let inputDepenses8 = document.getElementById("depenses8").value;
    let inputDepenses9 = document.getElementById("depenses9").value;
    let inputDepenses10 = document.getElementById("depenses10").value;
    let inputDepenses11 = document.getElementById("depenses11").value;
    let inputDepenses12 = document.getElementById("depenses12").value;
    let inputDepenses13 = document.getElementById("depenses13").value;
    let inputDepenses14 = document.getElementById("depenses14").value;
    resultTotalExpenses = (parseFloat(inputDepenses1) + parseFloat(inputDepenses2) + parseFloat(inputDepenses3) +
        parseFloat(inputDepenses4) + parseFloat(inputDepenses5) + parseFloat(inputDepenses6) +
        parseFloat(inputDepenses7) + parseFloat(inputDepenses8) + parseFloat(inputDepenses9) +
        parseFloat(inputDepenses10) + parseFloat(inputDepenses11) + parseFloat(inputDepenses12) +
        parseFloat(inputDepenses13) + parseFloat(inputDepenses14));
    document.getElementById("totalResultExpenses").innerHTML += "- " + resultTotalExpenses + " € ";
});


// For the calculation of revenue
let resultTotalRevenue;
document.getElementById("totalRevenue").addEventListener("click", () => {
    let inputRevenue1 = document.getElementById("revenue1").value;
    let inputRevenue2 = document.getElementById("revenue2").value;
    let inputRevenue3 = document.getElementById("revenue3").value;
    resultTotalRevenue = (parseFloat(inputRevenue1) + parseFloat(inputRevenue2) + parseFloat(inputRevenue3));
    document.getElementById("totalResultRevenue").innerHTML += resultTotalRevenue + " €";
});

//For the calculation of savings
let inputSavings;
document.getElementById("totalSavings").addEventListener("click", () => {
    inputSavings = document.getElementById("savings").value;
    document.getElementById("totalResultSavings").innerHTML += inputSavings + " € ";
});

/*
/ Function to add a text
 */
function addTextBudget(text, color){
    let createText = document.createElement("p");
    createText.innerHTML = text;
    createText.style.color = color;
    createText.id = "createText";
    document.getElementById("containerResult").appendChild(createText);
}

// The result
document.getElementById("resultBudget").addEventListener("click", () => {
    let result = (parseFloat(resultTotalRevenue) - parseFloat(inputSavings) - parseFloat(resultTotalExpenses));
    document.getElementById("result").innerHTML += result + " € ";

    if (result < 0){
        addTextBudget("Votre budget est négatif !", "red");
        let createText1 = document.createElement("p");
        createText1.innerHTML = "Attention vous etes dans le rouge vous ete a decouvert de " + result + " €";
        createText1.style.color = "red";
        createText1.id = "createText1";
        document.getElementById("containerResult").appendChild(createText1);
    }

    if (result === 0){
        addTextBudget("Votre budget est nul !", "grey");
        let createText3 = document.createElement("p");
        createText3.innerHTML = "Vous n'etes pas dans le rouge ni dans le vert faitte attention il vous reste " + result + " €";
        createText3.style.color = "grey";
        createText3.id = "createText3";
        document.getElementById("containerResult").appendChild(createText3);
    }

    if (result > 0){
        addTextBudget("Votre budget est positif !", "green");
        let createText2 = document.createElement("p");
        createText2.innerHTML = "Vous etes dans le vert vous pouvez JETTEZ UN SOUS A VOTRE DAMIEN il vous reste " + result + " €";
        createText2.style.color = "green";
        createText2.id = "createText2";
        document.getElementById("containerResult").appendChild(createText2);
    }
});

// To refresh the page
document.getElementById("reset").addEventListener("click", function (){
    location.reload();
});