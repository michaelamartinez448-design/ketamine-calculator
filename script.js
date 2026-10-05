function calculateDose() {
    const weight = Number(document.getElementById("weight").value);
    const rate = Number(document.getElementById("rate").value);
    const result = document.getElementById("result");

    if (weight <= 0 || rate < 0 || !Number.isFinite(weight) || 
!Number.isFinite(rate)) {
        result.textContent = "Enter valid values";
        return;
    }

    const dose = (rate * 1000) / (weight * 60);

    result.textContent = dose.toFixed(3) + " mcg/kg/min";
}


function calculateRate() {
    const weight = Number(document.getElementById("weight").value);
    const dose = Number(document.getElementById("dose").value);
    const rateResult = document.getElementById("rateResult");

    if (weight <= 0 || dose < 0 || !Number.isFinite(weight) || 
!Number.isFinite(dose)) {
        rateResult.textContent = "Enter valid values";
        return;
    }

    const rate = (dose * weight * 60) / 1000;

    rateResult.textContent = rate.toFixed(2) + " mg/hr";
}

function copyResult(resultId, button) {
    const result = document.getElementById(resultId);

    if (!result || result.textContent.trim() === "-") {
        return;
    }

    navigator.clipboard.writeText(result.textContent.trim());

    button.textContent = "Copied!";

    setTimeout(() => {
        button.textContent = "Copy";
    }, 1500);
}
