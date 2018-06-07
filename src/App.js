import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-flexbox-grid'

import EmailInput from "./mocks/FirstStepComponents/EmailInput.component";
import NameInput from "./mocks/FirstStepComponents/NameInput.component";
import PhoneInput from "./mocks/FirstStepComponents/PhoneInput.component";
import BirthDaylInput from "./mocks/FirstStepComponents/BirthDaylInput.component";

import CityInput from "./mocks/SecondStepComponents/CityInput.component";
import StreetInput from "./mocks/SecondStepComponents/StreetInput.component";
import HomeNumberInput from "./mocks/SecondStepComponents/HomeNumberInput.component";
import ZipCode from "./mocks/SecondStepComponents/ZipCodeInput.component";

import ConfirmComponent from "./mocks/ConfirmStep/Confirm.component";
import {showTab, currentTab, nextPrev} from './mocks/stepper'

import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        showTab(currentTab)
    }

    render() {
        return (
            <Grid className={'mainConatiner'}>
                <Row className={'containerForMainHeading'}>
                    <Col xs>
                        <h1 className={'formHeading'}>DA FORM</h1>
                    </Col>
                </Row>
                <Grid className={'containerForInputs tabForValid tab'}>
                    <div className={''}>
                        <Row>
                            <NameInput/>
                        </Row>
                        <Row>
                            <EmailInput/>
                        </Row>
                        <Row>
                            <PhoneInput/>
                        </Row>
                        <Row>
                            <BirthDaylInput/>
                        </Row>
                    </div>
                </Grid>
                <Grid className={'containerForInputs tabForValid tab'}>
                    <div>
                        <Row>
                            <StreetInput/>
                        </Row>
                        <Row>
                            <HomeNumberInput/>
                        </Row>
                        <Row>
                            <ZipCode/>
                        </Row>
                        <Row>
                            <CityInput/>
                        </Row>
                    </div>
                </Grid>
                <Grid className={'containerForInputs tabForValid tab'}>
                    <div>
                        <ConfirmComponent/>
                    </div>
                </Grid>
                <Grid>
                    <div
                        style={{overflow: 'auto'}}>
                        <div
                            style={{float: 'right'}}>
                            <button
                                className={'nextPrevButton'}
                                type="button"
                                id="prevBtn"
                                onClick={() => nextPrev(-1)}
                            >
                                <span className={'spanForButtons'}>
                                Previous
                            </span>
                            </button>
                            <button
                                className={'nextPrevButton'}
                                type="button"
                                id="nextBtn"
                                onClick={() => nextPrev(1)}
                            >
                                <span className={'spanForButtons'}>
                                Next
                            </span>
                            </button>
                        </div>

                    </div>
                </Grid>
                <Grid>
                    <div style={{textAlign: 'center', marginTop: '40px'}}>
                        <span className={"step"}></span>
                        <span className={"step"}></span>
                        <span className={"step"}></span>
                    </div>
                </Grid>
                <span id={"snackbar"}></span>

            </Grid>

        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
