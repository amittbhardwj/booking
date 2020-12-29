import SignUp from './components/SignUp';
import Email from './components/Email';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
      <Route path='/signup' component={SignUp} exact/>  
      <Route path='/email' component={Email} exact/>          
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;
