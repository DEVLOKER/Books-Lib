import React, { forwardRef, useEffect, useImperativeHandle, useState } from 'react'
import { Annonce } from './Annonce';
import { api } from '../../services/fetch'
import { AnnonceDetailModel } from './AnnonceDetailModel';
import { Evaluation } from '../evaluation/Evaluation';
import { Signalisation } from '../signalisation/Signalisation';
import { useNavigate, useLocation } from "react-router-dom";
import { useLayoutEffect } from 'react';


export const ListeAnnonces = ({session, searchWordRef}) => {

    const location = useLocation()
    const searchWord = location?.state?.word


    const [categoryList, setCategoryList] = useState([]);
    const [annoncesList, setAnnoncesList] = useState([]);
    const [selectedAnnonce, setSelectedAnnonce] = useState({});
    const [openedModels, setOpenedModels] = useState({detail: false, evaluation: false, report: false})

    useEffect(()=>{

        api.fetchCategories().then(annonces=>{
            annonces!=null && setCategoryList(annonces)
        })

        if(typeof searchWord=="undefined" || searchWord==null || searchWord===""){
            api.findAnnoncesByEtat(1).then(data=>{
                data!=null && setAnnoncesList(data)
            })
            return
        }else{
            searchWordRef.current.triggerWord(searchWord)
            api.findAnnoncesByTitreOrPrix(searchWord).then(data=>{
                data!=null && setAnnoncesList(data)
            })
        }
        
    }, [searchWord])

    const findAnnoncesByCategorie = (categorie)=> {
        api.findAnnoncesByCategorie(categorie).then(data=>{
            data!=null && setAnnoncesList(data)
        })
    }

    return (
        <div className="container text-center mt-4 mb-4" >
            <div className="row mt-0">
                <div className="col">
                    <span className="title mb-0 ps-2 h4"><strong>Shop by Category</strong></span>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    {
                        categoryList.map((c, i) =>
                            <span key={c.id} >
                                <a href="#" onClick={(e)=> findAnnoncesByCategorie(c.id)} className="btn btn-light btn-sm m-0">{c.libelle}</a>
                                {i+1 < categoryList.length && <span className="p-3" >|</span>}
                            </span>
                        )
                    }
                </div>
            </div>
            <div className="row row-cols-1 row-cols-md-5 g-4 mt-3">
                {
                    annoncesList?.length==0 && <div className="col w-100"><h5 className='text-center text-dark'> empty results!</h5></div>
                }
                {
                    annoncesList?.map((annonce, i) =>
                        <div className="col" key={i} >
                            <Annonce session={session} annonce={annonce} setOpenedModels={setOpenedModels} setSelectedAnnonce={setSelectedAnnonce}  />
                        </div>
                    )
                }
            </div>
            {
                openedModels.detail && <AnnonceDetailModel session={session} annonce={selectedAnnonce} setOpenedModels={setOpenedModels} />
            }
            {
                openedModels.evaluation && <Evaluation session={session} annonce={selectedAnnonce} setOpenedModels={setOpenedModels} />
            }
            {
                openedModels.report && <Signalisation session={session} annonce={selectedAnnonce} setOpenedModels={setOpenedModels} />
            }
        </div>
    )
}
