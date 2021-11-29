import React from "react";
import { io } from "socket.io-client";
import { serverBaseUrl, serverPort } from "./config";

export function Messages() {
    window.onload = function(){
        const socket = io(`${serverBaseUrl}:${serverPort}`)
        socket.on('message', text => {
    
            const el = document.createElement('li');
            el.innerHTML = text;
            document.querySelector('ul').appendChild(el)
    
        });
    
        document.querySelector('button').onclick = () => {
    
            const text = document.querySelector('input').value;
            socket.emit('message', text)
    
        }
    }

    return (
        <div>
            <ul></ul>
            <input placeholder="message" />
            <button>Send</button>
        </div>
    )
}
