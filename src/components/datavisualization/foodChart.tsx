import { ResponsiveSunburst } from "@nivo/sunburst";

interface FoodPieChartDataItem {
    id: string;
    label: string;
    value: number;
    color: string;
}

const dane = {
    name: "nivo",
    color: "hsl(3, 70%, 50%)",
    children: [
        {
            name: "Carbs",
            color: "hsl(278, 70%, 50%)",
            children: [
                {
                    name: "stack",
                    color: "hsl(177, 70%, 50%)",
                    loc: 332222,
                },
                {
                    name: "ppie",
                    color: "hsl(182, 70%, 50%)",
                    loc: 333333,
                },
            ],
        },
        {
            name: "Fat",
            color: "hsl(21, 70%, 50%)",
            children: [
                {
                    name: "rgb",
                    color: "hsl(8, 70%, 50%)",
                    loc: 196497,
                },
                {
                    name: "hsl",
                    color: "hsl(74, 70%, 50%)",
                    loc: 124230,
                },
            ],
        },
        {
            name: "Protein",
            color: "hsl(77, 70%, 50%)",
            loc: 333333,
        },
    ],
};

export const FoodChart = (props: { data: FoodPieChartDataItem[] }) => {
	interface PieChartProps {
        centerX: string | number;
        centerY: string | number;
    }
    const CenteredMetric = ({ centerX, centerY }: PieChartProps) => {
        let total = 0;
        total += props.data[0].value * 4;
        total += props.data[1].value * 9;
        total += props.data[2].value * 4;

        return (
            <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                fill="black"
                dominantBaseline="central"
                style={{
                    fontSize: "32px",
                    //fontWeight: 'bold',
                }}
            >
                {total}kcal
            </text>
        );
    };
    return (
        <ResponsiveSunburst
            data={dane}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
            id="name"
            value="loc"
            arcLabel={"id"}
            cornerRadius={5}
            borderWidth={5}
            borderColor={"#242424"}
			layers={["arcs", "arcLabels", CenteredMetric]}
            colors={(d) => d.data.color}
            childColor={{
                from: "color",
                modifiers: [["darker", 2.3]],
            }}
            arcLabelsRadiusOffset={0.5}
            enableArcLabels={true}
            arcLabelsSkipAngle={10}
            arcLabelsTextColor={"#000000"}
            motionConfig="default"
            transitionMode="centerRadius"
        />
    );
};
