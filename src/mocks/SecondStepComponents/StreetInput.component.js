import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveStreet} from '../../state/secondStep'
import {connect} from "react-redux";


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
                        Type your street
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
                                    (this.state.streetValue.length > 2)) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveStreet(this.state.streetValue)
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'street is incorrect'
                                    })
                                    this.props.saveStreet('')
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
    saveStreet: (val) => dispatch(saveStreet(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(StreetInput)