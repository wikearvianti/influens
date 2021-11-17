import React from 'react'
import Header from './Header'
import Footer from './footer'

export default function Layouts({children}){
    return(
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}