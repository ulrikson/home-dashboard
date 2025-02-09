import { CostCard } from '@/components/cost-card';
import { ElectricityConsumption } from '@/components/charts/electricity-consumption';
import { CostDistribution } from '@/components/charts/cost-distribution';

export function Dashboard() {
	const maintenanceCost = 100;
	const loanCost = 150;
	const electricityCost = 100;
	const totalCost = maintenanceCost + loanCost + electricityCost;

	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
				<CostCard
					title="Maintenance Costs"
					description="From object description"
					cost={maintenanceCost}
				/>
				<CostCard
					title="Electricity Costs"
					description="From object description"
					cost={electricityCost}
				/>
				<CostCard
					title="Loan Costs"
					description="From object description"
					cost={loanCost}
				/>
				<CostCard
					title="Total Costs"
					description="Maintenance + Electricity + Loan"
					cost={totalCost}
				/>
			</div>
			<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
				<CostDistribution />
				<ElectricityConsumption />
			</div>
		</div>
	);
}
