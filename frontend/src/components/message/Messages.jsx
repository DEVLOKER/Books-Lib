import React, { useState, useEffect } from 'react'
import { api } from '../../services/fetch';
import './message.css'


export const Messages = ({expediteur, receveur, lastMessage}) => {

    const [formMessage, setFormMessage] = useState({ "contenu": "", "date": new Date().toISOString().split('T')[0] })
    const [messages, setMessages] = useState([])

    const syncMessages = ()=>{
        api.getMessages(expediteur, receveur).then(msgs=>{
            setMessages(msgs)
        }).catch(err=>alert(err))
    }
    useEffect(()=>{
        syncMessages()
    }, [lastMessage])

    const handleSendMessage = ()=>{
        if(formMessage.contenu==="") {
            alert("please fill the message field !")
            return
        }
        api.sendMessage(expediteur, receveur, formMessage).then(msg=>{
            setFormMessage({ "contenu": "", "date": "" })
            syncMessages()
        }).catch(err=>alert(err))
    }

    return (
        <>
            {
                messages.map((message, j)=>
                    <div key={j}>
                        <div style={{textAlign: expediteur==message.receveur.id? 'right':'left'}}>
                            <span className={expediteur==message.receveur.id? 'message right':'message left'} >
                                {/* <b>{message.expediteur.nom}</b><code></code> */}
                                <span>{message.contenu}</span>
                            </span>
                            <br/><small className="text-muted">{message.date}</small>
                        </div>
                    </div>
                )
            }
            <div className="mt-5 mb-3">
                <label htmlFor="input-message" className="form-label d-flex justify-content-start">Message</label>
                <textarea className="form-control" value={formMessage.contenu} onChange={e=>setFormMessage({contenu: e.target.value, date: new Date().toISOString().split('T')[0]})} rows="3"></textarea>
            </div>
            <div className="d-grid gap-2 col-12 mx-auto">
                <button className="btn" style={{ backgroundColor: 'var(--primary)', color: '#ffffff' }} type="button" onClick={handleSendMessage}>Send Message</button>
            </div>
        </>

    )
}
