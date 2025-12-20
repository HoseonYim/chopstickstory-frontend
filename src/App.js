import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="App">
            <header class="sticky top-0 z-50 bg-white shadow-md">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between items-center h-16">
                        <div class="flex-shrink-0 flex items-center">
                            <span class="text-2xl font-bold text-indigo-600">
                                Logo
                            </span>
                        </div>

                        <nav class="hidden md:flex space-x-8">
                            <a
                                href="#"
                                class="text-gray-900 hover:text-indigo-600"
                            >
                                Home
                            </a>
                            <a
                                href="#"
                                class="text-gray-900 hover:text-indigo-600"
                            >
                                About
                            </a>
                            <a
                                href="#"
                                class="text-gray-900 hover:text-indigo-600"
                            >
                                Services
                            </a>
                            <a
                                href="#"
                                class="text-gray-900 hover:text-indigo-600"
                            >
                                Contact
                            </a>
                        </nav>

                        <div class="md:hidden">
                            <button class="text-gray-900 hover:text-indigo-600">
                                <svg
                                    class="h-6 w-6"
                                    xmlns="www.w3.org"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default App;
