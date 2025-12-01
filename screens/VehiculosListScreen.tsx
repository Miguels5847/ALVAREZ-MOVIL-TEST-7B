import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import type { Vehiculo } from '../models/vehiculos'
import { FromButton } from '../components/FromButton'

type VehiculosListScreenProps = {
    vehiculos: Vehiculo[]
    onRegisterAnother?: () => void
}

export const VehiculosListScreen = ({ vehiculos, onRegisterAnother }: VehiculosListScreenProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Vehículos Registrados</Text>

            <ScrollView style={styles.tableContainer}>
                <View style={styles.table}>
                    {/* Table Header */}
                    <View style={styles.tableRow}>
                        <Text style={[styles.tableHeader, styles.cell]}>Placa</Text>
                        <Text style={[styles.tableHeader, styles.cell]}>Dueño</Text>
                        <Text style={[styles.tableHeader, styles.cell]}>Marca</Text>
                        <Text style={[styles.tableHeader, styles.cell]}>Modelo</Text>
                    </View>

                    {/* Table Rows */}
                    {vehiculos.length === 0 ? (
                        <View style={styles.emptyContainer}>
                            <Text style={styles.emptyText}>No hay vehículos registrados</Text>
                        </View>
                    ) : (
                        vehiculos.map((vehiculo, index) => (
                            <View key={index} style={styles.tableRow}>
                                <Text style={styles.cell}>{vehiculo.Placa}</Text>
                                <Text style={styles.cell}>{vehiculo.NombreDelDueño}</Text>
                                <Text style={styles.cell}>{vehiculo.Marca}</Text>
                                <Text style={styles.cell}>{vehiculo.Modelo}</Text>
                            </View>
                        ))
                    )}
                </View>
            </ScrollView>

            <FromButton label="Registrar Otro" onPress={onRegisterAnother} />
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
    tableContainer: {
        flex: 1,
        marginBottom: 16,
    },
    table: {
        borderWidth: 1,
        borderColor: '#d1d5db',
        borderRadius: 8,
        overflow: 'hidden',
    },
    tableRow: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: '#d1d5db',
    },
    tableHeader: {
        backgroundColor: '#f3f4f6',
        fontWeight: '700',
        fontSize: 14,
    },
    cell: {
        flex: 1,
        padding: 12,
        fontSize: 14,
        color: 'black',
    },
    emptyContainer: {
        padding: 24,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 16,
        color: '#6b7280',
        fontStyle: 'italic',
    }
})
