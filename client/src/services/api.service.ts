import { CostsDTO } from '../../../shared/types/costs';

const API_BASE_URL = 'http://localhost:5000/api';

export class DashboardService {
	static async fetchCosts(): Promise<CostsDTO> {
		const response = await fetch(`${API_BASE_URL}/dashboard`);
		return response.json();
	}

	static async fetchElectricityConsumption(): Promise<object> {
		const response = await fetch(`${API_BASE_URL}/electricity-consumption`);
		return response.json();
	}
}
