import { Blockquote, List, ThemeIcon, rem } from "@mantine/core";
import { PieTooltipProps, ResponsivePie } from "@nivo/pie";
import { IconCircleCheck } from "@tabler/icons-react";

interface FoodPieChartDataItem {
    id: string;
    label: string;
    value: number;
    color: string;
}

export const WaterChart = (props: { data: FoodPieChartDataItem[] }) => {
    interface PieChartProps {
        centerX: string | number;
        centerY: string | number;
    }

    const PieTooltip: React.FunctionComponent<PieTooltipProps<FoodPieChartDataItem>> = (props) => {
        return (
            <Blockquote bg={props.datum.color} p={10} color="violet" mt="md">
                <List
                    spacing={4}
                    size='xs'
                    center
                    icon={
                        <ThemeIcon color="teal" size={24} radius="xl">
                            <IconCircleCheck style={{ width: rem(16), height: rem(16) }} />
                        </ThemeIcon>
                    }
                >
                    <List.Item>{props.datum.label}</List.Item>
                    <List.Item>{props.datum.value}</List.Item>
                </List>
            </Blockquote>
        );
    };

	const CenteredMetric = ({ centerX, centerY }: PieChartProps) => {
        let total = 0;
        total += props.data[0].value;
        total += props.data[1].value;
        total += props.data[2].value;

        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                fill="black"
                dominantBaseline="central"
                style={{
                    fontSize: "24px",
                    //fontWeight: 'bold',
                }}
            >
                {Math.round(total/100)/10}L
            </text>
        );
    };

    return (
        <ResponsivePie
            data={props.data}
            margin={{ top: 0, right: 5, bottom: 0, left: 5 }}
            innerRadius={0.6}
            cornerRadius={0}
            tooltip={PieTooltip}
			endAngle={-360}
            activeInnerRadiusOffset={1}
            colors={{ scheme: "category10" }}
            borderWidth={1}
            borderColor="#130707"
            layers={["arcs", "arcLabels", CenteredMetric]}
            arcLinkLabelsSkipAngle={2}
            arcLinkLabelsTextOffset={3}
            arcLinkLabelsTextColor={{ from: "color", modifiers: [] }}
            enableArcLinkLabels={false}
            arcLinkLabelsDiagonalLength={12}
            arcLinkLabelsStraightLength={21}
            arcLinkLabelsThickness={3}
            arcLinkLabelsColor={{ from: "color" }}
            arcLabelsSkipAngle={8}
            arcLabelsTextColor={{
                from: "color",
                modifiers: [["darker", 22.5]],
            }}
            defs={[
                {
                    id: "dots",
                    type: "patternDots",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: "lines",
                    type: "patternLines",
                    background: "inherit",
                    color: "rgba(255, 255, 255, 0.3)",
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[
                {
                    match: {
                        id: "x",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "c",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "go",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "python",
                    },
                    id: "dots",
                },
                {
                    match: {
                        id: "scala",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "lisp",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "elixir",
                    },
                    id: "lines",
                },
                {
                    match: {
                        id: "javascript",
                    },
                    id: "lines",
                },
            ]}
        />
    );
};
