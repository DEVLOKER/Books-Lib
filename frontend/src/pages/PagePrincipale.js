
import React, { useRef } from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { ListeAnnonces } from '../components/annonce/ListeAnnonces';
import { useSession } from '../hooks/useSession';
import { useSearchParams } from 'react-router-dom';

// _______________________________  components   _______________________________

const PagePrincipale = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: route, membre: route}, disconnected: '/'})
    const searchWordRef = useRef(null);
    
    return(
        <>
            <FixedHeader ref={searchWordRef} session={session} setSession={setSession} />
            <Body content={ <ListeAnnonces session={session} searchWordRef={searchWordRef} /> } />
            <FixedFooter />
        </>
    )
}

export default PagePrincipale;