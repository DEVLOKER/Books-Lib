import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../services/fetch'


export const LoginForm = ({session, setSession}) => {

    const [form, setForm] = useState({"email": "admin@mail.com", "motDePasse": "admin"}) 


    const navigate = useNavigate()

    useEffect(()=>{
        session!=null && setForm({"email": session.email, "motDePasse": session.motDePasse})
    },[])

    const handleSubmit = (event)=>{
        event.preventDefault()

        api.login(form.email, form.motDePasse).then(utilisateur=>{
            if(utilisateur!=null){
                setSession(utilisateur)
                utilisateur?.idAdmin? navigate('/admin') : navigate('/vendeur')
            }
        }).catch((err) => {
            alert("username or password incorrect !")
        });
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <div className="row mt-4">
                <div className="col">
                    <span className="title mb-0 ps-2 h4"><strong>Login</strong></span>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="email" value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} className="form-control" id="input-email" placeholder="Enter email" />
                            <label htmlFor="input-email">Enter email</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="password" value={form.motDePasse} onChange={(e)=> setForm({...form, motDePasse: e.target.value})} className="form-control" id="input-password" placeholder="Enter password" />
                            <label htmlFor="input-password">Enter password</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <input type="submit" className="btn btn-primary_" style={{ background: 'var(--primary)', color: '#ffffff' }} value="Login" />
                    </div>
                </div>
                <div className="row mt-4">
                    <p>
                        don't have an account?
                        <Link className="link text-decoration-underline ps-3" style={{ color: 'var(--primary)'}} to="/register">
                            Register
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
