import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';

export function CostCard({
	title,
	description,
	cost,
}: {
	title: string;
	description: string;
	cost: number;
}) {
	return (
		<Card>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				<CardDescription>{description}</CardDescription>
			</CardHeader>
			<CardContent>
				<div className="text-2xl font-bold">{cost} SEK</div>
			</CardContent>
		</Card>
	);
}
