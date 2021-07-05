import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './components/Main';

import { Provider } from 'react-redux';
import store from './store'

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
