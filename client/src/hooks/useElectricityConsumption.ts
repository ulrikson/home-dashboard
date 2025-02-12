import { useState, useEffect } from 'react';
import { DashboardService } from '@/services/api.service';
import { ElectricityConsumptionDTO } from '../../../shared/types/costs';

export function useElectricityConsumption() {
	const [data, setData] = useState<ElectricityConsumptionDTO | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		DashboardService.fetchElectricityConsumption()
			.then(setData)
			.catch(err => setError(err))
			.finally(() => setLoading(false));
	}, []);

	return { data, error, loading };
}
