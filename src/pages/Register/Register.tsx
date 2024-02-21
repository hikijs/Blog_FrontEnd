import Input from 'src/components/Input'
import Button from 'src/components/Button'
import DateSelect from 'src/components/DateSelect/DateSelect'
import authApi from 'src/apis/auth.api'
import { Link, useNavigate } from 'react-router-dom'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { schema, Schema } from 'src/utils/rules'
import _, { omit } from 'lodash'
import moment from 'moment'
import background from 'src/assets/images/background.jpg'

type FormData = Pick<Schema, 'email' | 'username' | 'birth' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['email', 'username', 'birth', 'password', 'confirm_password'])

export default function Register() {
  const {
    register,
    control,
    handleSubmit,
    // setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })

  const navigate = useNavigate()

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.register(body)
  })

  const onSubmit = handleSubmit((data) => {
    const oldBirth = data.birth
    const newBirth = moment(oldBirth).format('YYYY-MM-DD')

    _.set(data, 'birth', newBirth)

    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        navigate('/')
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
        <div className='grid grid-cols-2 py-8'>
          <div className='col-span-1 flex justify-center items-center'>
            <img src={background} alt='logo'></img>
          </div>
          <div className='col-span-1 rounded m-10 bg-white shadow-sm flex items-center p-10'>
            <form className='w-full' onSubmit={onSubmit} noValidate>
              <div className='text-2xl font-semibold'>Sign in</div>
              <Input
                name='email'
                register={register}
                type='email'
                className='mt-8'
                errorMessage={errors.email?.message}
                placeholder='Email'
              />
              <Input
                name='username'
                register={register}
                type='username'
                className='mt-2'
                errorMessage={errors.username?.message}
                placeholder='Username'
              />
              <Controller
                control={control}
                name='birth'
                render={({ field }) => (
                  <DateSelect errorMessage={errors.birth?.message} value={field.value} onChange={field.onChange} />
                )}
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
              <Input
                name='confirm_password'
                register={register}
                type='password'
                className='mt-2'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                errorMessage={errors.confirm_password?.message}
                placeholder='Confirm Password'
                autoComplete='on'
              />
              <div className='mt-2'>
                <Button className='flex round w-full items-center justify-center bg-blue py-4 px-2 text-sm uppercase text-white'>
                  Sign in
                </Button>
              </div>
              <div className='mt-5 flex items-center justify-center'>
                <span className='text-gray-400'>Already have account?</span>
                <Link className='ml-1 text-red' to='/login'>
                  Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
