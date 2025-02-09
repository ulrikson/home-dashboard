import { PieChart } from '@/components/charts/pie-chart';
import { ChartConfig } from './ui/chart';
import { CostsDTO } from '../../../shared/types/costs';

export function CostDistribution({ costs }: { costs: CostsDTO }) {
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

	return (
		<PieChart
			data={costDistributionData}
			config={costDistributionConfig}
			title="Cost Distribution"
			description="Maintenance, Electricity, Loan"
		/>
	);
}
