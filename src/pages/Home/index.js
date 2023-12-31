import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { recipesList } from '../../redux/recipes/slice';
import RecipeCard from '../../components/RecipeCard';
import { FaSearch } from 'react-icons/fa';
import CustomSpinner from '../../components/customSpinner';

const Home = () => {
    const dispatch = useDispatch();
    const { data, loading } = useSelector((store) => store.recipes);
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = () => {
        dispatch(recipesList(searchQuery));
    };

    useEffect(() => {
        dispatch(recipesList(searchQuery));
    }, [dispatch]);

    return (
        <div className="home-container">
            <p>
                Enter a what you have eaten, like "coffee and croissant" or "chicken enchilada" to see how it works. We have accurate data tens of thousands of foods, including international dishes.
            </p>
            <p className='keywords'>Keywords</p>
            <div className="search-container">
                <div className="search-icon" onClick={handleSearch}>
                    <FaSearch />
                </div>
                <input
                    className="search-input"
                    type="text"
                    placeholder="Type one or more keywords"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="recipes-list">
                {loading ? (
                    <CustomSpinner />
                ) : data.length > 0 ? (
                    <>
                        <h3 className='recipes-center'>{data.length} recipes found</h3>
                        <h1>Recipes</h1>
                        {data.map((recipe) => (
                            <div key={recipe.id} className="recipe-item">
                                <RecipeCard recipe={recipe} />
                            </div>
                        ))}
                    </>
                ) : (
                    <div>No recipe yet, please submit a recipe!</div>
                )}
            </div>
        </div>
    );
};

export default Home;
