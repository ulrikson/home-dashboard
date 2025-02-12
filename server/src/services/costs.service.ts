import { CostsDTO } from '../../../shared/types/costs';

export class CostsService {
	public async getDashboardCosts(): Promise<CostsDTO> {
		// TODO: Replace with actual database query
		return {
			maintenanceCost: 100,
			electricityCost: 100,
			loanCost: 150,
		};
	}

	public async getElectricityConsumption(): Promise<object> {
		// TODO: Replace with actual database query
		return {
			consumption: 100,
		};
	}
}
