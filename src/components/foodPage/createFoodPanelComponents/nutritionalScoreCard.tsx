import { Card, Stack, rem, Button, SegmentedControl, Center, ThemeIcon, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconArrowDown, IconArrowUp, IconX } from "@tabler/icons-react";
import { useEffect, useState } from "react";

export interface NutritionalScore {
    nova_score: number;
    nutri_score: number;
}

export const NutritionalScoreCard = (props: { setNutriScore: React.Dispatch<React.SetStateAction<NutritionalScore>> }) => {
    const [nova_score, setNovaScore] = useState<string>("5");
    const [nutri_score, setNutriScore] = useState<string>("6");

    const [opened, { toggle }] = useDisclosure(false);

    useEffect(() => {
        props.setNutriScore({
            nova_score: nova_score as unknown as number,
            nutri_score: nutri_score as unknown as number,
        });
    }, [nova_score, nutri_score]);

    return (
        <Card w={rem(300)}>
            <Stack justify="flex-start" align="center">
                <Button variant="subtle" onClick={toggle} leftSection={!opened ? <IconArrowDown></IconArrowDown> : <IconArrowUp></IconArrowUp>}>
                    Optional: NutriScores
                </Button>

                <Collapse in={opened} transitionDuration={500} transitionTimingFunction="ease-out">
                    <Stack align='center'>
                    <SegmentedControl
                        w={rem(210)}
                        value={nova_score}
                        onChange={(d) => setNovaScore(d)}
                        bg={"transparent"}
                        withItemsBorders={false}
                        transitionDuration={300}
                        transitionTimingFunction="ease-out"
                        size="xs"
                        data={[
                            {
                                value: "1",
                                label: (
                                    <Center>
                                        <ThemeIcon color="#00803d">1</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "2",
                                label: (
                                    <Center>
                                        <ThemeIcon color="yellow">2</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "3",
                                label: (
                                    <Center>
                                        <ThemeIcon color="orange">3</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "4",
                                label: (
                                    <Center>
                                        <ThemeIcon color="red">4</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "5",
                                label: (
                                    <Center>
                                        <ThemeIcon color="transparent">
                                            <IconX size={19}></IconX>
                                        </ThemeIcon>
                                    </Center>
                                ),
                            },
                        ]}
                    />
                    <SegmentedControl
                        w={rem(250)}
                        value={nutri_score}
                        onChange={(d) => setNutriScore(d)}
                        bg={"transparent"}
                        withItemsBorders={false}
                        transitionDuration={300}
                        transitionTimingFunction="ease-out"
                        size="xs"
                        data={[
                            {
                                value: "1",
                                label: (
                                    <Center>
                                        <ThemeIcon color="#00803d">A</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "2",
                                label: (
                                    <Center>
                                        <ThemeIcon color="#87bd25">B</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "3",
                                label: (
                                    <Center>
                                        <ThemeIcon color="yellow">C</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "4",
                                label: (
                                    <Center>
                                        <ThemeIcon color="orange">D</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "5",
                                label: (
                                    <Center>
                                        <ThemeIcon color="red">E</ThemeIcon>
                                    </Center>
                                ),
                            },
                            {
                                value: "6",
                                label: (
                                    <Center>
                                        <ThemeIcon color="transparent">
                                            <IconX size={19}></IconX>
                                        </ThemeIcon>
                                    </Center>
                                ),
                            },
                        ]}
                    /></Stack>
                </Collapse>
            </Stack>
        </Card>
    );
};
