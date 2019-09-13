export const getFilms = () => {
  return fetch('https://ghibliapi.herokuapp.com/films/')
    .then(response => {
      if (!response.ok) {
        throw Error('Error fetching films')
      }
      return response.json()
    })
    .catch(error => {
      throw Error(error.message)
    })
}
