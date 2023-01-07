

export const register = (form, admin=1)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/membre/add/${admin}`,{
            method: 'POST',
            body: JSON.stringify(form),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let utilisateur = await response.json()
                resolve(utilisateur)
            } catch (error) {
                reject(error)
            }
        }).catch((err) => {
            reject(err);
        });
    })
}

export const login = (email, motDePasse)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/utilisateur/login`,{
            method: 'POST',
            body: JSON.stringify({"email": email, "motDePasse": motDePasse}),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            !response.ok && reject(false)
            try {
                let utilisateur = await response.json()
                resolve(utilisateur)
            } catch (error) {
                reject(false)
            }
        }).catch((err) => {
            reject(false)
        });
    })
}

export const desactivatePublisher = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(`/membre/desactivate/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let m = await response.json()
                resolve(m)
            } catch (error) { reject(error)}
        })
        .catch((err) => reject(err) );
    })
}

export const activatePublisher = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(`/membre/activate/${id}`,{
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let m = await response.json()
                resolve(m)
            } catch (error) { reject(error)}
        })
        .catch((err) => reject(err) );
    })
}

export const getUtilisateur = (id)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/utilisateur/find/${id}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            !response.ok && reject(false)
            try {
                let utilisateur = await response.json()
                resolve(utilisateur)
            } catch (error) {
                reject(false)
            }
        }).catch((err) => {
            reject(false)
        });
    })
}
