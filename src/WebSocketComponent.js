// WebSocketComponent.js
import React, { useEffect, useState } from 'react';

const WebSocketComponent = () => {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        const socket = new WebSocket('ws://192.168.1.76:3030');

        socket.onopen = () => {
            console.log('Connected to WebSocket server');
        };

        socket.onmessage = (event) => {
            setLogs(prevLogs => [...prevLogs, event.data]);
        };

        socket.onclose = () => {
            console.log('Disconnected from WebSocket server');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error', error);
        };

        // Clean up the WebSocket connection when the component is unmounted
        return () => {
            socket.close();
        };
    }, []);

    return (
        <div>
            <h1>Realtime Logs</h1>
            <ul>
                {logs.map((log, index) => (
                    <li key={index}>{log}</li>
                ))}
            </ul>
        </div>
    );
};

export default WebSocketComponent;
