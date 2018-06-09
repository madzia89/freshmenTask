import React, {Component} from 'react'
import moment from "moment/moment";

class thatFunc extends Component {
    // const momentAsObject = moment() //to remove when isn't needed
    // const monthNow = moment(Date.now()).format('M')
    // const nextMonth = moment(Date.now()).add(1, 'months').format('M')
    // const arrayOfAllMonths = moment()._locale._months
    // const thisMonthFoundInArrayOfMonths = arrayOfAllMonths[monthNow]
    //
    // console.log(monthNow)
    //
    // const aaa = arrayOfAllMonths.map(aMonth => {
    //     moment("2012-02", "YYYY-MM").daysInMonth()
    //     return {months: aMonth, }
    // })
    // console.log(moment({years: 2018, aaa}))
    //
    // console.log('daysInMonth ', aaa)


    render() {

        return (
            <div>
                {console.log(calendar.map(weeks => weeks.week))}
                {let calendar = []
                    for(var week = startWeek; week<endWeek;week++){
                    calendar.push({
                    week:week,
                    days:Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
                })
                }

                    calendar.map((myWeeks, i) => {
                    const mainDiv = document.getElementsByClassName('letMeSee')[0]
                    const divForWeek = document.createElement('div')
                    divForWeek.innerText = `${myWeeks.week}`

                    let daysMappedDaysToSpan = calendar[i].days.map(dayForSpan => document.createElement('span').innerText = dayForSpan)
                    daysMappedDaysToSpan = daysMappedDaysToSpan.map(day => day._d)
                    const numbersOfMoonthDaysDividedOnWeeks = daysMappedDaysToSpan.map(element => {
                    return document.createElement('span').innerText = moment(element).format('D')
                })
                    // divForWeek.appendChild(numbersOfMoonthDaysDividedOnWeeks)
                    mainDiv.appendChild(divForWeek)
                    // divForWeek.appendChild(numbersOfMoonthDaysDividedOnWeeks[i])

                    console.log('var ', numbersOfMoonthDaysDividedOnWeeks)

                })}
            </div>
        )
    }
}