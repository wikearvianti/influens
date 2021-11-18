import React from 'react'
import Header from './Header'
import Footer from './footer'

export default function Layouts({children}){
    return(
        <div className="d-flex flex-column" style={{height: "100vh"}}>
            <Header />
            <div>
                {children}
            </div>
            <Footer />
        </div>
    )
}