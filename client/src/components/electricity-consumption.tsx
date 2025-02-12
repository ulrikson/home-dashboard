import React from 'react';
import { BarChart } from '@/components/charts/bar-chart';
import { ChartConfig } from './ui/chart';
import { DashboardService } from '@/services/api.service';
import { ElectricityConsumptionDTO } from '../../../shared/types/costs';

export function ElectricityConsumption() {
	const [electricityConsumption, setElectricityConsumption] =
		React.useState<ElectricityConsumptionDTO | null>(null);

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

	const electricityConfig = {
		consumption: {
			label: 'Consumption',
			color: 'hsl(var(--chart-4))',
		},
	} satisfies ChartConfig;

	if (!electricityConsumption) {
		return null;
	}

	return (
		<BarChart
			data={electricityConsumption}
			config={electricityConfig}
			title="Electricity Consumption"
			description="January - June 2024"
			xAxisKey="month"
			dataKey="consumption"
			barColor="var(--color-consumption)"
		/>
	);
}
