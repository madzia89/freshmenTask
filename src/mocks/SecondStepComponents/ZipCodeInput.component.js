import React, {Component} from 'react'
import {saveZipCode} from '../../state/secondStep'
import {connect} from "react-redux";


class ZipCodeInput extends Component {

    state = {
        zipCodeValue: '',
        isZipCodeValid: false,
        error: 'zip code is incorrect',
        type: 'zip code',
        classNameForCSS: ''
    }

    render() {
        return (
            <div>
                <h2>Type your zip code</h2>
                <input
                    className={`${this.state.classNameForCSS}`}
                    value={this.state.zipCodeValue}
                    onChange={(event) => {
                        this.setState({zipCodeValue: event.target.value})
                    }}
                    onBlur={() => {
                        const zipCodeRegExp = new RegExp(/\d{2}-\d{3}/)
                        if ((zipCodeRegExp.test(this.state.zipCodeValue)) &&
                            (this.state.zipCodeValue !== '') &&
                            this.state.zipCodeValue.length === 6
                        ) {
                            this.setState({
                                classNameForCSS: 'valid'
                            })
                            this.props.saveZipCode(this.state.zipCodeValue)
                        } else {
                            this.setState({
                                classNameForCSS: 'invalid'
                            })
                            this.props.saveZipCode('')

                        }
                    }}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveZipCode: (val) => dispatch(saveZipCode(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ZipCodeInput)