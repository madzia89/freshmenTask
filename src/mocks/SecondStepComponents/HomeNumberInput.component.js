import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveHomeNumber} from '../../state/secondStep'
import {connect} from "react-redux";


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
                        Type your home number
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
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'number is incorrect'
                                    })
                                    this.props.saveHomeNumber('')

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
    saveHomeNumber: (val) => dispatch(saveHomeNumber(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeNumberInput)