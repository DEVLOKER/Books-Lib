
export const reportAnnonce = (membre, annonce, formEvaluation)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/signalisation/add/${membre}/${annonce}`,{
            method: 'POST',
            body: JSON.stringify(formEvaluation),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let evaluation = await response.json()
                resolve(evaluation)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const findSignalisation = (membre, annonce)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/signalisation/find/${membre}/${annonce}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let signalisation = await response.json()
                resolve(signalisation)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const getSignalisations = (admin)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/signalisation/find/${admin}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let signalisations = await response.json()
                resolve(signalisations)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const deleteSignalisation = (id) => {
    return new Promise((resolve, reject)=>{
        fetch(`/signalisation/delete/${id}`,{
            method: 'DELETE',
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