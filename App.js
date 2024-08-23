import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const COMBINACOES_SEGUROS = {
  'Água Sanitária+Vinagre': false,
  'Vinagre+Água Sanitária': false,
  'Água Sanitária+Detergente': true,
  'Detergente+Água Sanitária': true,
  'Vinagre+Detergente': true,
  'Detergente+Vinagre': true,
  'Água Sanitária+Álcool': false,
  'Álcool+Água Sanitária': false,
  'Vinagre+Álcool': true,
  'Álcool+Vinagre': true,
  'Detergente+Álcool': true,
  'Álcool+Detergente': true,
  'Água Sanitária+Sabão Líquido': true,
  'Sabão Líquido+Água Sanitária': true,
  'Vinagre+Sabão Líquido': true,
  'Sabão Líquido+Vinagre': true,
  'Detergente+Sabão Líquido': true,
  'Sabão Líquido+Detergente': true,
  'Água Sanitária+Desinfetante': true,
  'Desinfetante+Água Sanitária': true,
  'Vinagre+Desinfetante': false,
  'Desinfetante+Vinagre': false,
  'Detergente+Desinfetante': true,
  'Desinfetante+Detergente': true,
  'Água Sanitária+Polidor': true,
  'Polidor+Água Sanitária': true,
  'Vinagre+Polidor': false,
  'Polidor+Vinagre': false,
  'Detergente+Polidor': true,
  'Polidor+Detergente': true,
  'Água Sanitária+Lustra Móveis': true,
  'Lustra Móveis+Água Sanitária': true,
  'Vinagre+Lustra Móveis': false,
  'Lustra Móveis+Vinagre': false,
  'Detergente+Lustra Móveis': true,
  'Lustra Móveis+Detergente': true,
  'Água Sanitária+Limpa Vidros': true,
  'Limpa Vidros+Água Sanitária': true,
  'Vinagre+Limpa Vidros': true,
  'Limpa Vidros+Vinagre': true,
  'Detergente+Limpa Vidros': true,
  'Limpa Vidros+Detergente': true,
  'Água Sanitária+Desengordurante': true,
  'Desengordurante+Água Sanitária': true,
  'Vinagre+Desengordurante': true,
  'Desengordurante+Vinagre': true,
  'Detergente+Desengordurante': true,
  'Desengordurante+Detergente': true,
};

