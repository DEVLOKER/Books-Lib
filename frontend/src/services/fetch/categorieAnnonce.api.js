
export const addCategorie = (addForm) => {
    return new Promise((resolve, reject)=>{
        fetch(`/categorieAnnonce/add`,{
            method: 'POST',
            body: JSON.stringify(addForm),
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

export const fetchCategories = () => {
    return new Promise((resolve, reject)=>{
        fetch(`/categorieAnnonce/all`,{
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            try {
                let categories = await response.json()
                resolve(categories)
            } catch (error) {
                reject(error)
            }
        })
        .catch((err) => {
            reject(err)
        });
    })
}

export const editCategorie = (updateForm) => {
    return new Promise((resolve, reject)=>{
        fetch(`/categorieAnnonce/update/${updateForm.id}`,{
            method: 'PUT',
            body: JSON.stringify(updateForm),
            headers: { 'Content-Type': 'application/json' },
        })
        .then(async (response) => {
            console.log(response)
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

export const deleteCategorie = (deleteForm) => {
    return new Promise((resolve, reject)=>{
        fetch(`/categorieAnnonce/delete/${deleteForm.id}`,{
            method: 'DELETE',
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