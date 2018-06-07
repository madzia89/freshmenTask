import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveCity} from '../../state/secondStep'
import {connect} from "react-redux";
import {searchPolishSignsAndHyphen, snackbarFunction} from "../utils";


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
                        CITY
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
                                    (searchPolishSignsAndHyphen(this.state.cityValue)) &&
                                    (this.state.cityValue !== '') &&
                                    (this.state.cityValue.length > 2)) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveCity(this.state.cityValue)
                                } else if ((ifValid === true) &&
                                    (this.state.cityValue.length < 1)) {
                                    return this.setState({classNameForCSS: ''})
                                }
                                else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'city is incorrect'
                                    }, () => {
                                        snackbarFunction(this.state.error)
                                    })
                                    this.props.saveCity('')

                                }
                            }}
                        />
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