const EXPLICACOES = {
  'Água Sanitária+Vinagre': "A combinação de Água Sanitária e Vinagre produz gás cloro, que é tóxico.",
  'Vinagre+Água Sanitária': "A combinação de Água Sanitária e Vinagre produz gás cloro, que é tóxico.",
  'Água Sanitária+Detergente': "A combinação de Água Sanitária e Detergente é segura e pode ajudar na limpeza.",
  'Detergente+Água Sanitária': "A combinação de Água Sanitária e Detergente é segura e pode ajudar na limpeza.",
  'Vinagre+Detergente': "A combinação de Vinagre e Detergente é segura e eficiente para limpeza.",
  'Detergente+Vinagre': "A combinação de Vinagre e Detergente é segura e eficiente para limpeza.",
  'Água Sanitária+Álcool': "A combinação de Água Sanitária e Álcool pode produzir vapores tóxicos.",
  'Álcool+Água Sanitária': "A combinação de Água Sanitária e Álcool pode produzir vapores tóxicos.",
  'Vinagre+Álcool': "A combinação de Vinagre e Álcool é segura e útil para limpeza.",
  'Álcool+Vinagre': "A combinação de Vinagre e Álcool é segura e útil para limpeza.",
  'Detergente+Álcool': "A combinação de Detergente e Álcool é segura e pode ser eficaz na limpeza.",
  'Álcool+Detergente': "A combinação de Detergente e Álcool é segura e pode ser eficaz na limpeza.",
  'Água Sanitária+Sabão Líquido': "A combinação de Água Sanitária e Sabão Líquido é segura e comum na limpeza.",
  'Sabão Líquido+Água Sanitária': "A combinação de Água Sanitária e Sabão Líquido é segura e comum na limpeza.",
  'Vinagre+Sabão Líquido': "A combinação de Vinagre e Sabão Líquido é segura e eficaz para limpeza.",
  'Sabão Líquido+Vinagre': "A combinação de Vinagre e Sabão Líquido é segura e eficaz para limpeza.",
  'Detergente+Sabão Líquido': "A combinação de Detergente e Sabão Líquido é segura e muito utilizada para limpeza.",
  'Sabão Líquido+Detergente': "A combinação de Detergente e Sabão Líquido é segura e muito utilizada para limpeza.",
  'Água Sanitária+Desinfetante': "A combinação de Água Sanitária e Desinfetante é segura e potente para desinfecção.",
  'Desinfetante+Água Sanitária': "A combinação de Água Sanitária e Desinfetante é segura e potente para desinfecção.",
  'Vinagre+Desinfetante': "A combinação de Vinagre e Desinfetante pode ser perigosa e liberar vapores tóxicos.",
  'Desinfetante+Vinagre': "A combinação de Vinagre e Desinfetante pode ser perigosa e liberar vapores tóxicos.",
  'Detergente+Desinfetante': "A combinação de Detergente e Desinfetante é segura e eficaz.",
  'Desinfetante+Detergente': "A combinação de Detergente e Desinfetante é segura e eficaz.",
  'Água Sanitária+Polidor': "A combinação de Água Sanitária e Polidor é segura e pode ser útil para limpeza.",
  'Polidor+Água Sanitária': "A combinação de Água Sanitária e Polidor é segura e pode ser útil para limpeza.",
  'Vinagre+Polidor': "A combinação de Vinagre e Polidor pode ser perigosa e liberar vapores tóxicos.",
  'Polidor+Vinagre': "A combinação de Vinagre e Polidor pode ser perigosa e liberar vapores tóxicos.",
  'Detergente+Polidor': "A combinação de Detergente e Polidor é segura e eficiente para limpeza.",
  'Polidor+Detergente': "A combinação de Detergente e Polidor é segura e eficiente para limpeza.",
  'Água Sanitária+Lustra Móveis': "A combinação de Água Sanitária e Lustra Móveis é segura e pode ser eficaz na limpeza de móveis.",
  'Lustra Móveis+Água Sanitária': "A combinação de Água Sanitária e Lustra Móveis é segura e pode ser eficaz na limpeza de móveis.",
  'Vinagre+Lustra Móveis': "A combinação de Vinagre e Lustra Móveis pode liberar vapores tóxicos e deve ser evitada.",
  'Lustra Móveis+Vinagre': "A combinação de Vinagre e Lustra Móveis pode liberar vapores tóxicos e deve ser evitada.",
  'Detergente+Lustra Móveis': "A combinação de Detergente e Lustra Móveis é segura e eficiente para limpeza de móveis.",
  'Lustra Móveis+Detergente': "A combinação de Detergente e Lustra Móveis é segura e eficiente para limpeza de móveis.",
  'Água Sanitária+Limpa Vidros': "A combinação de Água Sanitária e Limpa Vidros é segura e pode ajudar na limpeza de vidros.",
  'Limpa Vidros+Água Sanitária': "A combinação de Água Sanitária e Limpa Vidros é segura e pode ajudar na limpeza de vidros.",
  'Vinagre+Limpa Vidros': "A combinação de Vinagre e Limpa Vidros é segura e eficiente para limpeza de vidros.",
  'Limpa Vidros+Vinagre': "A combinação de Vinagre e Limpa Vidros é segura e eficiente para limpeza de vidros.",
  'Detergente+Limpa Vidros': "A combinação de Detergente e Limpa Vidros é segura e útil na limpeza de vidros.",
  'Limpa Vidros+Detergente': "A combinação de Detergente e Limpa Vidros é segura e útil na limpeza de vidros.",
  'Água Sanitária+Desengordurante': "A combinação de Água Sanitária e Desengordurante é segura e eficaz para remover gordura.",
  'Desengordurante+Água Sanitária': "A combinação de Água Sanitária e Desengordurante é segura e eficaz para remover gordura.",
  'Vinagre+Desengordurante': "A combinação de Vinagre e Desengordurante é segura e útil para remover gordura.",
  'Desengordurante+Vinagre': "A combinação de Vinagre e Desengordurante é segura e útil para remover gordura.",
  'Detergente+Desengordurante': "A combinação de Detergente e Desengordurante é segura e eficaz na remoção de gordura.",
  'Desengordurante+Detergente': "A combinação de Detergente e Desengordurante é segura e eficaz na remoção de gordura.",
};

