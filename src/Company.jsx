import React from 'react'
import Intro from './Component1/Intro'
import Dock from './Component/Dock'
import Project from './Component1/Project'
import Project1 from './Component/Project'
import HappyCustomer from './Component1/HappyCustomer'
import Trusted from './Component/TrustedPartner'
import Work from './Component1/work'
import Ceo from './Component1/Ceo'

function Company() {
    return (
        <>
           <Intro/>
           <Dock/>
           <Project/>
           <HappyCustomer/>
           <Project1/>
           <Trusted/>
           <Work/>
           <Ceo/>
        </>
    )
}

export default Company
