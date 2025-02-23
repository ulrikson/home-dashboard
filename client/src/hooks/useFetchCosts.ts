import { useState, useEffect } from 'react';
import { CostsDTO } from '../../../shared/types/costs';
import pb from '@/lib/pocketbase';

export function useFetchCosts() {
	const [data, setData] = useState<CostsDTO | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchCosts = async () => {
			try {
				const record = await pb
					.collection('costs')
					.getFirstListItem('');

				const costsData: CostsDTO = {
					maintenanceCost: record.maintenanceCost,
					electricityCost: record.electricityCost,
					loanCost: record.loanCost,
				};
				setData(costsData);
				setError(null);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'Failed to fetch costs'
				);
				console.error('Error fetching costs:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchCosts();
	}, []);

	return { data, loading, error };
}
