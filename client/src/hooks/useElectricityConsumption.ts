import { useState, useEffect } from 'react';
import { ElectricityConsumptionData } from '../../../shared/types/costs';
import pb from '@/lib/pocketbase';

export function useElectricityConsumption() {
	const [data, setData] = useState<ElectricityConsumptionData[] | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchElectricityConsumption = async () => {
			try {
				const record = await pb
					.collection('electricityConsumption')
					.getFullList<ElectricityConsumptionData>();

				const consumptionData: ElectricityConsumptionData[] = record;
				setData(consumptionData);
				setError(null);
			} catch (err) {
				setError(
					err instanceof Error
						? err.message
						: 'Failed to fetch consumption'
				);
				console.error('Error fetching consumption:', err);
			} finally {
				setLoading(false);
			}
		};

		fetchElectricityConsumption();
	}, []);

	return { data, loading, error };
}
