import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveEmail} from '../../state/firstStep'
import {connect} from "react-redux"


class EmailInput extends Component {

    state = {
        emailValue: '',
        error: '',
        type: 'email',
        classNameForCSS: ''
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        type your email
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
                        <input
                            className={`${this.state.classNameForCSS}`}
                            value={this.state.emailValue}
                            onChange={(event) => {
                                this.setState({emailValue: event.target.value})
                            }}
                            onBlur={() => {
                                const ifValid = _is[this.state.type](this.state.emailValue)
                                if ((ifValid === true) &&
                                    (this.state.emailValue !== undefined)) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveEmail(this.state.emailValue)
                                } else if (this.state.emailValue === '') {
                                    return
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'email is incorrect'
                                    })
                                    this.props.saveEmail('')
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
    saveEmail: (val) => dispatch(saveEmail(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmailInput)