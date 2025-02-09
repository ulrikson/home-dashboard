import { BarChart } from '@/components/charts/bar-chart';
import { PieChart } from '@/components/charts/pie-chart';
import { ChartConfig } from './ui/chart';
import { CostCardList } from '@/components/cost-card-list';
import { CostsDTO } from '@/types/costs';

export function Dashboard() {
	const costs: CostsDTO = {
		maintenanceCost: 100,
		electricityCost: 100,
		loanCost: 150,
	};

	// Cost distribution data for pie chart
	const costDistributionData = [
		{
			category: 'maintenance',
			value: costs.maintenanceCost,
			fill: 'var(--color-maintenance)',
		},
		{ category: 'loan', value: costs.loanCost, fill: 'var(--color-loan)' },
		{
			category: 'electricity',
			value: costs.electricityCost,
			fill: 'var(--color-electricity)',
		},
	];

	const costDistributionConfig = {
		value: {
			label: 'Cost',
		},
		maintenance: {
			label: 'Maintenance',
			color: 'hsl(var(--chart-2))',
		},
		electricity: {
			label: 'Electricity',
			color: 'hsl(var(--chart-4))',
		},
		loan: {
			label: 'Loan',
			color: 'hsl(var(--chart-3))',
		},
	} satisfies ChartConfig;

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
				<PieChart
					data={costDistributionData}
					config={costDistributionConfig}
					title="Cost Distribution"
					description="January - June 2024"
				/>
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
