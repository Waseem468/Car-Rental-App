
const API_BASE_URL = 'http://localhost:5000';


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

export { deleteCar}