/**
 * food-db.js — ฐานข้อมูลอาหารไทยสำหรับแอปตัวติดตามสุขภาพ
 * ใช้โดย app.js เพื่อค้นหาอาหารและคำนวณค่าสารอาหาร
 */

const FOOD_DB = [
  // ── ข้าว ──
  { name: "ข้าวสวย",      cat: "ข้าว",       cal: 230, protein: 4.3, carbs: 50,  fat: 0.3,  per: "ต่อจาน (1 ถ้วยตวง)" },
  { name: "ข้าวกล้อง",    cat: "ข้าว",       cal: 220, protein: 5,   carbs: 48,  fat: 1.5,  per: "ต่อจาน" },
  { name: "ข้าวเหนียว",  cat: "ข้าว",       cal: 230, protein: 3.5, carbs: 52,  fat: 0.2,  per: "ต่อจาน" },
  { name: "ข้าวหอมมะลิ", cat: "ข้าว",       cal: 230, protein: 4.1, carbs: 50,  fat: 0.3,  per: "ต่อจาน" },

  // ── ข้าวผัด ──
  { name: "ข้าวกะเพราไก่ไข่ดาว", cat: "ข้าวราด",  cal: 520, protein: 24,  carbs: 58,  fat: 20,  per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวผัดผัก",     cat: "ข้าวผัด",  cal: 400, protein: 13,  carbs: 52,  fat: 15,  per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวผัดหมูใส่ไข่", cat: "ข้าวผัด",  cal: 440, protein: 18,  carbs: 54,  fat: 16,  per: "ต่อจาน" },
  { name: "ข้าวผัดรวมมิตร",  cat: "ข้าวผัด",  cal: 500, protein: 22,  carbs: 55,  fat: 22,  per: "ต่อจาน" },
  { name: "ข้าวผัดซีอิ๊ว", cat: "ข้าวผัด",  cal: 380, protein: 12,  carbs: 52,  fat: 13,  per: "ค่าประมาณต่อจาน" },

  // ── ข้าวราด ──
  { name: "ข้าวมันไก่",  cat: "ข้าวราด",  cal: 520, protein: 28,  carbs: 60,  fat: 18,  per: "ต่อจาน (ไก่ + น้ำพริก)" },
  { name: "ข้าวราดหมูสับ",  cat: "ข้าวราด",  cal: 480, protein: 24,  carbs: 55,  fat: 18,  per: "ต่อจาน (หมู + น้ำพริกเผา)" },
  { name: "ข้าวราดหมูทอด",  cat: "ข้าวราด",  cal: 500, protein: 25,  carbs: 58,  fat: 20,  per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวราดไก่",    cat: "ข้าวราด",  cal: 460, protein: 22,  carbs: 56,  fat: 16,  per: "ต่อจาน" },
  { name: "ข้าวราดปลา",    cat: "ข้าวราด",  cal: 430, protein: 26,  carbs: 52,  fat: 14,  per: "ต่อจาน (ปลา + น้ำพริก)" },
  { name: "ข้าวราดกุ้ง",    cat: "ข้าวราด",  cal: 490, protein: 24,  carbs: 56,  fat: 18,  per: "ต่อจาน" },

  // ── ข้าวต้ม / เมนูเส้น ──
  { name: "ข้าวต้มหมู",       cat: "ข้าวต้ม",  cal: 320, protein: 8,   carbs: 60,  fat: 2,   per: "ค่าประมาณต่อชาม" },
  { name: "ข้าวต้มปลา",       cat: "ข้าวต้ม",  cal: 300, protein: 12,  carbs: 55,  fat: 4,   per: "ต่อจาน" },
  { name: "ก๋วยเตี๋ยวหมู",     cat: "เส้น", cal: 400, protein: 14,  carbs: 58,  fat: 14,  per: "ค่าประมาณต่อชาม" },
  { name: "ราดหน้าหมู",        cat: "เส้น", cal: 450, protein: 15,  carbs: 55,  fat: 20,  per: "ค่าประมาณต่อจาน" },

  // ── ต้ม ──
  { name: "ต้มยำกุ้ง",        cat: "ต้ม",     cal: 280, protein: 18,  carbs: 25,  fat: 12,  per: "ต่อจาน (เส้นหมี่ + กุ้ง + น้ำยา)" },
  { name: "ก๋วยเตี๋ยวต้มยำ",   cat: "ต้ม",     cal: 310, protein: 16,  carbs: 35,  fat: 14,  per: "ค่าประมาณต่อชาม" },
  { name: "ต้มข่าไก่",       cat: "ต้ม",     cal: 300, protein: 22,  carbs: 22,  fat: 14,  per: "ต่อจาน (ไก่ + ข่า + น้ำซุป)" },
  { name: "ต้มปลา",          cat: "ต้ม",     cal: 260, protein: 24,  carbs: 15,  fat: 10,  per: "ค่าประมาณต่อชาม" },
  { name: "ต้มแซ่บหมู",      cat: "ต้ม",     cal: 240, protein: 22,  carbs: 10,  fat: 12,  per: "ค่าประมาณต่อชาม" },

  // ── ซด ──
  { name: "ซุปไข่",         cat: "ซุป",     cal: 180, protein: 8,   carbs: 8,   fat: 14,  per: "ค่าประมาณต่อถ้วย" },
  { name: "ซุปหมู",         cat: "ซุป",     cal: 200, protein: 12,  carbs: 10,  fat: 14,  per: "ค่าประมาณต่อถ้วย" },
  { name: "ซุปไก่",         cat: "ซุป",     cal: 190, protein: 14,  carbs: 8,   fat: 12,  per: "ค่าประมาณต่อถ้วย" },

  // ── น้ำแกง ──
  { name: "น้ำแกงจืดหมูสับ",   cat: "น้ำแกง", cal: 280, protein: 12,  carbs: 35,  fat: 8,   per: "ต่อจาน (หมู + ผัก + เส้น)" },
  { name: "น้ำแกงจืดเต้าหู้หมูสับ", cat: "น้ำแกง", cal: 300, protein: 16,  carbs: 32,  fat: 10,  per: "ต่อจาน" },
  { name: "น้ำแกงเลียง",      cat: "น้ำแกง", cal: 220, protein: 14,  carbs: 18,  fat: 10,  per: "ต่อจาน (ผักสวน + หมูสับ)" },

  // ── ผัด ──
  { name: "ผัดไทย",        cat: "ผัด",     cal: 450, protein: 14,  carbs: 60,  fat: 18,  per: "ต่อจาน (กุ้ง + ถั่ว + ไข่ + น้ำปลา)" },
  { name: "ผัดผักรวม",     cat: "ผัด",     cal: 200, protein: 8,   carbs: 18,  fat: 12,  per: "ต่อจาน" },
  { name: "ผัดข้าวโพด",    cat: "ผัด",     cal: 280, protein: 12,  carbs: 32,  fat: 10,  per: "ต่อจาน (สะพัด + ไข่ + หมู)" },
  { name: "ผัดแซ่บ",       cat: "ผัด",     cal: 320, protein: 14,  carbs: 38,  fat: 15,  per: "ต่อจาน (ใส่ซีอิ๊ว + หมูสับ)" },
  { name: "ผัดวุ้นเส้นหมู",  cat: "ผัด",     cal: 360, protein: 14,  carbs: 42,  fat: 14,  per: "ต่อจาน" },

  // ── ยำ ──
  { name: "ส้มตำ",         cat: "ยำ",     cal: 180, protein: 6,   carbs: 18,  fat: 10,  per: "ต่อจาน (มะละกอ + ถั่ว + ปลาร้า + เนื้อสัตว์)" },
  { name: "ส้มตำหมูยอ",   cat: "ยำ",     cal: 220, protein: 12,  carbs: 18,  fat: 12,  per: "ต่อจาน" },
  { name: "ส้มตำปูปลาร้า", cat: "ยำ",     cal: 200, protein: 8,   carbs: 16,  fat: 12,  per: "ต่อจาน" },
  { name: "ยำวุ้นเส้น",    cat: "ยำ",     cal: 180, protein: 8,   carbs: 20,  fat: 10,  per: "ต่อจาน" },
  { name: "ยำไข่ใหม่",    cat: "ยำ",     cal: 200, protein: 10,  carbs: 15,  fat: 12,  per: "ต่อจาน" },

  // ── แกง ──
  { name: "แกงเขียวหวาน",   cat: "แกง",     cal: 250, protein: 15,  carbs: 20,  fat: 12,  per: "ต่อจาน (เนื้อ + ผัก + น้ำแกง)" },
  { name: "แกงเลียง",      cat: "แกง",     cal: 200, protein: 12,  carbs: 18,  fat: 8,   per: "ต่อจาน (ผัก + หมูสับ)" },
  { name: "แกงส้ม",        cat: "แกง",     cal: 260, protein: 18,  carbs: 22,  fat: 12,  per: "ต่อจาน (เนื้อ/ปลา + ผัก + น้ำแกง)" },
  { name: "แกงจืดเต้าหู้หมู", cat: "แกง",     cal: 280, protein: 16,  carbs: 30,  fat: 10,  per: "ต่อจาน" },
  { name: "แกงหน่อไม้",   cat: "แกง",     cal: 240, protein: 16,  carbs: 18,  fat: 12,  per: "ต่อจาน (เนื้อ/หมู + หน่อไม้)" },
  { name: "ข้าวซอยไก่",    cat: "เส้น",     cal: 480, protein: 20,  carbs: 55,  fat: 20,  per: "ค่าประมาณต่อชาม" },

  // ── ขนม ──
  { name: "ขนมจีนน้ำเงี้ยว", cat: "เส้น",     cal: 320, protein: 8,   carbs: 55,  fat: 8,   per: "ค่าประมาณต่อจาน" },
  { name: "ขนมจีนน้ำยา",    cat: "ขนม",     cal: 250, protein: 6,   carbs: 50,  fat: 4,   per: "ต่อจาน (น้ำยาซอสถั่วเหลือง)" },
  { name: "ข้าวเหนียวมะม่วง", cat: "ขนม",     cal: 350, protein: 4,   carbs: 65,  fat: 9,   per: "ค่าประมาณต่อหนึ่งชุด" },
  { name: "ข้าวเหนียวมอญ",    cat: "ขนม",     cal: 200, protein: 3,   carbs: 40,  fat: 5,   per: "ต่อจาน (ใส่ถั่ว)" },
  { name: "กล้วยบด",        cat: "ขนม",     cal: 150, protein: 2,   carbs: 35,  fat: 2,   per: "ต่อจาน" },

  // ── เครื่องปรุง ──
  { name: "น้ำพริกเผา",    cat: "เครื่องปรุง", cal: 80,  protein: 4,   carbs: 10,  fat: 5,   per: "ต่อจาน (ช้อนโต๊ะ 1)" },
  { name: "น้ำพริกปลาทู",  cat: "เครื่องปรุง", cal: 60,  protein: 8,   carbs: 2,   fat: 4,   per: "ต่อจาน" },
  { name: "น้ำส้มตำใส่ไข่", cat: "เครื่องปรุง", cal: 180, protein: 6,   carbs: 15,  fat: 10,  per: "ต่อจาน (ใส่ไข่ + เนื้อสัตว์)" },
];

/**
 * ค้นหาอาหารในฐานข้อมูล
 * @param {string} query — คำค้นหา (case-insensitive)
 * @param {number} limit — จำนวนผลลัพธ์สูงสุด (default 20)
 * @returns {Array} รายการอาหารที่ตรงกัน
 */
function searchFood(query, limit = 20) {
  const q = (query || '').toLowerCase().trim();
  if (!q) return [];

  const matches = FOOD_DB.filter(f => f.name.toLowerCase().includes(q));
  return matches.slice(0, limit);
}

/**
 * ค้นหาอาหารโดยประเภท
 * @param {string} category — หมวดอาหาร (เช่น "ข้าว", "ต้ม", "ผัด")
 * @returns {Array} รายการในหมวดนั้น
 */
function getFoodByCategory(category) {
  const q = (category || '').toLowerCase().trim();
  if (!q) return [];
  return FOOD_DB.filter(f => f.cat.toLowerCase() === q);
}

/**
 * แปลงชื่ออาหาร + ปริมาณเป็นค่าสารอาหาร
 * @param {Object} food — วัตถุอาหารจากฐาน (หรือ custom food)
 * @param {number} portion — ปริมาณเท่ากับกี่จาน (default 1)
 * @returns {Object} ค่าแคล + แมโครที่ปรับแล้ว
 */
function calculateNutrition(food, portion = 1) {
  if (!food) return { cal: 0, protein: 0, carbs: 0, fat: 0, per: '' };
  return {
    cal: +(food.cal * portion).toFixed(1),
    protein: +(food.protein * portion).toFixed(1),
    carbs: +(food.carbs * portion).toFixed(1),
    fat: +(food.fat * portion).toFixed(1),
    per: food.per + (portion > 1 ? ` ×${portion}จาน` : ''),
  };
}

// ──────────────────────────────────────────────
// Exports (สำหรับใช้ใน HTML <script> หรือ module)
// ──────────────────────────────────────────────
if (typeof window !== 'undefined') {
  window.FOOD_DB = FOOD_DB;
  window.searchFood = searchFood;
  window.getFoodByCategory = getFoodByCategory;
  window.calculateNutrition = calculateNutrition;
}
