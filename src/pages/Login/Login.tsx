import React from 'react'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'

type FormData = Pick<Schema, 'email' | 'password'>
const loginSchema = schema.pick(['email', 'password'])

export default function Login() {
  const {
    register,
    // setError,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(loginSchema)
  })

  const loginAccountMutation = useMutation({
    mutationFn: (body: FormData) => authApi.login(body)
  })
  const onSubmit = handleSubmit((data) => {
    loginAccountMutation.mutate(data, {
      onSuccess: (data) => {
        console.log(data)
      },
      onError: (error) => {
        console.log(error)
      }
    })
  })

  return (
    <div className="bg-[url('src/assets/images/background.jpg')] bg-cover bg-center">
      <div className='container'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-6 lg:py-40'>
          <div className='lg:col-span-2 lg:col-start-5'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit} noValidate>
              <div className='text-2xl'>Log in</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-2'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-3'>
                <Button
                  type='submit'
                  className='flex round w-full items-center justify-center bg-blue-500 py-4 px-2 text-sm uppercase text-white hover:bg-blue-600'
                >
                  Submit
                </Button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>No account?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Create one
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
