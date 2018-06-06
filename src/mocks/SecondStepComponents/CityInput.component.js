import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveCity} from '../../state/secondStep'
import {connect} from "react-redux";


class CityInput extends Component {

    state = {
        cityValue: '',
        error: '',
        type: 'city',
        classNameForCSS: ''
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        Type your city
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
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
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveCity(this.state.cityValue)
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'city is incorrect'
                                    })
                                    this.props.saveCity('')

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
    saveCity: (val) => dispatch(saveCity(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CityInput)