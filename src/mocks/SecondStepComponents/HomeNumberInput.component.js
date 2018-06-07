import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveHomeNumber} from '../../state/secondStep'
import {connect} from "react-redux";
import {snackbarFunction} from "../utils";


class HomeNumberInput extends Component {

    state = {
        homeNumberValue: '',
        error: '',
        type: 'string',
        classNameForCSS: ''
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        HOME
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
                        <input
                            className={`${this.state.classNameForCSS}`}
                            value={this.state.homeNumberValue}
                            onChange={(event) => {
                                this.setState({homeNumberValue: event.target.value})
                            }}
                            onBlur={() => {
                                const ifValid = _is[this.state.type](this.state.homeNumberValue)
                                if ((ifValid === true) &&
                                    (this.state.homeNumberValue !== '') &&
                                    (this.state.homeNumberValue.length >= 1)) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveHomeNumber(this.state.homeNumberValue)
                                } else if ((ifValid === true) &&
                                    (this.state.homeNumberValue.length < 1)) {
                                    return this.setState({classNameForCSS: ''})
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'number is incorrect'
                                    }, () => {
                                        snackbarFunction(this.state.error)
                                    })
                                    this.props.saveHomeNumber('')
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
    saveHomeNumber: (val) => dispatch(saveHomeNumber(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNumberInput)