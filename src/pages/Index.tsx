import { useState } from "react";
import Icon from "@/components/ui/icon";

const CATEGORIES = [
  { id: "iphone", label: "iPhone", icon: "Smartphone" },
  { id: "ipad", label: "iPad", icon: "Tablet" },
  { id: "macbook", label: "MacBook", icon: "Laptop" },
  { id: "watch", label: "Apple Watch", icon: "Watch" },
  { id: "airpods", label: "AirPods", icon: "Headphones" },
  { id: "sony", label: "Sony", icon: "Gamepad2" },
  { id: "dyson", label: "Dyson", icon: "Wind" },
  { id: "other", label: "Другие", icon: "Package" },
];

const PRODUCTS = [
  {
    id: 1,
    category: "iphone",
    name: "iPhone 16 Pro",
    price: 129990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/a817d70e-7873-46c6-b077-95982b418a87.jpg",
    specs: {
      "Экран": "6.3\" Super Retina XDR",
      "Чип": "A18 Pro",
      "Камера": "48 МП тройная",
      "Память": "256 ГБ",
      "Аккумулятор": "4685 мАч",
      "Цвет": "Титановый",
    },
    badge: "Новинка",
  },
  {
    id: 2,
    category: "iphone",
    name: "iPhone 16",
    price: 99990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/a817d70e-7873-46c6-b077-95982b418a87.jpg",
    specs: {
      "Экран": "6.1\" Super Retina XDR",
      "Чип": "A18",
      "Камера": "48 МП двойная",
      "Память": "128 ГБ",
      "Аккумулятор": "3561 мАч",
      "Цвет": "Чёрный",
    },
    badge: null,
  },
  {
    id: 3,
    category: "iphone",
    name: "iPhone 15 Pro Max",
    price: 114990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/a817d70e-7873-46c6-b077-95982b418a87.jpg",
    specs: {
      "Экран": "6.7\" Super Retina XDR",
      "Чип": "A17 Pro",
      "Камера": "48 МП тройная",
      "Память": "256 ГБ",
      "Аккумулятор": "4422 мАч",
      "Цвет": "Синий",
    },
    badge: "Хит",
  },
  {
    id: 4,
    category: "macbook",
    name: "MacBook Pro 14\"",
    price: 189990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/c90690be-bcd4-4ff8-982f-86133fa70d89.jpg",
    specs: {
      "Экран": "14.2\" Liquid Retina XDR",
      "Чип": "Apple M4 Pro",
      "Память": "24 ГБ RAM",
      "Накопитель": "512 ГБ SSD",
      "Аккумулятор": "до 24 ч",
      "Цвет": "Серебристый",
    },
    badge: "Новинка",
  },
  {
    id: 5,
    category: "macbook",
    name: "MacBook Air 13\"",
    price: 129990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/c90690be-bcd4-4ff8-982f-86133fa70d89.jpg",
    specs: {
      "Экран": "13.6\" Liquid Retina",
      "Чип": "Apple M3",
      "Память": "8 ГБ RAM",
      "Накопитель": "256 ГБ SSD",
      "Аккумулятор": "до 18 ч",
      "Цвет": "Полуночный",
    },
    badge: null,
  },
  {
    id: 6,
    category: "watch",
    name: "Apple Watch Series 10",
    price: 54990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Экран": "46 мм Always-On OLED",
      "Чип": "S10",
      "GPS": "Есть",
      "Аккумулятор": "до 18 ч",
      "Влагозащита": "50 м",
      "Цвет": "Серебристый",
    },
    badge: "Новинка",
  },
  {
    id: 7,
    category: "ipad",
    name: "iPad Pro 13\"",
    price: 149990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/c90690be-bcd4-4ff8-982f-86133fa70d89.jpg",
    specs: {
      "Экран": "13\" Ultra Retina XDR",
      "Чип": "Apple M4",
      "Камера": "12 МП",
      "Память": "256 ГБ",
      "Аккумулятор": "до 10 ч",
      "Цвет": "Серебристый",
    },
    badge: "Хит",
  },
  {
    id: 8,
    category: "sony",
    name: "Sony WH-1000XM5",
    price: 34990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Тип": "Накладные, беспроводные",
      "ANC": "Адаптивное",
      "Аккумулятор": "до 30 ч",
      "Bluetooth": "5.2",
      "Кодек": "LDAC, AAC",
      "Вес": "250 г",
    },
    badge: null,
  },
  {
    id: 9,
    category: "dyson",
    name: "Dyson V15 Detect",
    price: 69990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Тип": "Вертикальный беспроводной",
      "Мощность": "230 АВт",
      "Аккумулятор": "до 60 мин",
      "HEPA фильтр": "Есть",
      "Лазер": "Обнаружение пыли",
      "Вес": "3.1 кг",
    },
    badge: "Хит",
  },
  {
    id: 11,
    category: "airpods",
    name: "AirPods Pro 2",
    price: 24990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Тип": "Внутриканальные TWS",
      "ANC": "Адаптивное H2",
      "Аккумулятор": "до 6 ч (30 с кейсом)",
      "Чип": "H2",
      "Звук": "Пространственный",
      "Влагозащита": "IPX4",
    },
    badge: "Хит",
  },
  {
    id: 12,
    category: "airpods",
    name: "AirPods 4",
    price: 16990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Тип": "Открытые TWS",
      "ANC": "Активное шумоподавление",
      "Аккумулятор": "до 5 ч (30 с кейсом)",
      "Чип": "H2",
      "Звук": "Пространственный",
      "Влагозащита": "IPX4",
    },
    badge: "Новинка",
  },
  {
    id: 13,
    category: "airpods",
    name: "AirPods Max",
    price: 59990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Тип": "Накладные беспроводные",
      "ANC": "Адаптивное",
      "Аккумулятор": "до 20 ч",
      "Чип": "H1",
      "Звук": "Пространственный Dolby Atmos",
      "Влагозащита": "IPX4",
    },
    badge: null,
  },
  {
    id: 10,
    category: "other",
    name: "AirPods Pro 2",
    price: 24990,
    image: "https://cdn.poehali.dev/projects/196d8e70-3b59-412c-9ee8-399dbe31d184/files/e880fad3-5f2e-4573-aa50-1f34563cd814.jpg",
    specs: {
      "Тип": "Внутриканальные TWS",
      "ANC": "Адаптивное H2",
      "Аккумулятор": "до 6 ч (30 с кейсом)",
      "Чип": "H2",
      "Звук": "Пространственный",
      "Влагозащита": "IPX4",
    },
    badge: null,
  },
];

