import React, { useState } from 'react'
import './annonce.css'

import { BsStarHalf } from "@react-icons/all-files/bs/BsStarHalf"
import { useEffect } from 'react'
import { api } from '../../services/fetch'
import { helper } from '../../helpers'
import { constants } from '../../constants'


export const Annonce = ({session, annonce, setOpenedModels, setSelectedAnnonce}) => {

    const openDetailModel = ()=>{
        setSelectedAnnonce(annonce)
        setOpenedModels({detail: true, evaluation: false, report: false})
    }

    const stars = (evaluations)=>{
        let stars = 0
        let sum = 0
        evaluations.map((rate, i) =>{
            sum += constants.notes[rate.note]
        })
        stars = (sum / evaluations.length).toFixed(1)
        if(isNaN(stars)) return "-"
        return stars
    }

    const [ evaluationState, setEvaluationState ] = useState(0)
    const getEvaluationState = () =>{
        api.getEvaluations(annonce.id).then(evaluations=>{
            setEvaluationState(stars(evaluations))
        }).catch(err=>{})
    }
    
    useEffect(()=>{
        helper.isConnected(session) && getEvaluationState()
    }, [])

    return (
        <div className="card book" style={{height: '100%'}} onClick={openDetailModel} >
            <img src={`uploads/${annonce?.urlPhotoLivre}`} className="card-img-top" alt={annonce.titre} />
            <div className="card-body d-flex justify-content-end align-center flex-column" style={{height: '100%'}}>
                <span className="badge right rounded-pill">{annonce.prix}$</span>
                <span className="badge left rounded-pill"> <span style={{ color: '#ffffff' }} className=" text-muted_" >{evaluationState}</span> <BsStarHalf style={{ marginTop: -5 }} /> </span>
                <div className='row_ info'>
                    <span className="card-title mb-0 ps-2 h6">{annonce.titre}</span>
                    <p className="card-text mb-0 ps-2"><small >{annonce.auteur}</small></p>
                </div>
            </div>
        </div>
    )
}
