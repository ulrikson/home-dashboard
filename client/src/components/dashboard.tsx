import { ElectricityConsumption } from './electricity-consumption';
import { CostDistribution } from '@/components/cost-distribution';
import { CostCardList } from '@/components/cost-card-list';
import { CostsDTO } from '@/types/costs';

export function Dashboard() {
	const costs: CostsDTO = {
		maintenanceCost: 100,
		electricityCost: 100,
		loanCost: 150,
	};

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<CostCardList costs={costs} />
			</div>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<CostDistribution costs={costs} />
				<ElectricityConsumption costs={costs} />
			</div>
		</div>
	);
}
