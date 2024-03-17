import { Group, Stack, rem } from "@mantine/core";
import { NutritionalValueCard, NutritionalValues } from "../createFoodPanelComponents/nutritionalValuesCard";
import { ServingSizesCard } from "../createFoodPanelComponents/servingSizesCard";
import { NutritionalInfo, NutritionalInfoCard } from "../createFoodPanelComponents/nutritionalInfoCard";
import { useState } from "react";

export const CreateFoodPanel = () => {
    const [nutriValues, setNutriValues] = useState<NutritionalValues>({
        kcal: 0,
        fat: 0,
        fat_saturated: 0,
        carbs: 0,
        sugar: 0,
        protein: 0,
        salt: 0,
        fibre: 0
    })
    const [nutriInfo, setNutriInfo] = useState<NutritionalInfo>({
        name: '',
        water_percentage: 0
    })

    const doStuff = () => {
        console.log(nutriValues)
        console.log(nutriInfo)
    }

    return (
        <Group w={"100%"} justify="center">
            <Group pt={50} justify="center" align="flex-start" w={"80%"}>
                <Stack>
                    <NutritionalInfoCard onAddFoodClicked={doStuff} setNutriInfo={setNutriInfo} />
                    <ServingSizesCard />
                </Stack>
                <Stack w={rem(300)} justify="flex-start">
                    <NutritionalValueCard setValueObject={setNutriValues} />
                </Stack>
            </Group>
        </Group>
    );
};
