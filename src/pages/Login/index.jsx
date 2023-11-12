import { Link } from "react-router-dom";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const index = () => {
  return (
    <>
      <section className="bg-slate-200 2xl:mt-10 lg:mt-10  dark:bg-gray-900 ">
        <div className="flex flex-col items-center justify-center px-6 py-20 mx-auto md:h-screen lg:py-0">
          <div className="w-full rounded-lg shadow bg-white shadow-white md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h2 className="text-xl text-center font-bold leading-tight tracking-tight md:text-2xl dark:text-white">
                Sign in to your account
              </h2>
              <form className="space-y-4 md:space-y-6" action="#">
                <Input label={"Your Number"} type={"tel"} />
                <Input label={"Password"} type={"password"} />
                <div className="flex items-center justify-between">
                  <div className="flex items-center flex-row-reverse gap-2">
                    <Input label={"Remember"} type={"checkbox"} />
                  </div>
                  <Link
                    to="/"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="flex items-center justify-center">
                  <Button
                    text="Sign in"
                    class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 cart-close dark:focus:ring-primary-800"
                    type="submit"
                  />
                </div>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <Link
                    to={"/signup"}
                    className="font-medium text-blue-800 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
