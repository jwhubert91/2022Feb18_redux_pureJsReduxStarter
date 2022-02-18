import { createStore } from "@reduxjs/toolkit";

// 1 - Create the reducer: A function that takes in the previous state and an action, and replaces the old state with a new state. State is immutable, so it must be replaced, rather than mutated directly, hence the reducer.

// The redux reducer's "function signature" is (state, action) => newState;
function counterReducer(state = { value: 0 }, action) {
  switch (action.type) {
    case 'counter/incremented':
      return { value: state.value + 1 }
    case 'counter/decremented':
      return { value: state.value - 1 }
    case 'counter/reset':
      return { value: state.value = 0 }
    default:
      return state;
  }
};

// 2 - Create a redux store holding the state of your app
let store = createStore( counterReducer );

// 2b - You must use the subscribe() store method to update the UI in response to state changes in a pure JS application. In a React app, these changes are handled for you.
store.subscribe(()=> console.log(store.getState()));

// 3 - To change the redux state (the store) you must dispatch an action.
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/decremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/incremented' })
store.dispatch({ type: 'counter/reset' })
store.dispatch({ type: 'counter/decremented' })