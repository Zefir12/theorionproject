import { Card, Group, NumberInput, Text } from "@mantine/core";
import { IconBolt, IconBowlSpoon, IconBurger, IconCandy, IconDroplet, IconDropletExclamation, IconMeat, IconSalt } from "@tabler/icons-react";
import { useEffect, useState } from "react";
import { roundToDecimal } from "../../../lib/utilities/numbers";

const NutriInput = (props: { icon: React.ReactNode; name: string, value?: number, onChange?: (d: number | string) => void }) => {
    return (
        <NumberInput onChange={props.onChange} value={props.value} leftSection={props.icon} min={0} variant="filled" size="xs" radius="xs" description={props.name} defaultValue={0} decimalScale={1} step={0.1} />
    );
};

export interface NutritionalValues {
    kcal: number,
    fat: number,
    fat_saturated: number,
    carbs: number,
    sugar: number,
    protein: number,
    salt: number,
    fibre: number
}

export const NutritionalValueCard = (props: { setValueObject: React.Dispatch<React.SetStateAction<NutritionalValues>>}) => {
    const [kcal, setKcal] = useState<number>(0)
    const [fat, setFat] = useState<number>(0)
    const [fat_saturated, setFatSaturated] = useState<number>(0)
    const [carbs, setCarbs] = useState<number>(0)
    const [sugar, setSugar] = useState<number>(0)
    const [protein, setProtein] = useState<number>(0)
    const [salt, setSalt] = useState<number>(0)
    const [fibre, setFibre] = useState<number>(0)

    useEffect(() => {
        props.setValueObject({
            kcal: roundToDecimal(kcal),
            fat: roundToDecimal(fat),
            fat_saturated: roundToDecimal(fat_saturated),
            carbs: roundToDecimal(carbs),
            sugar: roundToDecimal(sugar),
            protein: roundToDecimal(protein),
            salt: roundToDecimal(salt),
            fibre: roundToDecimal(fibre)
        } )
    }, [kcal, fat, fat_saturated, carbs, sugar, protein, salt, fibre])

    return (
        <Card>
            <Text ta="center" pb={5}>
                Wartości Odżywcze
            </Text>
            <NutriInput value={kcal} onChange={(d) => setKcal(d as number)} name="Kcal" icon={<IconBolt size={18} />}></NutriInput>
            <Group wrap="nowrap">
                <NutriInput value={fat} onChange={(d) => setFat(d as number)} name="Fats" icon={<IconDroplet size={18} />}></NutriInput>
                <NutriInput value={fat_saturated} onChange={(d) => setFatSaturated(d as number)} name="Saturated Fats" icon={<IconDropletExclamation size={18} />}></NutriInput>
            </Group>
            <Group wrap="nowrap">
                <NutriInput value={carbs} onChange={(d) => setCarbs(d as number)} name="Carbs" icon={<IconBurger size={18} />}></NutriInput>
                <NutriInput value={sugar} onChange={(d) => setSugar(d as number)} name="Sugars" icon={<IconCandy size={18} />}></NutriInput>
            </Group>
            <NutriInput value={protein} onChange={(d) => setProtein(d as number)} name="Protein" icon={<IconMeat size={18} />}></NutriInput>
            <NutriInput value={salt} onChange={(d) => setSalt(d as number)} name="Salt" icon={<IconSalt size={18} />}></NutriInput>
            <NutriInput value={fibre} onChange={(d) => setFibre(d as number)} name="Fibre" icon={<IconBowlSpoon size={18} />}></NutriInput>
        </Card>
    );
};
