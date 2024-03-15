import { Card, rem } from '@mantine/core'
import '../styles/dashboard.scss'
import { FoodChart2 } from '../components/datavisualization/foodChart2'

const totalData = {protein: 100, fat: 200, carbs: 132}

export default function DashboardPage() {
  return (
    <div className='page-container'>
      <div className='dashboard-container'>
        <Card h={rem(300)} w={rem(300)}>
          <FoodChart2 
            data={[
              {
                id: 'Protein',
                label: 'Protein',
                value: Math.round(totalData.protein),
                color: 'hsl(77, 70%, 50%)',
              },
              {
                id: 'Fat',
                label: 'Fat',
                value: Math.round(totalData.fat),
                color: 'hsl(331, 70%, 50%)',
              },
              {
                id: 'Carbohydrates',
                label: 'Carbohydrates',
                value: Math.round(totalData.carbs),
                color: 'hsl(210, 70%, 50%)',
              },
            ]}
          />
        </Card>
      </div>
    </div>
  )
}
