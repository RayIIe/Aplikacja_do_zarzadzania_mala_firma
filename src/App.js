
/*import React from 'react';*/
import {Navbar, Footer} from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
/*import Events from './pages/';*/
import Contact from './pages/Contact';
import Schedule from './pages/Schedule';
import Problems from './pages/Problems';
/*import SignUp from './pages/signup';*/

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/Home' component={Home} />
                <Route path='/About' component={About} />
                <Route path='/Problems' component={Problems} />
                <Route path='/Contact' component={Contact} />
                <Route path='/Schedule' component={Schedule} />
                {/*<Route path='/blogs' component={Blogs} />
                <Route path='/sign-up' component={SignUp} />*/}
            </Switch>
            <Footer/>
        </Router>
    );
}

export default App;