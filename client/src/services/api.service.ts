import {
	CostsDTO,
	ElectricityConsumptionDTO,
} from '../../../shared/types/costs';

const API_BASE_URL = 'http://localhost:5000/api';

export class DashboardService {
	static async fetchCosts(): Promise<CostsDTO> {
		const response = await fetch(`${API_BASE_URL}/dashboard`);
		return response.json();
	}

	static async fetchElectricityConsumption(): Promise<ElectricityConsumptionDTO> {
		const response = await fetch(`${API_BASE_URL}/electricity-consumption`);
		return response.json();
	}
}
