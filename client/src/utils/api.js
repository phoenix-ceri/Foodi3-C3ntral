const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY;

export default function spoonacular(search) {
    return fetch(`https://api.spoonacular.com/recipes/complexSearch?&apiKey=${apiKey}query=${search}`).then(response => {
        return response.json()
    })
}