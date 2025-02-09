import React from 'react';
import { ElectricityConsumption } from './electricity-consumption';
import { CostDistribution } from '@/components/cost-distribution';
import { CostCardList } from '@/components/cost-card-list';
import { CostsDTO } from '../../../shared/types/costs';

export function Dashboard() {
	const [costs, setCosts] = React.useState<CostsDTO | null>(null);

	React.useEffect(() => {
		const fetchCosts = async () => {
			try {
				const response = await fetch(
					'http://localhost:5000/api/dashboard'
				);
				if (!response.ok) {
					throw new Error('Network response was not ok');
				}
				const data: CostsDTO = await response.json();
				setCosts(data);
			} catch (error) {
				console.error('Error fetching costs:', error);
				if (error instanceof Error) {
					console.error('Error details:', error.message);
				}
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
							<ElectricityConsumption costs={costs} />
						</>
					</div>
				</>
			) : (
				<div />
			)}
		</div>
	);
}
