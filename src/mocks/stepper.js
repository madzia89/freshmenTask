import {snackbarFunction} from '../../src/mocks/utils'

export let currentTab = 0;

export const showTab = (currentTab) => {
    const arrayOfTabs = document.getElementsByClassName("tab")
    arrayOfTabs[currentTab].style.display = "block"
    if (currentTab === 0) {
        document.getElementById("prevBtn").style.display = "none"
    } else {
        document.getElementById("prevBtn").style.display = "inline"
    }
    if (currentTab === (arrayOfTabs.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Confirm"
    } else {
        document.getElementById("nextBtn").innerHTML = "Next"
    }

    fixStepIndicator(currentTab)
}

export const nextPrev = (n) => {
    const arrayOfTabs = document.getElementsByClassName("tab")
    if (n === 1 && !validateForm()) {
        snackbarFunction('all fields are required')
        return false
    }
    arrayOfTabs[currentTab].style.display = "none"
    currentTab = currentTab + n
    if (currentTab === arrayOfTabs.length) {
        alert('well done!')
        document.getElementById("nextBtn").style.display = "none"
        document.getElementById("prevBtn").style.display = "none"
        return false
    }
    showTab(currentTab)
}

export const validateForm = () => {
    let arrayOfTabs, inputs, i, valid = true
    arrayOfTabs = document.getElementsByClassName("tabForValid")
    inputs = arrayOfTabs[currentTab].getElementsByTagName("input")
    for (i = 0; i < inputs.length; i++) {
        if ((inputs[i].className === "") || (inputs[i].className === "invalid")) {
            valid = false
        }
    }
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish"
    }
    return valid


}


export const fixStepIndicator = (currentTab) => {
    let currentStep, arrayOfSteps = document.getElementsByClassName("step")
    for (currentStep = 0; currentStep < arrayOfSteps.length; currentStep++) {
        arrayOfSteps[currentStep].className = arrayOfSteps[currentStep].className.replace(" active", "")
    }
    arrayOfSteps[currentTab].className += " active"
}