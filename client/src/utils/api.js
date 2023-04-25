export default function spoonacular(search) {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?query=${search}&apiKey=${REACT_APP_SPOONACULAR_API_KEY}`).then(response => {
        return response.json()
    })
}