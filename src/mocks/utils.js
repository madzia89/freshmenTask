import moment from "moment/moment";

export const fullNowDate = moment(Date.now()).format('YYYY-MM-DD')

export const arrayOfDays = []
for (let i = 1; i <= 31; i++) {
    arrayOfDays.push(i)
}

export const polishSignsAndHyphen = new RegExp(/[^a-zA-Z-ąĄćĆęĘłŁóÓśŚżŻźŹ]+/)
export const searchPolishSignsAndHyphen = (temporaryNameState) => {
    return temporaryNameState.search(polishSignsAndHyphen) === -1
}

export const snackbarFunction = (propser) => {
    const theSnackBar = document.getElementById("snackbar")
    theSnackBar.innerText = `${propser}`
    theSnackBar.className += " show";
    setTimeout(() => {
        theSnackBar.className = theSnackBar.className.replace(" show", "");
    }, 3000);
}


export const thatFunc = () => {
    const momentAsObject = moment() //to remove when isn't needed
    const monthNow = moment(Date.now()).format('M')
    const nextMonth = moment(Date.now()).add(1, 'months').format('M')
    const arrayOfAllMonths = moment()._locale._months
    const thisMonthFoundInArrayOfMonths = arrayOfAllMonths[monthNow]

    console.log(monthNow, nextMonth)

}

