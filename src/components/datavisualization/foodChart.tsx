import { ResponsiveSunburst } from '@nivo/sunburst'

const dane = {
    "name": "nivo",
    "color": "hsl(307, 70%, 50%)",
    "children": [
      {
        "name": "protein",
        "color": "hsl(302, 70%, 50%)",
        "children": [
            {
              "name": "randomize",
              "color": "hsl(189, 70%, 50%)",
              "loc": 100
            },
          ]
      },
      {
        "name": "fat",
        "color": "hsl(176, 70%, 50%)",
        "children": [
          {
            "name": "rgb",
            "color": "hsl(39, 70%, 50%)",
            "loc": 200
          },
          {
            "name": "hsl",
            "color": "hsl(43, 70%, 50%)",
            "loc": 30
          }
        ]
      },
      {
        "name": "carbs",
        "color": "hsl(85, 70%, 50%)",
        "children": [
          {
            "name": "randomize",
            "color": "hsl(189, 70%, 50%)",
            "loc": 400
          },
          {
            "name": "resetClock",
            "color": "hsl(80, 70%, 50%)",
            "loc": 230
          },
        ]
      },
    ]
  }

export const FoodChart = () => (
    <ResponsiveSunburst
        data={dane}
        onClick={function noRefCheck(){}}
        transitionMode="pushIn"
        margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
        id="name"
        value="loc"
        cornerRadius={6}
        borderWidth={10}
        animate
        borderColor={{ theme: 'background' }}
        colors={{ scheme: 'pastel1' }}
        childColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    0.5
                ]
            ]
        }}
        enableArcLabels={true}
        arcLabelsSkipAngle={6}
        arcLabelsTextColor={{
            from: 'color',
            modifiers: [
                [
                    'darker',
                    2
                ]
            ]
        }}
    />
)