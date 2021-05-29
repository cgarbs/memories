import React, { Component } from 'react';

class Home extends Component {

    state = {};

    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                This is the home page!
                <p>(A timeline based on user's memories will be displayed here with option to change to calendar view)</p>
                <p>(User can also upload and mark a new memory based on a start and end date)</p>
                <form onSubmit={this.handleSubmit} >
                    <input onChange={(e) => this.setState({ memory: e.target.value })} name="memory" type="text" placeholder="Select Start Date" />
                    <input onChange={(e) => this.setState({ memory: e.target.value })} name="memory" type="text" placeholder="Select End Date" />
                    {/* <input onChange={(e) => this.setState({ messages: e.target.value })} name="messages" type="text" placeholder="Welcome Message" /> */}
                    <button> Create Memory </button>
                </form>
            </div>
        );
    }
}

export default Home;