import React, { useState, useEffect } from 'react'
import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn"
import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { MdStars } from "@react-icons/all-files/md/MdStars";

import { api } from '../../services/fetch';
import Modal from 'react-bootstrap/Modal';
import './evaluation.css'
import { constants } from '../../constants';


const notesParse = ()=>{
    let keys = [], values = []
    for(var k in constants.notes) { keys.push(k); values.push(constants.notes[k]); }
    return {keys, values}
} 

export const Evaluation = ({session, annonce, setOpenedModels}) => {
    

    const [formEvaluation, setFormEvaluation] = useState({
        "dateEvaluation": new Date().toISOString().split('T')[0],
        "commentaire": "", 
        "note": -1, //notesParse().keys[0]
    })

    useEffect(()=>{
        api.findEvaluation(session.id, annonce.id).then(evaluation=>{
            evaluation?.note && setFormEvaluation({
                ...formEvaluation,
                // dateEvaluation: evaluation.dateEvaluation,
                commentaire: evaluation.commentaire,
                note: constants.notes[evaluation.note],
            })
        }).catch(err=>{})
    }, [])

    const handleEvaluate = ()=>{
        if(formEvaluation.commentaire==="") {
            alert("please fill the message field !")
            return
        }
        api.evaluateAnnonce(session.id, annonce.id, formEvaluation).then(evaluation=>{
            setFormEvaluation({ ...formEvaluation, "commentaire": "", "note": -1 })
            handleClose()
            alert("Eavaluation was sent successfully !")
        }).catch(err=>{})
    }

    const handleClose = ()=>{
        setOpenedModels({detail: false, evaluation: false, report: false})
    }

    const triggerChange = (star)=>{
        setFormEvaluation({...formEvaluation, note: star })
    }


    return (

        <Modal
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Evaluate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3" >
                    <div className="card-body">
                        <div className='starts' >
                            {
                                notesParse().values.map((star,i)=>
                                    i==0?(
                                        <div key={i}></div>
                                    ):(
                                        <div key={i} className={star<=formEvaluation.note? "star selected":"star"} onClick={(e)=> triggerChange(star)}>
                                            <MdStars />
                                        </div>
                                    )
                                )
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="input-message" className="form-label d-flex justify-content-start">Message</label>
                            <textarea className="form-control" value={formEvaluation.commentaire} onChange={e=>setFormEvaluation({...formEvaluation, commentaire: e.target.value})} rows="3"></textarea>
                        </div>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn evaluate" type="button" onClick={handleEvaluate}>Evaluate</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}