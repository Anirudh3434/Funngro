import React from 'react'

function Youtube() {
    return (
        <div className='Embed'>
           <div className='Embed-Text'>
               <h2>
               Funngro @ Shark Tank
               </h2>
               <p>
               Lakhs of Teens love Funngro, Hundreds of Companies love Funngro and now Sharks also loved Funngro
               </p>
           </div>
        <div className='Youtube'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/sGysgwm02YY?si=CU2qkUMrT1QeH6oQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
        </div>
    )
}

export default Youtube
