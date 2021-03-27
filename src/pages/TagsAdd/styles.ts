import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: #fff;
`;

export const Main = styled.View`
  align-items: center;
  justify-content: center;
  padding: 32px;
`;

export const NewTagContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const NewTagContainerText = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  color: #383850;
`;

export const TextsContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const HowToText = styled.Text`
  margin-top: 16px;
  font-weight: bold;
  color: #383850;
  margin-bottom: 16px;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainerText = styled.Text`
  color: #707070;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainerOptionContainer = styled.View`
  margin-top: 4px;
  align-items: center;
  justify-content: center;
`;

export const DescriptionContainerOptionText = styled.Text`
  color: #707070;
  align-items: center;
  justify-content: center;
  text-align: justify;
`;

export const InputOrQrCodeContainer = styled.View`
  flex-direction: row;
  max-width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: 32px;
  margin-right: 32px;
`;

export const QrCodeButton = styled.TouchableOpacity`
  /* border-top-right-radius: 8px;
  border-bottom-right-radius: 8px; */
  border-radius: 8px;
  width: 100%;
  height: 50px;
  background: #ebf7ff;
  /* align-items: space-between; */
  justify-content: center;
  align-items: center;
`;

export const QrCodeButtonContainer = styled.View`
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const QrCodeButtonText = styled.Text``;

export const QRCodeAndAddTagContainer = styled.View``;

export const AddTag = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin-left: 32px;
  margin-right: 32px;
  margin-top: 8px;
  margin-bottom: 16px;
  border-radius: 8px;
  height: 48px;
`;

export const AddTagText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
`;

export const AddTagContainer = styled.View`
  background: #f0887e;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

export const Modal = styled.Modal``;
