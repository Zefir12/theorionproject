import { ActionIcon, Card, Group, NumberInput, rem } from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import { Text } from '@mantine/core';
import { FoodItem } from '../panels/addFoodPanel';

export interface FoodButtonProps {
    onRemove: () => void;
    item: FoodItem;
}

export const FoodButton = (props: FoodButtonProps) => {
    const onPushedRemove = () => {
        props.onRemove();
        close();
    };

    const onAmountChanged = (value: number | string) => {
        props.item.food_amount = value as number;
    };

    return (
        <Card>
            <Card.Section>
                <Group gap={rem(1)}>
                    <NumberInput
                        w={rem(80)}
                        defaultValue={props.item.food_amount ?? 1}
                        decimalScale={2}
                        min={0.01}
                        step={1}
                        max={1000}
                        onChange={onAmountChanged}
                    ></NumberInput>
                    <Text fw={500} tt="capitalize" ml={rem(10)} mr={rem(5)}>
                        {props.item.name}
                    </Text>

                    <ActionIcon color="red" size="lg" variant="filled" onClick={onPushedRemove}>
                        <IconX size="1rem" />
                    </ActionIcon>
                </Group>
            </Card.Section>
        </Card>
    );
};
