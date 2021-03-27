import React, { useCallback } from "react";
import { ScrollView } from "react-native-gesture-handler";
import { Container, SubContainer, ContentText, Content } from "./styles";

interface IInviteType {
  guest: string;
  id: string;
  min_time: string;
  max_time: string;
  time_limit: boolean;
  weekDays: boolean[];
  uses_limit: string;
  expire_date: Date;
  name: string;
}

interface IProps {
  value: IInviteType;
  options: IInviteType[];
  onChange: (data: IInviteType) => void;
}

const SelectInviteType: React.FC<IProps> = ({ value, onChange, options }) => {
  const handleToggle = useCallback(
    (inviteType: IInviteType) => {
      if (value.id !== inviteType.id) {
        onChange(inviteType);
      }
    },
    [onChange, value]
  );

  return (
    <Container>
      <SubContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 24 }}
        >
          <>
            {options.map((invite) => (
              <Content
                key={invite.id}
                onPress={() => handleToggle(invite)}
                selected={invite.id === value.id}
              >
                <ContentText selected={invite.id === value.id}>
                  {invite.name}
                </ContentText>
              </Content>
            ))}
          </>
        </ScrollView>
      </SubContainer>
    </Container>
  );
};

export default SelectInviteType;
