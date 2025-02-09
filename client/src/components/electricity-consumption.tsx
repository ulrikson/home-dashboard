import { Bar, BarChart, XAxis } from 'recharts';

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
	{ month: 'January', consumption: 186 },
	{ month: 'February', consumption: 305 },
	{ month: 'March', consumption: 237 },
	{ month: 'April', consumption: 73 },
	{ month: 'May', consumption: 209 },
	{ month: 'June', consumption: 214 },
];

const chartConfig = {
	consumption: {
		label: 'Consumption',
		color: 'hsl(var(--chart-2))',
	},
} satisfies ChartConfig;

export function ElectricityConsumption() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Electricity Consumption</CardTitle>
				<CardDescription>January - June 2024</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={value => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar
							dataKey="consumption"
							fill="var(--color-consumption)"
							radius={8}
						/>
					</BarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
