import { CostCard } from '@/components/cost-card';
import { CostsDTO } from '../../../shared/types/costs';

interface CostCardListProps {
	costs: CostsDTO;
}

export function CostCardList({ costs }: CostCardListProps) {
	const totalCost =
		costs.maintenanceCost + costs.electricityCost + costs.loanCost;

	const costCardData = [
		{
			title: 'Maintenance Costs',
			description: 'Water, Internet, etc.',
			cost: costs.maintenanceCost,
		},
		{
			title: 'Electricity Costs',
			description: 'Electricity, Heating, etc.',
			cost: costs.electricityCost,
		},
		{
			title: 'Loan Costs',
			description: 'Loan, Taxes, etc.',
			cost: costs.loanCost,
		},
		{
			title: 'Total Costs',
			description: 'Maintenance, Electricity and Loan',
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
