import React from 'react'
import './Body.css'

export const Body = ({content}) => {
    return (
        <div className="container body pt-2 pb-2 text-center">
            {content}
        </div>
    )
}