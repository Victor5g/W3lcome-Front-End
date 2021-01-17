import {BrowserRouter, Route, Switch } from 'react-router-dom';

import SingIn from './pages/SingIn';

function Routes(){
  return(

    <BrowserRouter>
      <Switch>
       <Route path="/" exact component={SingIn}/>
       </Switch>
    </BrowserRouter>
  );
}

export default Routes;
