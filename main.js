function checkWeight() {
    let weightId = document.getElementById("weightInput")
    let weight = weightId.value
    if (weight.trim() === "") {
        alertMessage.innerHTML = "Please enter the weight";
    } else {
        alertMessage.innerHTML = "";
        return weight;
    }
}

function checkHeight() {
    let heightId = document.getElementById("heightInput")
    let height = heightId.value
    if (height.trim() === "") {
        alertMessage1.innerHTML = "Please enter the height"
    } else {
        alertMessage1.innerHTML = "";
        return height
    }
}

function calculateBMI() {
    let weight = checkWeight();
    let height = checkHeight();
    if (weight && height) {
        let result = ((weight / (height ** 2)) * 10000).toFixed(2)
        document.getElementById("bmi").value = result

        if(result<18.5){
            analysis.innerHTML = `<div class="border container p-4">
                    <h4 class="text-success text-center mb-3">BMI Analysis</h4>
                    <p class="text-white fs-5 text-center">You are Underweight. Please do take care of your health.</p>
                </div>`
        }else if(result >= 18.5 && result <= 24.9){
            analysis.innerHTML = `<div class="border container p-4">
                    <h4 class="text-success text-center mb-3">BMI Analysis</h4>
                    <p class="text-white fs-5 text-center">You have Normalweight . Stay Healthy.</p>
                </div>`
        }else if(result >= 25 && result <= 29.9){
            analysis.innerHTML = `<div class="border container p-4">
                    <h4 class="text-success text-center mb-3">BMI Analysis</h4>
                    <p class="text-white fs-5 text-center">You are Overweight . Please do have a check on your health.</p>
                </div>`
        }else {
            analysis.innerHTML = `<div class="border container p-4">
                    <h4 class="text-success text-center mb-3">BMI Analysis</h4>
                    <p class="text-white fs-5 text-center">You are Obese .</p>
                </div>`
        }
    }
}