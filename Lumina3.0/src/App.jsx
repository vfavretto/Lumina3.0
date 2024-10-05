import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/common/header';
import Login from './components/pages/login'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Login />
      </div>
    </Router>
  );
}

export default App;