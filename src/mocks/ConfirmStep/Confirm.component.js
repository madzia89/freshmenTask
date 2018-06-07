import React from 'react'
import {connect} from "react-redux"
import {Grid, Row} from 'react-flexbox-grid'

const ConfirmComponent = (props) => (

    <Grid>
        <Row center="xs">
            <h1 className={'summaryHeading'}>Summary</h1>
        </Row>
        <Row center="xs">
            <table>
                <tbody>
                <tr>
                    <td className={'summaryRow'}>name</td>
                    <td>{props.firstStepData.names}</td>
                </tr>
                <tr>
                    <td className={'summaryRow'}>email</td>
                    <td>{props.firstStepData.email}</td>
                </tr>
                <tr>
                    <td className={'summaryRow'}>phone</td>
                    <td>{props.firstStepData.phoneNumber}</td>
                </tr>
                <tr>
                    <td className={'summaryRow'}>city</td>
                    <td>{props.secondStepData.city}</td>
                </tr>
                <tr>
                    <td className={'summaryRow'}>street</td>
                    <td>{props.secondStepData.street}</td>
                </tr>
                <tr>
                    <td className={'summaryRow'}>number</td>
                    <td>{props.secondStepData.homeNumber}</td>
                </tr>
                <tr>
                    <td className={'summaryRow'}>zip code</td>
                    <td>{props.secondStepData.zipCode}</td>
                </tr>
                </tbody>
            </table>
        </Row>
    </Grid>


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

