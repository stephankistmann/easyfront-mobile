import React, { useCallback, useState } from "react";
import Header from "../../components/Header";
import { Alert, Button, Image } from "react-native";
import qrcodeIcon from "../../assets/qrcode-icon.png";
import qrcode from "../../assets/qrcode.png";
import { ScrollView } from "react-native-gesture-handler";
import * as Yup from "yup";
import QRScanner from "../../components/QRScanner";
import {
  Container,
  Main,
  NewTagContainer,
  NewTagContainerText,
  TextsContainer,
  HowToText,
  DescriptionContainer,
  DescriptionContainerText,
  DescriptionContainerOptionContainer,
  DescriptionContainerOptionText,
  InputOrQrCodeContainer,
  QrCodeButton,
  QrCodeButtonText,
  QRCodeAndAddTagContainer,
  AddTag,
  AddTagText,
  AddTagContainer,
  Modal,
  QrCodeButtonContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";
import api from "../../services/api";
import getValidationErrors from "../../utils/getValidationErrors";

interface IQRCode {
  serial: string;
}

const TagsAdd: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();
  const [serial, setSerial] = useState<IQRCode>();
  const [hasSerial, setHasSerial] = useState(false);

  const onCodeScanned = (data: any) => {
    setSerial(data.data);
    console.log(data.data);
    setIsOpen(false);
    setHasSerial(true);
  };

  const handleCreateTag = useCallback(async () => {
    console.log(serial);

    if (serial) {
      try {
        // await schema.validate(data, {
        //   abortEarly: false,
        // });

        const response = await api.post(`/tags`, { serial: serial });

        console.log(response.data);

        Alert.alert("Sucesso!", "Sucesso ao criar a tag");

        navigation.navigate("TagsStack", {
          screen: "TagsCreated",
        });
      } catch (err) {
        console.log(err);
        // if (err instanceof Yup.ValidationError) {
        //   const errors = getValidationErrors(err);

        // Alert.alert(
        //   "Erro ao criar convite",
        //   "Ocorreu um erro ao tentar criar o convite, verifique todos os campos e tente novamente."
        // );
        return;
        // }
      }
    }
  }, [serial]);

  return (
    <Container>
      <Header hasBackButton />
      <Main>
        <ScrollView>
          <NewTagContainer>
            <Image source={qrcode} />
            <NewTagContainerText>Adicionar nova Tag</NewTagContainerText>
          </NewTagContainer>
          <TextsContainer>
            <HowToText>Como cadastrar uma tag?</HowToText>
            <DescriptionContainer>
              <DescriptionContainerText>
                Para cadastrar uma nova Tag você deve gerar o serial no
                interfone. Com o serial gerado você pode:
              </DescriptionContainerText>
              <DescriptionContainerOptionContainer>
                <DescriptionContainerOptionText>
                  1 - Inserir o código no campo abaixo.
                  {"\n"}2 - Fazer a leitura do QR Code gerado.
                </DescriptionContainerOptionText>
              </DescriptionContainerOptionContainer>
            </DescriptionContainer>
          </TextsContainer>
        </ScrollView>
      </Main>

      <QRCodeAndAddTagContainer>
        <InputOrQrCodeContainer>
          <QrCodeButton onPress={() => setIsOpen(!isOpen)}>
            <QrCodeButtonContainer>
              {hasSerial ? (
                <QrCodeButtonText>{serial}</QrCodeButtonText>
              ) : (
                <QrCodeButtonText>Escaneie o QR Code</QrCodeButtonText>
              )}

              <Image source={qrcodeIcon} />
              <Modal
                visible={isOpen}
                animationType="slide"
                presentationStyle="overFullScreen"
              >
                <QRScanner onCodeScanned={onCodeScanned} />
                <Button title="Cancelar" onPress={() => setIsOpen(!isOpen)} />
              </Modal>
            </QrCodeButtonContainer>
          </QrCodeButton>
        </InputOrQrCodeContainer>
        <AddTag onPress={handleCreateTag}>
          <AddTagText>Adicionar Tag</AddTagText>
          <AddTagContainer>
            <Feather name="plus" size={30} color="#fff" />
          </AddTagContainer>
        </AddTag>
      </QRCodeAndAddTagContainer>
    </Container>
  );
};

export default TagsAdd;
