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

  // ── เมนูจานเดียวที่พบบ่อย ──
  { name: "ข้าวกะเพราหมูสับ", cat: "ข้าวราด", cal: 500, protein: 22, carbs: 62, fat: 18, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราไก่", cat: "ข้าวราด", cal: 470, protein: 25, carbs: 60, fat: 14, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราเนื้อ", cat: "ข้าวราด", cal: 520, protein: 25, carbs: 60, fat: 20, per: "ค่าประมาณต่อจาน" },
  { name: "ไข่ดาว", cat: "ไข่", cal: 200, protein: 7, carbs: 1, fat: 18, per: "ค่าประมาณต่อฟอง (ทอดน้ำมัน)" },
  { name: "ไข่ต้ม", cat: "ไข่", cal: 75, protein: 6.5, carbs: 0.6, fat: 5, per: "ต่อฟอง" },
  { name: "ไข่ลวก", cat: "ไข่", cal: 70, protein: 6.3, carbs: 0.5, fat: 4.8, per: "ต่อฟอง" },
  { name: "ไข่เจียว", cat: "ไข่", cal: 250, protein: 9, carbs: 2, fat: 23, per: "ค่าประมาณต่อ 1 ฟอง" },
  { name: "ไข่คน", cat: "ไข่", cal: 180, protein: 11, carbs: 2, fat: 14, per: "ค่าประมาณต่อ 2 ฟอง" },
  { name: "ข้าวไข่เจียว", cat: "ข้าวราด", cal: 560, protein: 15, carbs: 65, fat: 26, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวไข่ข้น", cat: "ข้าวราด", cal: 520, protein: 17, carbs: 62, fat: 22, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวหมูกรอบ", cat: "ข้าวราด", cal: 620, protein: 23, carbs: 68, fat: 28, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวหมูแดง", cat: "ข้าวราด", cal: 540, protein: 24, carbs: 72, fat: 17, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวขาหมู", cat: "ข้าวราด", cal: 650, protein: 30, carbs: 70, fat: 27, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวหน้าเป็ด", cat: "ข้าวราด", cal: 600, protein: 27, carbs: 68, fat: 25, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวหมูกระเทียม", cat: "ข้าวราด", cal: 540, protein: 25, carbs: 65, fat: 20, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวไก่กระเทียม", cat: "ข้าวราด", cal: 500, protein: 28, carbs: 64, fat: 15, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวคะน้าหมูกรอบ", cat: "ข้าวราด", cal: 620, protein: 22, carbs: 65, fat: 30, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวผัดกุ้ง", cat: "ข้าวผัด", cal: 520, protein: 22, carbs: 70, fat: 17, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวผัดไก่", cat: "ข้าวผัด", cal: 500, protein: 23, carbs: 68, fat: 16, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวคลุกกะปิ", cat: "ข้าวราด", cal: 580, protein: 21, carbs: 78, fat: 20, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวยำไก่แซ่บ", cat: "ข้าวราด", cal: 560, protein: 28, carbs: 70, fat: 18, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวไก่ย่าง", cat: "ข้าวราด", cal: 480, protein: 32, carbs: 62, fat: 11, per: "ค่าประมาณต่อจาน" },

  // ── เส้นและอาหารเช้า ──
  { name: "ก๋วยเตี๋ยวเรือน้ำตกหมู", cat: "เส้น", cal: 360, protein: 20, carbs: 48, fat: 10, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวเนื้อน้ำตก", cat: "เส้น", cal: 380, protein: 23, carbs: 47, fat: 11, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวไก่", cat: "เส้น", cal: 350, protein: 23, carbs: 48, fat: 8, per: "ค่าประมาณต่อชาม" },
  { name: "บะหมี่หมูแดง", cat: "เส้น", cal: 420, protein: 22, carbs: 58, fat: 11, per: "ค่าประมาณต่อชาม" },
  { name: "บะหมี่เกี๊ยวหมูแดง", cat: "เส้น", cal: 480, protein: 25, carbs: 63, fat: 14, per: "ค่าประมาณต่อชาม" },
  { name: "เย็นตาโฟ", cat: "เส้น", cal: 390, protein: 18, carbs: 56, fat: 10, per: "ค่าประมาณต่อชาม" },
  { name: "สุกี้น้ำ", cat: "เส้น", cal: 340, protein: 25, carbs: 38, fat: 10, per: "ค่าประมาณต่อชาม" },
  { name: "สุกี้แห้ง", cat: "เส้น", cal: 430, protein: 27, carbs: 43, fat: 17, per: "ค่าประมาณต่อจาน" },
  { name: "ผัดซีอิ๊วหมู", cat: "เส้น", cal: 600, protein: 24, carbs: 78, fat: 22, per: "ค่าประมาณต่อจาน" },
  { name: "มาม่าต้มยำ", cat: "เส้น", cal: 370, protein: 8, carbs: 50, fat: 15, per: "ต่อ 1 ซอง ไม่รวมเครื่องเพิ่ม" },
  { name: "โจ๊กหมูใส่ไข่", cat: "อาหารเช้า", cal: 350, protein: 18, carbs: 48, fat: 10, per: "ค่าประมาณต่อชาม" },
  { name: "โจ๊กหมู", cat: "อาหารเช้า", cal: 280, protein: 13, carbs: 45, fat: 6, per: "ค่าประมาณต่อชาม" },
  { name: "ปาท่องโก๋", cat: "อาหารเช้า", cal: 135, protein: 3, carbs: 16, fat: 7, per: "ต่อ 1 คู่" },
  { name: "แซนด์วิชแฮมชีส", cat: "อาหารเช้า", cal: 330, protein: 16, carbs: 34, fat: 15, per: "ค่าประมาณต่อชิ้น" },
  { name: "ขนมปังโฮลวีต", cat: "อาหารเช้า", cal: 80, protein: 3.5, carbs: 14, fat: 1.2, per: "ต่อแผ่น" },
  { name: "ข้าวโอ๊ตต้ม", cat: "อาหารเช้า", cal: 150, protein: 5, carbs: 27, fat: 3, per: "ต่อ 1 ถ้วย" },

  // ── โปรตีนและกับข้าว ──
  { name: "อกไก่ย่าง", cat: "โปรตีน", cal: 165, protein: 31, carbs: 0, fat: 3.6, per: "ต่อ 100 กรัม" },
  { name: "อกไก่ต้ม", cat: "โปรตีน", cal: 160, protein: 30, carbs: 0, fat: 3.5, per: "ต่อ 100 กรัม" },
  { name: "สะโพกไก่ย่าง", cat: "โปรตีน", cal: 230, protein: 26, carbs: 0, fat: 14, per: "ต่อ 100 กรัม" },
  { name: "หมูย่าง", cat: "โปรตีน", cal: 260, protein: 26, carbs: 5, fat: 15, per: "ต่อ 100 กรัม" },
  { name: "คอหมูย่าง", cat: "โปรตีน", cal: 360, protein: 22, carbs: 4, fat: 29, per: "ต่อ 100 กรัม" },
  { name: "ปลานึ่ง", cat: "โปรตีน", cal: 140, protein: 27, carbs: 0, fat: 3, per: "ต่อ 100 กรัม" },
  { name: "ปลาแซลมอนย่าง", cat: "โปรตีน", cal: 210, protein: 22, carbs: 0, fat: 13, per: "ต่อ 100 กรัม" },
  { name: "ปลาทูทอด", cat: "โปรตีน", cal: 280, protein: 24, carbs: 0, fat: 20, per: "ค่าประมาณต่อ 1 ตัว" },
  { name: "กุ้งต้ม", cat: "โปรตีน", cal: 100, protein: 24, carbs: 0, fat: 0.5, per: "ต่อ 100 กรัม" },
  { name: "เต้าหู้ขาว", cat: "โปรตีน", cal: 90, protein: 10, carbs: 3, fat: 5, per: "ต่อ 100 กรัม" },
  { name: "ลาบหมู", cat: "กับข้าว", cal: 230, protein: 24, carbs: 10, fat: 11, per: "ค่าประมาณต่อจาน" },
  { name: "ลาบไก่", cat: "กับข้าว", cal: 200, protein: 26, carbs: 9, fat: 7, per: "ค่าประมาณต่อจาน" },
  { name: "น้ำตกหมู", cat: "กับข้าว", cal: 260, protein: 24, carbs: 9, fat: 15, per: "ค่าประมาณต่อจาน" },
  { name: "ไก่ย่าง", cat: "กับข้าว", cal: 280, protein: 35, carbs: 4, fat: 14, per: "ค่าประมาณต่อชิ้นใหญ่" },
  { name: "หมูทอด", cat: "กับข้าว", cal: 360, protein: 25, carbs: 10, fat: 25, per: "ต่อ 100 กรัม" },
  { name: "แกงพะแนงไก่", cat: "แกง", cal: 320, protein: 25, carbs: 12, fat: 20, per: "ค่าประมาณต่อถ้วย" },
  { name: "แกงเขียวหวานไก่", cat: "แกง", cal: 300, protein: 23, carbs: 15, fat: 17, per: "ค่าประมาณต่อถ้วย ไม่รวมข้าว" },
  { name: "มัสมั่นไก่", cat: "แกง", cal: 420, protein: 24, carbs: 30, fat: 24, per: "ค่าประมาณต่อถ้วย ไม่รวมข้าว" },
  { name: "แกงจืดเต้าหู้หมูสับ", cat: "แกง", cal: 180, protein: 18, carbs: 8, fat: 8, per: "ค่าประมาณต่อถ้วย" },

  // ── ผลไม้ เครื่องดื่ม และของว่าง ──
  { name: "กล้วยหอม", cat: "ผลไม้", cal: 105, protein: 1.3, carbs: 27, fat: 0.4, per: "ต่อผลกลาง" },
  { name: "แอปเปิล", cat: "ผลไม้", cal: 95, protein: 0.5, carbs: 25, fat: 0.3, per: "ต่อผลกลาง" },
  { name: "ส้ม", cat: "ผลไม้", cal: 60, protein: 1.2, carbs: 15, fat: 0.2, per: "ต่อผลกลาง" },
  { name: "ฝรั่ง", cat: "ผลไม้", cal: 120, protein: 4, carbs: 25, fat: 1.5, per: "ต่อผลกลาง" },
  { name: "แตงโม", cat: "ผลไม้", cal: 90, protein: 2, carbs: 23, fat: 0.5, per: "ต่อ 300 กรัม" },
  { name: "มะม่วงสุก", cat: "ผลไม้", cal: 130, protein: 1.4, carbs: 35, fat: 0.6, per: "ต่อ 200 กรัม" },
  { name: "สับปะรด", cat: "ผลไม้", cal: 100, protein: 1, carbs: 26, fat: 0.2, per: "ต่อ 200 กรัม" },
  { name: "มะละกอ", cat: "ผลไม้", cal: 85, protein: 1, carbs: 22, fat: 0.5, per: "ต่อ 200 กรัม" },
  { name: "นมจืด", cat: "เครื่องดื่ม", cal: 130, protein: 8, carbs: 12, fat: 5, per: "ต่อ 250 มล." },
  { name: "นมไขมันต่ำ", cat: "เครื่องดื่ม", cal: 105, protein: 8, carbs: 12, fat: 2.5, per: "ต่อ 250 มล." },
  { name: "นมถั่วเหลืองไม่หวาน", cat: "เครื่องดื่ม", cal: 90, protein: 7, carbs: 5, fat: 4, per: "ต่อ 250 มล." },
  { name: "เวย์โปรตีน", cat: "เครื่องดื่ม", cal: 130, protein: 24, carbs: 4, fat: 2, per: "ต่อ 1 สกู๊ป" },
  { name: "กาแฟดำ", cat: "เครื่องดื่ม", cal: 5, protein: 0, carbs: 1, fat: 0, per: "ต่อแก้ว ไม่เติมน้ำตาล" },
  { name: "อเมริกาโน่เย็นไม่หวาน", cat: "เครื่องดื่ม", cal: 10, protein: 0, carbs: 2, fat: 0, per: "ต่อแก้ว" },
  { name: "ลาเต้เย็น", cat: "เครื่องดื่ม", cal: 220, protein: 7, carbs: 32, fat: 7, per: "ค่าประมาณต่อแก้ว" },
  { name: "ชาไทยเย็น", cat: "เครื่องดื่ม", cal: 320, protein: 5, carbs: 52, fat: 10, per: "ค่าประมาณต่อแก้ว" },
  { name: "ชาเขียวนม", cat: "เครื่องดื่ม", cal: 300, protein: 5, carbs: 50, fat: 9, per: "ค่าประมาณต่อแก้ว" },
  { name: "น้ำอัดลม", cat: "เครื่องดื่ม", cal: 140, protein: 0, carbs: 35, fat: 0, per: "ต่อกระป๋อง 325 มล." },
  { name: "โยเกิร์ตรสธรรมชาติ", cat: "ของว่าง", cal: 120, protein: 7, carbs: 15, fat: 4, per: "ต่อถ้วย" },
  { name: "กรีกโยเกิร์ต", cat: "ของว่าง", cal: 130, protein: 15, carbs: 8, fat: 4, per: "ต่อถ้วย" },
  { name: "อัลมอนด์", cat: "ของว่าง", cal: 170, protein: 6, carbs: 6, fat: 15, per: "ต่อ 30 กรัม" },
  { name: "ถั่วลิสง", cat: "ของว่าง", cal: 170, protein: 7, carbs: 6, fat: 14, per: "ต่อ 30 กรัม" },
  { name: "มันหวานนึ่ง", cat: "ของว่าง", cal: 180, protein: 3, carbs: 42, fat: 0.3, per: "ต่อ 200 กรัม" },
  { name: "ข้าวโพดต้ม", cat: "ของว่าง", cal: 150, protein: 5, carbs: 32, fat: 2, per: "ต่อ 1 ฝักกลาง" },
  { name: "โปรตีนบาร์", cat: "ของว่าง", cal: 210, protein: 20, carbs: 22, fat: 7, per: "ค่าประมาณต่อแท่ง" },
  { name: "ขนมครก", cat: "ขนม", cal: 220, protein: 4, carbs: 30, fat: 10, per: "ค่าประมาณต่อ 1 คู่" },
  { name: "ลอดช่องน้ำกะทิ", cat: "ขนม", cal: 300, protein: 3, carbs: 48, fat: 11, per: "ค่าประมาณต่อถ้วย" },
  { name: "บัวลอยไข่หวาน", cat: "ขนม", cal: 420, protein: 8, carbs: 62, fat: 16, per: "ค่าประมาณต่อถ้วย" },
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
