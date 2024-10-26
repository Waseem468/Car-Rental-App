
const API_BASE_URL = 'https://car-rental-app-1-5tgr.onrender.com';


function GetCars(){
    return fetch(`${API_BASE_URL}/car`,{
      headers:{
          "authorization":JSON.parse(localStorage.getItem("token-admin"))
      }
    })
    .then(res=>res.json())
  }
  
  
  function GetCar(id){
      return fetch(`${API_BASE_URL}/car/${id}`,{
        headers:{
            "authorization":JSON.parse(localStorage.getItem("token-admin"))
        }
      })
      .then(res=>res.json())
    }
  
  function addCar(cardata){
      return fetch(`${API_BASE_URL}/car`, {
          method: 'POST',
          headers:{
              "authorization":JSON.parse(localStorage.getItem("token-admin"))
          },
         body: cardata
      })
      .then(res => res.json())
  }




function deleteCar(id) {
    return fetch(`${API_BASE_URL}/car/${id}`, {
        method: 'DELETE',
        headers: {
            "authorization": JSON.parse(localStorage.getItem("Admin-token"))
        },
    }).then(res => {
        if (res.status === 200) {
            return true
        }
        return false
    })
}

export {addCar, GetCars,deleteCar, GetCar}