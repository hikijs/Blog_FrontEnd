import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import Button from 'src/components/Button'
import { bg_images } from 'src/utils/icons'

export default function ChangePass() {
  return (
    <div className='bg-blue bg-cover bg-center'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-2 py-2'>
          <div className='col-span-1 flex justify-center items-center'>
            <img src={bg_images.mainBackground} alt='logo'></img>
          </div>
          <div className='col-span-1 rounded m-10 bg-white shadow-sm flex items-center p-10'>
            <form className='w-full' noValidate>
              <div className='text-2xl font-semibold'>Forgot Password</div>
              <div className='grid grid-cols-4 gap-5 items-center'>
                <div className='col-span-3'>
                  <Input
                    name='email'
                    // register={register}
                    type='email'
                    className='mt-10'
                    // errorMessage={errors.email?.message}
                    placeholder='Email'
                  />
                </div>
                <div className='col-span-1 mt-4'>
                  <Button
                    type='submit'
                    className='flex rounded w-full items-center justify-center bg-blue py-4 px-2 text-sm uppercase text-white'
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <div className='grid grid-cols-4 gap-5 items-center'>
                <div className='col-span-3'>
                  <Input
                    name='email'
                    // register={register}
                    type='email'
                    className='mt-10'
                    // errorMessage={errors.email?.message}
                    placeholder='Email'
                  />
                </div>
                <div className='col-span-1 mt-4'>
                  <Button
                    type='submit'
                    className='flex rounded w-full items-center justify-center bg-blue py-4 px-2 text-sm uppercase text-white'
                  >
                    Submit
                  </Button>
                </div>
              </div>
              <Input
                name='password'
                // register={register}
                type='password'
                className='mt-5'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                // errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <Input
                name='password'
                // register={register}
                type='password'
                className='mt-5'
                classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
                // errorMessage={errors.password?.message}
                placeholder='Password'
                autoComplete='on'
              />
              <div className='mt-5'>
                <Button
                  type='submit'
                  className='flex rounded w-full items-center justify-center bg-blue py-4 px-2 text-sm uppercase text-white'
                >
                  Submit
                </Button>
              </div>
              <div className='mt-10 flex items-center justify-center'>
                <Link className='ml-1 text-red' to='/register'>
                  Create one
                </Link>
                <Link className='ml-10 text-red' to='/login'>
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
