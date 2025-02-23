import { useState, useEffect } from 'react';
import { CostsDTO } from '../../../shared/types/costs';

const MOCK_COSTS: CostsDTO = {
	maintenanceCost: 100,
	electricityCost: 100,
	loanCost: 150,
};

export function useFetchCosts() {
	const [data, setData] = useState<CostsDTO | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulate async behavior
		setTimeout(() => {
			setData(MOCK_COSTS);
			setLoading(false);
		}, 100);
	}, []);

	return { data, loading };
}
