import React from "react";
import { Control, Controller } from "react-hook-form";
import { TextInputProps } from "react-native";
import { Input } from "../Input";
import { Container, Error } from "./styles";
import {FormData} from '../../../screens/Register'

interface Props extends TextInputProps {
  control: Control<FormData>;
  name: 'name' | 'amount';
  error: string | undefined;
}

export function InputForm({ control, name, error }: Props){
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input onChangeText={onChange} value={value as string} />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  );
}
