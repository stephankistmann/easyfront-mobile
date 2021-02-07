import React, { useCallback, useMemo, useState, useEffect } from "react";
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Text,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth, IUser } from "../../hooks/auth";
import * as Yup from "yup";
import Input from "../../components/Input";
import Button from "../../components/Button";

import getValidationErrors from "../../utils/getValidationErrors";

import {
  Container,
  Title,
  Line,
  UserAvatarButton,
  UserAvatar,
  AvatarPlaceholder,
  SelectGenderNature,
  SelectContainer,
} from "./styles";
import Header from "../../components/Header";
import Feather from "react-native-vector-icons/Feather";
import api from "../../services/api";
import Select from "../../components/Select/index.ios";

interface ProfileFormData {
  name: string;
  phone: string;
  nature: string;
  gender: string;
  rg?: string;
  cpf: string;
}

//   const schema = Yup.object().shape({
//     name: Yup.string()
//       .matches(/^[a-zA-Z\u00C0-\u00FF ]+$/i, "Digite apenas letras")
//       .required("Nome obrigatório"),
//     phone: Yup.string()
//       .matches(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Digite um número válido")
//       .required("Celular obrigatório"),
//     cpf: Yup.string().matches(
//       /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
//       "Digite um CPF válido"
//     ),
//     rg: Yup.string().length(10, "Digite um RG válido"),
//     gender: Yup.string()
//       .oneOf(["male", "female", "not-informed"])
//       .required("Gênero obrigatório"),
//     nature: Yup.string()
//       .oneOf(["physic", "juridic"])
//       .required("Natureza obrigatória"),
//   });

const Profile: React.FC = () => {
  const { user, updateUser } = useAuth();
  const navigation = useNavigation();
  const initials = useMemo(() => user.name.slice(0, 2).toUpperCase(), [user]);
  const [userData, setUserData] = useState<IUser>(user);

  const handleChangeUserField = useCallback((field: string, value: any) => {
    setUserData((oldUser) => ({ ...oldUser, [field]: value }));
  }, []);

  const genders = [
    {
      label: "Masculino",
      id: "male",
    },
    {
      label: "Feminino",
      id: "female",
    },
  ];

  const natures = [
    {
      label: "Físico",
      id: "physic",
    },
    {
      label: "Jurídico",
      id: "juridic",
    },
  ];

  const handleSubmit = useCallback(
    async (data: ProfileFormData) => {
      try {
        // await schema.validate(data, {
        //   abortEarly: false,
        // });

        data.phone = data.phone.replace(/[\(\)\s-]/g, "");

        data.cpf = data.cpf.replace(/[\.-]/g, "");

        const { name, phone, cpf, gender, nature, rg } = data;

        const formData = {
          name,
          phone,
          cpf,
          rg,
          gender,
          nature,
        };

        const response = await api.put("/users", formData);

        updateUser(response.data);

        Alert.alert("Perfil atualizado com sucesso!");

        navigation.navigate("Home");
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          return;
        }
      }
    },
    [updateUser, navigation]
  );

  function handleMaskChange(field: string, value: string) {
    setUserData((oldData) => ({ ...oldData, [field]: value }));
  }

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView keyboardShouldPersistTaps="handled">
          <Header />
          <Container>
            <Title>
              <Feather name="user" size={20} color="#0e0e2c" />
              <Text
                style={{
                  color: "#0e0e2c",
                  fontWeight: "bold",
                  marginLeft: 8,
                  marginTop: 2,
                  fontSize: 16,
                }}
              >
                Editar Perfil
              </Text>
            </Title>
            <Line />
            <UserAvatarButton onPress={() => {}}>
              {user.avatar_url ? (
                <UserAvatar source={{ uri: user.avatar_url }} />
              ) : (
                <AvatarPlaceholder>
                  <Text
                    style={{
                      fontSize: 32,
                      color: "#fff",
                    }}
                  >
                    {initials}
                  </Text>
                </AvatarPlaceholder>
              )}
            </UserAvatarButton>
            <Text
              style={{ marginTop: 16, marginBottom: 24, fontWeight: "bold" }}
            >
              {user.name}
            </Text>
            <Input
              name="name"
              autoCapitalize="words"
              icon="user"
              placeholder="Nome"
              returnKeyType="next"
              defaultValue={userData.name}
              onChangeText={(name: string) =>
                handleChangeUserField("name", name)
              }
              // onSubmitEditing={() => {
              //   emailInputRef.current?.focus();
              // }}
            />

            <Input
              mask="phone"
              defaultValue={String(userData.phone)
                .replace(/^(\d{2})(\d)/g, "($1) $2")
                .replace(/(\d{5})(\d{4})$/, "$1-$2")}
              inputMaskChange={(phone: string) =>
                handleMaskChange("phone", phone)
              }
              onChangeText={(phone: string) =>
                handleChangeUserField("phone", phone)
              }
              keyboardType="number-pad"
              name="phone"
              icon="smartphone"
              maxLength={15}
              placeholder="Telefone"
              returnKeyType="next"
            />

            <Input
              defaultValue={userData.rg}
              keyboardType="number-pad"
              name="rg"
              icon="file"
              placeholder="RG"
              returnKeyType="next"
              maxLength={10}
              onChangeText={(rg: string) => handleChangeUserField("rg", rg)}
            />

            <Input
              mask="cpf"
              defaultValue={userData.cpf.replace(
                /^(\d{3})(\d{3})(\d{3})/,
                "$1.$2.$3-"
              )}
              inputMaskChange={(cpf: string) => handleMaskChange("cpf", cpf)}
              keyboardType="number-pad"
              name="cpf"
              icon="file"
              maxLength={14}
              placeholder="CPF"
              returnKeyType="next"
            />

            <SelectContainer>
              <Text>
                {userData.gender &&
                  userData.gender
                    .replace("female", "Feminino")
                    .replace("male", "Masculino")
                    .replace("not-informed", "Não-informado")}
              </Text>
              <Select
                value={userData.gender}
                onChange={(gender: string) =>
                  handleChangeUserField("gender", gender)
                }
                options={genders}
              />
            </SelectContainer>
            <SelectContainer>
              <Text>
                {userData.nature &&
                  userData.nature
                    .replace("juridic", "Jurídico")
                    .replace("physic", "Físico")
                    .replace("not-informed", "Não-informado")}
              </Text>
              <Select
                value={userData.nature}
                onChange={(nature: string) =>
                  handleChangeUserField("nature", nature)
                }
                options={natures}
              />
            </SelectContainer>

            <Button onPress={() => handleSubmit(userData)}>Salvar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Profile;