export default function App() {
  const [produto1, setProduto1] = useState('Água Sanitária');
  const [produto2, setProduto2] = useState('Vinagre');
  const [resultado, setResultado] = useState(null);

  const verificarMistura = () => {
    const combinacao = `${produto1}+${produto2}`;
    const segura = produto1 === produto2 ? true : COMBINACOES_SEGUROS[combinacao] || false;
    const explicacao = EXPLICACOES[combinacao] || explicacoesPadrao(produto1, produto2, segura);
    setResultado({ segura, explicacao });
  };

  const explicacoesPadrao = (produto1, produto2, segura) => {
    if (produto1 === produto2) {
      return 'A mistura de um produto com ele mesmo é sempre segura.';
    } else if (segura) {
      return 'Esta mistura é considerada segura. No entanto, recomenda-se sempre testar em uma pequena área antes de usar em grandes superfícies.';
    }
    return 'Esta mistura é considerada perigosa. Não a utilize sob hipótese nenhuma, sob risco à sua saúde e a de sua família.';
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Verificador de Mistura de Produtos de Limpeza</Text>

      <Text style={styles.label}>Selecione o primeiro produto:</Text>
      <Picker selectedValue={produto1} onValueChange={(itemValue) => setProduto1(itemValue)} style={styles.picker}>
        <Picker.Item label="Água Sanitária" value="Água Sanitária" />
        <Picker.Item label="Vinagre" value="Vinagre" />
        <Picker.Item label="Detergente" value="Detergente" />
        <Picker.Item label="Álcool" value="Álcool" />
        <Picker.Item label="Sabão Líquido" value="Sabão Líquido" />
        <Picker.Item label="Desinfetante" value="Desinfetante" />
        <Picker.Item label="Polidor" value="Polidor" />
        <Picker.Item label="Lustra Móveis" value="Lustra Móveis" />
        <Picker.Item label="Limpa Vidros" value="Limpa Vidros" />
        <Picker.Item label="Desengordurante" value="Desengordurante" />
      </Picker>

      <Text style={styles.label}>Selecione o segundo produto:</Text>
      <Picker selectedValue={produto2} onValueChange={(itemValue) => setProduto2(itemValue)} style={styles.picker}>
        <Picker.Item label="Água Sanitária" value="Água Sanitária" />
        <Picker.Item label="Vinagre" value="Vinagre" />
        <Picker.Item label="Detergente" value="Detergente" />
        <Picker.Item label="Álcool" value="Álcool" />
        <Picker.Item label="Sabão Líquido" value="Sabão Líquido" />
        <Picker.Item label="Desinfetante" value="Desinfetante" />
        <Picker.Item label="Polidor" value="Polidor" />
        <Picker.Item label="Lustra Móveis" value="Lustra Móveis" />
        <Picker.Item label="Limpa Vidros" value="Limpa Vidros" />
        <Picker.Item label="Desengordurante" value="Desengordurante" />
      </Picker>

      <TouchableOpacity style={styles.button} onPress={verificarMistura}>
        <Text style={styles.buttonText}>Verificar Mistura</Text>
      </TouchableOpacity>

      {resultado && (
        <View style={[styles.resultContainer, resultado.segura ? styles.safe : styles.unsafe]}>
          <Text style={styles.resultText}>
            {resultado.segura ? 'A mistura é segura.' : 'A mistura NÃO é segura.'}
          </Text>
          <Text style={styles.resultExplanation}>{resultado.explicacao}</Text>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4', // cor de fundo mais suave
  },
  title: {
    fontSize: 26,
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
    color: '#555',
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  resultContainer: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    width: '100%',
    borderWidth: 1,
  },
  safe: {
    backgroundColor: '#d4edda',
    borderColor: '#c3e6cb',
  },
  unsafe: {
    backgroundColor: '#f8d7da',
    borderColor: '#f5c6cb',
  },
  resultText: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
    color: '#333',
  },
  resultExplanation: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 10,
    color: '#666',
  },
});
