import React from "react";
import Header from "../../components/Header";
import { Image } from "react-native";
import qrcodeIcon from "../../assets/qrcode-icon.png";
import qrcode from "../../assets/qrcode.png";
import { ScrollView } from "react-native-gesture-handler";
import InputTouachableOpacity from "./InputTouchableOpacity";
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
  QRCodeAndAddTagContainer,
  AddTag,
  AddTagText,
  AddTagContainer,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import Feather from "react-native-vector-icons/Feather";

const TagsAdd: React.FC = () => {
  const navigation = useNavigation();

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
          <InputTouachableOpacity
            name="serial"
            placeholder="Digite o serial ou escaneie o QR Code"
          />
          <QrCodeButton>
            <Image source={qrcodeIcon} />
          </QrCodeButton>
        </InputOrQrCodeContainer>
        <AddTag onPress={() => navigation.navigate("TagsAdd")}>
          <AddTagText
            style={{ color: "#fff", fontWeight: "bold", marginLeft: 16 }}
          >
            Adicionar tag
          </AddTagText>
          <AddTagContainer>
            <Feather name="plus" size={30} color="#fff" />
          </AddTagContainer>
        </AddTag>
      </QRCodeAndAddTagContainer>
    </Container>
  );
};

export default TagsAdd;
