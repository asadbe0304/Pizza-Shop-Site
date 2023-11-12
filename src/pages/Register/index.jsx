import { Link } from "react-router-dom";
import "./index.scss";
import Input from "../../components/UI/Input";
import Button from "../../components/UI/Button";

const index = () => {
  return (
    <>
      <section className="2xl:pt-10 pt-16 lg:pt-10 bg-slate-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full sign bg-white  rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4  md:space-y-6 sm:p-8">
              <h2 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Create and account
              </h2>
              <form className="space-y-4 md:space-y-6 " action="#">
                <div>
                  <Input type="tel" label="Your Phone Number" />
                </div>
                <div>
                  <Input type={"password"} label="Password" />
                </div>
                <div>
                  <Input type="confirm-password" label="Confirm-password" />
                </div>
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="terms"
                      className="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the
                      <Link className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                        Terms and Conditions
                      </Link>
                    </label>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <Button text="Create an account" type={"submit"} />
                </div>

                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <Link
                    to={"/login"}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
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
