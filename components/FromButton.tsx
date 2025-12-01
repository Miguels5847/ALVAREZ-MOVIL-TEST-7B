import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import type { TouchableOpacityProps } from 'react-native'


type FromButtonProps = TouchableOpacityProps & {
    label: string
}
export const FromButton = ({ label, style, ...props }: FromButtonProps) => {
    return (
        <TouchableOpacity {...props} style={[style, styles.button]}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        backgroundColor: '#3b82f6',
        padding: 14,
        alignItems: 'center',
        borderRadius: 8,
        marginTop: 8
    },
    text: {
        color: 'white',
        fontWeight: '700',
        fontSize: 16
    }

})