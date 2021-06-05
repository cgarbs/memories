import React, { Component } from 'react';

class Memories extends Component {

    state = {
        memoriesList: []
    }

    getMemories = () => {
        // pull memories from backend via api actions
        // assign memories to react state
    }

    displayMemories = () => {
        // memories will be displayed via the state in calendar or timeline format (on a date basis)
        // must be display some visual element and link to view/edit the memory
        // link will direct to new page (not render)
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