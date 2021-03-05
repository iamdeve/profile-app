import React, { Component } from 'react';
import ReactPlayer from 'react-player';

class Vedio extends Component {
    state = {}
    render() {
        return (
            <>
                <div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=9pfqy4IrYVU' />
                </div>
            </>
        );
    }
}

export default Vedio;