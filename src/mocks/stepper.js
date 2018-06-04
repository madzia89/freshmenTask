import {store} from '../store'

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
    const firstStepName = store.getState().firstStep.names
    const firstStepEmail = store.getState().firstStep.email
    const firstStepPhone = store.getState().firstStep.phoneNumber
    if ((firstStepName !== '') && (firstStepEmail !== '') && (firstStepPhone !== '')) {
        return document.getElementsByClassName("step")[currentTab].className += " finish"
    }
    else if (firstStepName === '') {
        return alert('fill your name')
    }
    else if (firstStepEmail === '') {
        return alert('fill your email')
    }
    else if (firstStepPhone === '') {
        return alert('fill your phone number')
    }
}


export const fixStepIndicator = (n) => {
    let i, x = document.getElementsByClassName("step")
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "")
    }
    x[n].className += " active"
}