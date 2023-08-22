import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {
    const {
        label,
        healthLabels,
        yield: servings,
        calories,
        totalNutrients,
        image
    } = recipe.recipe;

    const navigate = useNavigate();

    const handleRoute = () => {
        navigate('/recipe', {
            state: {
                url: recipe._links.self.href
            }
        })
    }
    return (
        <div className="recipe-card cursor-pointer" onClick={handleRoute}>
            <div className='recipes-card-flex'>
                <img src={image} alt='recipe' height={300} width={300} />
                <div>
                    <h2 className="recipe-title">{label}</h2>
                    <div className="health-labels">
                        <ul className='list-space'>
                            {healthLabels.map((label) => (
                                <li key={label} className="health-label">
                                    {label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='card-flex-first card-servings-main'>
                    <p className='card-servings'>{servings} servings</p>
                    <span className='card-calories'>{parseInt(calories / servings)} </span>
                    <span className='servings-kcal'>kcal</span>
                </div>
                <div className="nutrients nutrients-part card-flex">
                    <ul>
                        <div className='nutrients-bottom-part'>
                            <li className='list-one'><span>PROTEIN</span></li>
                            <p className='nutrients-font'>
                                {parseInt(totalNutrients.PROCNT.quantity / servings)} {totalNutrients.PROCNT.unit}
                            </p>
                        </div>
                        <div className='nutrients-bottom-part'>
                            <li className='list-two'><span>FAT</span></li>
                            <p className='nutrients-font'>
                                {parseInt(totalNutrients.FAT.quantity / servings)} {totalNutrients.FAT.unit}
                            </p>
                        </div>
                        <div className='nutrients-bottom-part'>
                            <li className='list-three'><span>CARB</span></li>
                            <p className='nutrients-font'>
                                {parseInt(totalNutrients.CHOCDF.quantity / servings)} {totalNutrients.CHOCDF.unit}
                            </p>
                        </div>
                    </ul>
                </div>
                <div className='nutrients-part card-flex'>
                    <div className='nutrients-servings'>
                        <span>Cholesterol</span>
                        <span className='nutrients-font'>{parseInt(totalNutrients.CHOLE.quantity / servings)} {totalNutrients.CHOLE.unit}</span>
                    </div>
                    <div className='nutrients-servings'>
                        <span>Sodium</span>
                        <span className='nutrients-font'>{parseInt(totalNutrients.NA.quantity / servings)} {totalNutrients.NA.unit}</span>
                    </div>
                    <div className='nutrients-servings'>
                        <span>Calcium</span>
                        <span className='nutrients-font'>{parseInt(totalNutrients.CA.quantity / servings)} {totalNutrients.CA.unit}</span>
                    </div>
                    <div className='nutrients-servings'>
                        <span>Magnesium</span>
                        <span className='nutrients-font'>{parseInt(totalNutrients.MG.quantity / servings)} {totalNutrients.MG.unit}</span>
                    </div>
                    <div className='nutrients-servings'>
                        <span>Potassium</span>
                        <span className='nutrients-font'>{parseInt(totalNutrients.K.quantity / servings)} {totalNutrients.K.unit}</span>
                    </div>
                    <div className='nutrients-servings'>
                        <span>Iron</span>
                        <span className='nutrients-font'>{parseInt(totalNutrients.FE.quantity / servings)} {totalNutrients.FE.unit}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;
