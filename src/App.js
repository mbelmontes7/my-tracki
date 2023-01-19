import logo from './logo.svg';
import './App.css';

function App() {
  return (


    <html> 
        <head> 
            <link href= 
    "https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                rel="stylesheet" /> 
        </head> 
        <body> 
            <div class="h-screen flex flex-col 
                        items-center justify-center"> 
                <p class="text-black-900 text-5xl mb-3"> 
                Welcome to tracki
                </p> 
                <form> 
                    <input aria-label="Enter your email address"
                        type="text" placeholder="Email address"
                        class="text-sm text-gray-base w-full 
                                mr-3 py-5 px-4 h-2 border 
                                border-black-900 rounded mb-2" /> 
                    <input aria-label="Enter your password"
                        type="password" placeholder="Password"
                        class="text-sm text-gray-base w-full mr-3 
                                py-5 px-4 h-2 border border-black-200 
                                rounded mb-2" /> 
    
                    <button type="submit"
                            class="bg-green-400 w-full mt-4"> 
                        Login 
                    </button> 
                </form> 
            </div> 
        </body> 
    </html> 

  )
}
export default App;
