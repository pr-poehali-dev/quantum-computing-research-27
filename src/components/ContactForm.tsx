import { useState } from "react";

const SEND_EMAIL_URL = "https://functions.poehali.dev/7271e8ff-7f88-481f-a5ed-886e2a748edc";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, message }),
      });
      if (res.ok) {
        setStatus("success");
        setName("");
        setPhone("");
        setMessage("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="bg-white py-20 px-6" id="contact">
      <div className="max-w-xl mx-auto">
        <h3 className="uppercase text-sm tracking-wide text-neutral-500 mb-4">Оставить заявку</h3>
        <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-10 leading-tight">
          Свяжемся с вами и обсудим все детали
        </h2>

        {status === "success" ? (
          <div className="bg-neutral-900 text-white p-8 text-center">
            <p className="text-xl font-semibold mb-2">Заявка отправлена!</p>
            <p className="text-neutral-400">Андрей свяжется с вами в ближайшее время.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Ваше имя *"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
            />
            <input
              type="tel"
              placeholder="Телефон *"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors"
            />
            <textarea
              placeholder="Опишите ваш заказ (необязательно)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="border border-neutral-300 px-4 py-3 text-sm outline-none focus:border-neutral-900 transition-colors resize-none"
            />
            {status === "error" && (
              <p className="text-red-600 text-sm">Ошибка отправки. Попробуйте ещё раз или позвоните напрямую.</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="bg-black text-white px-6 py-3 uppercase tracking-wide text-sm hover:bg-neutral-800 transition-colors disabled:opacity-50 cursor-pointer"
            >
              {status === "loading" ? "Отправляем..." : "Отправить заявку"}
            </button>
          </form>
        )}

        <div className="mt-8 flex flex-col sm:flex-row gap-4 text-sm text-neutral-600">
          <a href="tel:+79014790408" className="hover:text-neutral-900 transition-colors">
            +7 901 479-04-08 — Андрей
          </a>
          <a href="mailto:VedaGor43@yandex.ru" className="hover:text-neutral-900 transition-colors">
            VedaGor43@yandex.ru
          </a>
        </div>
      </div>
    </div>
  );
}
