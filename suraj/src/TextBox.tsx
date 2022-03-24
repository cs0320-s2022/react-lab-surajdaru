import React from 'react';
import logo from './logo.svg';
import './App.css';

function TextBox(props: any) {

    function handler(event: any): void {
        props.change(event.target.value)
    }

    // @ts-ignore
    return (
        <div className="TextBox">
            <header className={'TextBox-header'}>
                    {props.label}
                    <input type={"text"} onChange={event => props.change(event.target.value)}/>
            </header>
        </div>
    );
}

export default TextBox;