import React, { useContext } from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
  Tooltip,
  Avatar,
} from '@material-tailwind/react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../Hook/AuthProvider';

function NavigationBar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => console.log('current user logout successfully'))
      .catch(error => console.log(error));
  };
  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center border border-red-500 px-2 rounded-md duration-300 font-semibold'
              : 'flex items-center'
          }
        >
          Home
        </NavLink>
      </Typography>
      {!user ? (
        <>
          <Typography
            as="li"
            variant="lead"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center border border-red-500 px-2 rounded-md duration-300 font-semibold'
                  : 'flex items-center'
              }
            >
              LogIn
            </NavLink>
          </Typography>
          <Typography
            as="li"
            variant="lead"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/register"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center border border-red-500 px-2 rounded-md duration-300 font-semibold'
                  : 'flex items-center'
              }
            >
              Register
            </NavLink>
          </Typography>
        </>
      ) : (
        ''
      )}
      <Typography
        as="li"
        variant="lead"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? 'flex items-center border border-red-500 px-2 rounded-md duration-300 font-semibold'
              : 'flex items-center'
          }
        >
          Profile
        </NavLink>
      </Typography>
      {user ? (
        <>
          <Typography
            as="li"
            variant="lead"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center border border-red-500 px-2 rounded-md duration-300 font-semibold'
                  : 'flex items-center'
              }
            >
              Orders
            </NavLink>
          </Typography>
          <Typography
            as="li"
            variant="lead"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? 'flex items-center border border-red-500 px-2 rounded-md duration-300 font-semibold'
                  : 'flex items-center'
              }
            >
              Dashboard
            </NavLink>
          </Typography>
        </>
      ) : (
        ''
      )}
    </ul>
  );
  return (
    <div>
      <Navbar className="sticky top-0 z-10 h-max max-w-full shadow-none py-2  lg:py-4">
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            className="mr-4 cursor-pointer py-1.5 font-semibold md:font-bold text-2xl md:text-3xl"
          >
            FireAuthX
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">{navList}</div>
            <div className="flex items-center gap-x-3">
              <div>
                {user?.email ? (
                  user.email
                ) : (
                  <Link to="/login">
                    <Button fullWidth variant="filled" size="lg" className="">
                      <span>Sign In</span>
                    </Button>
                  </Link>
                )}
              </div>
              <div>
                {user && (
                  <Tooltip content="Tania Andrew">
                    <Avatar
                      size="sm"
                      variant="circular"
                      alt="tania andrew"
                      src={
                        user
                          ? user.photoURL
                          : 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
                      }
                      className="border-2 border-white hover:z-10"
                    />
                  </Tooltip>
                )}
              </div>
              <div>
                {user ? (
                  <Button
                    onClick={handleLogOut}
                    fullWidth
                    variant="filled"
                    size="lg"
                    className="hidden md:block"
                  >
                    <span>LogOut</span>
                  </Button>
                ) : (
                  <Link to="/register">
                    <Button
                      fullWidth
                      variant="filled"
                      size="lg"
                      className="hidden md:block"
                    >
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                )}
              </div>
            </div>
            <IconButton
              variant="text"
              className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <Collapse open={openNav}>
          {navList}
          <div className="flex items-center gap-x-1">
            {user ? (
              <Button
                onClick={handleLogOut}
                fullWidth
                variant="filled"
                size="sm"
                className="block md:hidden"
              >
                <span>LogOut</span>
              </Button>
            ) : (
              <Link to="/register">
                <Button
                  fullWidth
                  variant="filled"
                  size="sm"
                  className="block md:hidden"
                >
                  <span>Sign Up</span>
                </Button>
              </Link>
            )}
          </div>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavigationBar;
