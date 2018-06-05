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
        alert('well done!')
        return false
    }
    showTab(currentTab)
}

export const validateForm = () => {
    let arrayOfTabs, inputs, i, valid = true
    arrayOfTabs = document.getElementsByClassName("tab")
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


export const fixStepIndicator = (n) => {
    let i, x = document.getElementsByClassName("step")
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "")
    }
    x[n].className += " active"
}