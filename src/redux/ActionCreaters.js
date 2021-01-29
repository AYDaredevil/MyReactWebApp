import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

 export const addComment = (dishId, rating, author, comment) => ({
     type : ActionTypes.ADD_COMMENT,
     payload : {
         dishId : dishId,
         rating : rating,
         author :  author,
         comment : comment
     }
 });

 // Dishes
 export const addDishes = (dishes) => ({
     type : ActionTypes.ADD_DISHES,
     payload : dishes
 });

 export const dishesLoading = () => ({
    type : ActionTypes.DISHES_LOADING
 });

 export const dishesFailed = () => ({
     type : ActionTypes.DISHES_FAILED
 });

 export const fetchDishes = () => (dispatch) => {
     dispatch(dishesLoading(true));

     fetch(baseUrl + '/dishes')
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)));
 }

// Comments
export const addComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
});

export const commentsFailed = () => ({
    type : ActionTypes.COMMENTS_FAILED
});

export const fetchComments = () => (dispatch) => {

    fetch(baseUrl + '/comments')
       .then(response => response.json())
       .then(comments => dispatch(addComments(comments)));
}

//Promos
export const addPromos = (promos) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promos
});

export const promosLoading = () => ({
   type : ActionTypes.PROMOS_LOADING
});

export const promosFailed = () => ({
    type : ActionTypes.PROMOS_FAILED
});

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading(true));

    fetch(baseUrl + '/promotions')
       .then(response => response.json())
       .then(promos => dispatch(addPromos(promos)));
}