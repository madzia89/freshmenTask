import React, {Component} from 'react'
import moment from "moment/moment";
import {connect} from "react-redux";
import {saveBDay} from "../state/firstStep";


class ThatCal extends Component {
    state = {
        thisMoment: moment(),
        startWeek: moment().startOf('month').week(),
        endWeek: moment().endOf('month').week(),
        calendar: []
    }

    componentDidMount() {
        this.updateCalendar()
    }

    updateCalendar = () => {
        let calendar = []
        for (var week = this.state.startWeek; week <= this.state.endWeek; week++) {
            calendar.push({
                week: week,
                days: Array(7).fill(0)
                    .map((n, i) => moment()
                        .week(week).startOf('week')
                        .clone()
                        .add(n + i, 'day'))
            })
        }
        this.setState({calendar})
    }


    onPrevClick = () => {
        this.setState({thisMoment: this.state.thisMoment.subtract(1, 'month')},
            () => {
                this.setState({
                        startWeek: this.state.thisMoment.startOf('month').week(),
                        endWeek: this.state.thisMoment.endOf('month').week()
                    },
                    () => {
                        this.updateCalendar()
                    })
            })
    }

    onNextClick = () => {
        this.setState({thisMoment: this.state.thisMoment.add(1, 'month')},
            () => {
                this.setState({
                        startWeek: this.state.thisMoment.startOf('month').week(),
                        endWeek: this.state.thisMoment.endOf('month').week()
                    },
                    () => {
                        this.updateCalendar()
                    })
            })
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
                        <th colSpan={8} style={{textAlign: 'center'}}>{this.state.thisMoment.format('Y')}
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
                        <th colSpan={6} style={{textAlign: 'center'}}>{this.state.thisMoment.format('MMMM')}</th>
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
                    {this.state.calendar.map((week, i) => {
                        return (<tr key={i}>
                            <td style={{color: 'grey'}}>{week.week}</td>
                            {this.state.calendar[i].days.map(day => day._d).map((element, ii) => {
                                return (<td key={ii}
                                            onClick={() => {
                                                this.props.saveBDay(element)
                                                this.hideCalendar()
                                            }}
                                            className={'squareForDayInCalendarTable'}
                                >
                                    {moment(element).format('D')}
                                </td>)
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
