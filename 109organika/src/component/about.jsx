import React, { Component } from "react";

class About extends Component{
    state = {
        infoVisible: false,
    };

    render() {
        return (
            <div className="about-page">
                <div className="jumbotron">
                <h1 className="display-4">My Name is M.A.</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information</p>
                <hr className="my-4"/>
                <div className="lead">
                
                {this.getPersonalInfo()}
    
                <button 
                    onClick={this.handleButtonClick} className="btn btn-primary btn-lg">
                        Learn more
                </button>
                </div>
                </div>
            </div>
        );
    }
    getPersonalInfo = () => {
        if ( this.state.infoVisible) {
            return (
                <div>
                    <label>Email: myworkmh@sdgku.sdu</label>
                <label>Phone: 323 333 4444</label>
                </div>
            );
        } else {
            return <label>Click the button to get more info</label>;
        }
        
    };


    handleButtonClick = () => {
        console.log("more info...");
        this.setState({infoVisible: true});
    };

}


export default About;