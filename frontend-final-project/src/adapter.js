class Adapter {

  static logIn = (data) => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
  }

  static signUp = (data) => {
    return fetch(`http://localhost:3001/api/v1/${Object.keys(data)[0]}s`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => response.json())
  }





  static getPhotos = () => {
    return fetch("http://localhost:3001/api/v1/photos")
    .then(resp => resp.json())
  }

  static fetchAllPhotographersURLs = () => {
    return fetch("http://localhost:3001/api/v1/photographers")
    .then(resp => resp.json())
  }


  static getTags = () => {
    return fetch("http://localhost:3001/api/v1/tags")
    .then(resp => resp.json())
  }





  // static getLoggedInPhotographer = () => {
  //   return fetch('http://localhost:3001/api/v1/current_photographer', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Authorization': localStorage.getItem("jwt")
  //     },
  //   })
  //   .then(response => response.json())
  // }

  static getLoggedInUser = () => {
    const token = localStorage.getItem("jwt")
    return fetch('http://localhost:3001/api/v1/get_loggedin_user', {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `${token}`
      },
    })
    .then(response => response.json())
  }

  static fetchPhotographer = (id) => {
    return fetch(`http://localhost:3001/api/v1/photographers/${id}`)
    .then(response => response.json())
  }

  static fetchPhotographerforRoute = (route) => {
    return fetch(`http://localhost:3001/api/v1/get_selected_photographer`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ photographer: {custom_url: route} })
    })
    .then(response => response.json())
  }


  static fetchPackages = (id) => {
    return fetch(`http://localhost:3001/api/v1/photographer_packages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ packages: {photographer_id: id} })
    })
    .then(response => response.json())
  }


}



export default Adapter
