import {call, put} from 'redux-saga/effects';
import {startLoading, finishLoading} from "../modules/loading";


export default function createRequestSaaga(type, request){
    const SUCCESS = `${type}_SUCCESS`;
    const FAUILURE = `${type}_FAILURE`;

    return function* (action){
        yield put(startLoading(type));

        try{
            const response = yield call(request, action.payload);
            yield put({type: SUCCESS, payload: response.data});
        }
        catch(e){
            yield put({type: FAUILURE, payload: e, error: true});
        }

        yield put(finishLoading(type));
    }
}