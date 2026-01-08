import './styles.css';
import b from './assets/Sample/toa-heftiba-6bKpHAun4d8-unsplash.jpg';
import c from './assets/STAMP-LOGO.webp';
import d from './assets/Sample/adam-jang-8pOTAtyd_Mc-unsplash.jpg';
import e from './assets/Sample/adrien-bruneau-8cpR_Yf0rQs-unsplash.jpg';
import f from './assets/Sample/luca-upper-Z-4kOr93RCI-unsplash.jpg';
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './components/Footer';

export function useMetadata(metadata) {
    useEffect(() => {
        // Set Title
        if (metadata.title) {
            document.title = metadata.title;
        }

        // Meta tag Helper
        const updateMeta = (metaname, content, attribute = 'name') => {
            let element = document.querySelector(
                `meta[${attribute}="${metaname}"]`
            );
            if (element) {
                element.setAttribute('content', content);
            } else {
                element = document.createElement('meta');
                element.setAttribute(attribute, metaname);
                element.setAttribute('content', content);
                document.head.appendChild(element);
            }
        };

        if (metadata.charset) {
            let charsetElement = document.querySelector('meta[charset]');
            if (charsetElement) {
                charsetElement.setAttribute('charset', metadata.charset);
            } else {
                charsetElement = document.createElement('meta');
                charsetElement.setAttribute('charset', metadata.charset);
                document.head.insertBefore(
                    charsetElement,
                    document.head.firstChild
                );
            }
        }

        if (metadata.viewport) {
            updateMeta('viewport', metadata.viewport);
        }

        if (metadata.description) {
            updateMeta('description', metadata.description);
        }
        if (metadata.keywords) {
            updateMeta('keywords', metadata.keywords);
        }

        if (metadata.author) {
            updateMeta('author', metadata.author);
        }

        if (metadata.ogTitle) {
            updateMeta('og:title', metadata.ogTitle, 'property');
        }
        if (metadata.ogDescription) {
            updateMeta('og:description', metadata.ogDescription, 'property');
        }
        if (metadata.ogImage) {
            updateMeta('og:image', metadata.ogImage, 'property');
        }
        if (metadata.ogUrl) {
            updateMeta('og:url', metadata.ogUrl, 'property');
        }
    }, [metadata]);
}


