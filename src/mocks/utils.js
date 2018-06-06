import moment from "moment/moment";

export const fullNowDate = moment(Date.now()).format('YYYY-MM-DD')

export const arrayOfDays = []
for (let i = 1; i <= 31; i++) {
    arrayOfDays.push(i)
}

export const arrayOfMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const nowYear = moment(Date.now()).format('YYYY')

export const arrayOfYears = []
for (let i = 1900; i <= nowYear; i++) {
    arrayOfYears.push(i)
}





