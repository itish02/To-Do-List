import React from 'react'

const Footer = () => {
    let footerStyle = {
        position: 'absolute',
        top: '93vh',
        width: '100%',
    }
    return (
        <footer className="bg-dark text-light py-3" style={footerStyle}>
            <p className="text-center">My To Do App.</p>
        </footer>
    )
}

export default Footer
