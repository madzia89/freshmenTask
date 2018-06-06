import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
import _is from 'is_js'
import {saveName} from '../../state/firstStep'
import {connect} from "react-redux";

class NameInput extends Component {

    state = {
        nameValue: '',
        error: '',
        type: 'string',
        classNameForCSS: '',
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        type your name
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
                        <input
                            className={`${this.state.classNameForCSS}`}
                            value={this.state.nameValue}
                            onChange={(event) => {
                                this.setState({nameValue: event.target.value})
                            }}
                            onBlur={() => {
                                const ifValid = _is[this.state.type](this.state.nameValue)
                                if ((ifValid === true) &&
                                    (this.state.nameValue !== '') &&
                                    (this.state.nameValue.length > 2)
                                ) {
                                    this.setState({
                                        classNameForCSS: 'valid',
                                        error: ''
                                    })
                                    this.props.saveName(this.state.nameValue)
                                } else if ((ifValid === true) &&
                                    (this.state.nameValue.length < 1)) {
                                    return
                                } else {
                                    this.setState({
                                        classNameForCSS: 'invalid',
                                        error: 'name is incorrect'
                                    })
                                    this.props.saveName('')
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
    saveName: (val) => dispatch(saveName(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameInput)

