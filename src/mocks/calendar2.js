import React, {Component} from 'react'
import moment from "moment/moment";

class ThatCal extends Component {
    state = {
        startWeek: moment().startOf('month').week(),
        endWeek: moment().endOf('month').week(),
        calendar: []
    }

    componentDidMount() {
        // const startWeek = moment().startOf('month').week();
        // const endWeek = moment().endOf('month').week();
        let calendar = []
        for (var week = this.state.startWeek; week <= this.state.endWeek; week++) {
            calendar.push({
                week: week,
                days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
            })
        }
        this.setState({calendar})
        console.log(calendar)
        // const mainDiv = document.getElementsByClassName('letMeSee')[0]
        //
        // const weeksToArray = calendar.map((myWeeks, i) => {
        //     const divForWeek = document.createElement('div')
        //     divForWeek.innerText = `${myWeeks.week}`
        //     const thisIndex = i
        //     mainDiv.appendChild(divForWeek)
        //
        //     let fullDaysInArrayOfWeeks = calendar[i].days.map(day => day._d)
        //     const numbersOfMonthDaysDividedOnWeeks = fullDaysInArrayOfWeeks.map(element => {
        //         const theSpan = document.createElement('span')
        //         theSpan.innerText = ` ${moment(element).format('D')} `
        //         mainDiv.childNodes[i].appendChild(theSpan)
        //     })
        // })

    }

    render() {
        return (
            <div>
                <table className={'tableForCalendar>'}>
                    <thead>
                    <tr>
                        <th colSpan={8} style={{textAlign: 'center'}}>{moment().format('MMMM')}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.calendar.map((week, i) => {
                        return (<tr key={i}>
                            <td>{week.week}</td>
                            {this.state.calendar[i].days.map(day => day._d).map((element, ii) => {
                                return (<td key={ii}>{moment(element).format('D')}</td>)
                            })}
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default ThatCal