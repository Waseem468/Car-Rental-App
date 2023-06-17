// const ADMIN_API='https://car-rental-app1-backend.onrender.com';
const ADMIN_API='http://localhost:5000'
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