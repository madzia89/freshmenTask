import React from 'react'
import {nameField} from '../state/firstStep'
import {connect} from 'react-redux'


const NameInput = (props) => (
    <div>
        <input
            name={"nameInput"}
            value={props.temporaryNameField}
            placeholder={'type your name'}
            onChange={(event) => props.nameField(event.target.value)}
        />
    </div>
)
const mapStateToProps = state => ({
    temporaryNameField: state.firstStep.temporaryNameField
})

const mapDispatchToProps = dispatch => ({
    nameField: (nameValue) => dispatch(nameField(nameValue))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameInput)