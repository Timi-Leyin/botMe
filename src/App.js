
import './App.css';
import './components/bootstrap.css'
import Index from './components/main'
import Case from './components/case'
import Auth from './components/auth'
import Main_page from './components/parent'
import Bot from './components/bot'
import Err from './components/err'
import Doctor from './components/doctor'
import Share from './components/share'
import More from './components/more'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
/* "start": "react-scripts start",*/
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Index}/>
          <Route exact path="/bot" component={Bot}/>
          <Route exact path="/auth" component={Auth}/>
          <Route exact path="/case" component={Case}/>
          <Route exact path="/doctor" component={Doctor}/>
          <Route exact path="/parent" component={Main_page}/>
          <Route exact path="/more" component={More}/>
          <Route exact path="/share" component={Share}/>
          <Route component={Err}/>
        </Switch>
      </Router>
      {/* balen means Bot and Learn  */}
    </div>
  );
}

export default App;
