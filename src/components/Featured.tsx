const advantages = [
  { icon: "🏭", title: "Собственное производство", desc: "Всё изготавливается на собственном производстве — никаких посредников и переплат" },
  { icon: "🛡️", title: "Гарантия качества", desc: "Гарантируем качество всех изделий и выполненных работ" },
  { icon: "💎", title: "Гранит и мрамор", desc: "Гранит и мрамор хранят память столетиями. Мы создаём изделия, которые останутся достойной памятью — красиво, надёжно, с душой" },
  { icon: "🔑", title: "Под ключ", desc: "Полное благоустройство места захоронения: от проекта до финального результата" },
];

export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/ffa8a35f-effd-45bc-9e56-99d36f3c4d4a/files/77fc3430-e3ae-4bd8-a718-9db952d8e24e.jpg"
          alt="Памятник из натурального гранита"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Наши преимущества</h3>
        <p className="text-2xl lg:text-4xl mb-10 text-neutral-900 leading-tight">
          Гранит и мрамор хранят память столетиями. Мы создаём изделия, которые останутся достойной памятью — красиво, надёжно, с душой.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          {advantages.map((item) => (
            <div key={item.title} className="flex flex-col gap-1">
              <span className="text-2xl mb-1">{item.icon}</span>
              <h4 className="font-semibold text-neutral-900 text-sm uppercase tracking-wide">{item.title}</h4>
              <p className="text-neutral-600 text-sm leading-snug">{item.desc}</p>
            </div>
          ))}
        </div>
        <a
          href="tel:+79014790408"
          className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide"
        >
          Заказать консультацию
        </a>
      </div>
    </div>
  );
}