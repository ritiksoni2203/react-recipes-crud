import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRecipe } from '../../redux/recipes/slice';
import { useLocation, useParams } from 'react-router-dom';
import CustomSpinner from '../../components/customSpinner';

const RecipeDetail = () => {
    const dispatch = useDispatch();
    const { id: recipeId } = useParams();
    const { loading, profile: recipe } = useSelector((store) => store.recipes)
    const { state } = useLocation();

    useEffect(() => {
        dispatch(getRecipe(state.url));
    }, [dispatch, recipeId]);

    const {
        label,
        healthLabels,
        image
    } = recipe;

    return (
        <>
            {loading && <CustomSpinner />}
            <div className="recipe-details">
                <div className="recipe-card">
                    <div className='recipes-card-flex'>
                        <img src={image} alt='recipe' height={300} width={300} />
                        <div>
                            <h2 className="recipe-title">{label}</h2>
                            <div className="health-labels">
                                <ul className='list-space'>
                                    {healthLabels?.map((label) => (
                                        <li key={label} className="health-label">
                                            {label}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ingredients">
                    <h3>{recipe.ingredientLines?.length} Ingredients:</h3>
                    <ul>
                        {recipe?.ingredientLines?.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default RecipeDetail;
