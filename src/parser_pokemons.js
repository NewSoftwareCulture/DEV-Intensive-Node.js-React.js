import express from 'express';
import fetch from 'isomorphic-fetch';
import Promise from 'bluebird';
import _ from 'lodash';

import canonize from './canonize';

const pokeUrl = 'https://pokeapi.co/api/v2/';
const fields = ['id', 'name', 'height', 'order', 'weight'];
const __DEV__ = true;


const app = express();
app.get('/canonize', (req, res) => {
    const url = req.query.url;
    const username = canonize(url).toLowerCase();
    return res.json({
        url,
        username,
    });
});


async function getPokemons(url, i = 0){
    console.log('getPockemons ', url, i);
    const responce = await fetch(url);

    const page = await responce.json();
    const pokemons = page.results;
    if (__DEV__ && i > 1) {
        return pokemons;
    };
    if (page.next) {
        const pokemons2 = await getPokemons(page.next, i + 1);
        return [
            ...pokemons,
            ...pokemons2,
        ]
    };
    return pokemons;
}


async function getPokemon(url){
    console.log('getPokemon ', url);
    const responce = await fetch(url);

    const pokemon = await responce.json();
    return pokemon;
}


app.get('/poke', async (req, res) => {
    try{
        const pokemonsUrl = `${pokeUrl}/pokemon`;
        const pokemonsInfo = await getPokemons(pokemonsUrl);
        const pokemonPromises = pokemonsInfo.map(info => {
            return getPokemon(info.url);
        });


        const pokemonsFull = await Promise.all(pokemonPromises);
        const pokemons = pokemonsFull.map((pokemon) => {
            return _.pick(pokemon, fields);
        });

        const sortPokemons = _.sortBy(pokemons, pokemon => -pokemon.weight);

        return res.json({
            sortPokemons,
        });
    }
    catch(err){
        console.log(err);
        return res.json({
            err,
        });
    }
    
});

app.get('/8080', function(req, res) {
    res.send('Bye world');
});

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});