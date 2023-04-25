const API_KEY = process.env.SPOONACULAR_API_KEY;

export default function spoonacular (search) {
    return fetch (`https://api.spoonacular.com/recipes/complexSearch?query=${search}`).then(response => {
        return response.json()
    })
}
