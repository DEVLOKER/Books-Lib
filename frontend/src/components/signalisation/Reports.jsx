import React, { useEffect, useState } from 'react'
import { api } from '../../services/fetch';
import { Report } from './Report';
import './reports.css'

export const Reports = ({session}) => {

    const [signalisationsList, setSignalisationsList] = useState([]);
    
    
    const fetchSignalisationsList = ()=>{
        api.getSignalisations(session.id).then(signalisations=>{
            signalisations!=null && setSignalisationsList(signalisations)
        })
    }

    const handleKeep = (signalisation, setShowDetails)=>{
        if (window.confirm("Are you sure you want to reactivate?")) {
            const annonce = signalisation.annonce
            const membre = signalisation.membre
            deleteSignalisation(signalisation.id)
            activatePublisher(annonce.membre.id)
            activateAnnonce(annonce.id)
            setShowDetails(false)
            fetchSignalisationsList()
            alert("reactivated successfully!")
        }
    }


    const handleDesactivatePublisher = (id)=>{
        if (window.confirm("Are you sure you want to disactivate?")) {
            api.desactivatePublisher(id).then(m=>{
                m?.id && fetchSignalisationsList()
                alert("publisher disactivated successfully!")
                // setShowDetails(false)
            }).catch((err) => console.log(err)); 
        }
    }

    const handleDesactivateAnnonce = (id) => {
        if (window.confirm("Are you sure you want to disactivate?")) {
            api.desactivateAnnonce(id).then((res)=>{
                fetchSignalisationsList()
                alert("annonce disactivated successfully!")
                // setShowDetails(false)
            }).catch(err=> console.log(err))
        }
    }


    const deleteSignalisation = (id)=>{
        api.deleteSignalisation(id).then(m=>{
            // m?.id && fetchSignalisationsList()
            // alert("Signalisation deleted successfully!")
        }).catch((err) => console.log(err)); 
    }


    const activatePublisher = (id)=>{
        // if (window.confirm("Are you sure you want to reactivate?")) {
            api.activatePublisher(id).then(m=>{
                // m?.id && fetchSignalisationsList()
                // alert("publisher reactivated successfully!")
            }).catch((err) => console.log(err)); 
        // }
    }
    
    const activateAnnonce = (id) => {
        // if (window.confirm("Are you sure you want to reactivate?")) {
            api.activateAnnonce(id).then((res)=>{
                // fetchSignalisationsList()
                // alert("annonce reactivated successfully!")
            }).catch(err=> console.log(err))
        // }
    }


    useEffect(()=>{
        fetchSignalisationsList()
    }, [])

    return (
        <div className="container reports-list mt-4 mb-4 pt-4 pb-4" >
            <div className="row mt-4 mb-4">
                <div className="col d-flex justify-content-start">
                    <span className="title mb-0 ps-2 h4"><strong>Reports</strong></span>
                </div>
            </div>
            {
                signalisationsList?.length==0 && <div className="col w-100"><h5 className='text-center text-dark'> empty results!</h5></div>
            }
            <table className="table mt-3 mb-5">
                <tbody>
                    {
                        signalisationsList?.map((signalisation, i) =>{
                            const annonce = signalisation.annonce
                            const membre = signalisation.membre
                            return (
                                <Report key={i} index={i} signalisation={signalisation} annonce={annonce} membre={membre} handleKeep={handleKeep} handleDesactivateAnnonce={handleDesactivateAnnonce} handleDesactivatePublisher={handleDesactivatePublisher} />
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
