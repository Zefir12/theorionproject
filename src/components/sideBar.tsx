import { ActionIcon, Button, Group, Stack, Text, rem } from "@mantine/core";
import { IconArrowNarrowLeft, IconMenu2, IconX } from "@tabler/icons-react";
import "../styles/sidebar.scss";
import { useState } from "react";
import { getSidebarVisible, setSidebarVisible } from "../store/localStorage/settings";
import { useAppDispatch } from "../store/hooks";
import { logout } from "../store/slices/userSlice";

export const SideBar = () => {
    const [sidebarVisible, setIsHidden] = useState(getSidebarVisible());
    const dispatch = useAppDispatch();
    const logoutUser = () => dispatch(logout());

    const toggleSidebar = () => {
        const value = getSidebarVisible();
        setSidebarVisible(!value);
        setIsHidden(!value);
    };


    return (
        <div className={`sidebar ${sidebarVisible ? "sidebar-hidden" : ""}`}>
            <div className="sidebar-content">
                <Stack p={rem(10)} pt={rem(16)}>
                    {!sidebarVisible ? (
                        <Group justify="space-between" wrap="nowrap">
                            <Text pl={rem(8)} fw={700} tt="uppercase">
                                Menu
                            </Text>
                            <ActionIcon size="lg" variant="subtle" onClick={toggleSidebar}>
                                <IconArrowNarrowLeft></IconArrowNarrowLeft>
                            </ActionIcon>
                        </Group>
                    ) : (
                        <Group grow>
                            <ActionIcon size="lg" variant="subtle" onClick={toggleSidebar}>
                                <IconMenu2></IconMenu2>
                            </ActionIcon>
                        </Group>
                    )}
                    <Stack gap={rem(5)}>
                        <Button variant="subtle">Dashboard</Button>
                        <Button variant="subtle">pog</Button>
                        <Button variant="subtle" onClick={logoutUser}>Logout</Button>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};