const formatPrice = (p: number) =>
  p.toLocaleString("ru-RU") + " ₽";

const AppleLogo = ({ size = 20, color = "#1d1d1f" }: { size?: number; color?: string }) => (
  <svg width={size} height={size * 1.22} viewBox="0 0 170 207" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M150.37 130.25c-.77 1.73-1.56 3.43-2.39 5.1-3.16 6.37-6.87 12.48-11.13 18.26-5.87 7.9-10.68 13.37-14.38 16.41-5.74 5.27-11.88 7.97-18.46 8.12-4.72 0-10.42-1.34-17.05-4.07-6.65-2.71-12.77-4.05-18.38-4.05-5.89 0-12.21 1.34-18.96 4.05-6.77 2.73-12.22 4.15-16.41 4.29-6.31.27-12.59-2.51-18.87-8.36-3.99-3.31-9.02-9.01-15.07-17.1-6.46-8.65-11.78-18.68-15.97-30.1C1.56 111.23 0 99.13 0 87.42c0-13.36 2.88-24.87 8.64-34.49 4.52-7.72 10.55-13.82 18.12-18.32 7.56-4.5 15.73-6.79 24.51-6.94 4.81 0 11.11 1.49 18.94 4.41 7.81 2.93 12.83 4.42 15.03 4.42 1.65 0 7.22-1.74 16.64-5.2 8.92-3.2 16.45-4.52 22.62-4.01 16.73 1.35 29.29 7.94 37.62 19.82-14.96 9.07-22.35 21.77-22.2 38.06.13 12.69 4.73 23.27 13.77 31.67 4.1 3.89 8.67 6.9 13.74 9.03-.1.27-.2.54-.3.82zM119.11 7.24c0 9.95-3.63 19.24-10.88 27.83-8.74 10.22-19.31 16.12-30.76 15.19-.15-1.19-.23-2.44-.23-3.75 0-9.55 4.16-19.77 11.54-28.11 3.69-4.23 8.38-7.75 14.07-10.56 5.68-2.77 11.06-4.3 16.12-4.56.15 1.33.14 2.65.14 3.96z"/>
  </svg>
);

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("iphone");
  const [compareList, setCompareList] = useState<number[]>([]);
  const [showCompare, setShowCompare] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const filtered = PRODUCTS.filter((p) => p.category === activeCategory);

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id)
        ? prev.filter((x) => x !== id)
        : prev.length < 3
        ? [...prev, id]
        : prev
    );
  };

  const compareProducts = PRODUCTS.filter((p) => compareList.includes(p.id));
  const allSpecKeys = Array.from(
    new Set(compareProducts.flatMap((p) => Object.keys(p.specs)))
  );

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'SF Pro Display', 'SF Pro Text', Inter, 'Segoe UI', sans-serif" }}>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto px-5">
          <div className="flex items-center justify-between h-12">

            <div className="flex items-center gap-1">
              <AppleLogo size={18} color="#1d1d1f" />
              <span className="text-[17px] font-semibold tracking-tight text-[#1d1d1f]">Tophone</span>
            </div>

            <nav className="hidden md:flex items-center gap-7">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-[12px] transition-colors ${
                    activeCategory === cat.id
                      ? "text-[#1d1d1f] font-medium"
                      : "text-[#6e6e73] hover:text-[#1d1d1f]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              {compareList.length > 0 && (
                <button
                  onClick={() => setShowCompare(true)}
                  className="hidden md:flex items-center gap-1.5 text-[12px] text-[#0071e3] hover:underline"
                >
                  Сравнить ({compareList.length})
                </button>
              )}
              <button
                className="md:hidden p-1.5 text-[#1d1d1f]"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={20} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[#d2d2d7] bg-white/95 backdrop-blur-xl px-5 py-4">
            <div className="grid grid-cols-2 gap-1">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2.5 rounded-lg text-[13px] transition-colors ${
                    activeCategory === cat.id
                      ? "bg-[#f5f5f7] text-[#1d1d1f] font-medium"
                      : "text-[#6e6e73] hover:bg-[#f5f5f7]"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section className="bg-[#f5f5f7] text-center py-20 md:py-28 px-5">
        <p className="text-[#6e6e73] text-[14px] font-medium mb-3 tracking-wide">
          Официальный магазин
        </p>
        <h1 className="text-[48px] md:text-[64px] font-semibold text-[#1d1d1f] leading-[1.1] tracking-tight mb-5">
          Техника, которой<br />доверяют.
        </h1>
        <p className="text-[#6e6e73] text-[17px] md:text-[21px] max-w-xl mx-auto mb-8 leading-relaxed font-light">
          Apple, Sony, Dyson и другие премиальные бренды.
          <br className="hidden md:block" /> Гарантия, доставка по всей России.
        </p>
        <div className="flex items-center justify-center gap-5 flex-wrap">
          <button
            onClick={() => setActiveCategory("iphone")}
            className="px-6 py-2 bg-[#0071e3] text-white text-[14px] font-medium rounded-full hover:bg-[#0077ed] transition-colors"
          >
            Смотреть каталог
          </button>
          <button className="px-6 py-2 bg-transparent text-[#0071e3] text-[14px] font-medium rounded-full border border-[#0071e3] hover:bg-[#0071e3]/5 transition-colors">
            Узнать больше
          </button>
        </div>
      </section>

      {/* Category tabs */}
      <div className="bg-white border-b border-[#d2d2d7] sticky top-12 z-40">
        <div className="max-w-[980px] mx-auto px-5">
          <div className="flex overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex-shrink-0 px-5 py-3.5 text-[13px] font-medium whitespace-nowrap border-b-[1.5px] transition-all ${
                  activeCategory === cat.id
                    ? "border-[#1d1d1f] text-[#1d1d1f]"
                    : "border-transparent text-[#6e6e73] hover:text-[#1d1d1f]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products */}
      <main className="max-w-[980px] mx-auto px-5 py-12 pb-28">
        {compareList.length === 0 && (
          <p className="text-[#6e6e73] text-[12px] mb-6">
            Выберите до 3 товаров для сравнения характеристик
          </p>
        )}

        {filtered.length === 0 ? (
          <div className="text-center py-32 text-[#6e6e73]">
            <Icon name="Package" size={40} />
            <p className="mt-4 text-[17px]">Товары скоро появятся</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((product) => {
              const isInCompare = compareList.includes(product.id);
              return (
                <div
                  key={product.id}
                  className={`group bg-[#f5f5f7] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 cursor-pointer ${
                    isInCompare
                      ? "ring-2 ring-[#0071e3]"
                      : "hover:bg-[#ebebeb]"
                  }`}
                >
                  <div className="relative aspect-square overflow-hidden bg-white rounded-xl m-3 mb-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-2 py-0.5 text-[11px] font-semibold rounded-full ${
                          product.badge === "Новинка"
                            ? "bg-[#1d1d1f] text-white"
                            : "bg-[#ff3b30] text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleCompare(product.id)}
                      className={`absolute top-3 right-3 p-1.5 rounded-full transition-all text-[11px] ${
                        isInCompare
                          ? "bg-[#0071e3] text-white"
                          : "bg-white/80 text-[#6e6e73] opacity-0 group-hover:opacity-100 hover:bg-white"
                      }`}
                      title="Добавить к сравнению"
                    >
                      <Icon name="BarChart2" size={13} />
                    </button>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="text-[15px] font-semibold text-[#1d1d1f] mb-1 leading-snug">
                      {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {Object.entries(product.specs)
                        .slice(0, 2)
                        .map(([k, v]) => (
                          <span
                            key={k}
                            className="text-[11px] text-[#6e6e73] bg-white rounded-md px-2 py-0.5"
                          >
                            {v}
                          </span>
                        ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-[15px] font-semibold text-[#1d1d1f]">
                        {formatPrice(product.price)}
                      </span>
                      <button className="px-4 py-1.5 bg-[#0071e3] text-white text-[12px] font-medium rounded-full hover:bg-[#0077ed] transition-colors">
                        Купить
                      </button>
                    </div>

                    {isInCompare && (
                      <button
                        onClick={() => toggleCompare(product.id)}
                        className="mt-2 text-[11px] text-[#0071e3] hover:underline text-center"
                      >
                        Убрать из сравнения
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>

      {/* Compare modal */}
      {showCompare && compareProducts.length >= 2 && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowCompare(false)}
          />
          <div className="relative bg-white w-full sm:rounded-2xl shadow-2xl max-h-[92vh] overflow-auto">
            <div className="sticky top-0 bg-white/95 backdrop-blur-md border-b border-[#d2d2d7] px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-[17px] font-semibold text-[#1d1d1f]">Сравнение</h2>
                <p className="text-[12px] text-[#6e6e73]">{compareProducts.length} товара</p>
              </div>
              <button
                onClick={() => setShowCompare(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5f7] text-[#1d1d1f] hover:bg-[#ebebeb] transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr>
                    <th className="text-left text-[12px] font-medium text-[#6e6e73] px-6 py-5 w-40">
                      Характеристика
                    </th>
                    {compareProducts.map((p) => (
                      <th key={p.id} className="px-6 py-5 min-w-[200px]">
                        <div className="flex flex-col items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-20 h-20 object-cover rounded-xl bg-[#f5f5f7]"
                          />
                          <div className="text-center">
                            <p className="font-semibold text-[#1d1d1f] text-[13px]">{p.name}</p>
                            <p className="text-[#0071e3] font-semibold text-[15px] mt-1">
                              {formatPrice(p.price)}
                            </p>
                          </div>
                          <button className="px-5 py-1.5 bg-[#0071e3] text-white text-[12px] font-medium rounded-full hover:bg-[#0077ed] transition-colors w-full">
                            Купить
                          </button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allSpecKeys.map((key, i) => (
                    <tr
                      key={key}
                      className={i % 2 === 0 ? "bg-[#f5f5f7]" : "bg-white"}
                    >
                      <td className="px-6 py-3 text-[12px] text-[#6e6e73] font-medium whitespace-nowrap">
                        {key}
                      </td>
                      {compareProducts.map((p) => (
                        <td
                          key={p.id}
                          className="px-6 py-3 text-[13px] text-[#1d1d1f] text-center"
                        >
                          {(p.specs as Record<string, string>)[key] ?? (
                            <span className="text-[#d2d2d7]">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-[#d2d2d7] flex justify-between items-center">
              <button
                onClick={() => { setCompareList([]); setShowCompare(false); }}
                className="text-[13px] text-[#6e6e73] hover:text-[#1d1d1f]"
              >
                Очистить
              </button>
              <button
                onClick={() => setShowCompare(false)}
                className="px-6 py-2 bg-[#1d1d1f] text-white text-[13px] font-medium rounded-full hover:bg-[#3a3a3c] transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating compare */}
      {compareList.length >= 2 && !showCompare && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => setShowCompare(true)}
            className="flex items-center gap-2.5 px-6 py-3 bg-[#1d1d1f] text-white font-medium rounded-full shadow-xl hover:bg-[#3a3a3c] transition-all hover:scale-105 text-[13px]"
          >
            <Icon name="BarChart2" size={16} />
            Сравнить {compareList.length} товара
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#f5f5f7] border-t border-[#d2d2d7]">
        <div className="max-w-[980px] mx-auto px-5 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-1 mb-1">
                <AppleLogo size={16} color="#6e6e73" />
                <span className="text-[15px] font-semibold text-[#1d1d1f]">Tophone</span>
              </div>
              <p className="text-[12px] text-[#6e6e73]">
                Премиальная техника с официальной гарантией
              </p>
            </div>
            <div className="flex flex-wrap gap-5 text-[12px] text-[#6e6e73]">
              <div className="flex items-center gap-1.5">
                <Icon name="Truck" size={14} />
                <span>Доставка по России</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="Shield" size={14} />
                <span>Официальная гарантия</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Icon name="RefreshCw" size={14} />
                <span>Возврат 14 дней</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-[#d2d2d7] text-[11px] text-[#6e6e73] text-center">
            Copyright © 2026 Tophone. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
