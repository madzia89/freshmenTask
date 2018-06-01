import React from 'react'
import {nameField, checkNameField} from '../state/firstStep'
import {connect} from 'react-redux'


const NameInput = (props) => (
    <div>
        <input
            id={"nameInput"}
            value={props.temporaryNameField}
            placeholder={'type your name'}
            onChange={(event) => props.nameField(event.target.value)}
            onBlur={() => props.checkNameField()}
        />
    </div>
)
const mapStateToProps = state => ({
    temporaryNameField: state.firstStep.temporaryNameField
})

const mapDispatchToProps = dispatch => ({
    nameField: (nameValue) => dispatch(nameField(nameValue)),
    checkNameField: () => dispatch(checkNameField())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NameInput)