import React from 'react'
import type { Vehiculo } from '../models/vehiculos'
import { View, Text, StyleSheet } from 'react-native'
import { FormInput } from '../components/FromInput'
import { FromButton } from '../components/FromButton'

type VehiculoDetailScreenProps = {
    vehiculo: Vehiculo,
    onChange: (field: keyof Vehiculo, value: string) => void
    onNext: () => void
    onBack?: () => void
}

export const VehiculoDetailScreen = ({ vehiculo, onChange, onNext, onBack }: VehiculoDetailScreenProps) => {
    const isValid =
        vehiculo.Placa.trim() !== '' &&
        vehiculo.NombreDelDueño.trim() !== '' &&
        vehiculo.Año.trim() !== '' &&
        vehiculo.TipoDeGasolina.trim() !== '';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Detalle del Vehiculo</Text>
            <FormInput
                label="Placa"
                placeholder="ABC-1234"
                value={vehiculo.Placa}
                onChangeText={value => onChange('Placa', value)}
            />
            <FormInput
                label="Nombre del Dueño"
                placeholder="Juan Perez"
                value={vehiculo.NombreDelDueño}
                onChangeText={value => onChange('NombreDelDueño', value)}
            />
            <FormInput
                label="Año"
                placeholder="2020"
                value={vehiculo.Año}
                onChangeText={value => onChange('Año', value)}
            />
            <FormInput
                label="Tipo de Gasolina"
                placeholder="Gasolina Regular"
                value={vehiculo.TipoDeGasolina}
                onChangeText={value => onChange('TipoDeGasolina', value)}
            />
            <View style={styles.buttonRow}>
                {onBack && <FromButton label="Regresar" onPress={onBack} style={styles.button} />}
                <FromButton
                    label="Siguiente"
                    onPress={onNext}
                    disabled={!isValid}
                    style={styles.button}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 16,
    },
    buttonRow: {
        flexDirection: 'row',
        gap: 12,
        marginTop: 8,
    },
    button: {
        flex: 1,
    }
})

