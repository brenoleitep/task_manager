'use client'
import React from 'react'
import style from "./style.module.css"
import { useForm, SubmitHandler } from 'react-hook-form';
import FormCadastro from '@/components/Form/FormCadastro/FormCadastro';

type Inputs = {
    email: string,
    name: string,
    password: string,
    confirmPassword: string,
    img: string,
};

const page = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data, event) => {
      event?.preventDefault()
      console.log(data)
    }

  return (
    <div className={style.mainCadastro}>
        <h2>Cadastro</h2>
        <FormCadastro onSubmit={handleSubmit(onSubmit)}>
            <input type="email" {...register("email")} placeholder='Email...'/>
            <input type="text" {...register("name")} placeholder='Nome'/>
            <input type="password" {...register("password")} placeholder='Senha...'/>
            <input type="password" {...register("confirmPassword")} placeholder='Confirme sua senha...'/>
            <input type="text" {...register("img")} placeholder='Imagem de perfil...'/>
            <button type="submit">Enviar</button>
        </FormCadastro>
    </div>
  )
}

export default page