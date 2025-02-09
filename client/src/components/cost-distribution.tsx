import { Pie, PieChart } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
	{ category: 'maintenance', cost: 100, fill: 'var(--color-maintenance)' },
	{ category: 'loan', cost: 150, fill: 'var(--color-loan)' },
	{ category: 'electricity', cost: 100, fill: 'var(--color-electricity)' },
];

const chartConfig = {
	cost: {
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

export function CostDistribution() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Cost Distribution</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig}
					className="mx-auto aspect-square max-h-[300px]"
				>
					<PieChart>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Pie
							data={chartData}
							dataKey="cost"
							nameKey="category"
						/>
					</PieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
