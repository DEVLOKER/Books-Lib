import React from 'react'


export const Category = ({id, name, handleDelete, formState, setFormState}) => {

    return (
        <tr key={id} className="border_ border-0_ border-light_">
            <td>{id}</td>
            <td>{name}</td>
            <td valign="middle" align='right' >
                <button className="btn edit m-1" onClick={(e)=> setFormState({edit: true, id:id, name:name}) }>Edit</button>
                <button className="btn desactivate m-1" onClick={(e)=>handleDelete(id)} >Desactivate</button>
            </td>
        </tr>
    )
}
