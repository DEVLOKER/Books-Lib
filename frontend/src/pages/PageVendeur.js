
import React, { useEffect, useState } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { AjouterAnnonceForm } from '../components/annonce/AjouterAnnonceForm';
import { VosAnnonces } from '../components/annonce/VosAnnonces';
import { EditAnnonceForm } from '../components/annonce/EditAnnonceForm';
import { useSession } from '../hooks/useSession';
import { helper } from '../helpers'
import {api} from '../services/fetch';

// _______________________________  components   _______________________________

const PageVendeur = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: "/", membre: route}, disconnected: '/'})


    const [isAnnonceEdit, setIsCAnnonceEdit] = useState(false);
    const [annonceEdit, setCAnnonceEdit] = useState({});

    const [annoncesList, setCAnnoncesList] = useState([]);
    const fetchAnnoncesList = ()=>{
        api.findAnnoncesByMembre(session.id).then(data=>{
            data!=null && setCAnnoncesList(data)
        }).catch(err=> alert(err))
    }

    useEffect(()=>{
        session && !session?.idAdmin && fetchAnnoncesList()
    }, [])

    const handleEdit = (annonce)=>{
        if(!helper.isAllowed(session, "prompt")) return
        setCAnnonceEdit(annonce)
        setIsCAnnonceEdit(true)
    }

    return(
        <>
            <FixedHeader session={session} setSession={setSession} />
            <Body content={
                <>
                    {
                        isAnnonceEdit? (
                            <EditAnnonceForm fetchAnnoncesList={fetchAnnoncesList} setIsCAnnonceEdit={setIsCAnnonceEdit} annonce={annonceEdit} />
                        ):(
                            <>
                                <AjouterAnnonceForm fetchAnnoncesList={fetchAnnoncesList} session={session} />
                                <VosAnnonces session={session} annoncesList={annoncesList} fetchAnnoncesList={fetchAnnoncesList} handleEdit={handleEdit} />
                            </>
                        )
                    }
                </>
            } />
            <FixedFooter />
        </>
    )
}

export default PageVendeur;