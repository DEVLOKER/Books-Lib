
export const evaluateAnnonce = (membre, annonce, formEvaluation)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/evaluation/add/${membre}/${annonce}`,{
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

export const findEvaluation = (membre, annonce)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/evaluation/find/${membre}/${annonce}`,{
            method: 'GET',
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


export const getEvaluations = (annonce)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/evaluation/get/${annonce}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let evaluations = await response.json()
                resolve(evaluations)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}