import React from 'react';
import { ElectricityConsumption } from './electricity-consumption';
import { CostDistribution } from '@/components/cost-distribution';
import { CostCardList } from '@/components/cost-card-list';
import { CostsDTO } from '../../../shared/types/costs';
import { DashboardService } from '@/services/api.service';

export function Dashboard() {
	const [costs, setCosts] = React.useState<CostsDTO | null>(null);

	React.useEffect(() => {
		const fetchCosts = async () => {
			try {
				const data = await DashboardService.fetchCosts();
				setCosts(data);
			} catch (error) {
				console.error('Error fetching costs:', error);
			}
		};

		fetchCosts();
	}, []);

	return (
		<div>
			{costs ? (
				<>
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<CostCardList costs={costs} />
					</div>
					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
						<>
							<CostDistribution costs={costs} />
							<ElectricityConsumption />
						</>
					</div>
				</>
			) : (
				<div />
			)}
		</div>
	);
}
