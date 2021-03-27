import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import { Container, Button, ErrorText } from "./styles";
import { BarCodeScanner } from "expo-barcode-scanner";

interface IQRScanner {
  onCodeScanned: (data: string, type: string) => void;
}

const QRScanner: React.FC<IQRScanner> = ({ onCodeScanned }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = (data: string, type: string) => {
    setScanned(true);
    onCodeScanned(data, type);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };

  if (hasPermission === null) {
    return (
      <Container>
        <ErrorText>Requerindo permissão da câmera</ErrorText>
      </Container>
    );
  }

  if (hasPermission === false) {
    return (
      <Container>
        <ErrorText>Sem acesso a câmera</ErrorText>
      </Container>
    );
  }

  return (
    <Container>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button onPress={() => setScanned(false)} />}
    </Container>
  );
};

export default QRScanner;
