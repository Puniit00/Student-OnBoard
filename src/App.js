import logo from './logo.svg';
import './App.css';
import StudentList from './components/StudentList';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import View from './components/View';
import OnBoard from './components/OnBoard';
import Edit from './components/Edit'
import { Login } from './components/Login';
import LoginFrom from './components/LoginForm'


function App() {
  function check(){
    if(localStorage.getItem('name')==''){
      <BrowserRouter>
      <Login>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginFrom}/>
          <Redirect from="/" to="/login"/>
        </Switch>
      </div>
      </Login>
      </BrowserRouter>
    }
  
    else{
      <BrowserRouter>
      <Login>
      <div className="App">
        <Switch>
          <Route path="/login" component={LoginFrom}/>
          <Route path = "/student" component={StudentList}/>
          <Route path="/view/:studentid" component={View}/>
          <Route path="/onboard" component={OnBoard}/>
          <Route path="/edit/:studentid" component={Edit}/>
          <Redirect from="/" to="/login"/>
        </Switch>
      </div>
      </Login>
      </BrowserRouter>
    }
  }
  return (
    <BrowserRouter>
    <Login>
    <div className="App">
      <Switch>
        <Route path="/login" component={LoginFrom}/>
        <Route path = "/student" component={StudentList}/>
        <Route path="/view/:studentid" component={View}/>
        <Route path="/onboard" component={OnBoard}/>
        <Route path="/edit/:studentid" component={Edit}/>
        <Redirect from="/" to="/login"/>
      </Switch>
    </div>
    </Login>
    </BrowserRouter>

    // <div>
    // <BrowserRouter>
    //   <Login>
    //   <div className="App">
    //     <Switch>
    //       <Route path="/login" component={LoginFrom}/>
    //       <Redirect from="/" to="/login"/>
    //     </Switch>
    //   </div>
    //   </Login>
    //   {check()}
    //   </BrowserRouter>
      
    //</div>
  );
}

export default App;
