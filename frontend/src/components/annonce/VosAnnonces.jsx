import React from 'react'
import { api } from '../../services/fetch'
import { helper } from '../../helpers'
import './VosAnnonces.css'

export const VosAnnonces = ({session, annoncesList, fetchAnnoncesList, handleEdit}) => {

    const handleDelete = (id) => {
        if(!helper.isAllowed(session, "prompt")) return
        if (window.confirm("Are you sure you want to delete?")) {
            api.desactivateAnnonce(id).then((res)=>{
                fetchAnnoncesList()
            }).catch(err=> console.log(err))
        }
    }




    return (
        <div className="container vos-livres mt-4 mb-4" >
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="title mb-0 ps-2 h4"><strong>Books</strong></span>
                </div>
            </div>
            <table className="table mt-3 mb-5">
                <tbody>
                    {
                        annoncesList.map((annonce, i) =>
                            <tr key={i} className="border border-5 border-light" >
                                <th valign="middle" scope="row">{i+1}</th>
                                {/* <td><img src={BookImage} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td> */}
                                <td valign="middle" ><img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td>
                                <td valign="middle" >{annonce.titre}</td>
                                <td valign="middle" >{annonce.prix}$</td>
                                <td valign="middle" >{annonce.categorie?.libelle}</td>
                                <td valign="middle" >Publiee le {new Date(annonce.date).toISOString().split('T')[0]}</td>
                                <td valign="middle" >
                                    <button className="btn edit m-1" onClick={(e)=> handleEdit(annonce) }>Edit</button>
                                    <button className="btn desactive m-1" onClick={(e)=>handleDelete(annonce.id)} >Desactive</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
