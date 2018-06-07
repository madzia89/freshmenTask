import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveStreet} from '../../state/secondStep'
import {connect} from "react-redux";
import {searchPolishSignsAndHyphen, snackbarFunction} from "../utils";


class StreetInput extends Component {

    state = {
        streetValue: '',
        error: '',
        type: 'street',
        classNameForCSS: ''
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        STREET
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
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
                                    (searchPolishSignsAndHyphen(this.state.streetValue)) &&
                                    (this.state.streetValue.length > 2)) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveStreet(this.state.streetValue)
                                } else if ((ifValid === true) &&
                                    (this.state.streetValue.length < 1)) {
                                    return this.setState({classNameForCSS: ''})
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'street is incorrect'
                                    }, () => {
                                        snackbarFunction(this.state.error)
                                    })
                                    this.props.saveStreet('')
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
    saveStreet: (val) => dispatch(saveStreet(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreetInput)