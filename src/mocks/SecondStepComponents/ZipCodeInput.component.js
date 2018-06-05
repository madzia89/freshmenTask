import React, {Component} from 'react'
import {saveZipCode} from '../../state/secondStep'
import {connect} from "react-redux";


class ZipCodeInput extends Component {

    state = {
        zipCodeValue: '',
        isZipCodeValid: false,
        error: 'zip code is incorrect',
        type: 'zip code',
        className: ''
    }

    render() {
        return (
            <div>
                <h2>Type your zip code</h2>
                <input
                    className={`${this.state.className}`}
                    value={this.state.zipCodeValue}
                    onChange={(event) => {
                        this.setState({zipCodeValue: event.target.value})
                    }}
                    onBlur={() => {
                        const zipCodeRegExp = new RegExp(/\d{2}-\d{3}/)
                        if ((zipCodeRegExp.test(this.state.zipCodeValue)) &&
                            (this.state.zipCodeValue !== '') &&
                            this.state.zipCodeValue.length === 6
                        ){
                            this.setState({
                                isZipCodeValid: true,
                                className: 'valid'
                            })
                            this.props.saveZipCode(this.state.zipCodeValue)
                        } else {
                            this.setState({
                                isZipCodeValid: false,
                                className: 'invalid'
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