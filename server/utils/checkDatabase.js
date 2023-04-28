const axios = require('axios');
const { ApolloError } = require('apollo-server-express');

const checkDatabase = async (req, res, next) => {
    const { query } = req.body;

    // check if spoonId already exists in the database
    const existingRecipe = await Recipe.findOne({ spoonId: query });

    if (!existingRecipe) {
        // if spoonId does not exist, make an API call to Spoonacular
        try {
            const { data } = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${query}`);

            // save the result to the database
            const newRecipe = new Recipe({
                spoonId: query,
                ...data,
            });
            await newRecipe.save();
        } catch (error) {
            throw new ApolloError(error);
        }
    }

    next();
};

module.exports = checkDatabase;
