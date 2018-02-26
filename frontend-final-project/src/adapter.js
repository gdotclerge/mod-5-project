class Adapter {


  static getPhotos = () => {
    return fetch("http://localhost:3001/api/v1/photos")
    .then(resp => resp.json())
  }

  static getPhotographers = () => {
    return fetch("http://localhost:3001/api/v1/photographers")
    .then(resp => resp.json())
  }


  static getTags = () => {
    return fetch("http://localhost:3001/api/v1/tags")
    .then(resp => resp.json())
  }


  static loginPhotographer = ({username, password}) => {
    return fetch('http://localhost:3001/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ photographer: {username, password} })
    })
    .then(response => response.json())
  }


}



export default Adapter
