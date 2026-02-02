import Nav from "~/components/nav";
import Footer from "~/components/footer";

export function Food() {
  const foodCategories = [
    {
      category: "จานหลัก",
      icon: "🍛",
      foods: [
        {
          name: "ข้าวยำปักษ์ใต้",
          description: "ข้าวยำสไตล์ภาคใต้ ผสมผสานรสชาติเผ็ด หวาน เค็ม เปรี้ยว กับเครื่องเคียงมากมาย อาทิ กะปิ มะพร้าวขูด ถั่วลิสง มะม่วง พริกแห้ง ไข่เค็ม กุ้งแห้ง และผักสด",
          price: "40-60 บาท",
          spicy: "🌶️🌶️",
          popular: true,
        },
        {
          name: "แกงไตปลา",
          description: "เมนูพื้นบ้านภาคใต้ รสชาติเข้มข้น กลมกล่อม ใช้ไตปลาสดๆ ปรุงกับเครื่องแกงรสจัดจ้าน เหมาะทานกับข้าวสวยร้อนๆ",
          price: "50-80 บาท",
          spicy: "🌶️🌶️🌶️",
          popular: true,
        },
        {
          name: "ขนมจีนน้ำยา",
          description: "ขนมจีนน้ำยาสูตรโบราณ กลิ่นหอมจากสมุนไพร ใช้ปลาสดต้มกับเครื่องแกง เครื่องเคียงครบครัน มีผักสด หน่อไม้ ถั่วงอก",
          price: "30-50 บาท",
          spicy: "🌶️🌶️",
          popular: true,
        },
        {
          name: "แกงส้มปลากระบอก",
          description: "แกงส้มรสจัด เปรี้ยว เผ็ด ใช้ปลากระบอกสด ผักสด เช่น ผักบุ้ง ถั่วฝักยาว สับปะรด รสชาติสดชื่น กระตุ้นการรับประทาน",
          price: "60-100 บาท",
          spicy: "🌶️🌶️🌶️",
          popular: false,
        },
        {
          name: "แกงเหลืองปลาทู",
          description: "แกงเหลืองรสชาติหวาน เค็ม เผ็ดน้อย ใช้ปลาทูย่าง ผักสดหลากหลาย กลิ่นหอมของขมิ้น",
          price: "50-80 บาท",
          spicy: "🌶️",
          popular: false,
        },
      ],
    },
    {
      category: "อาหารทานเล่น",
      icon: "🍢",
      foods: [
        {
          name: "หมูย่างสะเต๊ะ",
          description: "หมูย่างเสียบไม้ หอมเครื่องเทศ หมักด้วยน้ำตาล กะทิ ขมิ้น เสิร์ฟพร้อมน้ำจิ้มถั่วและอาจาดสดๆ",
          price: "5-10 บาท/ไม้",
          spicy: "🌶️",
          popular: true,
        },
        {
          name: "ปอเปี๊ยะทอด",
          description: "ปอเปี๊ยะทอดกรอบ ไส้อัดแน่นด้วยผักและเนื้อสัตว์ ทานคู่กับน้ำจิ้มพริกหวาน",
          price: "10-15 บาท/ชิ้น",
          spicy: "🌶️",
          popular: false,
        },
        {
          name: "ขนมครก",
          description: "ขนมหวานโบราณ ทำจากแป้งข้าวเจ้า กะทิ และน้ำตาลมะพร้าว หอมหวาน นุ่ม",
          price: "20-30 บาท",
          spicy: "",
          popular: true,
        },
      ],
    },
    {
      category: "ของหวาน",
      icon: "🍮",
      foods: [
        {
          name: "ขนมชั้น",
          description: "ขนมหวานชั้นโบราณ ทำจากแป้งข้าวเจ้า แป้งมัน กะทิ และน้ำตาลโตนด มีหลายสี นุ่มนิ่ม หอมหวาน",
          price: "30-50 บาท",
          spicy: "",
          popular: true,
        },
        {
          name: "ทองหยิบ",
          description: "ขนมไทยโบราณ ทำจากไข่แดง น้ำตาล รูปร่างงดงาม รสชาติหวานละมุน",
          price: "40-60 บาท",
          spicy: "",
          popular: false,
        },
        {
          name: "กล้วยบวชชี",
          description: "ของหวานไทย กล้วยน้ำว้าสุก ต้มในน้ำกะทิหวาน หอมกลิ่นใบเตย",
          price: "25-40 บาท",
          spicy: "",
          popular: true,
        },
      ],
    },
    {
      category: "เครื่องดื่ม",
      icon: "🧃",
      foods: [
        {
          name: "กาแฟโบราณ",
          description: "กาแฟสดชงแบบโบราณ กลิ่นหอม รสชาติเข้มข้น ทานคู่กับขนมหวานไทย",
          price: "20-30 บาท",
          spicy: "",
          popular: true,
        },
        {
          name: "ชาไทย",
          description: "ชาไทยสูตรดั้งเดิม สีสวย หอมหวาน เย็นชื่นใจ",
          price: "25-35 บาท",
          spicy: "",
          popular: false,
        },
        {
          name: "น้ำกระเจี๊ยบ",
          description: "น้ำกระเจี๊ยบสดชื่น เปรี้ยวหวาน ดับกระหาย บำรุงร่างกาย",
          price: "15-25 บาท",
          spicy: "",
          popular: false,
        },
      ],
    },
  ];

  return (
    <>
      <Nav />

      <div className="max-w-screen-xl mx-auto p-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            🍜 เมนูอาหารพื้นบ้านท่าฉาง
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            สัมผัสรสชาติต้นตำรับของอาหารภาคใต้ ที่ผ่านการสืบทอดมาหลายชั่วอายุคน
          </p>
        </div>

        {/* Food Categories */}
        {foodCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-16">
            {/* Category Header */}
            <div className="flex items-center justify-center mb-8">
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
              <h2 className="text-4xl font-bold text-gray-800 mx-6 flex items-center gap-3">
                <span className="text-5xl">{category.icon}</span>
                {category.category}
              </h2>
              <div className="flex-grow h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent"></div>
            </div>

            {/* Food Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.foods.map((food, foodIndex) => (
                <div
                  key={foodIndex}
                  className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                    food.popular ? "ring-2 ring-orange-400" : ""
                  }`}
                >
                  {/* Popular Badge */}
                  {food.popular && (
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-center py-1 text-sm font-semibold">
                      ⭐ ยอดนิยม ⭐
                    </div>
                  )}

                  <div className="p-6">
                    {/* Food Name & Price */}
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-2xl font-bold text-gray-800 flex-1">
                        {food.name}
                      </h3>
                      {food.spicy && (
                        <span className="ml-2 text-xl">{food.spicy}</span>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {food.description}
                    </p>

                    {/* Price */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-2xl font-bold text-orange-600">
                        {food.price}
                      </span>
                      <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-2 px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg">
                        สั่งเลย
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Legend Section */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            คำอธิบายสัญลักษณ์
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
              <span className="text-3xl">🌶️</span>
              <div>
                <p className="font-semibold text-gray-800">เผ็ดน้อย</p>
                <p className="text-sm text-gray-600">รสชาติอ่อนๆ</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
              <span className="text-3xl">🌶️🌶️</span>
              <div>
                <p className="font-semibold text-gray-800">เผ็ดปานกลาง</p>
                <p className="text-sm text-gray-600">รสชาติกำลังดี</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
              <span className="text-3xl">🌶️🌶️🌶️</span>
              <div>
                <p className="font-semibold text-gray-800">เผ็ดมาก</p>
                <p className="text-sm text-gray-600">รสจัดจ้าน</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white rounded-lg p-4 shadow-md">
              <span className="text-3xl">⭐</span>
              <div>
                <p className="font-semibold text-gray-800">เมนูยอดนิยม</p>
                <p className="text-sm text-gray-600">แนะนำเป็นพิเศษ</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Note */}
        <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-8 text-white text-center mb-12">
          <h3 className="text-3xl font-bold mb-4">📝 หมายเหตุ</h3>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-2">
            ราคาอาจแตกต่างกันไปตามร้านค้าและตลาดต่างๆ ในท่าฉาง
          </p>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto mb-2">
            ระดับความเผ็ดสามารถปรับได้ตามความต้องการของลูกค้า
          </p>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            วัตถุดิบสดใหม่ทุกวัน มาจากแหล่งผลิตในท้องถิ่น
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-gray-800 mb-6">
            หิวแล้วใช่ไหม? 😋
          </h3>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            มาลิ้มรสอาหารพื้นบ้านภาคใต้ต้นตำรับที่ท่าฉางกันเถอะ!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              ค้นหาร้านอาหาร
            </button>
            <button className="bg-white hover:bg-gray-50 text-orange-600 font-bold py-4 px-10 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 border-2 border-orange-500">
              ดูสูตรอาหาร
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}