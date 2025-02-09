import { CostCard } from '@/components/cost-card';
import { CostsDTO } from '@/types/costs';

interface CostCardListProps {
	costs: CostsDTO;
}

export function CostCardList({ costs }: CostCardListProps) {
	const totalCost =
		costs.maintenanceCost + costs.electricityCost + costs.loanCost;

	const costCardData = [
		{
			title: 'Maintenance Costs',
			description: 'From object description',
			cost: costs.maintenanceCost,
		},
		{
			title: 'Electricity Costs',
			description: 'From object description',
			cost: costs.electricityCost,
		},
		{
			title: 'Loan Costs',
			description: 'From object description',
			cost: costs.loanCost,
		},
		{
			title: 'Total Costs',
			description: 'Maintenance, Electricity, Loan',
			cost: totalCost,
		},
	];

	return (
		<>
			{costCardData.map((item, index) => (
				<CostCard
					key={index}
					title={item.title}
					description={item.description}
					cost={item.cost}
				/>
			))}
		</>
	);
}
