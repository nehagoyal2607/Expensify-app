import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import AppRouter , {history} from './routers/AppRouter.js';
import configureStore from './store/configureStore';
import {startSetExpenses} from './actions/expenses';
import {login , logout} from './actions/auth';
import getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import {firebase} from './firebase/firebase';
import { render } from 'enzyme';


const store = configureStore();
// store.dispatch(addExpense({description:"Water bill", amount:4500}));
// store.dispatch(addExpense({description:"Rent", amount:109500}));
// store.dispatch(addExpense({description:"Gas bill", createdAt:100}));
// store.dispatch(setTextFilter('gas'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

// const state = store.getState();
// const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

// console.log(visibleExpenses);

const jsx  = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
let hasRendered = false;
const renderApp = () => {
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'));
        hasRendered = true;
    }
}

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        // console.log("Log in");
        store.dispatch(login(user.uid));
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp();
            if(history.location.pathname === '/'){
                history.push('/dashboard');
            }
        })
    }else{
        // console.log("Log out");
        store.dispatch(logout());
        renderApp();
        history.push('/');
    }
});