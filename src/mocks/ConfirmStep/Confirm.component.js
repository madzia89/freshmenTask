import React, {Component} from 'react'
import {connect} from "react-redux";


const ConfirmComponent = (props) => (

    <div>
        <h1>Summary</h1>
        <table>
            <tbody>
            <tr>
                <td>name</td>
                <td>{props.firstStepData.names}</td>
            </tr>
            <tr>
                <td>email</td>
                <td>{props.firstStepData.email}</td>
            </tr>
            <tr>
                <td>phone number</td>
                <td>{props.firstStepData.phoneNumber}</td>
            </tr>
            <tr>
                <td>city</td>
                <td>{props.secondStepData.city}</td>
            </tr>
            <tr>
                <td>street</td>
                <td>{props.secondStepData.street}</td>
            </tr>
            <tr>
                <td>number</td>
                <td>{props.secondStepData.homeNumber}</td>
            </tr>
            <tr>
                <td>zip code</td>
                <td>{props.secondStepData.zipCode}</td>
            </tr>
            </tbody>
        </table>
    </div>


)

const mapStateToProps = state => ({
    firstStepData: state.firstStep,
    secondStepData: state.secondStep,
})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ConfirmComponent)

