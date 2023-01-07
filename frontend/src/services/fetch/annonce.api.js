import { uploadImage } from "./upload.api"

export const addAnnonce = (categorie, membreId, addForm, file)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/annonce/add/${categorie}/${membreId}`,{
            method: 'POST',
            body: JSON.stringify(addForm),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                uploadAnnonceImage(file).then((res)=>{
                    resolve(data)
                })
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const editAnnonce = (categorie, annonceId, editForm, file)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/annonce/update/${categorie}/${annonceId}`,{
            method: 'PUT',
            body: JSON.stringify(editForm),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                uploadAnnonceImage(file).then((res)=>{
                    resolve(data)
                })
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const fetchAnnonces = (url)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/annonce/${url}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                resolve(data)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const findAnnoncesByMembre = (membre)=>{
    return new Promise((resolve, reject)=>{
        fetchAnnonces(`/findByMembre/${membre}`).then(data=> {
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export const findAnnoncesByEtat = (etat)=>{
    return new Promise((resolve, reject)=>{
        fetchAnnonces(`/findByEtat/${etat}`).then(data=> {
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export const findAnnoncesByCategorie = (categorie)=>{
    return new Promise((resolve, reject)=>{
        fetchAnnonces(`/findByCategorie/${categorie}`).then(data=> {
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export const findAnnoncesByTitreOrPrix = (word)=>{
    return new Promise((resolve, reject)=>{
        fetchAnnonces(`/findByTitreOrPrix/${word}`).then(data=> {
            resolve(data)
        }).catch(err=>{
            reject(err)
        })
    })
}

export const uploadAnnonceImage = (file)=>{
    return new Promise((resolve, reject)=>{
        uploadImage(file, `/annonce/upload`).then(res=>{
            resolve(res)
        }).catch(err=>{
            reject(err)
        })
    })     
}

export const desactivateAnnonce = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(`/annonce/desactivate/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const activateAnnonce = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(`/annonce/activate/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                resolve(true)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}
