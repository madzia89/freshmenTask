import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import {saveBDay} from '../../state/firstStep'
import {connect} from "react-redux"
import ThatCal from "../calendar2"
import {snackbarFunction} from "../utils";
import _is from "is_js";

class BirthDayInput extends Component {

    state = {
        birthDayValue: '',
        error: '',
        type: 'date',
        classNameForCSS: '',
    }

    showCalendar = () => {
        const tableWithCalendar = document.getElementsByClassName('tableForCalendar')
        tableWithCalendar[0].style.display = 'block'
    }


    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        DATE OF BIRTH
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
                        <ThatCal/>
                        <input
                            className={`${this.state.classNameForCSS}`}
                            onFocus={() => {
                                this.showCalendar()
                            }}
                            value={this.props.bDay}
                            onBlur={() => {
                                if (this.props.bDay !== '') {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                }
                                else if ((this.props.bDay === '') ||
                                    (this.props.bDay === 'Invalid date')) {
                                    return this.setState({classNameForCSS: ''})
                                }
                                else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'date is incorrect'
                                    }, () => {
                                        snackbarFunction(this.state.error)
                                    })
                                    this.props.saveBDay('')

                                }
                            }
                            }
                        >
                        </input>
                    </Row>
                    <div className={'letMeSee'}>
                    </div>
                </Grid>
            </Grid>

        )
    }
}

const mapStateToProps = state => ({
    bDay: state.firstStep.bDay
})

const mapDispatchToProps = dispatch => ({
    saveBDay: (val) => dispatch(saveBDay(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BirthDayInput)