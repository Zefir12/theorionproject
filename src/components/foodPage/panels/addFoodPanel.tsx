import { Button, Group, ScrollArea, Stack, TextInput, rem } from "@mantine/core";
import { useEffect, useState } from "react";
import { Tables, TablesInsert } from "../../../supabase/supabaseSchemas/supaDatabaseExtensions";
import { supabase } from "../../../supabase/supabase";
import { FoodButton } from "../components/foodButton";
import { DateTimePicker } from "@mantine/dates";

export interface FoodItem extends Tables<"food_types"> {
    food_amount?: number;
}

export const AddFoodPanel = () => {
    const [inputText, setInputText] = useState("");
    const [allFoodTypes, setAllFoodTypes] = useState<FoodItem[]>([]);
    const [foods, setFoods] = useState<FoodItem[]>([]);
    const [dateValue, setDateValue] = useState<Date | null>(new Date(Date.now()));

    const fetchData = async () => {
        try {
            const { data, error } = await supabase.from("food_types").select("*");
            if (error) throw error;
            data.sort((a, b) => a.id - b.id);
            setAllFoodTypes(data);
        } catch (error) {
            console.log(error);
        }
    };

    const removeItemFromArray = (doc: any, array: Array<any>) => {
        array.forEach((item, index) => {
            if (item === doc) array.splice(index, 1);
        });
    };

    const removeItem = (item: FoodItem) => {
        removeItemFromArray(item, foods);
        if (!allFoodTypes.includes(item)) {
            item.food_amount = 1;
            allFoodTypes.push(item);
        }
        allFoodTypes.sort((a, b) => a.id - b.id);
        setFoods((old) => [...old]);
    };

    const handleInptBarChange = (event: any) => {
        setInputText(event.target.value);
    };

    const addItemsToDatabase = async () => {
        const itemsToAdd: TablesInsert<"food">[] = [];
        foods.forEach((item) => {
            console.log(item);
            if (item.food_amount != null) {
                itemsToAdd.push({
                    food_amount: item.food_amount,
                    food_id: item.id,
                    time_of_intake: dateValue?.toISOString(),
                });
            }
        });
        const { error } = await supabase.from("food").insert(itemsToAdd);
        console.log(error);
    };

    const addItem = (item: FoodItem) => {
        removeItemFromArray(item, allFoodTypes);
        if (!foods.includes(item)) {
            if (!item.food_amount) {
                item.food_amount = 1;
            }
            foods.push(item);
        }
        setFoods((old) => [...old]);
    };

    const clearFoods = () => {
        allFoodTypes.push(...foods.splice(0));
        allFoodTypes.sort((a, b) => a.id - b.id);
        setFoods((old) => [...old]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <Group w={"100%"} justify="center">
            <Group align="stretch" justify="space-between" w={"60%"} wrap="nowrap">
                <Stack>
                    <DateTimePicker label="Pick date and time" placeholder="Pick date and time" />
                    <Button
                        onClick={() => {
                            addItemsToDatabase();
                            clearFoods();
                        }}
                    >
                        Add items to database
                    </Button>
                </Stack>
                <Stack w={"80%"}>
                    <Stack>
                        <Button onClick={clearFoods}>Clear List</Button>
                        <Stack align="center" gap={rem(5)}>
                            {foods.map((item) => (
                                <FoodButton key={item.id} item={item} onRemove={() => removeItem(item)} />
                            ))}
                        </Stack>
                    </Stack>
                </Stack>
                <Stack w={rem(300)} justify="flex-start">
                    <TextInput onChange={handleInptBarChange} placeholder="Eggs.." />
                    <ScrollArea h={550}>
                        <Stack align="flex-start" justify="flex-start" gap="xs">
                            {allFoodTypes.map(
                                (item) =>
                                    item.name?.toLowerCase().includes(inputText.toLowerCase()) && (
                                        <Button key={item.id} onClick={() => addItem(item)}>
                                            {item.name}
                                        </Button>
                                    )
                            )}
                        </Stack>
                    </ScrollArea>
                </Stack>
            </Group>
        </Group>
    );
};
