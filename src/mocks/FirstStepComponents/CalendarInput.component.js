import React, {Component} from 'react'
import moment from "moment/min/moment-with-locales";
import {range} from 'lodash'
import {connect} from "react-redux";
import {saveBDay} from "../../state/firstStep";
import {snackbarFunction} from '../utils'

moment.locale('pl-PL')


class CalendarInput extends Component {
    state = {
        thisMoment: moment(),
        weeks: []
    }

    componentDidMount() {
        let _now = moment()
        this.calculateMonthRange(_now)
    }

    calculateMonthRange = (_moment) => {

        let startMonth = _moment.clone().startOf('month')
        let endMonth = _moment.clone().endOf('month')

        let startRange = startMonth.clone().startOf('week')
        let endRange = endMonth.clone().endOf('week')

        let howManyWeeks = endRange.diff(startRange, 'weeks') + 1

        const weeks = range(0, howManyWeeks).map((week, k) => {
            const _newWeek = range(0, 7);
            return _newWeek.map((day, _k) => {
                return startRange.clone().add((k * 7 + _k), 'd')
            })
        })
        return this.setState({weeks, startMonth, endMonth})
    }

    onPrevClick = () => {
        let newNow = this.state.thisMoment.subtract(1, 'months')
        this.calculateMonthRange(newNow)
        this.setState({thisMoment: newNow})
    }

    onPrevYearClick = () => {
        let newNow = this.state.thisMoment.subtract(1, 'years')
        this.calculateMonthRange(newNow)
        this.setState({thisMoment: newNow})
    }

    onNextClick = () => {
        let newNow = this.state.thisMoment.add(1, 'months')
        this.calculateMonthRange(newNow)
        this.setState({thisMoment: newNow})
    }

    onNextYearClick = () => {
        let newNow = this.state.thisMoment.add(1, 'years')
        this.calculateMonthRange(newNow)
        this.setState({thisMoment: newNow})
    }

    hideCalendar = () => {
        const tableWithCalendar = document.getElementsByClassName('tableForCalendar')
        tableWithCalendar[0].style.display = 'none'
    }

    checkIfDateIsntInTheFuture = (clickedDay) => {
        if (clickedDay < moment()) {
            this.props.saveBDay(clickedDay.format('DD-MM-YYYY'))
            this.hideCalendar()
        }
        else snackbarFunction('date cannot be in the future')
    }

    render() {
        return (
            <div className={'tableForCalendar'}>
                <table>
                    <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>
                            <button
                                className={'calendarButton'}
                                id={'prevYearCalendarButton'}
                                onClick={this.onPrevYearClick}
                            >
                            </button>
                        </th>
                        <th
                            colSpan={5} style={{textAlign: 'center'}}
                            className={'calendarYearHeading'}
                        >{this.state.thisMoment.format('Y')}
                        </th>
                        <th style={{textAlign: 'center'}}>
                            <button
                                className={'calendarButton'}
                                id={'nextYearCalendarButton'}
                                onClick={this.onNextYearClick}
                            >
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'center'}}>
                            <button
                                className={'calendarButton'}
                                id={'prevMonthCalendarButton'}
                                onClick={this.onPrevClick}
                            >
                            </button>
                        </th>
                        <th
                            className={'calendarMonthHeading'}
                            colSpan={5} style={{textAlign: 'center'}}
                        >{this.state.thisMoment.format('MMMM')}</th>
                        <th style={{textAlign: 'center'}}>
                            <button
                                className={'calendarButton'}
                                id={'nextMonthCalendarButton'}
                                onClick={this.onNextClick}
                            >
                            </button>
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.weeks.map((week, i) => {
                        return (<tr key={i}>
                            {this.state.weeks[i].map((myDayNotFormatted, ii) => {
                                const myDay = myDayNotFormatted.format('DD-MM-YYYY')
                                const mappedDay = myDay.slice(0, 2)
                                const endMonth = this.state.endMonth
                                const startMonth = this.state.startMonth
                                const daysInTheCurrentMonth = (myDayNotFormatted >= startMonth) &&
                                    (myDayNotFormatted < endMonth)
                                if ((ii === 6) && daysInTheCurrentMonth) {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.checkIfDateIsntInTheFuture(myDayNotFormatted)
                                                }}
                                                className={'squareForDayInCalendarTable holiday'}
                                    >
                                        {mappedDay}
                                    </td>)
                                }
                                if (myDay === moment().format('DD-MM-YYYY')) {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.checkIfDateIsntInTheFuture(myDayNotFormatted)
                                                }}
                                                className={'squareForDayInCalendarTable todaysDate'}
                                    >
                                        {mappedDay}
                                    </td>)
                                } else if ((myDay !== moment().format('DD-MM-YYYY')) &&
                                    daysInTheCurrentMonth) {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.checkIfDateIsntInTheFuture(myDayNotFormatted)
                                                }}
                                                className={'squareForDayInCalendarTable'}
                                    >
                                        {mappedDay}
                                    </td>)
                                } else {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.checkIfDateIsntInTheFuture(myDayNotFormatted)
                                                }}
                                                className={'squareForDayInCalendarTable afterEndMonth'}
                                    >
                                        {mappedDay}
                                    </td>)
                                }
                            })}
                        </tr>)
                    })}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveBDay: (val) => dispatch(saveBDay(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CalendarInput)
