
import React from 'react'

import { FixedHeader } from '../components/header/FixedHeader';
import { FixedFooter } from '../components/footer/FixedFooter';
import { Body } from '../components/body/Body';
import { LoginForm } from '../components/login/LoginForm';
import { useSession } from '../hooks/useSession';

// _______________________________  components   _______________________________

const PageLogin = ({route}) => {

    const [session, setSession] = useSession({connected: {admin: route, membre: route}, disconnected: route})
    

    return(
        <>
            <FixedHeader session={session} setSession={setSession} />
            <Body content={ <LoginForm session={session} setSession={setSession} /> } />
            <FixedFooter />
        </>
    )
}

export default PageLogin;