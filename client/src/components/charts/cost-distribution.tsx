import { Pie, PieChart as RechartsPieChart } from 'recharts';

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
	ChartLegend,
	ChartLegendContent,
} from '@/components/ui/chart';

interface DataItem {
	category: string;
	value: number;
	fill?: string;
}

interface PieChartProps {
	data: DataItem[];
	config: ChartConfig;
	title?: string;
	description?: string;
	valueKey?: string;
	categoryKey?: string;
	className?: string;
	maxHeight?: string | number;
}

export function PieChart({
	data,
	config,
	title,
	description,
	valueKey = 'value',
	categoryKey = 'category',
	className = '',
	maxHeight = '300px',
}: PieChartProps) {
	return (
		<Card className={`flex flex-col ${className}`}>
			{(title || description) && (
				<CardHeader className="items-center pb-0">
					{title && <CardTitle>{title}</CardTitle>}
					{description && (
						<CardDescription>{description}</CardDescription>
					)}
				</CardHeader>
			)}
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={config}
					className={`mx-auto aspect-square max-h-[${maxHeight}]`}
				>
					<RechartsPieChart>
						<Pie
							data={data}
							dataKey={valueKey}
							nameKey={categoryKey}
						/>
						<ChartLegend
							content={
								<ChartLegendContent nameKey={categoryKey} />
							}
							className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
						/>
					</RechartsPieChart>
				</ChartContainer>
			</CardContent>
		</Card>
	);
}