export default function Main() {
    useMetadata({
        charset: 'UTF-8',
        viewport: 'width=device-width, initial-scale=1.0',
        description:
            'CHOPSTICKSTORY - Sharing Korean culture through meaningful experiences. Discover our programs including MunDam: Infusing Culture, YeDam: Infusing Art, DeokDam: Infusing Virtue, and CheDam: Infusing Experiences.',
        keywords:
            'Korean culture, cultural education, MunDam, YeDam, DeokDam, CheDam, Korean cultural programs',
        author: 'CHOPSTICKSTORY',
        ogTitle: 'CHOPSTICKSTORY - Celebrating Korean Culture',
        ogDescription:
            'Join us in our journey to connect cultures through meaningful experiences.',
        ogImage: './images/STAMP-LOGO.webp',
        ogUrl: 'https://theolee021.github.io/ChopstickStory/',
    });

    // Slider refs and state
    const sliderContainerRef = useRef(null);
    const sliderWrapperRef = useRef(null);
    const barsRef = useRef([]);
    const [currentSlide, setCurrentSlide] = useState(1);
    const autoSlideIntervalRef = useRef(null);
    const AUTO_SLIDE_INTERVAL = 3000;

    // Setup infinite slider
    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        if (!sliderContainer) return;

        const setupInfiniteSlider = () => {
            // Remove existing clones if any
            const existingClones = sliderContainer.querySelectorAll('[id$="-clone"]');
            existingClones.forEach(clone => clone.remove());

            // Get slides after removing clones
            const slides = Array.from(sliderContainer.children);
            if (slides.length === 0) return;

            // Store reference to first slide before cloning
            const firstSlide = slides[0];
            const lastSlide = slides[slides.length - 1];

            // Verify nodes are still children of container
            if (!sliderContainer.contains(firstSlide) || !sliderContainer.contains(lastSlide)) {
                return;
            }

            const firstSlideClone = firstSlide.cloneNode(true);
            const lastSlideClone = lastSlide.cloneNode(true);
            
            firstSlideClone.id = 'slide1-clone';
            lastSlideClone.id = `slide${slides.length}-clone`;
            
            // Append last clone to end
            sliderContainer.appendChild(firstSlideClone);
            
            // Insert first clone before first slide (verify firstSlide is still a child)
            if (sliderContainer.contains(firstSlide)) {
                sliderContainer.insertBefore(lastSlideClone, firstSlide);
            } else {
                // Fallback: prepend if insertBefore fails
                sliderContainer.insertBefore(lastSlideClone, sliderContainer.firstChild);
            }
            
            // Initialize slider position to first real slide
            const slideWidth = sliderContainer.clientWidth;
            sliderContainer.scrollLeft = slideWidth;
        };

        // Wait for images to load
        const handleLoad = () => {
            setupInfiniteSlider();
        };

        if (document.readyState === 'complete') {
            setTimeout(setupInfiniteSlider, 100);
        } else {
            window.addEventListener('load', handleLoad);
            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);

    // Update slider bars
    const updateBars = (slideNumber) => {
        barsRef.current.forEach((bar, index) => {
            if (bar) {
                if (index + 1 === slideNumber) {
                    bar.classList.add('active');
                } else {
                    bar.classList.remove('active');
                }
            }
        });
    };

    // Handle infinite scroll
    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        if (!sliderContainer) return;

        const handleScroll = () => {
            const slideWidth = sliderContainer.clientWidth;
            const maxScroll = sliderContainer.scrollWidth - slideWidth;
            
            // If we're at the clone of the last slide (beginning)
            if (sliderContainer.scrollLeft === 0) {
                sliderContainer.style.scrollBehavior = 'auto';
                const slides = Array.from(sliderContainer.children).filter(
                    slide => !slide.id || !slide.id.endsWith('-clone')
                );
                sliderContainer.scrollLeft = maxScroll - slideWidth;
                setTimeout(() => {
                    sliderContainer.style.scrollBehavior = 'smooth';
                }, 10);
                setCurrentSlide(slides.length);
            }
            // If we're at the clone of the first slide (end)
            else if (sliderContainer.scrollLeft >= maxScroll - 10) {
                sliderContainer.style.scrollBehavior = 'auto';
                sliderContainer.scrollLeft = slideWidth;
                setTimeout(() => {
                    sliderContainer.style.scrollBehavior = 'smooth';
                }, 10);
                setCurrentSlide(1);
            }
            // Update current slide based on scroll position
            else {
                const slide = Math.round(sliderContainer.scrollLeft / slideWidth);
                setCurrentSlide(slide);
            }
        };

        sliderContainer.addEventListener('scroll', handleScroll);
        return () => {
            sliderContainer.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Update bars when currentSlide changes
    useEffect(() => {
        updateBars(currentSlide);
    }, [currentSlide]);

    // Handle bar clicks
    useEffect(() => {
        const bars = barsRef.current;
        const sliderContainer = sliderContainerRef.current;
        if (!sliderContainer || bars.length === 0) return;

        const handlers = [];

        bars.forEach((bar, index) => {
            if (bar) {
                const slideNumber = index + 1;
                const handleBarClick = () => {
                    const slideWidth = sliderContainer.clientWidth;
                    
                    sliderContainer.scrollTo({
                        left: slideWidth * slideNumber,
                        behavior: 'smooth'
                    });
                    
                    setCurrentSlide(slideNumber);
                    updateBars(slideNumber);
                    stopAutoSlide();
                };
                
                handlers.push({ bar, handler: handleBarClick });
                bar.addEventListener('click', handleBarClick);
            }
        });

        return () => {
            handlers.forEach(({ bar, handler }) => {
                bar.removeEventListener('click', handler);
            });
        };
    }, []);

    // Auto slide functions
    const startAutoSlide = () => {
        stopAutoSlide();
        const sliderContainer = sliderContainerRef.current;
        if (!sliderContainer) return;
        
        autoSlideIntervalRef.current = setInterval(() => {
            const slideWidth = sliderContainer.clientWidth;
            const maxScroll = sliderContainer.scrollWidth - slideWidth;
            
            if (sliderContainer.scrollLeft >= maxScroll - 10) {
                sliderContainer.scrollTo({
                    left: slideWidth,
                    behavior: 'smooth'
                });
                setCurrentSlide(1);
            } else {
                sliderContainer.scrollTo({
                    left: sliderContainer.scrollLeft + slideWidth,
                    behavior: 'smooth'
                });
                setCurrentSlide(prev => prev + 1);
            }
        }, AUTO_SLIDE_INTERVAL);
    };

    const stopAutoSlide = () => {
        if (autoSlideIntervalRef.current) {
            clearInterval(autoSlideIntervalRef.current);
            autoSlideIntervalRef.current = null;
        }
    };

    // Auto slide controls
    useEffect(() => {
        const sliderWrapper = sliderWrapperRef.current;
        const sliderContainer = sliderContainerRef.current;
        if (!sliderWrapper || !sliderContainer) return;

        const handleMouseEnter = () => stopAutoSlide();
        const handleMouseLeave = () => {
            setTimeout(startAutoSlide, 0);
        };
        const handleTouchStart = () => stopAutoSlide();
        const handleTouchEnd = () => {
            setTimeout(startAutoSlide, 0);
        };

        sliderWrapper.addEventListener('mouseenter', handleMouseEnter);
        sliderWrapper.addEventListener('mouseleave', handleMouseLeave);
        sliderWrapper.addEventListener('touchstart', handleTouchStart);
        sliderWrapper.addEventListener('touchend', handleTouchEnd);

        // Start auto slide
        startAutoSlide();

        return () => {
            stopAutoSlide();
            sliderWrapper.removeEventListener('mouseenter', handleMouseEnter);
            sliderWrapper.removeEventListener('mouseleave', handleMouseLeave);
            sliderWrapper.removeEventListener('touchstart', handleTouchStart);
            sliderWrapper.removeEventListener('touchend', handleTouchEnd);
        };
    }, []);

    // Load Instagram feed
    useEffect(() => {
        const loadBeholdFeed = async () => {
            const BEHOLD_FEED_URL = 'https://feeds.behold.so/QmrH8sxjg7rmJixicWYy';
            const instagramGrid = document.getElementById('instagram-grid');
            
            if (!instagramGrid) return;

            try {
                const response = await fetch(BEHOLD_FEED_URL);
                const data = await response.json();
                
                instagramGrid.innerHTML = '';

                // behold.json 구조에 맞게 데이터 추출
                // posts 배열에 최대 6개 포스트만 표시
                const posts = data.posts?.slice(0, 6) || [];
                
                posts.forEach(post => {
                    // 미디어 URL 결정 (sizes.medium 또는 대체 이미지)
                    let mediaUrl;
                    if (post.mediaType === 'VIDEO' && post.thumbnailUrl) {
                        // 비디오인 경우 썸네일 사용
                        mediaUrl = post.thumbnailUrl;
                    } else if (post.sizes && post.sizes.medium) {
                        // medium 사이즈 이미지 사용
                        mediaUrl = post.sizes.medium.mediaUrl;
                    } else {
                        // 기본 미디어 URL 사용
                        mediaUrl = post.mediaUrl;
                    }
                    
                    // 캡션 정리 (짧은 버전 사용)
                    const caption = post.prunedCaption || post.caption || '';
                    
                    // 포스트 타입에 따른 아이콘 추가
                    const isVideo = post.mediaType === 'VIDEO' || post.isReel;
                    const icon = isVideo ? '<i class="fa-solid fa-play post-icon"></i>' : '';
                    
                    const postElement = document.createElement('a');
                    postElement.href = post.permalink;
                    postElement.target = '_blank';
                    postElement.rel = 'noopener';
                    postElement.className = `instagram-post ${isVideo ? 'video-post' : ''}`;
                    postElement.innerHTML = `
                        <img src="${mediaUrl}" alt="${caption ? caption.slice(0, 100) : 'Instagram post'}" loading="lazy">
                        ${icon}
                        <div class="post-overlay">
                            <span class="post-likes">
                                <i class="fa-solid fa-heart"></i>
                            </span>
                        </div>
                    `;
                    instagramGrid.appendChild(postElement);
                });
            } catch (error) {
                console.error('Error loading Behold Instagram feed:', error);
                // 에러 발생 시 대체 콘텐츠 표시
                instagramGrid.innerHTML = `
                    <div style="text-align: center; grid-column: 1/-1; padding: 2rem;">
                        <p>Instagram 피드를 불러오는 중 문제가 발생했습니다.</p>
                        <a href="https://www.instagram.com/chopstickstory/" target="_blank">Instagram에서 직접 보기</a>
                    </div>
                `;
            }
        };

        loadBeholdFeed();
    }, []);

    return (
        // <html lang="ko">
        <div>
            {/* <title>CHOPSTICKSTORY - Celebrating Korean Culture</title> */}
            {/* <link rel="icon" type="image/webp" href="./images/cropped-cropped-CHOPSTICKSTORY-7.webp"> */}
            {/* <body> */}
            <Header />

            <main>
                <div
                    className="slider-wrapper"
                    role="region"
                    aria-label="Image Slider"
                    ref={sliderWrapperRef}
                >
                    <div className="slider-container" ref={sliderContainerRef}>
                        <div
                            className="slide"
                            id="slide1"
                            role="tabpanel"
                            aria-labelledby="slide1-tab"
                        >
                            <img src={b} alt="People experiencing Korean culture"
                            />
                            <div className="slide-content">
                                <h2>Sharing Stories, Building Bridges</h2>
                                <p>
                                    Join us in our journey to connect cultures
                                    through meaningful experiences.
                                </p>
                                <Link to="/about" className="slide-btn">
                                    About Us{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="slide" id="slide2">
                            <img src={c} alt="Slide 2" />
                            <div className="slide-content">
                                <h2>Discover Korean Culture</h2>
                                <p>
                                    Experience the richness of Korean traditions
                                    through our diverse programs.
                                </p>
                                <Link to="/programs" className="slide-btn">
                                    Our Programs{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="slide" id="slide3">
                            <img src={d} alt="YeDam Art Workshop" />
                            <div className="slide-content">
                                <h2>Chopsticks Special Stories</h2>
                                <p>
                                    Explore traditional Korean folktales and
                                    contemporary narratives that showcase the
                                    wisdom and values.
                                </p>
                                <Link
                                    to="/programs#mundam"
                                    className="slide-btn"
                                >
                                    See More{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="slide" id="slide4">
                            <img src={e} alt="Project Activities" />
                            <div className="slide-content">
                                <h2>Our Project</h2>
                                <p>
                                    Follow our journey of sharing Korean culture
                                    through various milestones and activities
                                    since 2019.
                                </p>
                                <Link to="/project" className="slide-btn">
                                    See More{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        <div className="slide" id="slide5">
                            <img src={f} alt="CheDam Activities" />
                            <div className="slide-content">
                                <h2>CheDam: Infusing Experiences</h2>
                                <p>
                                    Experience the joy of Korean traditional
                                    games with friends and family.
                                </p>
                                <Link
                                    to="/programs#chedam"
                                    className="slide-btn"
                                >
                                    See More{' '}
                                    <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="slider-nav">
                        <div 
                            className="slider-bar active" 
                            data-slide="1"
                            ref={el => barsRef.current[0] = el}
                        ></div>
                        <div 
                            className="slider-bar" 
                            data-slide="2"
                            ref={el => barsRef.current[1] = el}
                        ></div>
                        <div 
                            className="slider-bar" 
                            data-slide="3"
                            ref={el => barsRef.current[2] = el}
                        ></div>
                        <div 
                            className="slider-bar" 
                            data-slide="4"
                            ref={el => barsRef.current[3] = el}
                        ></div>
                        <div 
                            className="slider-bar" 
                            data-slide="5"
                            ref={el => barsRef.current[4] = el}
                        ></div>
                    </div>
                </div>
            </main>

            <section className="instagram-feed">
                <div className="container">
                    <h2 className="section-title">
                        Discover Our Latest Moments
                    </h2>
                    <p className="section-subtitle">
                        Join our growing community of chopstick storytellers
                    </p>
                    <div className="instagram-grid" id="instagram-grid">
                        {/* <!-- Instagram posts will be loaded here dynamically --> */}
                    </div>
                    <div className="social-icons-container">
                        <a
                            href="https://www.instagram.com/chopstickstory/"
                            className="instagram-icon-link"
                            target="_blank"
                            aria-label="Visit our Instagram"
                        >
                            <div className="instagram-icon-gradient">
                                <i className="fa-brands fa-instagram"></i>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="linkedin-icon-link"
                            aria-label="Visit our LinkedIn"
                        >
                            <div className="linkedin-icon-gradient">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </div>
                        </a>

                        <a
                            href="#"
                            className="youtube-icon-link"
                            aria-label="Visit our YouTube channel"
                        >
                            <div className="youtube-icon-gradient">
                                <i className="fa-brands fa-youtube"></i>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
            {/* <script src="https://kit.fontawesome.com/b3f4de9307.js" 
            crossorigin="anonymous"></script>
            <script src="js/main.js"></script>
            <script src="js/header-scroll.js"></script>
            <script src="js/nav-scroll.js"></script> */}
            {/* </body> */}
            {/* </html> */}
        </div>
    );
}
