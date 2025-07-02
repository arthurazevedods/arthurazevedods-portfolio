const ContactMe = () => {
  return (
    <div className="container bg-[#282a36] rounded-2xl p-8 w-full max-w-3xl mx-auto shadow-lg border border-[#44475a]/40">
      <span className="block text-2xl font-bold text-center text-[#f8f8f2] mb-6" style={{ fontFamily: "var(--font-titles)" }}>
        Entre em contato
      </span>
      <form className="flex flex-col gap-4">
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            required
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 focus:outline-none focus:border-[#50fa7b] transition"
          />
          <label
            htmlFor="name"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#bd93f9] text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b]"
          >
            Nome
          </label>
        </div>
        <div className="relative">
          <input
            type="email"
            id="email"
            name="email"
            placeholder=" "
            required
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 focus:outline-none focus:border-[#50fa7b] transition"
          />
          <label
            htmlFor="email"
            className="absolute left-2 top-1/2 -translate-y-1/2 text-[#bd93f9] text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b]"
          >
            Email
          </label>
        </div>
        <div className="relative">
          <textarea
            id="comment"
            name="comment"
            rows={5}
            placeholder=" "
            required
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 focus:outline-none focus:border-[#50fa7b] transition resize-none"
          />
          <label
            htmlFor="comment"
            className="absolute left-2 top-4 text-[#bd93f9] text-base pointer-events-none transition-all duration-200 peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b]"
          >
            Mensagem
          </label>
        </div>
        <button
          type="submit"
          className="mt-4 bg-[#50fa7b] text-[#282a36] font-bold rounded-xl py-3 text-lg hover:bg-[#ffb86c] transition"
        >
          Enviar
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
