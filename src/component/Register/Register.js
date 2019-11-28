import React from 'react';

const Register = ({ onRouteChange }) => {
    return (
        <div>
            <article class="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-4 center">
                <form className="measure" >
                    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                        <legend className="f2 fw6 ph0 mh0">Register</legend>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">Name</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                        </div>
                        <div className="mt3">
                            <label className="db fw6 lh-copy f6">E-mail</label>
                            <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" />
                        </div>
                        <div className="mv3">
                            <label className="db fw6 lh-copy f6">Password</label>
                            <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" id="password" />
                        </div>
                    </fieldset>
                    <div className="">
                        <input
                            onClick={() => onRouteChange('home')}
                            className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                            type="submit"
                            value="Submit"
                        />
                    </div>
                </form>
            </article>
        </div>
    );
}

export default Register;
