import { ActionIcon, Button, Group, Stack, Text, rem } from "@mantine/core";
import { IconArrowNarrowLeft, IconMenu2 } from "@tabler/icons-react";
import "../styles/sidebar.scss";
import { useState } from "react";
import { getSidebarVisible, getUserLogged, setSidebarVisible, setUserLogged } from "../store/localStorage/settings";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
    const [sidebarVisible, setIsHidden] = useState(getSidebarVisible());
    const [, setLogged] = useState(getUserLogged());
    const navigate = useNavigate();

    const logoutUser = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            console.error("Error signing in:", error.message);
        } else {
            setUserLogged(false);
            setLogged(false);
            navigate("//");
        }
    };

    const toggleSidebar = () => {
        const value = getSidebarVisible();
        setSidebarVisible(!value);
        setIsHidden(!value);
    };

    return (
        <div className={`sidebar ${!sidebarVisible ? "sidebar-hidden" : ""}`}>
            <div className="sidebar-content">
                <Stack p={rem(10)} pt={rem(16)}>
                    {sidebarVisible ? (
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
                        <Button variant="subtle" onClick={() => navigate("dashboard")}>Dashboard</Button>
                        <Button variant="subtle" onClick={() => navigate("food")}>Food</Button>
                        <Button variant="subtle" onClick={logoutUser}>
                            Logout
                        </Button>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};
