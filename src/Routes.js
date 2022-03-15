import React, { Component } from 'react';
import { Route,BrowserRouter } from 'react-router-dom';
import DogDetails from './DogDetails';
import DogList from './DogList';
import { Switch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';


class Routes extends Component{
    render(){
        const getDog = props =>{
            let name = props.match.params.name;
            let currentDog = this.props.dogs.find(dog=> dog.name.toLowerCase() === name.toLowerCase());
            return <DogDetails {...props} dog={currentDog} />
          }
        return(
                <Switch>
                    <Route exact path='/dogs' render={()=><DogList dogs={this.props.dogs} />}></Route>
                    <Route exact path='/dogs/:name' render={getDog}></Route>
                    <Redirect to='/dogs' />
                </Switch>
        );
    }
}

export default Routes;