import React from "react";
import spoonacular from "../../utils/api";
function recipeSearch() {
    function callAPI() {
        spoonacular('chicken').then(response => response.json()).then(data => console.log(data))
    }
    return (
        <div class="input-group input-group-sm mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="inputGroup-sizing-sm">Small</span>
            </div>
            <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
            </input>
            <button type="button" onClick={callAPI}></button>
        </div>
    )
}

export default recipeSearch;