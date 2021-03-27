import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background: #fff;
`;

export const Main = styled.View`
  flex: 1;
  margin: 24px;
`;

export const MainHeader = styled.View``;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  margin-right: 8px;
`;

export const SubTitle = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Line = styled.View`
  width: 100%;
  height: 1px;
  background: #ccc;
  margin-top: 5%;
  margin-bottom: 5%;
`;

export const SubText = styled.Text`
  margin-top: 8px;
  font-size: 12px;
  color: #aaa;
`;

export const CreateInviteButton = styled.TouchableOpacity`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  background: #f66253;
  margin: 24px;
  border-radius: 8px;
  height: 48px;
  margin-top: 0;
`;

export const CreateInviteButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 16px;
`;

export const CreateInvitePlusIconContainer = styled.View`
  background-color: #f0887e;
  border-bottom-right-radius: 8px;
  border-top-right-radius: 8px;
  height: 48px;
  width: 48px;
  justify-content: center;
  align-items: center;
`;

export const History = styled.TouchableOpacity`
  align-self: flex-end;
  height: 30px;
  width: 90px;
  justify-content: space-around;
  border-radius: 8px;
  border: 1px solid #0e0e2c;
  align-items: center;
  flex-direction: row;
  padding: 8px;
`;

export const SelectInviteTypeText = styled.Text`
  margin-top: 16px;
  margin-bottom: 16px;
  color: #383850;
  font-family: "Quicksand_700Bold";
`;

export const SelectScheduleText = styled.Text`
  margin-top: 16px;
  margin-bottom: 16px;
  color: #383850;
  font-family: "Quicksand_700Bold";
`;

export const InviteTypeView = styled.View`
  background: red;
  max-width: 100px;
  color: black;
  align-items: center;
  justify-content: center;
`;

export const InviteTypeText = styled.Text``;

export const TimeRangeContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 8px;
`;

export const TimeRangeText = styled.Text``;

export const WeekDaysText = styled.Text`
  margin-top: 8px;
  margin-bottom: 16px;
  color: #383850;
  font-family: "Quicksand_700Bold";
`;

export const ValidTilText = styled.Text`
  margin-top: 16px;
  margin-bottom: 16px;
  color: #383850;
  font-family: "Quicksand_700Bold";
`;

export const ExpirationDateContainer = styled.View`
  height: 50px;
  border-radius: 8px;
  background: #f5fbff;
  padding: 16px;
  flex-direction: row;
`;

export const ExpirationDateText = styled.Text`
  margin-left: 16px;
  color: #707070;
`;
