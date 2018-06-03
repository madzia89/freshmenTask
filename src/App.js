import React, {Component} from 'react'
import FirstStep from './Components/FirstStep'

class App extends Component {

    componentDidMount() {
        document.getElementById('firstStepSubmitButton').disabled = true
    }

    render() {
        return (
            <div>
                <FirstStep/>
            </div>
        )
    }
}

export default App
