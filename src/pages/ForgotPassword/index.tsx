import React, { useCallback, useEffect, useRef, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import logo from "../../assets/logo.png";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import Input from "../../components/Input";
import Button from "../../components/Button";
import api from "../../services/api";

import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";

interface ForgotPasswordFormData {
  email: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
});

const SignIn: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [formData, setFormData] = useState<ForgotPasswordFormData>(
    {} as ForgotPasswordFormData
  );
  const [userEmail, setUserEmail] = useState<string>();

  useEffect(() => {
    if (userEmail) {
      setFormData({ email: userEmail! });
    }
  }, [userEmail]);

  const handleSubmit = useCallback(async (data: ForgotPasswordFormData) => {
    setLoading(true);

    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      await api.post("/password/forgot", {
        email: data.email,
      });

      Alert.alert(
        "E-mail de recuperação de senha enviado.",
        "Um e-mail para confirmar a recuperação de senha foi enviado, cheque sua caixa de entrada."
      );

      navigation.navigate("SignIn");
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        Alert.alert(
          "Erro na recuperação de senha",
          "Ocorreu um erro ao tentar recuperar a senha, tente novamente"
        );
      }
    }
  }, []);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      enabled
    >
      <ScrollView
        contentContainerStyle={{ flex: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <Container>
          <Image source={logo} />
          <Title>Recuperar senha</Title>
          <Input
            name="email"
            placeholder="E-mail"
            icon="mail"
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(email) => setUserEmail(email)}
          />

          <Button
            style={{ width: 340 }}
            onPress={() => {
              handleSubmit(formData);
            }}
          >
            Recuperar
          </Button>

          <BackToSignIn onPress={() => navigation.navigate("SignIn")}>
            <BackToSignInText>Voltar para login</BackToSignInText>
          </BackToSignIn>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
