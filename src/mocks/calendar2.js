import React, {Component} from 'react'
import moment from "moment/min/moment-with-locales";
import {range} from 'lodash'
import {connect} from "react-redux";
import {saveBDay} from "../state/firstStep";

moment.locale('pl-PL')


class ThatCal extends Component {
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
        let howManyDays = endRange.diff(startRange, 'days') + 1

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

    render() {
        return (
            <div className={'tableForCalendar'}>
                <table>
                    <thead>
                    <tr>
                        <th style={{textAlign: 'center'}}>
                            <button
                                onClick={this.onPrevYearClick}
                            >
                                prev
                            </button>
                        </th>
                        <th colSpan={5} style={{textAlign: 'center'}}>{this.state.thisMoment.format('Y')}
                        </th>
                        <th style={{textAlign: 'center'}}>
                            <button
                                onClick={this.onNextYearClick}
                            >
                                next
                            </button>
                        </th>
                    </tr>
                    <tr>
                        <th style={{textAlign: 'center'}}>
                            <button
                                onClick={this.onPrevClick}
                            >
                                prev
                            </button>
                        </th>
                        <th colSpan={5} style={{textAlign: 'center'}}>{this.state.thisMoment.format('MMMM')}</th>
                        <th style={{textAlign: 'center'}}>
                            <button
                                onClick={this.onNextClick}
                            >
                                next
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
                                if (ii === 6) {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.props.saveBDay(myDay)
                                                    this.hideCalendar()
                                                }}
                                                className={'squareForDayInCalendarTable holiday'}
                                    >
                                        {mappedDay}
                                    </td>)
                                }
                                if (myDay === moment().format('DD-MM-YYYY')) {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.props.saveBDay(myDay)
                                                    this.hideCalendar()
                                                }}
                                                className={'squareForDayInCalendarTable todaysDate'}
                                    >
                                        {mappedDay}
                                    </td>)
                                } else if ((myDay !== moment().format('DD-MM-YYYY')) &&
                                    (myDayNotFormatted >= startMonth) &&
                                    (myDayNotFormatted < endMonth)) {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.props.saveBDay(myDay)
                                                    this.hideCalendar()
                                                }}
                                                className={'squareForDayInCalendarTable'}
                                    >
                                        {mappedDay}
                                    </td>)
                                } else {
                                    return (<td key={ii}
                                                onClick={() => {
                                                    this.props.saveBDay(myDay)
                                                    this.hideCalendar()
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
)(ThatCal)
