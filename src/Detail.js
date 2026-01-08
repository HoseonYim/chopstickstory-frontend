import React from 'react';
import './screens/detail.css';
import Header from './Header';
import logo from './assets/STAMP-LOGO.webp';

export default function Detail() {
    // Sample data
    const eventData = {
        date: 'MAY 26 2025',
        time: '10:00 AM - 1:00 PM',
        location: 'Simonds elementary school',
        title: 'elementary school chopstick volunteer',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at congue sem. Morbi iaculis mi euismod quam accumsan pharetra. Nulla volutpat dolor et semper laoreet. Nunc convallis, erat non pellentesque posuere, ante ante consectetur enim, et faucibus tellus nisl non massa. Praesent in libero id mi cursus malesuada. Suspendisse placerat venenatis elit vitae sodales. Praesent luctus urna eu arcu consequat ornare. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis molestie magna volutpat semper. Maecenas vitae sem finibus nisl ultricies cursus. Curabitur et fringilla sapien. Mauris id fringilla ex. Vestibulum non posuere sem, ac bibendum libero. Aenean ornare ut urna id finibus. Mauris sapien tortor, suscipit sit amet tincidunt et, convallis pretium ex. Nullam pulvinar ligula non faucibus pharetra. Aenean magna sem, condimentum vel neque non, venenatis malesuada lorem. Donec in nunc ac diam vulputate gravida quis id sapien. Mauris eu ante in velit volutpat pharetra. Curabitur eget scelerisque elit, id auctor erat. Nulla nec quam gravida, tincidunt elit aliquam, elementum tortor. In orci ipsum, vehicula in ultrices vel, eleifend eget augue. Pellentesque in rhoncus urna, a commodo velit. Nam fringilla diam ligula, non tincidunt felis dignissim non. Donec imperdiet dolor gravida velit rhoncus tempor. Fusce ac lacus pretium, accumsan velit at, pharetra ipsum. Sed lobortis ligula non lectus porta, sed bibendum ligula ornare. In quis ligula sit amet nibh rutrum vestibulum. Donec sit amet sapien fringilla, iaculis felis vitae, viverra metus. Integer tempor egestas ultricies. Sed nisl odio, viverra vitae blandit eu, rhoncus id lectus. Integer vitae enim sed erat varius consectetur. Proin imperdiet lectus ut pharetra maximus. Maecenas ornare eros eu molestie tempor. Nulla dapibus pharetra interdum. Nam egestas tincidunt diam vel elementum. Suspendisse semper metus a velit mattis ultrices. Vestibulum sed risus rutrum, pulvinar risus eu, tristique libero. Proin ornare turpis sed augue rutrum sagittis. Ut euismod, neque eget ultricies dictum, nisi ipsum mattis est, et interdum nibh urna quis augue. Donec tempus, posuere. Donec porttitor maximus',
        image: logo, // Placeholder - 실제 이미지로 교체 필요
        registerUrl: 'https://example.com/register' // register form 연결
    };

    // 외부 링크로 리다이렉트하는 핸들러
    const handleRegisterClick = () => {
        window.open(eventData.registerUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className="detail-page">
            <Header />
            <div className="detail-container">
                {/* Left Section */}
                <div className="detail-left-section">
                    {/* Lines */}
                    <div className="detail-line detail-line-top"></div>
                    
                    {/* Date */}
                    <div className="detail-date">{eventData.date}</div>
                    
                    {/* Time */}
                    <div className="detail-time">{eventData.time}</div>
                    
                    {/* Location */}
                    <div className="detail-location">{eventData.location}</div>
                    
                    <div className="detail-line detail-line-bottom"></div>
                </div>

                {/* Right Section */}
                <div className="detail-right-section">
                    {/* Image */}
                    <div className="detail-image">
                        <img src={eventData.image} alt={eventData.title} />
                    </div>
                    
                    {/* Title */}
                    <div className="detail-title">{eventData.title}</div>
                    
                    {/* Description */}
                    <div className="detail-description">{eventData.description}</div>
                    
                    {/* Register Button */}
                    <button 
                        className="detail-register-btn"
                        onClick={handleRegisterClick}
                    >
                        Register now!
                    </button>
                </div>
            </div>
        </div>
    );
}
