import React, {Component} from 'react'
import _is from 'is_js'
import {saveCity} from '../../state/secondStep'
import {connect} from "react-redux";


class CityInput extends Component {

    state = {
        cityValue: '',
        isCityValid: false,
        error: 'city is incorrect',
        type: 'city',
        classNameForCSS: ''
    }

    render() {
        return (
            <div>
                <h2>Type your city</h2>
                <input
                    className={`${this.state.classNameForCSS}`}
                    value={this.state.cityValue}
                    onChange={(event) => {
                        this.setState({cityValue: event.target.value})
                    }}
                    onBlur={() => {
                        const ifValid = _is.string(this.state.cityValue)
                        if ((ifValid === true) &&
                            (this.state.cityValue !== '') &&
                            (this.state.cityValue.length > 2)) {
                            this.setState({
                                isCityValid: true,
                                classNameForCSS: 'valid'
                            })
                            this.props.saveCity(this.state.cityValue)
                        } else {
                            this.setState({
                                isCityValid: false,
                                classNameForCSS: 'invalid'
                            })
                            this.props.saveCity('')

                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveCity: (val) => dispatch(saveCity(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityInput)