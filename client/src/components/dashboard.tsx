import { CostCard } from '@/components/cost-card';
import { ElectricityConsumption } from '@/components/charts/electricity-consumption';
import { PieChart } from '@/components/charts/pie-chart';
import { ChartConfig } from './ui/chart';

export function Dashboard() {
	const maintenanceCost = 100;
	const loanCost = 150;
	const electricityCost = 100;
	const totalCost = maintenanceCost + loanCost + electricityCost;

	const chartData = [
		{
			category: 'maintenance',
			value: maintenanceCost,
			fill: 'var(--color-maintenance)',
		},
		{ category: 'loan', value: loanCost, fill: 'var(--color-loan)' },
		{
			category: 'electricity',
			value: electricityCost,
			fill: 'var(--color-electricity)',
		},
	];

	const chartConfig = {
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

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<CostCard
					title="Maintenance Costs"
					description="From object description"
					cost={maintenanceCost}
				/>
				<CostCard
					title="Electricity Costs"
					description="From object description"
					cost={electricityCost}
				/>
				<CostCard
					title="Loan Costs"
					description="From object description"
					cost={loanCost}
				/>
				<CostCard
					title="Total Costs"
					description="Maintenance + Electricity + Loan"
					cost={totalCost}
				/>
			</div>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<PieChart
					data={chartData}
					config={chartConfig}
					title="Cost Distribution"
					description="January - June 2024"
				/>
				<ElectricityConsumption />
			</div>
		</div>
	);
}
