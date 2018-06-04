import React, {Component} from 'react'
import EmailInput from "./mocks/EmailInput.component";
import NameInput from "./mocks/NameInput.component";
import PhoneInput from "./mocks/PhoneInput.component";
import {showTab, currentTab, nextPrev} from './mocks/stepper'

import {connect} from "react-redux";

class App extends Component {

    componentDidMount() {
        // document.getElementById('firstStepSubmitButton').disabled = true
        showTab(currentTab) // Display the current tab

    }

    render() {

        return (
            <div>
                <div className={'tab'}>
                    <NameInput/>
                    <EmailInput/>
                    <PhoneInput/>
                </div>
                <div className={'tab'}>
                    <span>something something</span>
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
