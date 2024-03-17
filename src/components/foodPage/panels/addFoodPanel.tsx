import { Button, Group, Stack, TextInput, rem } from "@mantine/core";

export const AddFoodPanel = () => {
    return (
        <Group w={"100%"} justify="center">
            <Group align="stretch" justify="space-between" w={"80%"} wrap="nowrap">
                <Stack>
                    <Button>pogqweqweqwe</Button>
                    <Button>pog</Button>
                    <Button>pog</Button>
                </Stack>
                <Stack w={"100%"}>
                    <Button>pog</Button>
                    <Button>pog</Button>
                    <Button>pog</Button>
                </Stack>
                <Stack w={rem(300)} justify="flex-start">
                    <TextInput placeholder="Eggs.." />
                </Stack>
            </Group>
        </Group>
    );
};
