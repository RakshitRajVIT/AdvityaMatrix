const Register = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 sm:p-8 md:p-12 my-10 bg-black/50 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Left Section */}
      <div className="flex-1 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Register Now</h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4 text-neutral-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero atque at hic nihil quis debitis fuga architecto magni, expedita assumenda repellendus ad numquam possimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo repellat necessitatibus praesentium laborum optio. Minima consectetur qui reprehenderit repellat nemo odio, quam ducimus suscipit molestiae nesciunt esse nisi libero eum?
        </p>
        <a
          id="button"
          href="https://docs.google.com/forms/d/e/1FAIpQLSf6ol2nHMR6Dlj2s8RkiPss9rL1b3GlQIF1ZP0U3bZDsBkylg/viewform?usp=sf_link"
          className="px-5 py-2 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Register Now
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-1 px-4 sm:px-8  md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Have a Question?</h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4 text-neutral-400">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis, doloribus?Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur qui, nostrum magni ex doloribus ipsa eos cumque temporibus ut iure mollitia possimus nihil expedita nisi distinctio! Illum, quia officiis?
        </p>
        <a
          href="mailto:mozilla.firefox@vitbhopal.ac.in"
          className="text-red-500 underline hover:text-red-700"
        >
          mail@vitbhopal.ac.in
        </a>
        <p className="text-sm sm:text-base mt-4 text-neutral-400">
          Our team of heroes is ready to help you on this exciting journey!
        </p>
      </div>
    </div>
  );
};

export default Register;