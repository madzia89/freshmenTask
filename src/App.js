import React, {Component} from 'react'

import EmailInput from "./mocks/FirstStepComponents/EmailInput.component";
import NameInput from "./mocks/FirstStepComponents/NameInput.component";
import PhoneInput from "./mocks/FirstStepComponents/PhoneInput.component";

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
            <div>
                <h1>aaaaaaaaaaaaaa</h1>
                <div className={'tabForValid tab'}>
                    <NameInput/>
                    <EmailInput/>
                    <PhoneInput/>
                </div>
                <div className={'tabForValid tab'}>
                    <CityInput/>
                    <StreetInput/>
                    <HomeNumberInput/>
                    <ZipCode/>
                </div>
                <div className={'tabForValid tab'}>
                    <ConfirmComponent/>
                </div>
                < div
                    style={{overflow: 'auto'}}>
                    < div
                        style={{float: 'right'}}>
                        <button
                            type="button"
                            id="prevBtn"
                            onClick={() => nextPrev(-1)}
                        >
                            Previous
                        </button>
                        <button
                            type="button"
                            id="nextBtn"
                            onClick={() => nextPrev(1)}
                        >
                            Next
                        </button>
                    </div>
                </div>

                <div style={{textAlign: 'center', marginTop: '40px'}}>
                    <span className={"step"}></span>
                    <span className={"step"}></span>
                    <span className={"step"}></span>
                </div>
            </div>

        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
