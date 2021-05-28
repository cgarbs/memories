import React, { Component } from 'react';

class Home extends Component {

    state = {};

    handleSubmit = () => {

    }

    render() {
        return (
            <div>
                This is the home page!

                <form onSubmit={this.handleSubmit} >
                    <input onChange={(e) => this.setState({ memory: e.target.value })} name="memory" type="text" placeholder="When?" />
                    {/* <input onChange={(e) => this.setState({ messages: e.target.value })} name="messages" type="text" placeholder="Welcome Message" /> */}
                    <button> Create Server </button>
                </form>
            </div>
        );
    }
}

export default Home;