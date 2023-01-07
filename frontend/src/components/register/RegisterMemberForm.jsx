import React from 'react'
import { ImUpload3 } from "@react-icons/all-files/im/ImUpload3";
import { Link } from 'react-router-dom';
import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/fetch';
import { constants } from '../../constants';

export const RegisterMemberForm = ({session, setSession}) => {

    const retypePasswordRef = useRef();
    const navigate = useNavigate()

    const [form, setForm]= useState({
        "email": "user01@mail.com",
        "motDePasse": "1111",
        "prenom": "lastname 01",
        "nom": "firstname 01",
        "pays": "Canada",
        "ville": "vancouver",
        "adresse": "addr 01",
        "numeroTelephone": "010101010",
        "province": "british columbia",
        "codePostal": "01111",
        "urlPhotoProfile": "",
        "etat": constants.etat[0]
    })



    const handleSubmit = (event)=>{
        event.preventDefault()
        if(retypePasswordRef.current.value!==form.motDePasse){
            alert("two passwords are not the same!")
            return
        }

        api.register(form).then(utilisateur=>{
            if(utilisateur!=null){
                setSession(utilisateur)
                alert("signup successfully !")
                navigate('/')
            }
        }).catch(err=>console.log(err))
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <form onSubmit={handleSubmit}>
                <div className="row mt-4 mb-5">
                    <div className="col">
                        <span className="title mb-0 ps-2 h4"><strong>Register now as a <span className="text-primary_" style={{ color: 'var(--primary)'}} >Member</span></strong></span>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text"  value={form.nom} onChange={(e)=> setForm({...form, nom: e.target.value})} className="form-control form-control-sm" id="input-firstname" placeholder="first name" />
                            <label htmlFor="input-firstname">first name</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.prenom} onChange={(e)=> setForm({...form, prenom: e.target.value})} className="form-control" id="input-lastname" placeholder="last name" />
                            <label htmlFor="input-lastname">last name</label>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="email" value={form.email} onChange={(e)=> setForm({...form, email: e.target.value})} className="form-control" id="input-email" placeholder="email" />
                            <label htmlFor="input-email">email</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="password" value={form.motDePasse} onChange={(e)=> setForm({...form, motDePasse: e.target.value})} className="form-control" id="input-password" placeholder="password" />
                                    <label htmlFor="input-password">password</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="password" ref={retypePasswordRef} className="form-control" id="input-password-confirm" placeholder="confirm password" />
                                    <label htmlFor="input-password-confirm">confirm password</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <span className="title mb-0 ps-2 h4 text-start">Address</span>
                    {/* <p className="text-primary text-start fw-bold" >Address</p> */}
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.adresse} onChange={(e)=> setForm({...form, adresse: e.target.value})} className="form-control form-control-sm" id="input-address" placeholder="Address" />
                            <label htmlFor="input-address">Address</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.ville} onChange={(e)=> setForm({...form, ville: e.target.value})} className="form-control" id="input-city" placeholder="City" />
                            <label htmlFor="input-city">City</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.province} onChange={(e)=> setForm({...form, province: e.target.value})} className="form-control form-control-sm" id="input-province" placeholder="Province" />
                            <label htmlFor="input-province">Province</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.codePostal} onChange={(e)=> setForm({...form, codePostal: e.target.value})} className="form-control form-control-sm" id="input-zipcode" placeholder="zip code" />
                            <label htmlFor="input-zipcode">zip code</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.pays} onChange={(e)=> setForm({...form, pays: e.target.value})} className="form-control form-control-sm" id="input-country" placeholder="Country" />
                            <label htmlFor="input-country">Country</label>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto">
                        <div className="form-floating mb-3">
                            <input type="text" value={form.numeroTelephone} onChange={(e)=> setForm({...form, numeroTelephone: e.target.value})} className="form-control form-control-sm" id="input-phone-number" placeholder="Phone Number" />
                            <label htmlFor="input-phone-number">Phone Number</label>
                        </div>
                    </div>
                </div>

                <div className="row mt-2">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="input-image" ><ImUpload3 /> Upload image</label>
                        <input type="file" value={form.urlPhotoProfile} onChange={(e)=> setForm({...form, urlPhotoProfile: e.target.value})} className="form-control" id="input-image" placeholder="Upload image" />
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-12 mx-auto">
                        <input type="submit" className="btn btn-primary_" style={{ background: 'var(--primary)', color: '#ffffff'}} value="Register now" />
                    </div>
                </div>
                <div className="row mt-4">
                    <p>
                        you have an account?
                        <Link className="link text-decoration-underline ps-3" style={{ color: 'var(--primary)'}} to="/login">
                            Login
                        </Link>
                    </p>
                </div>
            </form>
        </div>
    )
}
