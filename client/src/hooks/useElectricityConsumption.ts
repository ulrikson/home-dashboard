import { useState, useEffect } from 'react';
import { ElectricityConsumptionDTO } from '../../../shared/types/costs';

const MOCK_CONSUMPTION: ElectricityConsumptionDTO = [
	{ month: 'January', consumption: 75 },
	{ month: 'February', consumption: 82 },
	{ month: 'March', consumption: 65 },
	{ month: 'April', consumption: 70 },
	{ month: 'May', consumption: 85 },
	{ month: 'June', consumption: 90 },
];

export function useElectricityConsumption() {
	const [data, setData] = useState<ElectricityConsumptionDTO | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate async behavior
		setTimeout(() => {
			setData(MOCK_CONSUMPTION);
			setLoading(false);
		}, 100);
	}, []);

	return { data, loading };
}
