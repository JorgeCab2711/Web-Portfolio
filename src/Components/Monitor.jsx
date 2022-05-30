import React from 'react';
import Screen from './Screen'
import '../Styles/monitor.scss';

export default function Monitor(){
    return (
        <div className="monitor-container">
            <div className="monitor">
                <div className="innerMonitor">
                    <Screen/>
                </div>
                <div className="arm"/>
                <div className="stand"/>
            </div>
        </div>
    );
}