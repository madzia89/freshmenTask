import moment from "moment/moment";

export const nowDate = moment(Date.now()).format('YYYY-MM-DD')
export const polishSignsAndHyphen = new RegExp(/[^a-zA-Z-ąĄćĆęĘłŁóÓśŚżŻźŹ]+/)
export const ifBlankSpaces = (array) => array.filter(e => e === ' ')

export const searchPolishSignsAndHyphen = (temporaryNameState) => temporaryNameState.search(polishSignsAndHyphen) === -1

export const hyphenIsNotLast = (array) => array[array.length - 1] !== '-'


