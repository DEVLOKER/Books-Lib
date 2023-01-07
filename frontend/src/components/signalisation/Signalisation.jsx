import React from 'react'

import { BsFillExclamationCircleFill } from "@react-icons/all-files/bs/BsFillExclamationCircleFill"

import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/fetch';
import Modal from 'react-bootstrap/Modal';

import './report.css'


export const Signalisation = ({session, annonce, setOpenedModels}) => {

    const [formSignalisation, setFormSignalisation] = useState({
        "dateSignaler": new Date().toISOString().split('T')[0],
        "commentaire": ""
    })

    useEffect(()=>{
        api.findSignalisation(session.id, annonce.id).then(signalisation=>{
            signalisation?.commentaire && 
            setFormSignalisation({
                ...formSignalisation,
                commentaire: signalisation.commentaire
            })
        }).catch(err=> {})
    }, [])

    const handleSignale = ()=>{
        if(formSignalisation.commentaire==="") {
            alert("please fill the message field !")
            return
        }
        api.reportAnnonce(session.id, annonce.id, formSignalisation).then(signalisation=>{
            // console.log(signalisation)
            setFormSignalisation({ ...formSignalisation, "commentaire": "" })
            handleClose()
            alert("Signalisation was sent successfully !")
        }).catch(err=>{})
    }

    const handleClose = ()=>{
        setOpenedModels({detail: false, signalisation: false, report: false})
    }



    return (

        <Modal
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Report</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="card mb-3" >
                    <div className="card-body">
                        <div className="mb-3">
                            <label htmlFor="input-message" className="form-label d-flex justify-content-start">Message</label>
                            <textarea className="form-control" value={formSignalisation.commentaire} onChange={e=>setFormSignalisation({...formSignalisation, commentaire: e.target.value})} rows="3"></textarea>
                        </div>
                        <div className="d-grid gap-2 col-12 mx-auto">
                            <button className="btn report" type="button" onClick={handleSignale}>Report ad</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}