import React, { useEffect, useState } from 'react'
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart"
import { api } from '../../services/fetch';

export const FavorisationList = ({session}) => {

    const [favorisationsList, setFavorisationsList] = useState([]);
    
    const fetchFavorisationsList = ()=>{
        session && !session?.idAdmin && api.getFavorisations(session.id).then(favorisations=>{
            favorisations!=null && setFavorisationsList(favorisations)
        }).catch(err=> alert(err))
    }

    const handleRemove = (favorisation)=>{
        api.deleteFavorisation(favorisation.id).then(res=>{
            res?.id && fetchFavorisationsList()
            alert("annonce removed from whishlist successfully!")
        }).catch(err=> console.log(err))
    }

    useEffect(()=>{
        fetchFavorisationsList()
    }, [])


    return (
        <div className="container vos-livres mt-4 mb-4" >
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-center">
                    <span className="title mb-0 ps-2 h4"><AiFillHeart style={{width: 35, height: 35, color: 'var(--primary)'}} /> <strong>Wishlist</strong></span>
                </div>
            </div>
            {
                favorisationsList?.length==0 && <div className="col w-100"><h5 className='text-center text-dark'> empty results!</h5></div>
            }
            <table className="table mt-3 mb-5">
                <tbody>
                    {
                        favorisationsList.map((favorisation, i) =>{
                            const annonce = favorisation.annonce
                            return(
                                <tr key={i} className="border border-5 border-light" >
                                    <td><img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top rounded mx-auto d-block img-fluid" alt={annonce.titre} /></td>
                                    <td valign="middle" ><strong style={{ color: 'var(--third)' }} >{annonce.titre}</strong></td>
                                    <td valign="middle" ><span style={{ color: 'var(--third)' }} >{annonce.prix}$</span></td>
                                    <td valign="middle" >
                                        <button className="btn m-1" style={{ backgroundColor: 'var(--third)', color: '#ffffff' }} onClick={(e)=>handleRemove(favorisation)} >Remove</button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
