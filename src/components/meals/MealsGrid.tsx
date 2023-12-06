import MealItem from '@/components/meals/MealItem';
import { Meal } from '@/types/meal';

type MealsGridProps = {
    meals: Meal[];
};

export default function MealsGrid({ meals }: MealsGridProps) {
    return (
        <ul className='mx-auto my-8 grid w-[90%] max-w-[90rem] grid-cols-[repeat(auto-fill,minmax(20rem,1fr))] gap-20'>
            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal} />
                </li>
            ))}
        </ul>
    );
}
