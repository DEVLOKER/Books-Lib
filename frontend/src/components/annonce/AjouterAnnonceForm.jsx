import React, { useEffect, useState } from 'react'
import { ImUpload3 } from "@react-icons/all-files/im/ImUpload3";
import './annonceForm.css'
import { useRef } from 'react';
import { api } from '../../services/fetch'
import { helper } from '../../helpers'
import { constants } from '../../constants'

const randomBooks = [
    {
        "titre": "Learning React",
        "auteur": "Alex Banks",
        "prix": 10.00,
        "descriptionAnnonce": "If you want to learn how to build efficient user interfaces with React, this is your book. Authors Alex Banks and Eve Porcello show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features.",
        "conditionAnnonce": constants.conditionAnnonce[1],
        "date": new Date("05/18/2017").toISOString().split('T')[0],
        "urlPhotoLivre": "",
        "etat": constants.etat[0],
        "ajouterFavorie": 0
    },
    {
        "titre": "Spring Boot",
        "auteur": "Mark Heckler",
        "prix": 36.99,
        "descriptionAnnonce": "With over 75 million downloads per month, Spring Boot is the most widely used Java framework available. Its ease and power have revolutionized application development from monoliths to microservices. Yet Spring Boot's simplicity can also be confounding. How do developers learn enough to be productive immediately? This practical book shows you how to use this framework to write successful mission-critical applications.",
        "conditionAnnonce": constants.conditionAnnonce[0],
        "date": new Date("03/02/2021").toISOString().split('T')[0],
        "urlPhotoLivre": "",
        "etat": constants.etat[0],
        "ajouterFavorie": 0
    }
]

export const AjouterAnnonceForm = ({session, fetchAnnoncesList}) => {
    
    const [addForm, setAddForm] = useState(randomBooks[Math.floor(Math.random()*randomBooks.length)]);
    const [categorie, setCategorie] = useState("");

    const handleSubmitAdd = (event)=>{
        event.preventDefault()
        if(!helper.isAllowed(session, "prompt")) return
        const file = inputFile.current.files[0]
        if(!file?.name) {
            alert("please choose a image !")
            return
        }

        api.addAnnonce(categorie, session.id, addForm, file).then(res=>{
            fetchAnnoncesList()
            alert("annonce published successfully !")
        }).catch(err=> console.log(err))
    }

    const [categoryList, setCategoryList] = useState([]);

    useEffect(()=>{
        api.fetchCategories().then(data=>{
            if(data!=null && data?.length>0) {
                setCategorie(data[0].id)
                setCategoryList(data)
            }
        }).catch(err=> console.log(err))
    }, [])

    const inputFile = useRef()
    const [fileImage, setFileImage] = useState('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=')

    const handlefileChange = (event)=>{
        event?.preventDefault()
        const file = inputFile.current.files[0]
        setAddForm({...addForm, urlPhotoLivre: file.name })
        helper.fileToBase64(file).then((base64)=>{
            setFileImage(base64)
        })
    }


    return (
        <div className="container ajouter-livre-form mt-4 mb-4" >
            <div className="row mt-4">
                <div className="col d-flex justify-content-start">
                    <span className="title mb-0 ps-2 h4"><strong>Publish a book</strong></span>
                </div>
            </div>
            <form className="p-2 mt-4 mb-5" onSubmit={handleSubmitAdd} >
                <div className="row mt-4">
                    <div className="d-grid gap-2 col-3 mx-auto vendeur-image d-flex justify-content-end" >
                        <div className="row mt-2 mb-2">
                            <div className="input-group mb-3 " >
                                <label className="input-group-text d-flex justify-content-center" htmlFor="input-vendeur-image" style={{backgroundImage:`url(${fileImage})`, width: '100%', height: '100%'}} ><ImUpload3 /> <span>Upload image</span></label>
                                <input type="file" ref={inputFile} onChange={(e)=> handlefileChange(e) } className="form-control" id="input-vendeur-image" placeholder="Upload image" accept=".jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*" />
                            </div>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-9 mx-auto">
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" value={addForm.titre} onChange={(e)=> setAddForm({...addForm, titre: e.target.value })} className="form-control" id="input-titre" placeholder="Title" />
                                    <label htmlFor="input-titre">Title</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" value={addForm.auteur} onChange={(e)=> setAddForm({...addForm, auteur: e.target.value })}  className="form-control" id="input-auteur" placeholder="Author" />
                                    <label htmlFor="input-auteur">Author</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating">
                                    <select className="form-select" value={categorie} onChange={(e)=> setCategorie(e.target.value)} id="input-categorie" aria-label="category">
                                        {
                                            categoryList.map((c, i) =>
                                                <option key={c.id} value={c.id}>{c.libelle}</option>
                                            )
                                        }
                                    </select>
                                    <label htmlFor="input-categorie">Category</label>
                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating mb-3">
                                    <input type="text" value={addForm.prix} onChange={(e)=> setAddForm({...addForm, prix: e.target.value })}  min="0" className="form-control" id="input-prix" placeholder="Price" />
                                    <label htmlFor="input-prix">Price</label>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-2">
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="row mt-0">
                                    <div className="d-grid gap-2 col-12 mx-auto">
                                        <div className="form-floating">
                                            <select className="form-select" value={addForm.conditionAnnonce} onChange={(e)=> setAddForm({...addForm, conditionAnnonce: e.target.value })} id="input-categorie" aria-label="category">
                                                {
                                                    constants.conditionAnnonce.map((c, i) =>
                                                        <option key={i} value={c}>{c.toLowerCase().replace("_"," ")}</option>
                                                    )
                                                }
                                            </select>
                                            <label htmlFor="input-categorie">Condition</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="d-grid gap-2 col-6 mx-auto">
                                <div className="form-floating">
                                    <textarea className="form-control" value={addForm.descriptionAnnonce} onChange={(e)=> setAddForm({...addForm, descriptionAnnonce: e.target.value })} placeholder="Description" id="input-description" style={{height: '100px'}}></textarea>
                                    <label htmlFor="input-description">Description</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto mt-5 d-flex justify-content-end">
                    <input type="submit" className="btn publish" value="Publish" />
                </div>
            </form>
        </div>
    )
}
