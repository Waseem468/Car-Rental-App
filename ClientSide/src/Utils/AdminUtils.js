const ADMIN_API='https://car-rental-app-1-5tgr.onrender.com'

function addNewAdmin(AdminData){
    return fetch(`${ADMIN_API}/admin/register`, {
        method: 'POST',
        mode: 'cors',
       headers:{
        "content-type":"application/json",
       } ,
       body:JSON.stringify(AdminData)
    })
    .then(res => res.json())
}

export {addNewAdmin}