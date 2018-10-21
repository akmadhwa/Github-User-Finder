import React from 'react';

const Input = props => {
    return (
        <div className="field">
            <div className="control">
                <input type="text" className="input" name="username" placeholder="Insert Username"/>
            </div>
        </div>
    )
}

export default Input;