import {
	CostsDTO,
	ElectricityConsumptionDTO,
} from '../../../shared/types/costs';

export class CostsService {
	public async getDashboardCosts(): Promise<CostsDTO> {
		// TODO: Replace with actual database query
		return {
			maintenanceCost: 100,
			electricityCost: 100,
			loanCost: 150,
		};
	}

	public async getElectricityConsumption(): Promise<ElectricityConsumptionDTO> {
		// TODO: Replace with actual database query
		return [
			{
				month: 'January',
				consumption: Math.floor(Math.random() * 100),
			},
			{
				month: 'February',
				consumption: Math.floor(Math.random() * 100),
			},
			{
				month: 'March',
				consumption: Math.floor(Math.random() * 100),
			},
			{
				month: 'April',
				consumption: Math.floor(Math.random() * 100),
			},
			{ month: 'May', consumption: Math.floor(Math.random() * 100) },
			{ month: 'June', consumption: Math.floor(Math.random() * 100) },
		];
	}
}
