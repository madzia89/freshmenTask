import React, {Component} from 'react'
import _is from 'is_js'
import {saveName} from '../../state/firstStep'
import {connect} from "react-redux";

class NameInput extends Component {

    state = {
        nameValue: '',
        error: 'name is incorrect',
        type: 'string',
        classNameForCSS: ''
    }

    render() {
        return (
            <div>
                <h2>type your name</h2>
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
                                classNameForCSS: 'valid'
                            })
                            this.props.saveName(this.state.nameValue)
                        } else {
                            this.setState({
                                classNameForCSS: 'invalid'
                            })
                            this.props.saveName('')
                        }
                    }}
                />
            </div>
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

