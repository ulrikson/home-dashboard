import { Request, Response } from 'express';
import { CostsService } from '../services/costs.service';

export class DashboardController {
	private costsService: CostsService;

	constructor() {
		this.costsService = new CostsService();
	}

	public getDashboardData = async (
		_req: Request,
		res: Response
	): Promise<void> => {
		try {
			const costs = await this.costsService.getDashboardCosts();
			res.json(costs);
		} catch (error) {
			res.status(500).json({ message: 'Error fetching dashboard data' });
		}
	};

	public getElectricityConsumption = async (
		_req: Request,
		res: Response
	): Promise<void> => {
		const consumption = await this.costsService.getElectricityConsumption();
		res.json(consumption);
	};
}
