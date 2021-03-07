import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, Text, Alert, ActivityIndicator } from "react-native";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import * as Yup from "yup";
import Input from "../../components/Input";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import SelectDate from "../../components/SelectDate";
import { removeDateSeconds } from "./helpers";
import {
  Container,
  Main,
  MainHeader,
  Title,
  Line,
  SubTitle,
  SubText,
  AddTag,
  SelectInviteTypeText,
  SelectScheduleText,
  TimeRangeContainer,
  TimeRangeText,
  WeekDaysText,
  ValidTilText,
} from "./styles";
import SelectInviteType from "../../components/SelectInviteType";
import SelectWeekDays from "../../components/SelectWeekDays";
import SelectTimeRange from "../../components/SelectTimeRange";
import { useNavigation } from "@react-navigation/native";
import { useAccess } from "../../hooks/access";
import getValidationErrors from "../../utils/getValidationErrors";
import api from "../../services/api";

interface ITimeRestrictions {
  min: string;
  max: string;
}

interface IValidationErrors {
  name?: string;
}

interface IInviteType {
  guest: string;
  id: string;
  min_time: string;
  max_time: string;
  time_limit: boolean;
  weekDays: boolean[];
  uses_limit: string;
  expire_date: Date;
}

const schema = Yup.object().shape({
  guest: Yup.string().required("Nome obrigatório"),
});

const InvitesAdd: React.FC = () => {
  const { selected } = useAccess();
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();
  const [validationErrors, setValidationErrors] = useState<IValidationErrors>(
    {}
  );
  const [guest, setGuest] = useState("");
  const [usesLimit, setUsesLimit] = useState("10");
  const [timeRestrictions, setTimeRestrictions] = useState<ITimeRestrictions>({
    min: "00:00",
    max: "23:59",
  });
  const [weekDays, setWeekDays] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const [allowedWeekDays, setAllowedWeekDays] = useState<boolean[]>([]);
  const currentDate = new Date();
  const [expire_date, setExpire_date] = useState<Date>(currentDate);
  const [inviteTypes, setInviteTypes] = useState<IInviteType[]>([]);
  const [selectedInviteType, setSelectedInviteType] = useState<IInviteType>();

  const selectInviteTypeMinTime = useMemo(() => {
    return selectedInviteType
      ? removeDateSeconds(selectedInviteType.min_time)
      : "00:00";
  }, [selectedInviteType]);

  const selectInviteTypeMaxTime = useMemo(() => {
    return selectedInviteType
      ? removeDateSeconds(selectedInviteType.max_time)
      : "23:59";
  }, [selectedInviteType]);

  const handleInviteSelected = useCallback((data: IInviteType) => {
    setSelectedInviteType(data);
    setAllowedWeekDays(data.weekDays);
    setWeekDays(new Array(7).fill(false));

    if (!data.time_limit) {
      setTimeRestrictions({ min: "00:00", max: "23:59" });
    } else {
      setTimeRestrictions({ min: data.min_time, max: data.max_time });
    }
  }, []);

  useEffect(() => {
    const getInviteTypes = async () => {
      if (selected) {
        setLoading(true);
        const response = await api.get(
          `/accesses/${selected?.id}/invites/types`,
          { params: { per_page: 100 } }
        );

        if (response.status !== 200) return;

        setInviteTypes(response.data.data);
        setSelectedInviteType(response.data.data[0]);
        setTimeRestrictions({
          min: response.data.data.min_time,
          max: response.data.data.max_time,
        });
      }
      setLoading(false);
    };

    getInviteTypes();
  }, [selected]);

  const handleCreateInvite = useCallback(async () => {
    const { min, max } = timeRestrictions;
    const inviteType_id = selectedInviteType?.id;

    const data = {
      inviteType_id,
      guest,
      weekDays,
      min_time: min,
      max_time: max,
      expire_date,
      uses_limit: parseInt(usesLimit),
    };

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const response = await api.post(
        `/accesses/${selected?.id}/invites`,
        data
      );

      navigation.navigate("InvitesStack", {
        screen: "InvitesCreated",
        params: { code: response.data.code },
      });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        Alert.alert(
          "Erro ao criar convite",
          "Ocorreu um erro ao tentar criar o convite, tente novamente."
        );
        return;
      }
    }
  }, [selectedInviteType, weekDays, guest, timeRestrictions, expire_date]);

  return (
    <Container>
      <Header hasBackButton />
      <ScrollView>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Main>
            <MainHeader>
              <Title>
                <Feather
                  name="send"
                  color="#F66253"
                  size={24}
                  style={{ marginRight: 8 }}
                />
                <Text style={{ fontWeight: "bold", marginRight: 8 }}>
                  Criar convite
                </Text>
              </Title>
              <SubTitle>
                <SubText>
                  para {selected?.superUnit.name} {selected?.unit.name}
                </SubText>
                <TouchableOpacity>
                  <Feather
                    name="repeat"
                    color="#F66253"
                    size={12}
                    style={{ marginTop: 8, marginLeft: 8 }}
                  />
                </TouchableOpacity>
              </SubTitle>
            </MainHeader>
            <Line />
            <Input
              name="guest"
              placeholder="Nome do convidado"
              autoCorrect={false}
              autoCapitalize="words"
              returnKeyType="next"
              onChangeText={(guest: string) => setGuest(guest)}
              isCustom
            />
            <SelectInviteTypeText>
              Selecione o tipo de convite
            </SelectInviteTypeText>
            <SelectInviteType
              value={selectedInviteType as IInviteType}
              options={inviteTypes}
              onChange={handleInviteSelected}
            />
            <SelectScheduleText>Horários</SelectScheduleText>
            <SelectTimeRange
              min={selectInviteTypeMinTime}
              max={selectInviteTypeMaxTime}
              onChange={setTimeRestrictions}
              value={{
                min: timeRestrictions.min,
                max: timeRestrictions.max,
              }}
            />
            <TimeRangeContainer>
              <TimeRangeText>{selectInviteTypeMinTime}</TimeRangeText>
              <TimeRangeText>{selectInviteTypeMaxTime}</TimeRangeText>
            </TimeRangeContainer>

            <Input
              name="uses_limit"
              placeholder="Número de usos"
              autoCorrect={false}
              returnKeyType="next"
              onChangeText={(uses: string) => setUsesLimit(uses)}
              keyboardType="numeric"
              isCustom
            />

            <WeekDaysText>Dias da semana</WeekDaysText>
            <SelectWeekDays
              onChange={(value) => setWeekDays(value)}
              value={weekDays}
              allowedDays={selectedInviteType?.weekDays || []}
            />
            <ValidTilText>Válido até</ValidTilText>
            <SelectDate
              value={expire_date}
              onChange={(value) => setExpire_date(value)}
            />
          </Main>
        )}
        <AddTag onPress={handleCreateInvite}>
          <Text style={{ color: "#fff", fontWeight: "bold", marginLeft: 16 }}>
            Criar um novo convite
          </Text>
          <View
            style={{
              backgroundColor: "#F0887E",
              borderBottomRightRadius: 8,
              borderTopRightRadius: 8,
              height: 48,
              width: 48,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Feather name="plus" size={30} color="#fff" />
          </View>
        </AddTag>
      </ScrollView>
    </Container>
  );
};

export default InvitesAdd;
