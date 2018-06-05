import React, {Component} from 'react'
import _is from 'is_js'
import {savePhoneNumber} from '../../state/firstStep'
import {connect} from "react-redux";

class PhoneInput extends Component {

    state = {
        phoneValue: '',
        isPhoneValid: false,
        error: 'phone number is incorrect',
        type: 'number',
        classNameForCSS: ''
    }

    render() {
        return (
            <div>
                <h2>type your phone number</h2>
                <input
                    className={`${this.state.classNameForCSS}`}
                    value={this.state.phoneValue}
                    onChange={(event) => {
                        this.setState({phoneValue: event.target.value})
                    }}
                    onBlur={() => {
                        const numberToState = this.state.phoneValue.replace(/ /g, "")
                        const ifValid = _is[this.state.type](numberToState * 1)
                        if ((ifValid === true) &&
                            (ifValid !== 0) &&
                            (numberToState.length >= 9)
                        ) {
                            this.setState({
                                isPhoneValid: true,
                                classNameForCSS: 'valid',
                                phoneValue: numberToState * 1
                            })
                            this.props.savePhoneNumber(numberToState * 1)
                        } else {
                            this.setState({
                                isPhoneValid: false,
                                classNameForCSS: 'invalid'
                            })
                            this.props.savePhoneNumber('')
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
