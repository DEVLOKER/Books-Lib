
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { RegisterMemberForm } from '../components/register/RegisterMemberForm';
import { useSession } from '../hooks/useSession';

// _______________________________  components   _______________________________

const PageInscription = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: '/', membre: route}, disconnected: route})
    

    return(
        <>
            <FixedHeader session={session} setSession={setSession} />
            <Body content={
                <RegisterMemberForm session={session} setSession={setSession} />
            }/>
            <FixedFooter />
        </>
    )
}

export default PageInscription;