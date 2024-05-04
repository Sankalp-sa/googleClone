import React from 'react'

export default function Footer() {
  return (
    <div className='position-absolute bottom-0 w-100'>
        {/* Create a footer similar to google.com */}
        <footer className="bg-light text-dark text-center p-3">
            <p>India</p>
            <div className="d-flex justify-content-center">
                <div className="me-4">
                    <a href="#" className="text-dark">Advertising</a>
                </div>
                <div className="me-4">
                    <a href="#" className="text-dark">Business</a>
                </div>
                <div className="me-4">
                    <a href="#" className="text-dark">About</a>
                </div>
                <div className="me-4">
                    <a href="#" className="text-dark">How Search works</a>
                </div>
            </div>
        </footer>
    </div>
  )
}
