const Input = ({ label, type }) => {
  return (
    <>
      <label
        htmlFor={label}
        className="block m-0 p-0 text-sm font-medium  dark:text-white"
      >
        {label}
      </label>
      <input
        type={type}
        name={label}
        className="bg-gray-50 border border-gray-300  sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={label}
        required
      />
    </>
  );
};

export default Input;
