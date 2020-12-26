import {createStore} from 'redux';

console.log("redux");
//action-generators
const incrementCount = ({incrementBy = 1}={}) => ({
    type:'INCREMENT',
    // incrementBy : typeof incrementBy==='number'?incrementBy:1
    incrementBy
});
const decrementCount = ({decrementBy = 1}={}) => ({
    type:'DECREMENT',
    decrementBy
});
const setCount = ({count = 0}={}) => ({
    type: 'SET',
    count
})
const resetCount = () => ({
    type: 'RESET'
})
//Reducers
const countReducer = (state={count:0}, action)=>{
    switch(action.type){
        case 'INCREMENT':
            // incrementBy = typeof action.incrementBy==='number'?action.incrementBy:1;
            return{
                count:state.count+action.incrementBy
            };
        case 'DECREMENT':
            // const decrementBy = typeof action.decrementBy==='number'?action.decrementBy:1;
            return{
                count:state.count-action.decrementBy
            };
        case 'SET':
            return{
                count:action.count
            }
        case 'RESET':
            return{
                count:0
            };
        default:
            return state;
    }
}

const store = createStore(countReducer);
store.subscribe(()=>{
    console.log(store.getState());
})


// store.dispatch({
//     type:'INCREMENT',
//     incrementBy:5
// });
store.dispatch(incrementCount({incrementBy:6}));
// store.dispatch({
//     type:'INCREMENT'
// });
store.dispatch(incrementCount());
// store.dispatch({
//     type:'RESET'
// });
store.dispatch(resetCount());
// store.dispatch({
//     type:'DECREMENT',
//     decrementBy:10
// });
store.dispatch(decrementCount({decrementBy:20}));
// store.dispatch({
//     type:'SET',
//     count:101
// });
store.dispatch(setCount({count:201}));