const index = () => {
  return (
    <>
      <div className="w-full py-10 bg-white dark:bg-black">
        <h3 className="my-4 text-black dark:text-white text-3xl">
          Restaurant Locations
        </h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d95886.95782590976!2d69.2420608!3d41.320448000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1699813901746!5m2!1sen!2s"
          loading="lazy"
          height={"500px"}
          className="w-full"
        ></iframe>
      </div>
    </>
  );
};

export default index;
