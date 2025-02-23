export interface CostsDTO {
	maintenanceCost: number;
	electricityCost: number;
	loanCost: number;
}

export interface ElectricityConsumptionData {
	[key: string]: string | number;
	month: string;
	consumption: number;
}

export type ElectricityConsumptionDTO = ElectricityConsumptionData[];
