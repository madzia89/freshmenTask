import {connect} from "react-redux"

export let currentTab = 0;

export const showTab = (n) => {
    const x = document.getElementsByClassName("tab")
    x[n].style.display = "block"
    if (n === 0) {
        document.getElementById("prevBtn").style.display = "none"
    } else {
        document.getElementById("prevBtn").style.display = "inline"
    }
    if (n === (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Submit"
    } else {
        document.getElementById("nextBtn").innerHTML = "Next"
    }
    fixStepIndicator(n)
}

export const nextPrev = (n) => {
    const x = document.getElementsByClassName("tab")
    if (n === 1 && !validateForm()) return false
    x[currentTab].style.display = "none"
    currentTab = currentTab + n
    if (currentTab >= x.length) {
        document.getElementById("regForm").submit()
        return false
    }
    showTab(currentTab)
}

export const validateForm = () => {
    // const firstStepName = connect.NameInput.nameValue
    // const firstStepEmail = firstStep.email
    // const firstStepPhone = firstStep.state.phoneNumber
    // if ((firstStepName !== '') && (firstStepEmail !== '') && (firstStepPhone !== '')) {
    //     return document.getElementsByClassName("step")[currentTab].className += " finish"
    // }
    console.log(firstStepName)
}


export const fixStepIndicator = (n) => {
    let i, x = document.getElementsByClassName("step")
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "")
    }
    x[n].className += " active"
}