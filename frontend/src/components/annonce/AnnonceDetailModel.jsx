import React from 'react'

import { AiFillStar } from "@react-icons/all-files/ai/AiFillStar"
import { AiOutlineStar } from "@react-icons/all-files/ai/AiOutlineStar"
import { AiFillInfoCircle } from "@react-icons/all-files/ai/AiFillInfoCircle"
import { AiOutlineInfoCircle } from "@react-icons/all-files/ai/AiOutlineInfoCircle"
import { AiFillHeart } from "@react-icons/all-files/ai/AiFillHeart"
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart"
import { AiOutlineCheck } from "@react-icons/all-files/ai/AiOutlineCheck"
import { AiOutlineMessage } from "@react-icons/all-files/ai/AiOutlineMessage"
import { AiFillMessage } from "@react-icons/all-files/ai/AiFillMessage"

import { useEffect } from 'react';
import { useState } from 'react';
import { api } from '../../services/fetch';

import Modal from 'react-bootstrap/Modal';

import './detailModel.css'

import { helper } from '../../helpers'
import { constants } from '../../constants'


export const AnnonceDetailModel = ({session, annonce, setOpenedModels}) => {

    const {id, urlPhotoLivre, titre, auteur, prix, date, conditionAnnonce, descriptionAnnonce, membre} = annonce

    const [formMessage, setFormMessage] = useState({ "contenu": "", "date": new Date().toISOString().split('T')[0] })
    const handleSendMessage = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        if(formMessage.contenu==="") {
            alert("please fill the message field !")
            return
        }
        api.sendMessage(session.id, membre.id, formMessage).then(msg=>{
            setFormMessage({ "contenu": "", "date": "" })
            handleClose()
            alert("message was sent successfully !")
        }).catch(err=>{})
    }


    const handleClose=()=>{
        setOpenedModels({detail: false, evaluation: false, report: false})
    }

    const openEvaluationModel = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        setOpenedModels({detail: false, evaluation: true, report: false})
    }

    const openSignalisationModel = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        setOpenedModels({detail: false, evaluation: false, report: true})
    }

    // ########################     Evaluation    ########################
    const [ evaluationState, setEvaluationState ] = useState({})
    const getEvaluationState = () =>{
        api.findEvaluation(session.id, annonce.id).then(evaluation=>{
            evaluation?.note && setEvaluationState({
                ...evaluation,
                commentaire: evaluation.commentaire,
                note: constants.notes[evaluation.note],
            })
        }).catch(err=>{})
    }

    // ########################     Favorisation    ########################

    const [favorationState, setFavorationState] = useState({})
    const getFavorisationState = ()=>{
        if(!helper.isAllowed(session)) return
        api.getFavorisation(session.id, annonce.id).then(favorisation=>{
            setFavorationState(favorisation)
        }).catch(err=>{})
    }
    const handleAddToWishList = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        const formFavorisation = {dateFavorisation : new Date().toISOString().split('T')[0]}
        api.addWishList(session.id, annonce.id, formFavorisation).then(favorisation=>{
            getFavorisationState()
        }).catch(err=>{})
    }
    const handleRemoveFromWishList = ()=>{
        if(!helper.isAllowed(session, "prompt")) return
        setFavorationState({})
        favorationState?.id && api.deleteFavorisation(favorationState.id).then(res=>{
            getFavorisationState()
        }).catch(err=> console.log(err))
    }


    useEffect(()=>{
        helper.isConnected(session) && getFavorisationState()
        helper.isConnected(session) && getEvaluationState()
    }, [])


    return (

        <Modal
            show={true}
            size="lg"
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
            <Modal.Title>{titre} <span className="badge rounded-pill bg-danger">{prix}$</span></Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <div className="card detail mb-3" >
                        
                        {/* <img src={`uploads/${urlPhotoLivre}`} className="card-img-top_" style={{ width: 'auto', maxHeight: 'calc( 100vh - 200px)'}} alt={titre} /> */}
                        <div className="row image" style={{backgroundImage: `url('uploads/${urlPhotoLivre}')`}} ></div>
                        <div className="row actions d-flex justify-content-around" style={{}}>
                            <div className='col-3'>
                                {
                                    evaluationState?.membre ?(
                                        <label className="evaluate text-center" onClick={openEvaluationModel} >
                                            <AiFillStar /> <br/> Evaluated
                                        </label>
                                    ):(
                                        <label className="evaluate text-center" onClick={openEvaluationModel} >
                                            <AiOutlineStar /> <br/> Evaluate
                                        </label>
                                    )
                                }
                                
                            </div>
                            <div className='col-3'>
                                {
                                    favorationState?.membre ?(
                                        <label className="favoured text-center" onClick={handleRemoveFromWishList}>
                                            <AiFillHeart /> <br/> Favoured
                                        </label>
                                    ):(
                                        <label className="favorite text-center" onClick={handleAddToWishList}>
                                            <AiOutlineHeart /> <br/> Favorite
                                        </label>
                                    )
                                }
                            </div>
                            <div className='col-3'>
                                <label htmlFor="input-message" className="contact text-center" >
                                    <AiFillMessage /> <br/> Contact
                                </label>
                            </div>
                            <div className='col-3'>
                                <label className="report text-center" onClick={openSignalisationModel} >
                                    <AiFillInfoCircle /> <br/> Report
                                </label>
                            </div>
                        </div>
                        <div className="card-body">
                            <table className="table table-striped">
                                <tbody>
                                    <tr><th scope="row">Ttile</th><td>{titre}</td></tr>
                                    <tr><th scope="row">Price</th><td>{prix}$</td></tr>
                                    <tr><th scope="row">Author</th><td>{auteur}</td></tr>
                                    <tr><th scope="row">Date</th><td>{date}</td></tr>
                                    <tr><th scope="row">condition</th><td>{conditionAnnonce}</td></tr>
                                    <tr><th scope="row">Address</th><td>{`${membre?.adresse}, ${membre?.ville}, ${membre?.pays}`}</td></tr>
                                    <tr><th scope="row">Description</th><td>{descriptionAnnonce}</td></tr>
                                </tbody>
                            </table>
                        </div>
                </div>

                <div className='seller' >
                    <div className="mb-3">
                        <label htmlFor="input-message" className="form-label d-flex justify-content-start">Contact the Seller</label>
                        <textarea id="input-message" className="form-control" value={formMessage.contenu} onChange={e=>setFormMessage({...formMessage, contenu: e.target.value})} placeholder="type a message" rows="3"></textarea>
                    </div>
                    <div className="d-grid gap-2 col-12 mx-auto">
                        <button className="btn send" type="button" onClick={handleSendMessage}>Send Message</button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}
