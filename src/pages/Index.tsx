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
    <div className="min-h-screen bg-white font-golos">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-gray-900" style={{fontFamily:"Georgia, serif"}}>Tophone</span>
              <svg width="22" height="26" viewBox="0 0 814 1000" fill="currentColor" className="text-gray-900 -mt-1">
                <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-167.5-123.1C172.7 719.7 128 604 128 493c0-155.5 100.8-237.8 199.9-237.8 56 0 101.8 37.5 136.4 37.5 33.2 0 85.4-39.5 149.3-39.5 24.1 0 108.2 2.2 166.3 86.2zm-74.3-166.5c28.7-34.7 48.8-83.1 48.8-131.5 0-6.7-.6-13.3-1.9-19.4-46.2 1.9-101.8 31.3-134.8 70.9-26.5 30.7-50.9 79.1-50.9 128.2 0 7.4 1.3 14.8 1.9 17.1 3.2.6 8.4 1.3 13.6 1.3 41.5 0 93.4-28 123.3-66.6z"/>
              </svg>
            </div>

            <nav className="hidden md:flex items-center gap-6">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "text-blue-600"
                      : "text-gray-500 hover:text-gray-900"
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
                  className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Icon name="BarChart2" size={16} />
                  Сравнить ({compareList.length})
                </button>
              )}
              <button
                className="md:hidden p-2 text-gray-500"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? "X" : "Menu"} size={22} />
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3">
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    activeCategory === cat.id
                      ? "bg-blue-50 text-blue-600"
                      : "text-gray-600 hover:bg-gray-50"
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
      <section className="border-b border-gray-100 bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-blue-600 text-sm font-semibold tracking-widest uppercase mb-4">
              Официальный магазин
            </p>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight tracking-tight mb-6">
              Техника, которой
              <br />
              <span className="text-blue-600">доверяют.</span>
            </h1>
            <p className="text-gray-500 text-lg mb-8 leading-relaxed">
              Apple, Sony, Dyson и другие премиальные бренды. Гарантия, доставка по всей России.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button
                onClick={() => setActiveCategory("iphone")}
                className="px-8 py-3.5 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors text-sm"
              >
                Смотреть каталог
              </button>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Icon name="Shield" size={16} />
                <span>Официальная гарантия</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category tabs */}
      <section className="border-b border-gray-100 bg-white sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                  activeCategory === cat.id
                    ? "border-blue-600 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                <Icon name={cat.icon} size={16} />
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Compare hint */}
      {compareList.length === 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
          <div className="flex items-center gap-2 text-gray-400 text-xs bg-gray-50 rounded-xl px-4 py-2.5 w-fit">
            <Icon name="Info" size={14} />
            <span>Выберите до 3 товаров для сравнения характеристик</span>
          </div>
        </div>
      )}

      {/* Products grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-24">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-gray-400">
            <Icon name="Package" size={48} />
            <p className="mt-4 text-lg">Товары скоро появятся</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((product) => {
              const isInCompare = compareList.includes(product.id);
              return (
                <div
                  key={product.id}
                  className={`group bg-white rounded-2xl border transition-all duration-200 overflow-hidden flex flex-col ${
                    isInCompare
                      ? "border-blue-400 shadow-lg shadow-blue-50 ring-1 ring-blue-200"
                      : "border-gray-100 hover:border-gray-200 hover:shadow-md"
                  }`}
                >
                  <div className="relative bg-gray-50 aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span
                        className={`absolute top-3 left-3 px-2.5 py-1 text-xs font-semibold rounded-full ${
                          product.badge === "Новинка"
                            ? "bg-blue-600 text-white"
                            : "bg-orange-500 text-white"
                        }`}
                      >
                        {product.badge}
                      </span>
                    )}
                    <button
                      onClick={() => toggleCompare(product.id)}
                      className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                        isInCompare
                          ? "bg-blue-600 text-white"
                          : "bg-white/80 text-gray-500 hover:bg-white opacity-0 group-hover:opacity-100"
                      }`}
                      title="Добавить к сравнению"
                    >
                      <Icon name="BarChart2" size={14} />
                    </button>
                  </div>

                  <div className="p-4 flex flex-col flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {product.name}
                    </h3>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {Object.entries(product.specs)
                        .slice(0, 2)
                        .map(([k, v]) => (
                          <span
                            key={k}
                            className="text-xs text-gray-500 bg-gray-50 rounded-md px-2 py-0.5"
                          >
                            {v}
                          </span>
                        ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between">
                      <span className="text-lg font-bold text-gray-900">
                        {formatPrice(product.price)}
                      </span>
                      <button className="px-4 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors">
                        Купить
                      </button>
                    </div>

                    {isInCompare && (
                      <button
                        onClick={() => toggleCompare(product.id)}
                        className="mt-2 text-xs text-blue-500 hover:text-blue-700 text-center"
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
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowCompare(false)}
          />
          <div className="relative bg-white w-full sm:rounded-3xl shadow-2xl max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-bold text-gray-900">
                  Сравнение товаров
                </h2>
                <p className="text-sm text-gray-500">
                  {compareProducts.length} товара
                </p>
              </div>
              <button
                onClick={() => setShowCompare(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <Icon name="X" size={20} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-max">
                <thead>
                  <tr>
                    <th className="text-left text-sm font-medium text-gray-400 px-6 py-4 w-40">
                      Характеристика
                    </th>
                    {compareProducts.map((p) => (
                      <th key={p.id} className="px-6 py-4 min-w-[200px]">
                        <div className="flex flex-col items-center gap-3">
                          <img
                            src={p.image}
                            alt={p.name}
                            className="w-20 h-20 object-cover rounded-xl bg-gray-50"
                          />
                          <div className="text-center">
                            <p className="font-semibold text-gray-900 text-sm">
                              {p.name}
                            </p>
                            <p className="text-blue-600 font-bold text-base mt-1">
                              {formatPrice(p.price)}
                            </p>
                          </div>
                          <button className="px-5 py-2 bg-blue-600 text-white text-xs font-semibold rounded-xl hover:bg-blue-700 transition-colors w-full">
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
                      className={i % 2 === 0 ? "bg-gray-50/60" : "bg-white"}
                    >
                      <td className="px-6 py-3 text-sm text-gray-500 font-medium whitespace-nowrap">
                        {key}
                      </td>
                      {compareProducts.map((p) => (
                        <td
                          key={p.id}
                          className="px-6 py-3 text-sm text-gray-800 text-center"
                        >
                          {(p.specs as Record<string, string>)[key] ?? (
                            <span className="text-gray-300">—</span>
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 border-t border-gray-100 flex justify-between items-center">
              <button
                onClick={() => {
                  setCompareList([]);
                  setShowCompare(false);
                }}
                className="text-sm text-gray-400 hover:text-gray-600"
              >
                Очистить список
              </button>
              <button
                onClick={() => setShowCompare(false)}
                className="px-6 py-2.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating compare button */}
      {compareList.length >= 2 && !showCompare && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40">
          <button
            onClick={() => setShowCompare(true)}
            className="flex items-center gap-3 px-6 py-3.5 bg-gray-900 text-white font-semibold rounded-full shadow-xl hover:bg-gray-800 transition-all hover:scale-105 text-sm"
          >
            <Icon name="BarChart2" size={18} />
            Сравнить {compareList.length} товара
            <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center text-xs font-bold">
              {compareList.length}
            </span>
          </button>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold tracking-tight text-gray-900" style={{fontFamily:"Georgia, serif"}}>Tophone</span>
                <svg width="20" height="24" viewBox="0 0 814 1000" fill="currentColor" className="text-gray-900 -mt-1">
                  <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-37.5-167.5-123.1C172.7 719.7 128 604 128 493c0-155.5 100.8-237.8 199.9-237.8 56 0 101.8 37.5 136.4 37.5 33.2 0 85.4-39.5 149.3-39.5 24.1 0 108.2 2.2 166.3 86.2zm-74.3-166.5c28.7-34.7 48.8-83.1 48.8-131.5 0-6.7-.6-13.3-1.9-19.4-46.2 1.9-101.8 31.3-134.8 70.9-26.5 30.7-50.9 79.1-50.9 128.2 0 7.4 1.3 14.8 1.9 17.1 3.2.6 8.4 1.3 13.6 1.3 41.5 0 93.4-28 123.3-66.6z"/>
                </svg>
              </div>
              <p className="text-sm text-gray-400 mt-1">
                Премиальная техника с официальной гарантией
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={16} />
                <span>Доставка по России</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} />
                <span>Официальная гарантия</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="RefreshCw" size={16} />
                <span>Возврат 14 дней</span>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-gray-200 text-xs text-gray-400 text-center">
            © 2026 Tophone. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}