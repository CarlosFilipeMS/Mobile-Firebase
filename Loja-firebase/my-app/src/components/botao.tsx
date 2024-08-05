import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface BotaoProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
}

export const Botao: React.FC<BotaoProps> = ({ title, onPress, disabled }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});
