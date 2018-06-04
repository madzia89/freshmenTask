import React, {Component} from 'react'
import _is from 'is_js'
import {saveName} from '../state/firstStep'
import {connect} from "react-redux";

class NameInput extends Component {

    state = {
        nameValue: '',
        isNameValid: false,
        error: 'name is incorrect',
        type: 'string',
        className: ''
    }

    render() {
        return (
            <div>
                <h2>type your name</h2>
                <input
                    className={`${this.state.className}`}
                    value={this.state.nameValue}
                    onChange={(event) => {
                        this.setState({nameValue: event.target.value})
                    }}
                    onBlur={() => {
                        const ifValid = _is[this.state.type](this.state.nameValue)
                        if ((ifValid === true) && (this.state.nameValue !== '')) {
                            this.setState({
                                isNameValid: true,
                                className: 'valid'
                            })
                            this.props.saveName(this.state.nameValue)
                        } else {
                            this.setState({
                                isNameValid: false,
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
    saveName: (val) => dispatch(saveName(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameInput)

