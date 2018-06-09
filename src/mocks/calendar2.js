import React, {Component} from 'react'
import moment from "moment/moment";

export const thatCal = () => {
    const startWeek = moment().startOf('month').week();
    const endWeek = moment().endOf('month').week();
    let calendar = []
    for (var week = startWeek; week < endWeek; week++) {
        calendar.push({
            week: week,
            days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
        })
    }

    const weeksToArray = calendar.map((myWeeks, i) => {
        const mainDiv = document.getElementsByClassName('letMeSee')[0]
        const divForWeek = document.createElement('div')
        divForWeek.innerText = `${myWeeks.week}`
        const thisIndex = i
        mainDiv.appendChild(divForWeek)

        let fullDaysInArrayOfWeeks = calendar[i].days.map(day => day._d)
        const numbersOfMonthDaysDividedOnWeeks = fullDaysInArrayOfWeeks.map(element => {
            const theSpan = document.createElement('span')
            theSpan.innerText = ` ${moment(element).format('D')} `
            mainDiv.childNodes[i].appendChild(theSpan)

        })
        console.log(numbersOfMonthDaysDividedOnWeeks)
    })
}

