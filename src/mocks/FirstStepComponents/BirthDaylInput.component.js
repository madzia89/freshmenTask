import React, {Component} from 'react'
import {Grid, Row} from 'react-flexbox-grid'
// import _is from 'is_js'
import {saveBDay} from '../../state/firstStep'
import {connect} from "react-redux"
import {thatFunc} from '../utils'

class BirthDayInput extends Component {

    state = {
        birthDayValue: '',
        error: '',
        type: 'date',
        classNameForCSS: '',
    }

    render() {
        return (
            <Grid>
                <Row center="xs">
                    <h3 className={'headings'}>
                        DATE OF BIRTH
                    </h3>
                </Row>
                <Grid>
                    <Row center="xs">
                        {thatFunc()}
                        <input id={'calendarInput'}>
                        </input>

                    </Row>
                </Grid>
            </Grid>

        )
    }
}

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
    saveBDay: (val) => dispatch(saveBDay(val))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BirthDayInput)