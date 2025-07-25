import { useState } from "react";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("Enviando...");

    try {
      const response = await fetch("http://localhost:8080/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject,comment}),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setName("");
        setEmail("");
        setSubject("");
        setComment("");
      } else {
        setMessage(`Erro: ${data.message || "Algo deu errado"}`);
      }
    } catch (error: any) {
      setMessage(`Erro de rede: ${error.message}`);
      console.error("Erro ao enviar formulário:", error);
    }
  };

  return (
    <div className="container bg-[#282a36] rounded-2xl p-8 w-full max-w-3xl mx-auto shadow-lg border border-[#44475a]/40">
      <span
        className="block text-2xl font-bold text-center text-[#f8f8f2] mb-6"
        style={{ fontFamily: "var(--font-titles)" }}
      >
        Entre em contato
      </span>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="relative">
          <input
            type="text"
            id="name"
            name="name"
            placeholder=" "
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 pt-4 focus:outline-none focus:border-[#50fa7b] transition"
          />
          <label
            htmlFor="name"
            className={`absolute left-2 transition-all duration-200 pointer-events-none
              text-[#bd93f9] text-base
              ${
                name.length === 0
                  ? "top-1/2 -translate-y-1/2"
                  : "top-0 text-sm text-[#50fa7b] -translate-y-0"
              }
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b] peer-focus:-translate-y-0
            `}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 pt-4 focus:outline-none focus:border-[#50fa7b] transition"
          />
          <label
            htmlFor="email"
            className={`absolute left-2 transition-all duration-200 pointer-events-none
              text-[#bd93f9] text-base 
              ${
                email.length === 0
                  ? "top-1/2 -translate-y-1/2"
                  : "top-0 text-sm text-[#50fa7b] -translate-y-0"
              }
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b] peer-focus:-translate-y-0
            `}
          >
            Email
          </label>
        </div>

        <div className="relative">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder=" "
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 pt-4 focus:outline-none focus:border-[#50fa7b] transition"
          />
          <label
            htmlFor="subject"
            className={`absolute left-2 transition-all duration-200 pointer-events-none
              text-[#bd93f9] text-base 
              ${
                subject.length === 0
                  ? "top-1/2 -translate-y-1/2"
                  : "top-0 text-sm text-[#50fa7b] -translate-y-0"
              }
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b] peer-focus:-translate-y-0
            `}
          >
            Assunto
          </label>
        </div>

        <div className="relative">
          <textarea
            id="comment"
            name="comment"
            rows={5}
            placeholder=" "
            required
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="peer w-full bg-transparent border-b-2 border-[#bd93f9] text-[#f8f8f2] py-3 px-2 pt-4 focus:outline-none focus:border-[#50fa7b] transition resize-none"
          />
          <label
            htmlFor="comment"
            className={`absolute left-2 transition-all duration-200 pointer-events-none
              text-[#bd93f9] text-base
              ${comment.length === 0 ? "top-4" : "top-0 text-sm text-[#50fa7b]"}
              peer-placeholder-shown:top-6 peer-placeholder-shown:text-base
              peer-focus:top-0 peer-focus:text-sm peer-focus:text-[#50fa7b]
            `}
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
        {message && (
          <p className="text-center text-[#f8f8f2] mt-4">{message}</p>
        )}
      </form>
    </div>
  );
};

export default ContactMe;
