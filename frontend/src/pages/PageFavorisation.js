
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { FavorisationList } from '../components/favorisation/FavorisationList';
import { useSession } from '../hooks/useSession';

// _______________________________  components   _______________________________

const PageVendeur = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: '/', membre: route}, disconnected: '/'})
    

    return(
        <>
            <FixedHeader session={session} setSession={setSession} />
            <Body content={
                <FavorisationList session={session} />
            } />
            <FixedFooter />
        </>
    )
}

export default PageVendeur;