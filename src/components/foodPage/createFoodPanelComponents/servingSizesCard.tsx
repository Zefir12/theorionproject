import { ActionIcon, Text, Card, Group, NumberInput, Stack, TextInput, rem, ScrollArea } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { ServiceSize } from "../../../pages/foodPage";
import { ServingProp } from "../servingProp";
import { useState } from "react";

export const ServingSizesCard = () => {
    const [serviceSizes, setServiceSizes] = useState<ServiceSize[]>([
        { name: "Standard", value: 100, disabled: true },
        { name: "Gram", value: 1 },
    ]);

    const [servingName, setServingName] = useState<string>("");
    const [servingValue, setServingValue] = useState<number>(0);

    const removeServiceSize = (index: number) => {
        setServiceSizes((data) => data.filter((_, i) => i !== index));
    };

    return (
        <Card w={rem(300)}>
            <Stack justify="flex-start">
                <Text ta="center">Porcje</Text>
                <Group gap={0} justify="space-between" wrap="nowrap">
                    <Group preventGrowOverflow={false} grow gap={5} w={"100%"} justify="space-between" wrap="nowrap">
                        <TextInput
                            w={rem(120)}
                            value={servingName}
                            onChange={(event) => setServingName(event.currentTarget.value)}
                            variant="filled"
                            size="xs"
                            radius="xs"
                            placeholder="Płaska łyżka.."
                        />
                        <NumberInput
                            min={0}
                            value={servingValue}
                            onChange={(value) => setServingValue(value as number)}
                            radius="xs"
                            variant="filled"
                            w={rem(50)}
                            size="xs"
                            placeholder="65g"
                            suffix="g"
                        />
                        <ActionIcon
                            maw={rem(10)}
                            variant="light"
                            radius="xs"
                            onClick={() => {
                                setServiceSizes((data) => [...data, { name: servingName, value: servingValue }]);
                            }}
                        >
                            <IconPlus />
                        </ActionIcon>
                    </Group>
                </Group>
                <ScrollArea scrollbars="y" type="always" w={"100%"} h={70}>
                    <Group preventGrowOverflow={false} grow gap={5} wrap="wrap">
                        {serviceSizes.map((item, index) => (
                            <ServingProp
                                key={index}
                                name={item.name}
                                value={item.value}
                                disabled={item.disabled}
                                onClick={() => removeServiceSize(index)}
                            ></ServingProp>
                        ))}
                    </Group>
                </ScrollArea>
            </Stack>
        </Card>
    );
};
