import React, {Component} from 'react'
import _is from 'is_js'
import {saveHomeNumber} from '../../state/secondStep'
import {connect} from "react-redux";


class HomeNumberInput extends Component {

    state = {
        homeNumberValue: '',
        error: 'number is incorrect',
        type: 'number',
        classNameForCSS: ''
    }

    render() {
        return (
            <div>
                <h2>Type your home number</h2>
                <input
                    className={`${this.state.classNameForCSS}`}
                    value={this.state.homeNumberValue}
                    onChange={(event) => {
                        this.setState({homeNumberValue: event.target.value})
                    }}
                    onBlur={() => {
                        const homeNumberToNumber = this.state.homeNumberValue * 1
                        const ifValid = _is[this.state.type](homeNumberToNumber)
                        if ((ifValid === true) &&
                            (homeNumberToNumber !== '') &&
                            (homeNumberToNumber > 0)) {
                            this.setState({
                                classNameForCSS: 'valid'
                            })
                            this.props.saveHomeNumber(homeNumberToNumber)
                        } else {
                            this.setState({
                                classNameForCSS: 'invalid'
                            })
                            this.props.saveHomeNumber('')

                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveHomeNumber: (val) => dispatch(saveHomeNumber(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNumberInput)