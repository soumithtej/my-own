import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from '../src/Components/Header';
import crud from '../src/Components/crud';
import textAlert from '../src/Components/textAlert';
import tableWithAlert from '../src/Components/tableWithAlert';
//import ListUsers from './Components/ListUsers';

const Router=()=>
{
    return(
        <BrowserRouter>
            
            <Route exact path="/" component={crud}/>
            <Route path="/text" component={textAlert}/>
            <Route path="/tablewithalert" component={tableWithAlert}/>
            
        </BrowserRouter>
    )
}

export default Router;