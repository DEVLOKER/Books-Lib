import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { api } from '../services/fetch';
import { helper } from '../helpers';
import { useLocalStorage } from './useLocalStorage';

export const useSession = (routes) => {

    const [session, setSession] = useLocalStorage("session", null);
    const navigate = useNavigate()
    
    const handleRedirect = ()=> {
        (!helper.isConnected() && navigate(routes.disconnected)) ||
        (helper.isAdmin() && navigate(routes.connected.admin)) ||
        (helper.isMembre() && navigate(routes.connected.membre));
        // (!helper.isConnected() && navigate(`/`));
    }

    const fetchSessionData = ()=>{
        (helper.isAdmin() || helper.isMembre()) && api.getUtilisateur(session.id).then(utilisateur=> {
            // console.log(utilisateur)
            setSession(utilisateur);
            handleRedirect()
        }).then(err=> {})
    }

    useEffect(()=>{
        fetchSessionData()
    },[])

    return [session, setSession]
}
