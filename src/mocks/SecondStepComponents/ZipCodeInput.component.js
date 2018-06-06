import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import {saveZipCode} from '../../state/secondStep'
import {connect} from "react-redux";


class ZipCodeInput extends Component {

    state = {
        zipCodeValue: '',
        isZipCodeValid: false,
        error: '',
        type: 'zip code',
        classNameForCSS: ''
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        Type your zip code
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
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
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveZipCode(this.state.zipCodeValue)
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'zip code is incorrect, eg. XX-XXX'
                                    })
                                    this.props.saveZipCode('')
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
    saveZipCode: (val) => dispatch(saveZipCode(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ZipCodeInput)