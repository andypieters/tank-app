export default interface FuelSession {
  id?: string;
  odo?: number;
  liters?: number;
  pricePerLiter?: number;
  fuelType?: string;
  position?: Position;
  createdAt?: Date;
}
