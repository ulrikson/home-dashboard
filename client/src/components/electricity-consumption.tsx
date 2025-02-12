import { BarChart } from '@/components/charts/bar-chart';
import { ChartConfig } from './ui/chart';
import { useElectricityConsumption } from '@/hooks/useElectricityConsumption';

export function ElectricityConsumption() {
	const { data, error, loading } = useElectricityConsumption();

	const electricityConfig = {
		consumption: {
			label: 'Consumption',
			color: 'hsl(var(--chart-4))',
		},
	} satisfies ChartConfig;

	if (loading) return <div>Loading electricity consumption...</div>;
	if (error || !data) return <div>Error fetching data</div>;

	return (
		<BarChart
			data={data}
			config={electricityConfig}
			title="Electricity Consumption"
			description="January - June 2024"
			xAxisKey="month"
			dataKey="consumption"
			barColor="var(--color-consumption)"
		/>
	);
}
