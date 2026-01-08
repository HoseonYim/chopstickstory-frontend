import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import About from './pages/About';
import Programs from './pages/Programs';
import Project from './pages/Project';
import Main from './Main.js';
import Auth from './Auth.js';
import Event from './Event.js';
import Mypage from './Mypage.js';
import Detail from './Detail.js';

function App() {
    return (
        <div className="App">
            {/* Navigation Links (optional, but useful) */}
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> |
                <Link to="/event">Event</Link>
                <Link to="/mypage">Mypage</Link>
                <Link to="/login">Login</Link>
                <Link to="/signup">Signup</Link>
                <Link to="/forgot-password">Forgot Passwd</Link>
                <Link to="/reset-password">Reset Passwd</Link>
                <Link to="/event/detail">Event Detail</Link>
            </nav>

            {/* Define the routes */}
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/about" element={<About />} />
                <Route path="/programs" element={<Programs />} />
                <Route path="/project" element={<Project />} />
                <Route path="/event" element={<Event />} />
                <Route path="/mypage" element={<Mypage />} />
                <Route path="/login" element={<Auth />} /> 
                <Route path="/signup" element={<Auth />} />
                <Route path="/forgot-password" element={<Auth />} />
                <Route path="/reset-password" element={<Auth />} />
                <Route path="/event/detail" element={<Detail />} />
            </Routes>
        </div>
        // <div className="App">
        //     <header class="sticky top-0 z-50 bg-white shadow-md">
        //         <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        //             <div class="flex justify-between items-center h-16">
        //                 <div class="flex-shrink-0 flex items-center">
        //                     <span class="text-2xl font-bold text-indigo-600">
        //                         =
        //                     </span>
        //                     <a
        //                         href="#"
        //                         class="text-gray-900 hover:text-indigo-600"
        //                     >
        //                         Eng
        //                     </a>
        //                 </div>

        //                 <a
        //                     href="#"
        //                     class="font-bold text-2xl text-gray-900 hover:text-indigo-600"
        //                 >
        //                     CHOPSTICKSTORY
        //                 </a>

        //                 <nav class="hidden md:flex space-x-8">
        //                     <a
        //                         href="#"
        //                         class="text-gray-500 hover:text-indigo-600"
        //                     >
        //                         Login
        //                     </a>
        //                     <a
        //                         href="#"
        //                         class="text-gray-500 hover:text-indigo-600"
        //                     >
        //                         Sign in
        //                     </a>
        //                 </nav>

        //                 <div class="md:hidden">
        //                     <button class="text-gray-900 hover:text-indigo-600">
        //                         <svg
        //                             class="h-6 w-6"
        //                             xmlns="www.w3.org"
        //                             fill="none"
        //                             viewBox="0 0 24 24"
        //                             stroke="currentColor"
        //                         >
        //                             <path
        //                                 stroke-linecap="round"
        //                                 stroke-linejoin="round"
        //                                 stroke-width="2"
        //                                 d="M4 6h16M4 12h16M4 18h16"
        //                             />
        //                         </svg>
        //                     </button>
        //                 </div>
        //             </div>
        //         </div>
        //     </header>
        // </div>
    );
}

export default App;
