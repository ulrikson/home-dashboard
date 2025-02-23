import { ElectricityConsumption } from './electricity-consumption';
import { CostDistribution } from '@/components/cost-distribution';
import { CostCardList } from '@/components/cost-card-list';
import { useFetchCosts } from '@/hooks/useFetchCosts';

export function Dashboard() {
	const { data: costs, loading } = useFetchCosts();

	if (loading) return <div>Loading costs...</div>;

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
