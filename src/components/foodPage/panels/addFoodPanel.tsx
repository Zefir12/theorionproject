import { Button, Group, Stack, TextInput, rem } from "@mantine/core";

export const AddFoodPanel = () => {
    return (
        <Group w={"100%"} justify="center">
            <Group align="stretch" justify="space-between" w={"80%"} wrap="nowrap">
                <Stack>
                    <Button variant="light">pogqweqweqwe</Button>
                    <Button variant="light">pog</Button>
                    <Button variant="light">pog</Button>
                </Stack>
                <Stack w={"80%"}>
                    <Button variant="subtle"></Button>
                </Stack>
                <Stack w={rem(300)} justify="flex-start">
                    <TextInput placeholder="Eggs.." />
                </Stack>
            </Group>
        </Group>
    );
};
