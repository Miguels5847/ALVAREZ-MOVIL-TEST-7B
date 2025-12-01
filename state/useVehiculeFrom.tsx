import React, { useState } from 'react'
import { emptyVehiculo } from '../models/vehiculos'
import type { Vehiculo } from '../models/vehiculos'

export const totalSteps = 4;

export const useVehiculoForm = () => {
    const [vehiculo, setVehiculo] = useState<Vehiculo>(emptyVehiculo);
    const [vehiculos, setVehiculos] = useState<Vehiculo[]>([]);
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
    const prevStep = () => { goStep(step - 1); };
    const initialStep = () => { goStep(0); };

    const saveVehiculo = () => {
        setVehiculos(prev => [...prev, vehiculo]);
        setVehiculo(emptyVehiculo);
        nextStep();
    }

    const restart = () => {
        setVehiculo(emptyVehiculo);
        initialStep();
    }

    return {
        vehiculo,
        vehiculos,
        step,
        nextStep,
        prevStep,
        initialStep,
        updateField,
        saveVehiculo,
        restart
    }
}


