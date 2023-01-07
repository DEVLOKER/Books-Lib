

export const addWishList = (membre, annonce, formFavorisation)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/favorisation/add/${membre}/${annonce}`,{
            method: 'POST',
            body: JSON.stringify(formFavorisation),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let favorisation = await response.json()
                resolve(favorisation)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const getFavorisation = (membre, annonce)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/favorisation/find/${membre}/${annonce}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let favorisation = await response.json()
                resolve(favorisation)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const getFavorisations = (membre)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/favorisation/find/${membre}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let favorisation = await response.json()
                resolve(favorisation)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const deleteFavorisation = (favorisationId)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/favorisation/delete/${favorisationId}`,{
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let favorisation = await response.json()
                resolve(favorisation)
            } catch (error) {reject(error)}
        })
        .catch((err) => reject(err));
    })
}