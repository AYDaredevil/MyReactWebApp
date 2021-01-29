import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addComment = (comment) => ({
    type : ActionTypes.ADD_COMMENT,
    payload : comment
});
export const postComment = (dishId, rating, author, comment) => (dispatch) => {
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    console.log(newComment);
    return fetch(baseUrl + '/comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
 }

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
        .then(response => {
            if(response.ok)
            {
                return response;
            }
            else{
                var error = new Error("Error :" + response.status + ":" + response.message)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errormess = new Error(error.message);
            throw errormess;
        })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(error => dispatch(dishesFailed(error.message)));
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
        .then(response => {
            if(response.ok)
            {
                return response;
            }
            else{
                var error = new Error("Error :" + response.status + ":" + response.message)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errormess = new Error(error.message);
            throw errormess;
        })
       .then(response => response.json())
       .then(comments => dispatch(addComments(comments)))
       .catch(error => dispatch(commentsFailed(error.message)));
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
        .then(response => {
            if(response.ok)
            {
                return response;
            }
            else{
                var error = new Error("Error :" + response.status + ":" + response.message)
                error.response = response;
                throw error;
            }
        },
        error => {
            var errormess = new Error(error.message);
            throw errormess;
        })
       .then(response => response.json())
       .then(promos => dispatch(addPromos(promos)))
       .catch(error => dispatch(promosFailed(error.message)));
}