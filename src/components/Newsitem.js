import React, {Component} from 'react';
import '../Newsitem.css'
class Newsitem extends Component {
    render() {
        const {title,description} = this.props;
        return (
            <div>
                <h1 className="title">React Js</h1>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, harum.</p>
            </div>
        );
    }
}

export default Newsitem;