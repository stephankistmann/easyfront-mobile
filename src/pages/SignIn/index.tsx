import React, { useCallback, useRef } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from "react-native";
import * as Yup from "yup";
import getValidationErrors from "../../utils/getValidationErrors";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";
import InputUnform from "../../components/InputUnform";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

import logo from "../../assets/logo.png";
import { Container, Title, ForgotPassword, ForgotPasswordText } from "./styles";

interface SignInFormData {
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
  const formRef = useRef<FormHandles>(null);
  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      console.log(data);
      try {
        formRef.current?.setErrors({});

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

          formRef.current?.setErrors(errors);

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

          <Form ref={formRef} onSubmit={handleSignIn}>
            <InputUnform
              name="email"
              placeholder="E-mail"
              icon="mail"
              autoCorrect={false}
              autoCapitalize="none"
              keyboardType="email-address"
              returnKeyType="next"
              // onSubmitEditing={() => passwordRefInputUnform.current?.focus()}
            />
            <InputUnform
              // ref={passwordRefInputUnform}
              name="password"
              placeholder="Senha"
              icon="lock"
              secureTextEntry
              returnKeyType="send"
              onSubmitEditing={() => {
                formRef.current?.submitForm();
              }}
            />

            <Button
              style={{ width: 340 }}
              onPress={() => {
                formRef.current?.submitForm();
              }}
            >
              Entrar
            </Button>
          </Form>

          <ForgotPassword
            onPress={() => {
              console.log("aaa");
            }}
          >
            <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
          </ForgotPassword>
        </Container>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;
