import React, { useCallback, useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import Input from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo.png";
import {
  Container,
  Title,
  Image,
  ForgotPassword,
  ForgotPasswordText,
} from "./styles";
import { useNavigation } from "@react-navigation/native";

interface ISignInFormData {
  email: string;
  password: string;
}

const schema = Yup.object().shape({
  email: Yup.string()
    .required("E-mail obrigatório")
    .email("Digite um e-mail válido"),
  password: Yup.string().required("Senha obrigatória."),
});

const SignIn: React.FC = () => {
  const [formData, setFormData] = useState<ISignInFormData>(
    {} as ISignInFormData
  );
  const [userEmail, setUserEmail] = useState<string>();
  const [userPassword, setUserPassword] = useState<string>();
  const navigation = useNavigation();

  const { signIn } = useAuth();

  useEffect(() => {
    if (userEmail || userPassword) {
      setFormData({ email: userEmail!, password: userPassword! });
    }
  }, [userEmail, userPassword]);

  const handleSignIn = useCallback(
    async (data: ISignInFormData) => {
      try {
        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          return;
        }

        Alert.alert(
          "Erro na autenticação",
          "Ocorreu um erro ao fazer login, cheque seu e-mail e/ou senha."
        );
      }
    },
    [signIn]
  );

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
          <Title>Faça seu login</Title>
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
          <Input
            name="password"
            placeholder="Senha"
            icon="lock"
            secureTextEntry
            returnKeyType="send"
            onChangeText={(password) => setUserPassword(password)}
          />

          <Button
            style={{ width: 340 }}
            onPress={() => {
              handleSignIn(formData);
            }}
          >
            Entrar
          </Button>

          <ForgotPassword onPress={() => navigation.navigate("ForgotPassword")}>
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
