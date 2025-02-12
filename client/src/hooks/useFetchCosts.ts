import { useState, useEffect } from 'react';
import { DashboardService } from '@/services/api.service';
import { CostsDTO } from '../../../shared/types/costs';

export function useFetchCosts() {
	const [data, setData] = useState<CostsDTO | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		DashboardService.fetchCosts()
			.then(setData)
			.catch(err => setError(err))
			.finally(() => setLoading(false));
	}, []);

	return { data, error, loading };
}
