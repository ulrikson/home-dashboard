import {
	CostsDTO,
	ElectricityConsumptionDTO,
} from '../../../shared/types/costs';

const API_BASE_URL = 'http://localhost:5000/api';

// TODO: Remove this
const randomSleep = (): Promise<void> => {
	const delay = Math.floor(Math.random() * 2000); // Random delay between 0 and 2000 ms
	return new Promise(resolve => setTimeout(resolve, delay));
};

export class DashboardService {
	static async fetchCosts(): Promise<CostsDTO> {
		await randomSleep(); // TODO: Remove random sleep
		const response = await fetch(`${API_BASE_URL}/dashboard`);
		return response.json();
	}

	static async fetchElectricityConsumption(): Promise<ElectricityConsumptionDTO> {
		await randomSleep(); // TODO: Remove random sleep
		const response = await fetch(`${API_BASE_URL}/electricity-consumption`);
		return response.json();
	}
}
