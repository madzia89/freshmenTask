import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveBDay} from '../../state/firstStep'
import {connect} from "react-redux"
import {snackbarFunction, fullNowDate} from '../utils'


class BirthDayInput extends Component {

    state = {
        birthDayValue: '',
        error: '',
        type: 'date',
        classNameForCSS: '',
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
                        <input
                            type={'date'}
                            max={fullNowDate}
                            className={`${this.state.classNameForCSS}`}
                            value={this.state.birthDayValue}
                            onChange={(event) => {
                                this.setState({birthDayValue: event.target.value})
                            }}
                            onBlur={() => {
                                const ifValid = _is[this.state.type](this.state.birthDayValue)
                                if (this.state.birthDayValue.length === 10) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveBDay(this.state.birthDayValue)
                                } else if (this.state.birthDayValue === '') {
                                    this.setState({classNameForCSS: ''})
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'date of birth is incorrect'
                                    }, () => {
                                        snackbarFunction(this.state.error)
                                    })
                                    this.props.saveBDay('')
                                }
                            }}
                        />
                    </Row>
                </Grid>
            </Grid>

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
)(BirthDayInput)