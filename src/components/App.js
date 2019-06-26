import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Header from './Header';
import SearchPage from '../pages/SearchPage';

const AboutPage = () => <h2>About Page</h2>;
const Page = () => <h2>Page</h2>;
const PageNotFound = () => <h2>Page not found 404</h2>;


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={SearchPage} />
        <Route path='/about' component={AboutPage}/>
        <Route path='/page' component={Page} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
