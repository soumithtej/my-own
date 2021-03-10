import React,{Component} from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
//import { render } from '@testing-library/react';
import Courses from './Courses';
import Random from './Random';
import Random2 from './Random2';

const client=new ApolloClient({
  uri:"http://localhost:8201/graphql"
});

class crud extends React.Component
{
    render(){
        return(
            <ApolloProvider client={client}>
                <div>
                    <Courses />
                    <Random />
                </div>
            </ApolloProvider>
        )
    }
}

export default crud;