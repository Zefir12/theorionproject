import { Container, Tabs } from "@mantine/core";
import { IconChefHat, IconFridge, IconSettings } from "@tabler/icons-react";
import { CreateFoodPanel } from "../components/foodPage/panels/createFoodPanel";
import { AddFoodPanel } from "../components/foodPage/panels/addFoodPanel";



export default function FoodPage() {
    return (
        <Container fluid h={"100%"} w={"100%"}>
            <Tabs color="violet" defaultValue="addFood">
                <Tabs.List justify="center" pt={10}>
                    <Tabs.Tab value="addFood" leftSection={<IconFridge />}>
                        Add Food
                    </Tabs.Tab>
                    <Tabs.Tab value="createFood" leftSection={<IconChefHat />}>
                        Create New Food
                    </Tabs.Tab>
                    <Tabs.Tab disabled value="settings" leftSection={<IconSettings />}>
                        Settings
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel p={10} value="addFood">
                    <AddFoodPanel />
                </Tabs.Panel>
                <Tabs.Panel p={10} value="createFood">
                    <CreateFoodPanel />
                </Tabs.Panel>
                <Tabs.Panel p={10} value="settings">
                    Settings tab content
                </Tabs.Panel>
            </Tabs>
        </Container>
    );
}
