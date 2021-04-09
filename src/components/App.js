import React, {Component} from 'react';
import '../App.css';
import '../style.css';
import News from './News'
import Counter from '../Counter'
import Footer from '../Footer'

class App extends Component {

    render() {

        return (
            <div>
                <Counter/>
                <Footer/>
            </div>
        );
    }
}

export default App;





