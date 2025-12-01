import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import type { Vehiculo } from '../models/vehiculos'
import { FromButton } from '../components/FromButton'

type SummaryScreenProps = {
    vehiculo: Vehiculo
    onClick?: () => void
}

export const SummaryScreen = ({ vehiculo, onClick }: SummaryScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Resumen</Text>
            <View style={styles.card}>
                <Text style={styles.row}>Nombre: {vehiculo.NombreDelDueño}</Text>
                <Text style={styles.row}>Placa: {vehiculo.Placa}</Text>
                <Text style={styles.row}>Año: {vehiculo.Año}</Text>
                <Text style={styles.row}>Tipo de Gasolina: {vehiculo.TipoDeGasolina}</Text>
            </View>
            <FromButton label="Volver a inicio" onPress={onClick} />

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
    card: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        padding: 16,
        marginBottom: 24,
        backgroundColor: '#f9fafb',
    },
    row: {
        fontSize: 16,
        marginBottom: 6,
        color: 'black',
    }
})