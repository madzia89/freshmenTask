import React, {Component} from 'react'
import _is from 'is_js'
import {saveStreet} from '../../state/secondStep'
import {connect} from "react-redux";


class StreetInput extends Component {

    state = {
        streetValue: '',
        isStreetValid: false,
        error: 'address is incorrect',
        type: 'street',
        classNameForCSS: ''
    }

    render() {
        return (
            <div>
                <h2>Type your street</h2>
                <input
                    className={`${this.state.classNameForCSS}`}
                    value={this.state.streetValue}
                    onChange={(event) => {
                        this.setState({streetValue: event.target.value})
                    }}
                    onBlur={() => {
                        const ifValid = _is.string(this.state.streetValue)
                        if ((ifValid === true) &&
                            (this.state.streetValue !== '') &&
                            (this.state.streetValue.length > 2)) {
                            this.setState({
                                isStreetValid: true,
                                classNameForCSS: 'valid'
                            })
                            this.props.saveStreet(this.state.streetValue)
                        } else {
                            this.setState({
                                isStreetValid: false,
                                classNameForCSS: 'invalid'
                            })
                            this.props.saveStreet('')

                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveStreet: (val) => dispatch(saveStreet(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreetInput)