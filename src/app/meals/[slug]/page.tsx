type MealDetailsPageProps = {
    params: {
        slug: string;
    };
};

export default function MealDetailsPage({ params }: MealDetailsPageProps) {
    return (
        <div>
            <h2>The Meal Details Page</h2>
            <p>Viewing meal with id: {params.slug}</p>
        </div>
    );
}
