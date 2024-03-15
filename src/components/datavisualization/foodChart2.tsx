
import { ResponsivePie } from '@nivo/pie'


interface FoodPieChartDataItem {
  id: string;
  label: string;
  value: number;
  color: string;
}

export const FoodChart2 = (props: { data: FoodPieChartDataItem[] }) => {
  interface PieChartProps {
      dataWithArc: any;
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
                  fontSize: '24px',
                  //fontWeight: 'bold',
              }}
          >
              {total}
          </text>
      );
  };
  return (
    <ResponsivePie
        data={props.data}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        innerRadius={0.6}
        cornerRadius={8}
        tooltip={() => (<></>)}
        activeInnerRadiusOffset={8}
        colors={{ scheme: 'purpleRed_green' }}
        borderWidth={1}
        borderColor="#130707"
        layers={['arcs', 'arcLabels', 'arcLinkLabels', CenteredMetric]}
        arcLinkLabelsSkipAngle={2}
        arcLinkLabelsTextOffset={3}
        arcLinkLabelsTextColor={{ from: 'color', modifiers: [] }}
        enableArcLinkLabels={false}
        arcLinkLabelsDiagonalLength={12}
        arcLinkLabelsStraightLength={21}
        arcLinkLabelsThickness={3}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={8}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    22.5
                ]
            ]
        }}
        defs={[
            {
                id: 'dots',
                type: 'patternDots',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                size: 4,
                padding: 1,
                stagger: true
            },
            {
                id: 'lines',
                type: 'patternLines',
                background: 'inherit',
                color: 'rgba(255, 255, 255, 0.3)',
                rotation: -45,
                lineWidth: 6,
                spacing: 10
            }
        ]}
        fill={[
            {
                match: {
                    id: 'ruby'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'c'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'go'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'python'
                },
                id: 'dots'
            },
            {
                match: {
                    id: 'scala'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'lisp'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'elixir'
                },
                id: 'lines'
            },
            {
                match: {
                    id: 'javascript'
                },
                id: 'lines'
            }
        ]}
    />
  );
};
