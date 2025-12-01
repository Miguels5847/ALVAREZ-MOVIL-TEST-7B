import { View, Text, StyleSheet } from "react-native"
import { FormInput } from "../components/FromInput"
import type { Vehiculo } from "../models/vehiculos"
import { FromButton } from "../components/FromButton"

type PersonalInfoScreenProps = {
    vehiculo: Vehiculo,
    onChange: (field: keyof Vehiculo, value: string) => void
    onNext: () => void
    onBack?: () => void
}

export const PersonalInfoScreen = ({ vehiculo, onChange, onNext, onBack }: PersonalInfoScreenProps) => {
    const isValid = vehiculo.Marca.trim() !== '' && vehiculo.Modelo.trim() !== '';

    return (
        <View style={styles.container}>
            <Text>Datos del Vehiculo</Text>
            <FormInput
                label="Marca"
                placeholder="Ingresa la Marca"
                value={vehiculo.Marca}
                //un lamba tiene el valor actual , y la flecha es que voy a hacer con ese valor
                onChangeText={value => onChange('Marca', value)}
            />
            <FormInput
                label="Modelo"
                placeholder="Ingresa el Modelo"
                value={vehiculo.Modelo}
                onChangeText={value => onChange('Modelo', value)}
            />
            <FromButton
                label="Siguiente"
                onPress={onNext}
                disabled={!isValid}
            />
            {onBack && <FromButton label="Atrás" onPress={onBack} />}
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
})