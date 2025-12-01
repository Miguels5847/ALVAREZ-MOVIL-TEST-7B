export type Vehiculo = {
    Marca: string;
    Modelo: string;
    Placa: string;
    NombreDelDueño: string;
    Año: number;
    TipoDeGasolina: string;
}

export const emptyVehiculo: Vehiculo = {
    Marca: '',
    Modelo: '',
    Placa: '',
    NombreDelDueño: '',
    Año: 0,
    TipoDeGasolina: ''
}

