import React from 'react'
import {
    nameField,
    checkNameField,
    lastNameField,
    checkLastNameField,
    dateOfBirthField,
    checkDateOfBirth,
    checkFirstStepFields,
    submitFirstStep,
    saveToLocalStorage
} from '../state/firstStep'
import {connect} from 'react-redux'
import {nowDate} from './utils'

const FirstStep = (props) => (
    <div>
        <form id={'nameForm'}>
            <div>
                <input
                    id={"nameInput"}
                    value={props.temporaryNameField}
                    placeholder={'type your name'}
                    onChange={(event) => props.nameField(event.target.value)}
                    onBlur={() => {
                        props.checkNameField()
                        props.checkFirstStepFields()
                    }}
                />
            </div>
            <div>
                <input
                    id={"lastNameInput"}
                    value={props.temporaryLastNameField}
                    placeholder={'type your last name'}
                    onChange={(event) => props.lastNameField(event.target.value)}
                    onBlur={() => {
                        props.checkLastNameField()
                        props.checkFirstStepFields()
                    }}
                />
            </div>
            <div>
                <input
                    id={"dateOfBirthInput"}
                    type={'date'}
                    value={props.temporaryDateOfBirth}
                    placeholder={'click to pick a date'}
                    onChange={(event) => props.dateOfBirthField(event.target.value)}
                    onBlur={() => {
                        props.checkDateOfBirth()
                        props.checkFirstStepFields()
                    }}
                    max={nowDate}
                />
            </div>

        </form>
        <button
            id={'firstStepSubmitButton'}
            type={'button'}
            onClick={() => {
                props.submitFirstStep()
                props.saveToLocalStorage()
            }}
        >
            Next
        </button>
    </div>
)
const mapStateToProps = state => ({
    temporaryNameField: state.firstStep.temporaryNameField,
    temporaryLastNameField: state.firstStep.temporaryLastNameField,
    temporaryDateOfBirth: state.firstStep.temporaryDateOfBirth,
})

const mapDispatchToProps = dispatch => ({
    nameField: (nameValue) => dispatch(nameField(nameValue)),
    lastNameField: (lastNameValue) => dispatch(lastNameField(lastNameValue)),
    dateOfBirthField: (dateValue) => dispatch(dateOfBirthField(dateValue)),
    checkNameField: () => dispatch(checkNameField()),
    checkLastNameField: () => dispatch(checkLastNameField()),
    checkDateOfBirth: () => dispatch(checkDateOfBirth()),
    checkFirstStepFields: () => dispatch(checkFirstStepFields()),
    submitFirstStep: () => dispatch(submitFirstStep()),
    saveToLocalStorage: () => dispatch(saveToLocalStorage()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FirstStep)