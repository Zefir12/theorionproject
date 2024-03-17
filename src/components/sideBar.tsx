import { ActionIcon, Burger, Button, Group, Stack, Text, rem } from "@mantine/core";
import { IconArrowNarrowLeft, IconMenu2 } from "@tabler/icons-react";
import "../styles/sidebar.scss";
import { useState } from "react";
import { getSidebarVisible, getUserLogged, setSidebarVisible, setUserLogged } from "../store/localStorage/settings";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@mantine/hooks";

export const SideBar = () => {
    const [sidebarVisible, setIsHidden] = useState(getSidebarVisible());
    const [, setLogged] = useState(getUserLogged());
    const navigate = useNavigate();
    const [opened, { toggle }] = useDisclosure();

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
        toggle();
    };

    return (
        <div className={`sidebar ${!sidebarVisible ? "sidebar-hidden" : ""}`}>
            <div className="sidebar-content">
                <Stack p={rem(10)} pt={rem(16)}>
                    <Group justify="flex-end" wrap="nowrap" pr={12}>
                        {sidebarVisible && (
                            <Group w={'100%'}>
                                <Text pl={rem(8)} fw={700} tt="uppercase">
                                    Menu
                                </Text>
                            </Group>
                        )}
                        <Burger color="violet" transitionTimingFunction="ease-in-out" transitionDuration={400} opened={opened} onClick={toggleSidebar} aria-label="Toggle navigation" />
                    </Group>

                    <Stack gap={rem(5)} px={12}>
                        <Button variant="light" onClick={() => navigate("dashboard")}>
                            Dashboard
                        </Button>
                        <Button variant="light" onClick={() => navigate("food")}>
                            Food
                        </Button>
                        <Button variant="light" onClick={logoutUser}>
                            Logout
                        </Button>
                    </Stack>
                </Stack>
            </div>
        </div>
    );
};
