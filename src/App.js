//redux
import { Provider } from 'react-redux';
import store from './store'
import AppRouter from './routes/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>

  );
}

export default App;
