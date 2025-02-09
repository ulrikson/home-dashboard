import React from 'react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ElectricityConsumption } from '@/components/electricity-consumption';

const App: React.FC = () => {
	const maintenanceCost = 100; // todo: fetch from backend
	const loanCost = 100; // todo: fetch from backend
	const totalCost = maintenanceCost + loanCost; // todo: fetch from backend

	return (
		// todo: refactor to components
		<div className="py-8 min-h-screen bg-slate-900 text-white">
			<div className="max-w-7xl mx-auto px-4 py-8">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					<Card>
						<CardHeader>
							<CardTitle>Maintenance Costs</CardTitle>
							<CardDescription>
								From object description
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{maintenanceCost} SEK
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Loan Costs</CardTitle>
							<CardDescription>
								Interest and amortization
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{loanCost} SEK
							</div>
						</CardContent>
					</Card>
					<Card>
						<CardHeader>
							<CardTitle>Total cost</CardTitle>
							<CardDescription>
								Maintenance + Loan
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-2xl font-bold">
								{totalCost} SEK
							</div>
						</CardContent>
					</Card>
				</div>
				<div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
					<ElectricityConsumption />
				</div>
			</div>
		</div>
	);
};

export default App;
