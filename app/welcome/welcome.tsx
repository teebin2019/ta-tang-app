import Footer from "~/components/footer";
import food1 from "./food1.jpg";
import food2 from "./food2.jpg";
import food3 from "./food3.jpg";
import food4 from "./food4.jpg";
import Nav from "~/components/nav";

export function Welcome() {
  const foods = [
    {
      img: food1,
      name: "ข้าวยำปักษ์ใต้",
      description:
        "ข้าวยำสไตล์ภาคใต้ ผสมผสานรสชาติเผ็ด หวาน เค็ม เปรี้ยว กับเครื่องเคียงมากมาย",
      price: "40-60 บาท",
    },
    {
      img: food2,
      name: "แกงไตปลา",
      description:
        "เมนูพื้นบ้านภาคใต้ รสชาติเข้มข้น กลมกล่อม เหมาะทานกับข้าวสวยร้อนๆ",
      price: "50-80 บาท",
    },
    {
      img: food3,
      name: "ขนมจีนน้ำยา",
      description: "ขนมจีนสูตรโบราณ กลิ่นหอมจากสมุนไพร เครื่องเคียงครบครัน",
      price: "30-50 บาท",
    },
    {
      img: food4,
      name: "หมูย่างสะเต๊ะ",
      description:
        "หมูย่างเสียบไม้ หอมเครื่องเทศ เสิร์ฟพร้อมน้ำจิ้มถั่วและอาจาด",
      price: "5-10 บาท/ไม้",
    },
  ];

  return (
    <>
      <Nav />
      <div className="max-w-screen-xl mx-auto p-6">
        {/* Hero Section */}
        <div className="mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251949.8822036393!2d98.77870084084647!3d9.358299867189068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3056bc13a13800c5%3A0x30223bc2c368140!2z4Lit4Liz4LmA4Lig4Lit4LiX4LmI4Liy4LiJ4Liy4LiHIOC4quC4uOC4o-C4suC4qeC4juC4o-C5jOC4mOC4suC4meC4tQ!5e0!3m2!1sth!2sth!4v1770021561242!5m2!1sth!2sth"
            style={{ border: "0", width: "100%", height: "600px" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-center mt-6">
            <h1 className="text-5xl font-bold text-gray-800 mb-3">
              ยินดีต้อนรับสู่อำเภอท่าฉาง
            </h1>
            <p className="text-xl text-gray-600">
              สัมผัสรสชาติอาหารพื้นบ้านภาคใต้ต้นตำรับ
            </p>
          </div>
        </div>

        {/* Food Section */}
        <div className="mb-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              🍛 อาหารแนะนำ 🍛
            </h2>
            <p className="text-gray-600">
              อาหารพื้นบ้านที่ต้องลอง เมื่อมาเยือนท่าฉาง
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foods.map((food, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    className="w-full h-48 object-cover"
                    src={food.img}
                    alt={food.name}
                  />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {food.price}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {food.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {food.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="bg-gradient-to-r from-orange-100 to-red-100 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-4">
            📍 มาเยือนท่าฉาง
          </h3>
          <p className="text-gray-700 text-lg mb-4">
            อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี มีอาหารพื้นบ้านภาคใต้ที่หลากหลาย
            <br />
            รสชาติเข้มข้น เผ็ดร้อน กลมกล่อม ที่คุณจะต้องหลงรัก
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl">
            สำรวจเพิ่มเติม
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}
