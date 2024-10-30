import React from 'react'

function Footer() {
  return (
    <div>
        <footer className="bg-dark text-white py-4">
          <div className="container text-center">
            <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
          </div>
        </footer>
    </div>
  )
}

export default Footer
