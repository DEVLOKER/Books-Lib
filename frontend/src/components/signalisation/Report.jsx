import React, { useState } from 'react'

export const Report = ({index, signalisation, annonce, membre, handleKeep, handleDesactivateAnnonce, handleDesactivatePublisher}) => {
    
    const [showDetails, setShowDetails] = useState(false);

    return (
        <tr className="border border-5 border-light" >
            <th valign="middle"  scope="row">{index+1}</th>
            <td valign="middle"  ><img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td>
            <td valign={showDetails?"top":"middle"}align='left' >
                <strong>{`${membre.nom} ${membre.prenom}`}</strong>
                {showDetails && (
                    <div className='row mt-3 text-start'>
                        <strong>Message</strong>
                        <p>
                            <small className="text-muted">{signalisation.commentaire}</small>
                        </p>
                    </div>
                )}
            </td>
            <td valign={showDetails?"top":"middle"} align='left' ><strong>{new Date(signalisation.dateSignaler).toISOString().split('T')[0]}</strong></td>
            {
            !showDetails &&
            <td valign="middle" >
                <strong>Message</strong>
            </td>
            }
            <td valign="middle" colspan={showDetails?2:1} >
                {
                    !showDetails?(
                        <button className="btn detail m-1" onClick={(e)=>setShowDetails(true) } >view details</button>
                    ):(
                        <div className='row_' >
                            <button className="btn keep m-1" onClick={(e)=>handleKeep(signalisation, setShowDetails) } >Keep</button>
                            <button className="btn desactivateAnnonce m-1" onClick={(e)=>handleDesactivateAnnonce(annonce.id)} >Disactivate ad</button>
                            <button className="btn desactivatePublisher m-1" onClick={(e)=>handleDesactivatePublisher(annonce.membre.id)} >Disactivate publisher</button>
                            <button className="btn cancel m-1" onClick={(e)=>setShowDetails(false)} >Cancel</button>
                        </div>
                    )
                }
                
            </td>
        </tr>
    )
}
