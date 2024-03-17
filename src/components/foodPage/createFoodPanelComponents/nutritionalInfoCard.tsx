import { Card, Text, Group, NumberInput, Stack, TextInput, rem, Button } from "@mantine/core"
import { IconBottle } from "@tabler/icons-react"
import { useEffect, useState } from "react"

export interface NutritionalInfo {
    name: string,
    water_percentage: number
}

export const NutritionalInfoCard = (props: { onAddFoodClicked?: () => void, setNutriInfo: React.Dispatch<React.SetStateAction<NutritionalInfo>> }) => {
    const [name, setName] = useState<string>('')
    const [water_percentage, setWaterPercentage] = useState<number>(0)

    useEffect(() => {
        props.setNutriInfo({
            name: name,
            water_percentage: water_percentage
        })
    }, [name, water_percentage])

    return (
        <Card w={rem(300)}>
        <Stack justify="flex-start">
            <TextInput value={name} onChange={(event) => setName(event.currentTarget.value)} variant="filled" size="xs" radius="xs" description="Name" placeholder="Steak with fires.." />
            <NumberInput
                suffix="%"
                leftSection={<IconBottle size={18} />}
                value={water_percentage}
                onChange={(d) => setWaterPercentage(d as number)}
                min={0}
                max={100}
                variant="filled"
                size="xs"
                radius="xs"
                description="Water Percentage"
                defaultValue={0}
            />
            <Group justify="space-between" wrap="nowrap">
                <Text size="xs">Wartości Odżywcze na:</Text>
                <NumberInput min={0} radius="xs" variant="filled" w={rem(100)} size="xs" defaultValue={100} suffix="g" />
            </Group>
            <Button variant='light' onClick={props.onAddFoodClicked}>Add</Button>
        </Stack>
    </Card>
    )
}