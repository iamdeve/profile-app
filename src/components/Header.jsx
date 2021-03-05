import React, { Component } from 'react';
import pic from "../Images/pic.jpg"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                name: "Lorpas Ipsum",
                date_of_birth: "Lorpas Ipsum",
                citizenship: "Lorpas Ipsum"
            },
        };
    }

    render() {
        let { user } = this.state;
        return (
            <>
                <div className="d-flex  flex-row justify-content-between w-100 mt-5  mb-5 " >
                    <div className="d-flex ml-3">
                        <div className="flex-column mt-3">
                            <div>
                                <h5 className="display"> Name:</h5>
                                <p className="display header-data">{user.name}</p>
                            </div>
                            <div >
                                <h5 className="display">Date Of Birth:</h5>
                                <p className="display header-data">{user.date_of_birth}</p>
                            </div>
                            <div >
                                <h5 className="display"> Citizenship:</h5>
                                <p className="display header-data" >{user.citizenship}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img className="profileimage" src={pic} alt="profilepic" />
                    </div>
                </div>
            </>
        );
    }
}

export default Header;

