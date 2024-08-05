import { Text, View } from "react-native";
import { Link, router } from 'expo-router';
import { Botao } from "../../src/components/botao";

export default function OutraCoisa(props: any) {
    return (
        <View>
            <Text>Tela 1</Text>
            <Botao title="Clique-me para ir para tela 2 usando router" onPress={() => router.push('tela2')} />
        </View>
    )
}