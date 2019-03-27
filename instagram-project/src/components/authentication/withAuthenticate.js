import React from 'react';

const withAuthenticate = ProtectedComponent => LoginComponent => class extends React.Component {
    constructor() {
        super()
        this.state = {
            'loggedIn': false, 
            'username': null
        }
    }

    login = event => {
        event.preventDefault()
        const username = event.target.username.value
        const password = event.target.password.value
        
        if (username !== "" && password !== "") {
            localStorage.setItem('login', JSON.stringify({'loggedIn': true, 'username': username}))
            
            this.setState({'loggedIn': true, 'username': username})
        }
    }
    
    componentDidMount() {
        this.setState(
         JSON.parse(localStorage.getItem('login'))
        )
    }

    logout = () => {
        localStorage.setItem('login', JSON.stringify({'loggedIn': false, 'username': ''}))

        this.setState({'loggedIn': false, 'username': ''})
    }

    render() {
        if(this.state.loggedIn) {
            return (
                <ProtectedComponent logout={this.logout} />
            )
        }
        return <LoginComponent submit={this.login} login={this.login} />
    }
}

export default withAuthenticate;