import { Group, Stack, rem } from "@mantine/core";
import { NutritionalValueCard, NutritionalValues } from "../createFoodPanelComponents/nutritionalValuesCard";
import { NutritionalServings, ServingSizesCard } from "../createFoodPanelComponents/servingSizesCard";
import { NutritionalInfo, NutritionalInfoCard } from "../createFoodPanelComponents/nutritionalInfoCard";
import { useState } from "react";
import { notifications } from "@mantine/notifications";
import { IconCheck, IconX } from "@tabler/icons-react";
import { supabase } from "../../../supabase/supabase";
import { NutritionalScore, NutritionalScoreCard } from "../createFoodPanelComponents/nutritionalScoreCard";

export const CreateFoodPanel = () => {
    const [nutriValues, setNutriValues] = useState<NutritionalValues>({
        kcal: 0,
        fat: 0,
        fat_saturated: 0,
        carbs: 0,
        sugar: 0,
        protein: 0,
        salt: 0,
        fibre: 0,
    });
    const [nutriInfo, setNutriInfo] = useState<NutritionalInfo>({
        name: "",
        water_percentage: 0,
    });
    const [nutriServings, setNutriServings] = useState<NutritionalServings>({
        servings: [],
    });
    const [nutriScores, setNutriScores] = useState<NutritionalScore>({
        nutri_score: 0,
        nova_score: 0,
    });


    const addFoodTypeToDatabase = async () => {
        const id = notifications.show({
            title: "pog",
            message: "even bigger pog in fact",
            withCloseButton: false,
            withBorder: true,
            autoClose: false,
            icon: <IconCheck />,
            loading: true,
        });
        const { error } = await supabase.from('food_types').insert({
            carbs: nutriValues.carbs,
            fat: nutriValues.fat,
            fat_saturated: nutriValues.fat_saturated,
            sugar: nutriValues.sugar,
            kcal: nutriValues.kcal,
            fibre: nutriValues.fibre,
            salt: nutriValues.salt,
            protein: nutriValues.protein,
            name: nutriInfo.name,
            servings: JSON.stringify(nutriServings.servings),
            water_percentage: nutriInfo.water_percentage,
            portion_weigth: 100,
            nova_score: nutriScores.nova_score == 5 ? null : nutriScores.nova_score,
            nutri_score: nutriScores.nutri_score == 6 ? null : nutriScores.nutri_score,
        });
        if (error) {
            notifications.update({
                id,
                message: 'not git',
                color: 'red',
                icon: <IconX></IconX>,
                loading: false,
                autoClose: 2000,
                withCloseButton: true,
            })
        }
        else {
            notifications.update({
                id,
                message: 'git',
                color: 'green',
                loading: false,
                autoClose: 2000,
                withCloseButton: true,
            })
        }
    };

    return (
        <Group w={"100%"} justify="center">
            <Group pt={50} justify="center" align="flex-start" w={"80%"}>
                <Stack w={rem(300)}>
                    <NutritionalInfoCard onAddFoodClicked={addFoodTypeToDatabase} setNutriInfo={setNutriInfo} />
                    <ServingSizesCard setNutriServings={setNutriServings} />
                </Stack>
                <Stack w={rem(300)}>
                    <NutritionalValueCard setNutriValue={setNutriValues} />
                    <NutritionalScoreCard setNutriScore={setNutriScores}/>
                </Stack>
            </Group>
        </Group>
    );
};
