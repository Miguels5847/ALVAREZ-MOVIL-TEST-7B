import React, { useState } from 'react'
import { emptyVehiculo } from '../models/vehiculos'
import type { Vehiculo } from '../models/vehiculos'

export const totalSteps = 3;

export const useVehiculoForm = () => {
    const [vehiculo, setVehiculo] = useState<Vehiculo>(emptyVehiculo);
    const [step, setStep] = useState(0);

    const updateField = (field: keyof Vehiculo, value: string) => {
        setVehiculo(prev => ({
            ...prev,
            [field]: value
        }));
    }

    const goStep = (target: number) => {
        setStep(target);
    };
    const nextStep = () => { goStep(step + 1); };
    const initialStep = () => { goStep(0); };
    const restart = () => {
        setVehiculo(emptyVehiculo);
        initialStep();
    }
    return { vehiculo, step, nextStep, initialStep, updateField, restart }
}


