import { BarChart } from '@/components/charts/bar-chart';
import { CostDistribution } from '@/components/cost-distribution';
import { ChartConfig } from './ui/chart';
import { CostCardList } from '@/components/cost-card-list';
import { CostsDTO } from '@/types/costs';

export function Dashboard() {
	const costs: CostsDTO = {
		maintenanceCost: 100,
		electricityCost: 100,
		loanCost: 150,
	};

	// Electricity consumption data for bar chart
	const electricityData = [
		{ month: 'January', consumption: 186 },
		{ month: 'February', consumption: 305 },
		{ month: 'March', consumption: 237 },
		{ month: 'April', consumption: 73 },
		{ month: 'May', consumption: 209 },
		{ month: 'June', consumption: 214 },
	];

	const electricityConfig = {
		consumption: {
			label: 'Consumption',
			color: 'hsl(var(--chart-4))',
		},
	} satisfies ChartConfig;

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<CostCardList costs={costs} />
			</div>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<CostDistribution costs={costs} />
				<BarChart
					data={electricityData}
					config={electricityConfig}
					title="Electricity Consumption"
					description="January - June 2024"
					xAxisKey="month"
					dataKey="consumption"
					barColor="var(--color-consumption)"
				/>
			</div>
		</div>
	);
}
