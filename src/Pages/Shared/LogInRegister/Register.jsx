import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Hook/AuthProvider';

function Register() {
  const {createUser}=useContext(AuthContext)
  const handleSignUpSubmit = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUser(email, password)
      .then(result => console.log(result.user))
      .catch(error => console.log(error));
  };
  return (
    <div className="flex justify-center mt-6 ">
      <Card
        color="transparent"
        shadow={false}
        className="bg-[#f0fff4] py-4 px-6 shadow-lg"
      >
        <Typography variant="h4" color="blue-gray">
          <div className="relative grid mx-4 overflow-hidden text-white shadow-lg h-14 place-items-center rounded-xl bg-gradient-to-tr from-gray-900 to-gray-800 bg-clip-border shadow-gray-900/20">
            <h3 className="block font-sans text-3xl antialiased font-semibold leading-snug tracking-normal text-white">
              Sign Up
            </h3>
          </div>
        </Typography>
        <Typography color="gray" className="mt-3 text-center font-normal">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form
          onSubmit={handleSignUpSubmit}
          className="mt-6 mb-2 w-80 max-w-screen-lg sm:w-96"
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-4">
              Your Name
            </Typography>
            <Input
              size="lg"
              type='text'
              name='text'
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-4">
              Your Email
            </Typography>
            <Input
              size="lg"
              type='email'
              name='email'
              placeholder="asad@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
            <Typography variant="h6" color="blue-gray" className="-mb-4">
              Password
            </Typography>
            <Input
              type="password"
              name='password'
              size="lg"
              placeholder="********"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: 'before:content-none after:content-none',
              }}
            />
          </div>
          <Checkbox
            label={
              <Typography
                variant="small"
                color="gray"
                className="flex items-center font-normal"
              >
                I agree the
                <a
                  href="#"
                  className="font-medium transition-colors hover:text-gray-900"
                >
                  &nbsp;Terms and Conditions
                </a>
              </Typography>
            }
            containerProps={{ className: '-ml-2.5' }}
          />
          <Button type='submit' className="mt-6" fullWidth>
            sign up
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-gray-900">
              Sign In
            </Link>
          </Typography>
        </form>
      </Card>
    </div>
  );
}

export default Register;
