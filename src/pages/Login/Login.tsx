import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { schema, Schema } from 'src/utils/rules'
import { useMutation } from '@tanstack/react-query'
import authApi from 'src/apis/auth.api'
import { bg_images } from 'src/utils/icons'

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
    <div className='bg-blue bg-cover bg-center'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 py-12'>
          <div className='col-span-1 flex justify-center items-center'>
            <img src={bg_images.mainBackground} alt='logo'></img>
          </div>
          <div className='col-span-1 rounded m-10 bg-white shadow-sm flex items-center p-10'>
            <form className='w-full' onSubmit={onSubmit} noValidate>
              <div className='text-2xl font-semibold'>Log in</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-10'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='password'
                register={register}
                type='password'
                className='mt-5'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-5'>
                <Button
                  type='submit'
                  className='flex round w-full items-center justify-center bg-blue py-4 px-2 text-sm uppercase text-white'
                >
                  Submit
                </Button>
              </div>
              <div className='mt-10 flex items-center justify-center'>
                <span className='text-gray-400'>No account?</span>
                <Link className='ml-1 text-red' to='/register'>
                  Create one
                </Link>
              </div>
              <div className='mt-5 flex items-center justify-center'>
                <span className='text-gray-400'>Forgot your password?</span>
                <Link className='ml-1 text-red' to='/reset-password'>
                  Get help
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
