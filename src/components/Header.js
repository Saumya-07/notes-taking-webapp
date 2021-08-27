import React from 'react';


function Header({ handleToggleDarkMode }) {
    return (
        <div className='header'>
            <h1>Keep your Notes here</h1>
            <button 
                onClick={() => 
                    handleToggleDarkMode(
                        (previousDarkMode) => !previousDarkMode
                    )} 
                className='toggle-icon' 
            >
            {/* <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="2.5em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M6.993 12c0 2.761 2.246 5.007 5.007 5.007s5.007-2.246 5.007-5.007S14.761 6.993 12 6.993 6.993 9.239 6.993 12zM12 8.993c1.658 0 3.007 1.349 3.007 3.007S13.658 15.007 12 15.007 8.993 13.658 8.993 12 10.342 8.993 12 8.993zM10.998 19H12.998V22H10.998zM10.998 2H12.998V5H10.998zM1.998 11H4.998V13H1.998zM18.998 11H21.998V13H18.998z"></path><path transform="rotate(-45.017 5.986 18.01)" d="M4.487 17.01H7.487V19.01H4.487z"></path><path transform="rotate(-45.001 18.008 5.99)" d="M16.508 4.99H19.509V6.99H16.508z"></path><path transform="rotate(-134.983 5.988 5.99)" d="M4.487 4.99H7.487V6.99H4.487z"></path><path transform="rotate(134.999 18.008 18.01)" d="M17.008 16.51H19.008V19.511000000000003H17.008z"></path></svg> */}
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="2.5em" width="3em" xmlns="http://www.w3.org/2000/svg"><path d="M256 160c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm246.4 80.5l-94.7-47.3 33.5-100.4c4.5-13.6-8.4-26.5-21.9-21.9l-100.4 33.5-47.4-94.8c-6.4-12.8-24.6-12.8-31 0l-47.3 94.7L92.7 70.8c-13.6-4.5-26.5 8.4-21.9 21.9l33.5 100.4-94.7 47.4c-12.8 6.4-12.8 24.6 0 31l94.7 47.3-33.5 100.5c-4.5 13.6 8.4 26.5 21.9 21.9l100.4-33.5 47.3 94.7c6.4 12.8 24.6 12.8 31 0l47.3-94.7 100.4 33.5c13.6 4.5 26.5-8.4 21.9-21.9l-33.5-100.4 94.7-47.3c13-6.5 13-24.7.2-31.1zm-155.9 106c-49.9 49.9-131.1 49.9-181 0-49.9-49.9-49.9-131.1 0-181 49.9-49.9 131.1-49.9 181 0 49.9 49.9 49.9 131.1 0 181z"></path></svg>
            </button>         
        </div>
    )
}

export default Header
