export interface FoodType {
    carbs: any;
    fat: any;
    portion_weigth: number;
    water_percentage: number;
    name: string;
    protein: number;
    kcal: number;
}

export interface Food {
    id: number;
    time_of_intake: string;
    food_types: FoodType;
    food_amount: number;
}

export interface TotalDailyMacro {
    kcal: number,
    sugar: number,
    carbs: number,
    fat: number,
    saturated_fat: number,
    protein: number,
}