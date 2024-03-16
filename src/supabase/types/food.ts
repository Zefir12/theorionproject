export interface FoodType {
    carbs: any;
    fat: any;
    portion_weigth: Number;
    water_percentage: Number;
    name: string;
    protein: Number;
    kcal: Number;
}

export interface Food {
    id: Number;
    time_of_intake: string;
    food_types: FoodType;
    food_amount: Number;
}

export interface TotalDailyMacro {
    kcal: Number,
    sugar: Number,
    carbs: Number,
    fat: Number,
    saturated_fat: Number,
    protein: Number,
}