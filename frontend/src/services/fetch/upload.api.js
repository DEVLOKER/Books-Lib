import { helper } from "../../helpers";

export const uploadImage = (file, url)=>{
    return new Promise((resolve, reject)=>{
        helper.fileToBase64(file).then((base64)=>{
            const data = { "base64": base64.replace('data:', '').replace(/^.+,/, ''), "name": file.name }
            fetch(url,{
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            })
            .then(async (response) => {
                resolve(response.ok)
            })
            .catch((err) => {
                reject(false)
            });
        })
    })     
}