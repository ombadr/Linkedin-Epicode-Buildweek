import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProfileRightBar from './components/ProfileRightBar';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <div>
      <Provider store={store}>
        <ProfileRightBar />
      </Provider>
    </div>
  );
}

export default App;
