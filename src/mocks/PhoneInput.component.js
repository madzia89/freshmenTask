import React, {Component} from 'react'
import _is from 'is_js'
import {savePhoneNumber} from '../state/firstStep'
import {connect} from "react-redux";

class PhoneInput extends Component {

    state = {
        phoneValue: '',
        isPhoneValid: false,
        error: 'phone number is incorrect',
        type: 'number',
        className: ''
    }

    render() {
        return (
            <div>
                <h2>type your phone number</h2>
                <input
                    className={`${this.state.className}`}
                    value={this.state.phoneValue}
                    onChange={(event) => {
                        this.setState({phoneValue: event.target.value})
                    }}
                    onBlur={() => {
                        const numberToState = this.state.phoneValue.replace(/ /g, "")
                        const ifValid = _is[this.state.type](numberToState * 1)
                        if (ifValid === true) {
                            this.setState({
                                isPhoneValid: true,
                                className: 'valid',
                                phoneValue: numberToState * 1
                            })
                            this.props.savePhoneNumber(this.state.phoneValue)
                        } else {
                            this.setState({
                                isPhoneValid: false,
                                className: 'invalid'
                            })
                        }
                    }}
                />
            </div>
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
