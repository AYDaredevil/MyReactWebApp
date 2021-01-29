import { actionTypes } from 'react-redux-form';
import {DISHES} from '../shared/dishes';
import * as ActionTypes from './ActionTypes';


export const Dishes = (state = {
    isLoading : false,
    errMess : null,
    dishes : []
    }, action) => {
    switch(action.type){
        case ActionTypes.DISHES_LOADING:
            return {...state, isLoading:true, errMess : null, dishes :[]};
        case ActionTypes.DISHES_FAILED:
            return {...state, isLoading:false, errMess : action.payload, dishes :[]};
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading:false, errMess : null, dishes :action.payload};
        default:
            return state;
    }
}