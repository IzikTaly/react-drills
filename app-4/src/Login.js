import React , {Component} from 'react';

class Login extends Component {
    constructor(){
        super();

        this.state = {
            userNameInput: '',
            passWordInput: '',

        };

        this.alertClick = this.alertClick.bind( this );

    }

    userNameChange(val){
        this.setState({ userNameInput: val })
    }

    passWordChange(val){
        this.setState({ passWordInput: val })
    }

    alertClick(){
        alert(`Username: ${this.state.userNameInput} Password: ${this.state.passWordInput}`);
    }

    render() {
        return(
            <div>
                <input onChange ={(e) => this.userNameChange(e.target.value)} type='text' />

                <input onChange ={(e) => this.passWordChange(e.target.value)} type='text' />

                <button onClick={ this.alertClick }>Login</button>
            </div>
        );
    }
}

export default Login 