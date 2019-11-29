import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: '',
            password: '',
            name: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value });
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value });
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value });
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                name: this.state.name
            })
        })
            .then(res => res.json())
            .then(user => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
    }

    render() {
        return (
            <div>
                <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center">
                    <div className="measure" >
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f2 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">Name</label>
                                <input
                                    onChange={this.onNameChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                />
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6">E-mail</label>
                                <input
                                    onChange={this.onEmailChange}
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                />
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6">Password</label>
                                <input
                                    onChange={this.onPasswordChange}
                                    className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                                    type="password"
                                    name="password"
                                    id="password"
                                />
                            </div>
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit"
                                value="Submit"
                            />
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default Register;
