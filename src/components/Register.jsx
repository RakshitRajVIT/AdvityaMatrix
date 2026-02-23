const Register = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 p-6 sm:p-8 md:p-12 my-10 bg-black/50 rounded-lg shadow-lg max-w-5xl mx-auto">
      {/* Left Section */}
      <div className="flex-1 px-4 sm:px-8">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Register Now</h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4 text-neutral-400">
          Step into the MatrixVerse – a thrilling multi-round event where your coding skills, creativity, and teamwork will be put to the ultimate test! Compete in Marvel-themed coding challenges, mind-bending riddles, and hands-on activities designed to push your limits and ignite your imagination. Whether you’re a seasoned coder or a passionate beginner, this event is your chance to shine, learn, and connect with like-minded enthusiasts. Amazing prizes, participation certificates, and the glory of being crowned the MatrixVerse Champion await!
        </p>
        <a
          id="button"
          href="https://matrix-event-registation.vercel.app/"
          target="_blank"
          className="px-5 py-2 bg-gradient-to-br from-red-500 to-red-600 text-white rounded-lg hover:bg-red-700 transition-all"
        >
          Register Now
        </a>
      </div>

      {/* Right Section */}
      <div className="flex-1 px-4 sm:px-8  md:text-left">
        <h2 className="text-xl sm:text-2xl font-bold mb-4">Have a Question?</h2>
        <p className="text-sm sm:text-base leading-relaxed mb-4 text-neutral-400">
          Have questions about the event, registration process, or what to expect? We’re here to help! The MatrixVerse is open to all students, and our team is dedicated to making your experience smooth and memorable. Reach out for details about team formation, event rounds, rules, or any other queries. Don’t miss your chance to be part of this legendary journey – register now and become a hero in the MatrixVerse saga!
        </p>
        <a
          href="mailto:multimedia_club@vitbhopal.ac.in"
          className="text-red-500 underline hover:text-red-700"
        >
          multimedia_club@vitbhopal.ac.in
        </a>
        <p className="text-sm sm:text-base mt-4 text-neutral-400">
          Our team of heroes is ready to help you on this exciting journey!
        </p>
      </div>
    </div>
  );
};

export default Register;