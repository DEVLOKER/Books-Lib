import { helper } from "../../helpers";

export const getExpiditeurs = (membreId)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/message/find/${membreId}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                const grouped = helper.groupBy(data, 'expediteur') // expediteur, receveur
                const expediteurs = []
                Object.keys(grouped).map((MessagesByExpediteur, i) =>{
                    const msg = grouped[`${MessagesByExpediteur}`][0]
                    // msg.expediteur!==membreId && 
                    expediteurs.push(msg)
                })
                resolve(expediteurs)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const syncMessages = (membreId)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/message/sync/${membreId}`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let data = await response.json()
                resolve(data.length)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const getMessages = (expediteur, receveur)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/message/find/${expediteur}/${receveur}`,{ // findByExpediteur     findByReceveur
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let messages = await response.json()
                messages.sort((a, b)=>{
                    // return new Date(b.date).getTime() - new Date(a.date).getTime();
                    return a.id - b.id;
                })
                resolve(messages)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const sendMessage = (expediteur, receveur, formMessage)=>{
    return new Promise((resolve, reject)=>{
        fetch(`/message/send/${expediteur}/${receveur}`,{
            method: 'POST',
            body: JSON.stringify(formMessage),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let message = await response.json()
                resolve(message)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}