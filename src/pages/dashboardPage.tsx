import { Container, rem } from "@mantine/core";
import "../styles/dashboard.scss";
import { supabase } from "../supabase/supabase";
import { useEffect, useState } from "react";
import { getTodayMidnigth } from "../lib/utilities/dates";
import { Food } from "../supabase/types/food";
import { WaterChart } from "../components/datavisualization/waterChart";
import { FoodChart } from "../components/datavisualization/foodChart";


export default function DashboardPage() {
    const [totalData, setTotalData] = useState({
        carbs: 0,
        fat: 0,
        weigth: 0,
        water: 0,
        protein: 0,
        kcal: 0,
    });
    const calculateData = (data: Food[]) => {
        const sum = {
            carbs: 0,
            fat: 0,
            weigth: 0,
            water: 0,
            protein: 0,
            kcal: 0,
        };
        for (const item of data) {
            sum.carbs += Number(item.food_amount) * Number(item.food_types.carbs);
            sum.fat += Number(item.food_amount) * Number(item.food_types.fat);
            sum.weigth += Number(item.food_amount) * Number(item.food_types.portion_weigth);
            sum.water += Number(item.food_amount) * Number(item.food_types.portion_weigth) * (Number(item.food_types.water_percentage) / 100);
            sum.protein += Number(item.food_amount) * Number(item.food_types.protein);
            sum.kcal += Number(item.food_amount) * Number(item.food_types.kcal);
        }
        setTotalData(sum);
    };
    const fetchData = async () => {
        try {
            const { data, error } = await supabase
                .from("food")
                .select("id, time_of_intake, food_types(name, protein, kcal, water_percentage, portion_weigth, fat, carbs), food_amount")
                .gt("time_of_intake", getTodayMidnigth(-1))
                .lt("time_of_intake", getTodayMidnigth(0));
            if (error) throw error;
            console.log(data);
            calculateData(data as unknown as Food[]);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="page-container">
            {/* <div className="nav-bar">asddddddddddddddddddddddddddddddddd</div> */}
            <div className="dashboard-container">
                <Container m={0} h={rem(360)} w={rem(360)}>
                    <FoodChart
                        data={[
                            {
                                id: "Protein",
                                label: "Protein",
                                value: Math.round(totalData.protein),
                                color: "hsl(77, 70%, 50%)",
                            },
                            {
                                id: "Fat",
                                label: "Fat",
                                value: Math.round(totalData.fat),
                                color: "hsl(331, 70%, 50%)",
                            },
                            {
                                id: "Carbohydrates",
                                label: "Carbohydrates",
                                value: Math.round(totalData.carbs),
                                color: "hsl(210, 70%, 50%)",
                            },
                        ]}
                    />
                </Container>
                <Container m={0} h={rem(200)} w={rem(200)}>
                    <WaterChart
                        data={[
                            {
                                id: "Water",
                                label: "Water",
                                value: Math.round(165),
                                color: "hsl(77, 70%, 50%)",
                            },
                            {
                                id: "WaterFood",
                                label: "Water from food",
                                value: Math.round(11),
                                color: "hsl(331, 70%, 50%)",
                            },
                            {
                                id: "WaterMissing",
                                label: "Water from food",
                                value: Math.round(1451),
                                color: "hsl(331, 70%, 50%)",
                            },
                        ]}
                    ></WaterChart>
                </Container>
            </div>
        </div>
    );
}
