import './App.css';
import { Link, Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pricing from './pages/Pricing';
import CaseStudies from './pages/CaseStudies';
import CaseStudiesInner from './pages/CaseStudiesInner';



function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' component={Home} exact/>
        <Route path='/pricing' component={Pricing} />
        <Route path='/case-studies' component={CaseStudies} />
        <Route path='/case-studies-inner' component={CaseStudiesInner} />
      </Switch>
    </div>
  );
}

export default App;
