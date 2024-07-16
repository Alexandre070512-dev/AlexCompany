import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
    return (
    <Router>
        <NavBar />
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/login" component={Login} />
        </Switch>
        </Router>
        
    );
}

export default App;