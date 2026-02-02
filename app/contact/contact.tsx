import Nav from "~/components/nav";
import Footer from "~/components/footer";

export function Contact() {
  return (
    <>
      <Nav />

      <div className="max-w-screen-xl mx-auto p-6 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            📞 ติดต่อเรา
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            มีคำถามหรือข้อเสนอแนะ? เรายินดีรับฟังจากคุณ
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-4xl">✉️</span>
              ส่งข้อความถึงเรา
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  ชื่อ - นามสกุล <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="กรอกชื่อของคุณ"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  อีเมล <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="example@email.com"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  เบอร์โทรศัพท์
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder="0XX-XXX-XXXX"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  หัวข้อ <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  required
                >
                  <option value="">เลือกหัวข้อ</option>
                  <option value="general">สอบถามทั่วไป</option>
                  <option value="food">สอบถามเกี่ยวกับอาหาร</option>
                  <option value="location">สอบถามสถานที่</option>
                  <option value="suggest">ข้อเสนอแนะ</option>
                  <option value="other">อื่นๆ</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  ข้อความ <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors resize-none"
                  placeholder="เขียนข้อความของคุณที่นี่..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold py-4 px-8 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
              >
                ส่งข้อความ 📨
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl shadow-xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">ข้อมูลการติดต่อ</h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                    <span className="text-3xl">📍</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">ที่อยู่</h3>
                    <p className="text-white text-opacity-90 leading-relaxed">
                      อำเภอท่าฉาง จังหวัดสุราษฎร์ธานี
                      <br />
                      ประเทศไทย 84150
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                    <span className="text-3xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">โทรศัพท์</h3>
                    <p className="text-white text-opacity-90">
                      077-XXX-XXX
                      <br />
                      08X-XXX-XXXX
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                    <span className="text-3xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">อีเมล</h3>
                    <p className="text-white text-opacity-90">
                      info@thachang-food.com
                      <br />
                      contact@thachang-food.com
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3 flex-shrink-0">
                    <span className="text-3xl">🕐</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">เวลาทำการ</h3>
                    <p className="text-white text-opacity-90">
                      จันทร์ - ศุกร์: 08:00 - 18:00 น.
                      <br />
                      เสาร์ - อาทิตย์: 09:00 - 17:00 น.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <span className="text-3xl">🌐</span>
                ติดตามเราได้ที่
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                  <span className="text-2xl">📘</span>
                  Facebook
                </button>
                <button className="flex items-center justify-center gap-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                  <span className="text-2xl">📷</span>
                  Instagram
                </button>
                <button className="flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                  <span className="text-2xl">▶️</span>
                  YouTube
                </button>
                <button className="flex items-center justify-center gap-3 bg-blue-400 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-md">
                  <span className="text-2xl">🐦</span>
                  Twitter
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                💡 ข้อมูลเพิ่มเติม
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">▶</span>
                  <span>เราตอบกลับภายใน 24 ชั่วโมง</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">▶</span>
                  <span>ยินดีให้คำปรึกษาเกี่ยวกับอาหารพื้นบ้าน</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">▶</span>
                  <span>รับจัดกิจกรรมและทัวร์ท่องเที่ยว</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-600">▶</span>
                  <span>มีบริการแนะนำร้านอาหารในท่าฉาง</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            🗺️ แผนที่ท่าฉาง
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d503899.92982442176!2d98.61385223935771!3d9.358185736858246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3056bc13a13800c5%3A0x30223bc2c368140!2z4Lit4Liz4LmA4Lig4Lit4LiX4LmI4Liy4LiJ4Liy4LiHIOC4quC4uOC4o-C4suC4qeC4juC4o-C5jOC4mOC4suC4meC4tQ!5e0!3m2!1sth!2sth!4v1770020975355!5m2!1sth!2sth"
              style={{ border: "0", width: "100%", height: "500px" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            ❓ คำถามที่พบบ่อย
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl text-orange-600 mb-3">
                Q: ร้านอาหารในท่าฉางเปิดกี่โมง?
              </h3>
              <p className="text-gray-700">
                ส่วนใหญ่เปิดตั้งแต่เช้าถึงเย็น (06:00-18:00 น.)
                บางร้านเปิดถึงกลางคืน
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl text-orange-600 mb-3">
                Q: ควรมาเที่ยวช่วงไหนดี?
              </h3>
              <p className="text-gray-700">
                แนะนำช่วงเดือนพฤศจิกายน-มีนาคม อากาศดี เหมาะกับการท่องเที่ยว
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl text-orange-600 mb-3">
                Q: มีที่พักในท่าฉางไหม?
              </h3>
              <p className="text-gray-700">
                มีโรงแรม รีสอร์ท และบ้านพักให้เลือกหลากหลาย ราคาเริ่มต้น
                500-2,000 บาท/คืน
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="font-bold text-xl text-orange-600 mb-3">
                Q: ไปท่าฉางยังไง?
              </h3>
              <p className="text-gray-700">
                สามารถขับรถส่วนตัวหรือนั่งรถโดยสารจากสุราษฎร์ธานี ใช้เวลาประมาณ
                1 ชั่วโมง
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}