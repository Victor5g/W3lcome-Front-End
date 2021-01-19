import {BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './pages/SignIn';

function Routes(){
  return(

    <BrowserRouter>
      <Switch>
       <Route path="/" exact component={SignIn}/>
       </Switch>
    </BrowserRouter>
  );
}

export default Routes;
