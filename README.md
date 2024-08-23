# Verificador de Mistura de Produtos de Limpeza

Este aplicativo é uma ferramenta útil que permite aos usuários verificar se a combinação de dois produtos de limpeza é segura. Foi desenvolvido usando React Native e o Expo.

## Funcionalidades

- **Seleção de Produtos**: Escolha dois produtos de limpeza diferentes para verificar sua compatibilidade.
- **Resultados Detalhados**: Receba informações detalhadas sobre se a mistura é segura e a explicação correspondente.
- **Interface Amigável**: Interface simples e fácil de usar.

## Tecnologias Utilizadas

- React Native
- Expo
- @react-native-picker/picker

## Como Executar

Para rodar este projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**

   ```bash
   git clone https://github.com/matheusmontenegro97/Verificador-Mistura-Produtos-Limpeza-React-Native.git
   cd Verificador-Mistura-Produtos-Limpeza-React-Native

2. **Instale as Dependências**
   
   ```bash
   npm install

3. **Inicie o Projeto**
   
   ```bash
   expo start

## Instalação em Smartphones Android

Para instalar o aplicativo `verificador-misturas-produto-limpeza.aab` diretamente em seu smartphone Android, você precisará seguir estes passos:

### Pré-requisitos

1. **Habilitar a instalação de fontes desconhecidas**:
   - Vá para `Configurações` > `Segurança` no seu dispositivo Android.
   - Ative a opção `Fontes desconhecidas` para permitir a instalação de aplicativos de fontes que não sejam a Google Play Store.

2. **Tenha o arquivo AAB disponível**:
   - Certifique-se de ter o arquivo `verificador-misturas-produto-limpeza.aab` disponível no seu dispositivo. Você pode transferir o arquivo para o seu dispositivo via USB, e-mail, ou qualquer outro método de transferência de arquivos.

### Instalação Usando o Bundletool

Para instalar o AAB diretamente, você precisará usar o `Bundletool`, uma ferramenta que permite manipular e instalar Android App Bundles. Aqui estão os passos detalhados:

1. **Baixe o Bundletool**:
   - Baixe a ferramenta do repositório GitHub: [Bundletool Releases](https://github.com/google/bundletool/releases)

2. **Gerar APKs do AAB**:
   - Use o Bundletool para gerar APKs que possam ser instalados no seu dispositivo. Abra o terminal ou prompt de comando no seu computador e execute o seguinte comando:
     ```bash
     java -jar bundletool-all-<version>.jar build-apks --bundle=/path/to/verificador-misturas-produto-limpeza.aab --output=/path/to/output.apks --connected-device
     ```
   - O comando `--connected-device` garante que os APKs sejam gerados especificamente para o hardware do dispositivo conectado.

3. **Instale o APK no dispositivo**:
   - Ainda usando o Bundletool, instale o APK no seu dispositivo com o comando:
     ```bash
     java -jar bundletool-all-<version>.jar install-apks --apks=/path/to/output.apks
     ```

### Verificação da Instalação

- Após a instalação, o ícone do aplicativo `Verificador de Misturas de Produtos de Limpeza` deverá aparecer na tela inicial ou na listagem de aplicativos do seu dispositivo.
- Toque no ícone para abrir o aplicativo e começar a usar.

## Como Usar
1. Selecione dois produtos de limpeza: Escolha dois produtos a partir das listas suspensas.
2. Clique no botão "Verificar Mistura": O aplicativo verificará se a mistura é segura.
3. Veja o resultado: Uma nova janela será aberta com o resultado da verificação e uma explicação sobre a segurança da mistura.

## Observações
- Este aplicativo é apenas para fins educacionais. Consulte um especialista em segurança antes de misturar produtos químicos em grande escala.
- Este software não cobre todos os possíveis produtos de limpeza e combinações existentes. Utilize-o como uma ferramenta de referência, mas com cautela.
