import React, { Component } from 'react';

class Memories extends Component {

    state = {
        memoriesList: []
    }

    getMemories = () => {
        // pull memories from backend via api actions
    }

    render() {
        return (
            <div>
                Memories will go here!
                <p>(Memories will be pulled from database and displayed here as events/posts.)</p>
            </div>
        );
    }
}

export default Memories;