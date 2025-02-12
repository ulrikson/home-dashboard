import React from 'react';
import { BarChart } from '@/components/charts/bar-chart';
import { ChartConfig } from './ui/chart';
import { DashboardService } from '@/services/api.service';

export function ElectricityConsumption() {
	const [electricityConsumption, setElectricityConsumption] = React.useState<
		object | null
	>(null);

	React.useEffect(() => {
		const fetchElectricityConsumption = async () => {
			try {
				const data =
					await DashboardService.fetchElectricityConsumption();
				setElectricityConsumption(data);
			} catch (error) {
				console.error('Error fetching electricity consumption:', error);
			}
		};

		fetchElectricityConsumption();
	}, []);

	const electricityData = [
		{
			month: 'January',
			consumption: electricityConsumption?.consumption,
		},
		{
			month: 'February',
			consumption: electricityConsumption?.consumption,
		},
		{ month: 'March', consumption: electricityConsumption?.consumption },
		{ month: 'April', consumption: electricityConsumption?.consumption },
		{ month: 'May', consumption: electricityConsumption?.consumption },
		{ month: 'June', consumption: electricityConsumption?.consumption },
	];

	const electricityConfig = {
		consumption: {
			label: 'Consumption',
			color: 'hsl(var(--chart-4))',
		},
	} satisfies ChartConfig;
	return (
		<BarChart
			data={electricityData}
			config={electricityConfig}
			title="Electricity Consumption"
			description="January - June 2024"
			xAxisKey="month"
			dataKey="consumption"
			barColor="var(--color-consumption)"
		/>
	);
}
