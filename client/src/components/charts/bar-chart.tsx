import { Bar, BarChart as RechartsBarChart, XAxis } from 'recharts';

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

interface DataItem {
	[key: string]: string | number;
}

interface BarChartProps {
	data: DataItem[];
	config: ChartConfig;
	title?: string;
	description?: string;
	xAxisKey: string;
	dataKey: string;
	className?: string;
	hideTooltipLabel?: boolean;
	barColor?: string;
	xAxisFormatter?: (value: string) => string;
}

export function BarChart({
	data,
	config,
	title,
	description,
	xAxisKey,
	dataKey,
	className = '',
	hideTooltipLabel = false,
	barColor,
	xAxisFormatter = value => value.slice(0, 3),
}: BarChartProps) {
	return (
		<Card className={className}>
			{(title || description) && (
				<CardHeader>
					{title && <CardTitle>{title}</CardTitle>}
					{description && (
						<CardDescription>{description}</CardDescription>
					)}
				</CardHeader>
			)}
			<CardContent>
				<ChartContainer config={config}>
					<RechartsBarChart accessibilityLayer data={data}>
						<XAxis
							dataKey={xAxisKey}
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={xAxisFormatter}
						/>
						<ChartTooltip
							cursor={false}
							content={
								<ChartTooltipContent
									hideLabel={hideTooltipLabel}
								/>
							}
						/>
						<Bar dataKey={dataKey} fill={barColor} radius={8} />
					</RechartsBarChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
