import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {savePhoneNumber} from '../../state/firstStep'
import {connect} from "react-redux";

class PhoneInput extends Component {

    state = {
        phoneValue: '',
        error: '',
        type: 'number',
        classNameForCSS: ''
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        type your phone number
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
                        <input
                            className={`${this.state.classNameForCSS}`}
                            value={this.state.phoneValue}
                            onChange={(event) => {
                                this.setState({phoneValue: event.target.value})
                            }}
                            onBlur={() => {
                                const numberToState = this.state.phoneValue.split(' ').join('')


                                const ifValid = _is[this.state.type](numberToState * 1)
                                if ((ifValid === true) &&
                                    (ifValid !== 0) &&
                                    (numberToState.length >= 9)
                                ) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        phoneValue: numberToState,
                                        error: ''
                                    })
                                    this.props.savePhoneNumber(numberToState)
                                } else if ((ifValid === true) &&
                                    (this.state.nameValue !== '')) {
                                    return
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'phone number must consist of at least 9 numbers eg. XXX XXX XXX'
                                    })
                                    this.props.savePhoneNumber('')
                                }
                            }}
                        />
                    </Row>
                    <Row center="xs">
                        <p className={'errors'}>{this.state.error}</p>
                    </Row>
                </Grid>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    savePhoneNumber: (val) => dispatch(savePhoneNumber(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PhoneInput)
