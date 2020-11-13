import {combineReducers} from 'redux';
import {all} from 'redux-saga/effects';
import counter, {counterSaga} from './counter';
// import counter2, {counterSaga} from './counter2';
import sample, {sampleSaga} from './sample'
import loading from './loading';


const rootReducer = combineReducers({
    counter,
    // counter2,
    sample,
    loading
})

export function* rootSaga(){
    // () 적어줘야함
    yield all([counterSaga(), sampleSaga()]);
}

export default rootReducer;