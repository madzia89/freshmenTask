import React, {Component} from 'react'
import _is from 'is_js'
import {saveEmail} from '../../state/firstStep'
import {connect} from "react-redux";


class EmailInput extends Component {

    state = {
        emailValue: '',
        isEmailValid: false,
        error: 'email is incorrect',
        type: 'email',
        className: ''
    }

    render() {
        return (
            <div>
                <h2>type your email</h2>
                <input
                    className={`${this.state.className}`}
                    value={this.state.emailValue}
                    onChange={(event) => {
                        this.setState({emailValue: event.target.value})
                    }}
                    onBlur={() => {
                        const ifValid = _is[this.state.type](this.state.emailValue)
                        if (ifValid === true) {
                            this.setState({
                                isEmailValid: true,
                                className: 'valid'
                            })
                            this.props.saveEmail(this.state.emailValue)
                        } else {
                            this.setState({
                                isEmailValid: false,
                                className: 'invalid'
                            })
                            this.props.saveEmail('')

                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveEmail: (val) => dispatch(saveEmail(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailInput)