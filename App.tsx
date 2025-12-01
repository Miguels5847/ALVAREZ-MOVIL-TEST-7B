import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { PersonalInfoScreen } from './screens/VehiculoInfoScreen';
import { totalSteps, useVehiculoForm } from './state/useVehiculeFrom';
import { VehiculoDetailScreen } from './screens/VehiculoDetailScreen';
import { SummaryScreen } from './screens/SummaryScreen';

export default function App() {
  const { vehiculo, updateField, step, nextStep, initialStep, restart } = useVehiculoForm();
  const renderScreen = () => {
    if (step === 0) {
      return <PersonalInfoScreen vehiculo={vehiculo} onChange={updateField} onNext={nextStep} />
    }
    if (step === 1) {
      return <VehiculoDetailScreen vehiculo={vehiculo} onChange={updateField} onNext={nextStep} />
    }


    return <SummaryScreen vehiculo={vehiculo} onClick={restart} />
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.card}>
        <Text style={styles.title}>
          Registro de un Vehiculo
        </Text>
        <Text style={styles.steps}>Paso {step + 1} de {totalSteps}</Text>
        {renderScreen()}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f3f4f6'
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black'
  },
  steps: {
    fontSize: 14,
    color: '#4b5563'
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    gap: 16
  }
});