import React from 'react';
import './variables.css';
import './styles.css';
import Header from './Header';

export default function Mypage() {
    // Sample data - 실제로는 props나 API에서 받아올 것
    const participationTime = 240; // minutes
    const participationNumber = 30;
    const userName = 'USER';
    
    const historyEvents = [
        { id: 0, name: 'Event name', date: '05/24/2025' },
        { id: 1, name: 'Event name', date: '05/24/2025' },
        { id: 2, name: 'Event name', date: '05/24/2025' },
        { id: 3, name: 'Event name', date: '05/24/2025' },
        { id: 4, name: 'Event name', date: '05/24/2025' },
        { id: 5, name: 'Event name', date: '05/24/2025' },
        { id: 6, name: 'Event name', date: '05/24/2025' },
    ];

    return (
        <div className="mypage-page">
            <Header />
            <div className="mypage-container">
                {/* Top Section - Fixed */}
                <div className="mypage-top-section">
                    <h1 className="mypage-greeting">HI! {userName}</h1>
                    <div className="mypage-volunteer-header">
                        <h2 className="mypage-volunteer-title">VOLUNTEER</h2>
                        <div className="mypage-arrow"></div>
                    </div>
                </div>
                
                {/* Top Lines */}
                <div className="line line-top-1"></div>
                <div className="line line-top-2"></div>

                {/* Left Section - User Info */}
                <div className="mypage-left-section">
                    {/* Participation Time */}
                    <div className="mypage-section">
                        <div className="mypage-record-text">PARTICIPATION TIME</div>
                        <div className="mypage-record">
                            <span className="mypage-time-value">{participationTime}</span>
                            <span className="mypage-time-unit">hr</span>
                        </div>
                    </div>

                    {/* Participation Number */}
                    <div className="mypage-section">
                        <div className="mypage-record-text">PARTICIPATION NUMBER</div>
                        <div className="mypage-record">
                            <span className="mypage-number-value">{participationNumber}</span>
                            <span className="mypage-time-text">time</span>
                        </div>
                    </div>
                </div>
                
                {/* Right Section - History */}
                <div className="mypage-right-section">
                    <div className="mypage-history-box">
                        <h2 className="mypage-history-title">HISTORY</h2>
                        <div className="mypage-history-header">
                            <span className="mypage-history-header-item">EVENT</span>
                            <span className="mypage-history-header-item">DATE</span>
                        </div>
                        
                        <div className="mypage-history-list">
                            {historyEvents.map((event, index) => (
                                <div 
                                    key={event.id} 
                                    className={`mypage-history-item ${index % 2 === 0 ? 'mypage-history-item-light' : 'mypage-history-item-dark'}`}
                                >
                                    <span className="mypage-history-event-name">{event.name}</span>
                                    <span className="mypage-history-event-date">{event.date}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Bottom Lines */}
                <div className="line line-bottom-1"></div>
                <div className="line line-bottom-2"></div>
            </div>
        </div>
    );
}
