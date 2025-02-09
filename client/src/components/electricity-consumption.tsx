import { BarChart } from '@/components/charts/bar-chart';
import { ChartConfig } from './ui/chart';
import { CostsDTO } from '@/types/costs';

export function ElectricityConsumption({ costs }: { costs: CostsDTO }) {
	const electricityCost = costs.electricityCost;
	const getConsumption = () => electricityCost * Math.random();

	const electricityData = [
		{
			month: 'January',
			consumption: getConsumption(),
		},
		{
			month: 'February',
			consumption: getConsumption(),
		},
		{ month: 'March', consumption: getConsumption() },
		{ month: 'April', consumption: getConsumption() },
		{ month: 'May', consumption: getConsumption() },
		{ month: 'June', consumption: getConsumption() },
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
