
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { ExpiditeuresMessages } from '../components/message/ExpiditeuresMessages';
import { useSession } from '../hooks/useSession';

// _______________________________  components   _______________________________

const PageMessages = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: '/', membre: route}, disconnected: '/'})
    

    return(
        <>
            <FixedHeader session={session} setSession={setSession} />
            <Body content={ <ExpiditeuresMessages session={session} /> } />
            <FixedFooter />
        </>
    )
}

export default PageMessages;