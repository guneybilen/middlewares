export default function ({ dispatch }) {
  return next => action => {
    // console.log(action);
    // This is where we can place code that will happen
    // every single time an action creator returns an action
    // in the application.

    // If the action does not have payload
    // or, the payload does not have a .then property
    // we don't care about it, send it on.
    if (!action.payload || !action.payload.then) {
      // next() means send the action to the next middleware in the
      // chain. If there are no more middleware, the action will
      // go to the reducers.
      return next(action);  // if you don't let the action to other middleware, 
      // it will just sit here.
    }

    // when the .then() is reached the action is resolved.
    // then receives response from the promise.
    action.payload.then(function (response) {
      //  create a new Action with the old type
      // replace the promise with the response data.
      // console.log('action in middwr', action.type);
      const newAction = { ...action, payload: response }
      // console.log('newAction', newAction);
      //  only typing the following gives errors in ESLINT.
      // { ...action, payload: response }
      //  but when wrapped by the dispatch function
      // ESLint did not give any errors.
      // dispatch({ ...action, payload: response })

      // dispatch function means send the newAction to the beginning of
      // its travel by sending the action to the beginning of the midleware list
      dispatch(newAction);
    });
  }
}

/* In ES5 
export default function ({ dispatch }) {
  return function(next){
    return function(action) {
      console.log(action);

      next(action);
    }
  }
} 
*/
