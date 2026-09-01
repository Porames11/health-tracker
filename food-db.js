/**
 * food-db.js — ฐานข้อมูลอาหารไทยสำหรับแอปตัวติดตามสุขภาพ
 * ใช้โดย app.js เพื่อค้นหาอาหารและคำนวณค่าสารอาหาร
 */

const FOOD_DB = [
  // ══════════════════════════════════════════════
  // 🍚 ข้าว / ข้าวกล้อง / ธัญพืช (Grains & Rice)
  // ══════════════════════════════════════════════
  { name: "ข้าวสวย", cat: "ข้าว", cal: 230, protein: 4.3, carbs: 50, fat: 0.3, per: "ต่อจาน (1 ทัพพีครึ่ง ~ 150g)" },
  { name: "ข้าวกล้อง", cat: "ข้าว", cal: 215, protein: 5.0, carbs: 46, fat: 1.6, per: "ต่อจาน (1 ทัพพีครึ่ง ~ 150g)" },
  { name: "ข้าวไรซ์เบอร์รี่", cat: "ข้าว", cal: 210, protein: 5.2, carbs: 45, fat: 1.5, per: "ต่อจาน (150g)" },
  { name: "ข้าวเหนียว", cat: "ข้าว", cal: 230, protein: 3.5, carbs: 52, fat: 0.2, per: "ต่อ 1 ห่อเล็ก (100g)" },
  { name: "ข้าวเหนียวดำ", cat: "ข้าว", cal: 220, protein: 4.5, carbs: 48, fat: 1.2, per: "ต่อ 1 ห่อเล็ก (100g)" },
  { name: "ข้าวหอมมะลิ", cat: "ข้าว", cal: 230, protein: 4.1, carbs: 50, fat: 0.3, per: "ต่อจาน (150g)" },
  { name: "ข้าวต้มขาว", cat: "ข้าวต้ม", cal: 120, protein: 2.5, carbs: 26, fat: 0.2, per: "ต่อ 1 ถ้วย" },
  { name: "ควินัวสุก", cat: "ข้าว", cal: 220, protein: 8.0, carbs: 39, fat: 3.5, per: "ต่อ 1 ถ้วย (185g)" },

  // ══════════════════════════════════════════════
  // 🍛 ผัดผงกะหรี่ / ผัดพริกเผา / ผัดฉ่า / อาหารตามสั่งราดข้าว (Stir-fry with Rice)
  // ══════════════════════════════════════════════
  { name: "ข้าวราดปูผัดผงกะหรี่", cat: "ข้าวราด", cal: 580, protein: 26, carbs: 64, fat: 24, per: "ต่อจาน (รวมไข่+นม)" },
  { name: "ข้าวราดกุ้งผัดผงกะหรี่", cat: "ข้าวราด", cal: 560, protein: 28, carbs: 64, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวราดปลาหมึกผัดผงกะหรี่", cat: "ข้าวราด", cal: 550, protein: 27, carbs: 64, fat: 21, per: "ต่อจาน" },
  { name: "ข้าวราดไก่ผัดผงกะหรี่", cat: "ข้าวราด", cal: 540, protein: 29, carbs: 63, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวราดทะเลผัดผงกะหรี่", cat: "ข้าวราด", cal: 570, protein: 28, carbs: 64, fat: 23, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกเผาหมูกรอบ", cat: "ข้าวราด", cal: 680, protein: 20, carbs: 68, fat: 36, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกเผาหมูชิ้น", cat: "ข้าวราด", cal: 540, protein: 24, carbs: 66, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกเผาไก่", cat: "ข้าวราด", cal: 510, protein: 27, carbs: 65, fat: 16, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกเผาทะเล", cat: "ข้าวราด", cal: 520, protein: 25, carbs: 66, fat: 17, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกเผาหอยลาย", cat: "ข้าวราด", cal: 490, protein: 21, carbs: 66, fat: 15, per: "ต่อจาน" },
  { name: "ข้าวราดผัดฉ่าทะเล", cat: "ข้าวราด", cal: 460, protein: 26, carbs: 60, fat: 12, per: "ต่อจาน" },
  { name: "ข้าวราดผัดฉ่าปลากะพง", cat: "ข้าวราด", cal: 470, protein: 28, carbs: 60, fat: 13, per: "ต่อจาน" },
  { name: "ข้าวราดผัดฉ่าปลาดุกกรอบ", cat: "ข้าวราด", cal: 620, protein: 22, carbs: 62, fat: 31, per: "ต่อจาน" },
  { name: "ข้าวราดผัดขี้เมาหมูสับ", cat: "ข้าวราด", cal: 510, protein: 23, carbs: 60, fat: 19, per: "ต่อจาน" },
  { name: "ข้าวราดผัดขี้เมาทะเล", cat: "ข้าวราด", cal: 480, protein: 25, carbs: 60, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกหยวกหมู", cat: "ข้าวราด", cal: 490, protein: 24, carbs: 62, fat: 16, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกหยวกไก่", cat: "ข้าวราด", cal: 460, protein: 27, carbs: 61, fat: 12, per: "ต่อจาน" },
  { name: "ข้าวราดผัดขิงหมูสับ", cat: "ข้าวราด", cal: 480, protein: 23, carbs: 62, fat: 15, per: "ต่อจาน" },
  { name: "ข้าวราดผัดขิงไก่", cat: "ข้าวราด", cal: 450, protein: 28, carbs: 60, fat: 11, per: "ต่อจาน" },
  { name: "ข้าวราดผัดขึ้นฉ่ายปลากะพง", cat: "ข้าวราด", cal: 440, protein: 27, carbs: 60, fat: 10, per: "ต่อจาน" },
  { name: "ข้าวราดผัดเปรี้ยวหวานหมู", cat: "ข้าวราด", cal: 530, protein: 20, carbs: 72, fat: 18, per: "ต่อจาน" },
  { name: "ข้าวราดผัดเปรี้ยวหวานไก่", cat: "ข้าวราด", cal: 500, protein: 24, carbs: 70, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวราดผัดเต้าหู้หมูสับ", cat: "ข้าวราด", cal: 460, protein: 22, carbs: 62, fat: 13, per: "ต่อจาน" },
  { name: "ข้าวราดผัดกะหล่ำปลีน้ำปลาหมูกรอบ", cat: "ข้าวราด", cal: 590, protein: 18, carbs: 62, fat: 30, per: "ต่อจาน" },
  { name: "ข้าวราดผัดแขนงหมูกรอบ", cat: "ข้าวราด", cal: 610, protein: 19, carbs: 62, fat: 32, per: "ต่อจาน" },
  { name: "ข้าวราดผัดผักบุ้งหมูกรอบ", cat: "ข้าวราด", cal: 600, protein: 18, carbs: 60, fat: 32, per: "ต่อจาน" },
  { name: "ข้าวราดผัดคะน้าหมูกรอบ", cat: "ข้าวราด", cal: 620, protein: 22, carbs: 65, fat: 30, per: "ต่อจาน" },
  { name: "ข้าวราดผัดคะน้าหมูชิ้น", cat: "ข้าวราด", cal: 480, protein: 24, carbs: 64, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกแกงหมูกรอบ", cat: "ข้าวราด", cal: 640, protein: 21, carbs: 64, fat: 33, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกแกงหมูใส่ถั่ว", cat: "ข้าวราด", cal: 520, protein: 24, carbs: 64, fat: 18, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกแกงไก่", cat: "ข้าวราด", cal: 490, protein: 26, carbs: 63, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวราดผัดพริกแกงปลาดุกกรอบ", cat: "ข้าวราด", cal: 630, protein: 22, carbs: 65, fat: 32, per: "ต่อจาน" },
  { name: "ข้าวราดคั่วกลิ้งหมูสับ", cat: "ข้าวราด", cal: 480, protein: 28, carbs: 60, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวราดคั่วกลิ้งไก่", cat: "ข้าวราด", cal: 440, protein: 32, carbs: 59, fat: 9, per: "ต่อจาน" },

  // ══════════════════════════════════════════════
  // 🍛 กะเพรา / ข้าวทอดกระเทียม / ข้าวคั่วพริกเกลือ / จานเดียว
  // ══════════════════════════════════════════════
  { name: "ข้าวกะเพราหมูสับ", cat: "ข้าวราด", cal: 500, protein: 22, carbs: 62, fat: 18, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราหมูสับไข่ดาว", cat: "ข้าวราด", cal: 680, protein: 29, carbs: 63, fat: 34, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราไก่", cat: "ข้าวราด", cal: 470, protein: 26, carbs: 60, fat: 14, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราไก่ไข่ดาว", cat: "ข้าวราด", cal: 650, protein: 33, carbs: 61, fat: 30, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราอกไก่คลีน", cat: "ข้าวราด", cal: 380, protein: 35, carbs: 50, fat: 4, per: "ค่าประมาณต่อจาน (ใช้น้ำมันน้อย)" },
  { name: "ข้าวกะเพราเนื้อ", cat: "ข้าวราด", cal: 530, protein: 27, carbs: 60, fat: 20, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราหมูกรอบ", cat: "ข้าวราด", cal: 680, protein: 20, carbs: 65, fat: 38, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราทะเล", cat: "ข้าวราด", cal: 460, protein: 24, carbs: 62, fat: 12, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราปลาหมึก", cat: "ข้าวราด", cal: 470, protein: 25, carbs: 62, fat: 13, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพรากุ้ง", cat: "ข้าวราด", cal: 460, protein: 26, carbs: 61, fat: 12, per: "ต่อจาน" },
  { name: "ข้าวกะเพราไข่เยี่ยวม้ากะเพรากรอบ", cat: "ข้าวราด", cal: 620, protein: 20, carbs: 64, fat: 31, per: "ต่อจาน" },
  { name: "ข้าวกะเพราเต้าหู้ไข่หมูสับ", cat: "ข้าวราด", cal: 520, protein: 21, carbs: 62, fat: 20, per: "ค่าประมาณต่อจาน" },
  { name: "ข้าวกะเพราหมูตุ๋น", cat: "ข้าวราด", cal: 540, protein: 27, carbs: 62, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวกะเพราเนื้อตุ๋น", cat: "ข้าวราด", cal: 560, protein: 29, carbs: 62, fat: 21, per: "ต่อจาน" },
  { name: "ข้าวกะเพราตับหมู", cat: "ข้าวราด", cal: 490, protein: 32, carbs: 60, fat: 13, per: "ต่อจาน" },
  { name: "ข้าวกะเพราเบคอน", cat: "ข้าวราด", cal: 620, protein: 18, carbs: 62, fat: 34, per: "ต่อจาน" },
  { name: "ข้าวกะเพราแหนม", cat: "ข้าวราด", cal: 530, protein: 20, carbs: 62, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวหมูกระเทียม", cat: "ข้าวราด", cal: 550, protein: 25, carbs: 65, fat: 21, per: "ต่อจาน" },
  { name: "ข้าวไก่กระเทียม", cat: "ข้าวราด", cal: 500, protein: 28, carbs: 64, fat: 15, per: "ต่อจาน" },
  { name: "ข้าวกุ้งกระเทียม", cat: "ข้าวราด", cal: 480, protein: 27, carbs: 63, fat: 13, per: "ต่อจาน" },
  { name: "ข้าวปลาหมึกกระเทียม", cat: "ข้าวราด", cal: 490, protein: 26, carbs: 64, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวเนื้อทอดกระเทียม", cat: "ข้าวราด", cal: 570, protein: 29, carbs: 64, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวหมูกรอบคั่วพริกเกลือ", cat: "ข้าวราด", cal: 650, protein: 21, carbs: 64, fat: 34, per: "ต่อจาน" },
  { name: "ข้าวไก่คั่วพริกเกลือ", cat: "ข้าวราด", cal: 510, protein: 28, carbs: 63, fat: 16, per: "ต่อจาน" },
  { name: "ข้าวกุ้งคั่วพริกเกลือ", cat: "ข้าวราด", cal: 470, protein: 26, carbs: 62, fat: 12, per: "ต่อจาน" },
  { name: "ข้าวเต้าหู้คั่วพริกเกลือ", cat: "ข้าวราด", cal: 420, protein: 16, carbs: 62, fat: 11, per: "ต่อจาน" },
  { name: "ข้าวมันไก่ต้ม", cat: "ข้าวราด", cal: 540, protein: 28, carbs: 62, fat: 19, per: "ต่อจาน (เนื้ออก+สะโพก)" },
  { name: "ข้าวมันไก่ไม่เอาหนัง", cat: "ข้าวราด", cal: 470, protein: 30, carbs: 62, fat: 10, per: "ต่อจาน (เนื้ออกล้วน)" },
  { name: "ข้าวมันไก่ทอด", cat: "ข้าวราด", cal: 660, protein: 24, carbs: 68, fat: 32, per: "ต่อจาน" },
  { name: "ข้าวมันไก่ผสม (ต้ม+ทอด)", cat: "ข้าวราด", cal: 600, protein: 26, carbs: 65, fat: 25, per: "ต่อจาน" },
  { name: "ข้าวหมกไก่", cat: "ข้าวราด", cal: 540, protein: 26, carbs: 68, fat: 18, per: "ต่อจาน" },
  { name: "ข้าวหมกเนื้อ", cat: "ข้าวราด", cal: 590, protein: 28, carbs: 68, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวหมูแดง", cat: "ข้าวราด", cal: 540, protein: 24, carbs: 72, fat: 17, per: "ต่อจาน (รวมกุนเชียง+น้ำราด)" },
  { name: "ข้าวหมูกรอบ", cat: "ข้าวราด", cal: 650, protein: 21, carbs: 72, fat: 30, per: "ต่อจาน" },
  { name: "ข้าวหมูแดงหมูกรอบ", cat: "ข้าวราด", cal: 620, protein: 23, carbs: 72, fat: 25, per: "ต่อจาน" },
  { name: "ข้าวขาหมู", cat: "ข้าวราด", cal: 650, protein: 30, carbs: 70, fat: 27, per: "ต่อจาน (รวมหนัง)" },
  { name: "ข้าวขาหมูเนื้อล้วนไม่หนัง", cat: "ข้าวราด", cal: 490, protein: 34, carbs: 68, fat: 9, per: "ต่อจาน (ไม่ใส่หนัง)" },
  { name: "ข้าวหน้าเป็ด", cat: "ข้าวราด", cal: 600, protein: 27, carbs: 68, fat: 25, per: "ต่อจาน" },
  { name: "ข้าวหมูอบยอดผัก", cat: "ข้าวราด", cal: 510, protein: 28, carbs: 68, fat: 13, per: "ต่อจาน" },
  { name: "ข้าวไก่อบ", cat: "ข้าวราด", cal: 480, protein: 30, carbs: 66, fat: 11, per: "ต่อจาน" },
  { name: "ข้าวซี่โครงหมูอบ", cat: "ข้าวราด", cal: 580, protein: 26, carbs: 68, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวหมูทอดน้ำปลา", cat: "ข้าวราด", cal: 580, protein: 25, carbs: 65, fat: 24, per: "ต่อจาน" },
  { name: "ข้าวสามชั้นทอดน้ำปลา", cat: "ข้าวราด", cal: 690, protein: 20, carbs: 65, fat: 39, per: "ต่อจาน" },
  { name: "ข้าวหมูหวาน", cat: "ข้าวราด", cal: 560, protein: 22, carbs: 74, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวหน้าหมูย่างจิ้มแจ่ว", cat: "ข้าวราด", cal: 500, protein: 28, carbs: 62, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวคอหมูย่างจิ้มแจ่ว", cat: "ข้าวราด", cal: 590, protein: 24, carbs: 62, fat: 27, per: "ต่อจาน" },
  { name: "ข้าวเสือร้องไห้จิ้มแจ่ว", cat: "ข้าวราด", cal: 560, protein: 30, carbs: 62, fat: 21, per: "ต่อจาน" },
  { name: "ข้าวไก่ย่างจิ้มแจ่ว", cat: "ข้าวราด", cal: 480, protein: 32, carbs: 62, fat: 11, per: "ต่อจาน" },
  { name: "ข้าวยำไก่แซ่บ", cat: "ข้าวราด", cal: 560, protein: 28, carbs: 70, fat: 18, per: "ต่อจาน" },
  { name: "ข้าวคลุกกะปิ", cat: "ข้าวราด", cal: 580, protein: 21, carbs: 78, fat: 20, per: "ต่อจาน (รวมหมูหวาน+กุ้งแห้ง)" },
  { name: "ข้าวไข่ข้นกุ้ง", cat: "ข้าวราด", cal: 530, protein: 24, carbs: 62, fat: 21, per: "ต่อจาน" },
  { name: "ข้าวไข่ข้นปูอัด", cat: "ข้าวราด", cal: 490, protein: 18, carbs: 64, fat: 18, per: "ต่อจาน" },
  { name: "ข้าวไข่ข้นแฮมชีส", cat: "ข้าวราด", cal: 560, protein: 22, carbs: 63, fat: 24, per: "ต่อจาน" },
  { name: "ข้าวไข่เจียวหมูสับ", cat: "ข้าวราด", cal: 620, protein: 20, carbs: 65, fat: 31, per: "ต่อจาน" },
  { name: "ข้าวไข่เจียวกุ้งสับ", cat: "ข้าวราด", cal: 590, protein: 22, carbs: 65, fat: 27, per: "ต่อจาน" },
  { name: "ข้าวไข่เจียวชะอม", cat: "ข้าวราด", cal: 570, protein: 16, carbs: 66, fat: 27, per: "ต่อจาน" },

  // ══════════════════════════════════════════════
  // 🍳 ข้าวผัดทุกชนิด (Fried Rice)
  // ══════════════════════════════════════════════
  { name: "ข้าวผัดหมู", cat: "ข้าวผัด", cal: 540, protein: 20, carbs: 70, fat: 19, per: "ต่อจาน" },
  { name: "ข้าวผัดไก่", cat: "ข้าวผัด", cal: 510, protein: 23, carbs: 68, fat: 16, per: "ต่อจาน" },
  { name: "ข้าวผัดกุ้ง", cat: "ข้าวผัด", cal: 520, protein: 22, carbs: 70, fat: 17, per: "ต่อจาน" },
  { name: "ข้าวผัดปู", cat: "ข้าวผัด", cal: 490, protein: 21, carbs: 68, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวผัดรวมมิตร", cat: "ข้าวผัด", cal: 560, protein: 23, carbs: 70, fat: 21, per: "ต่อจาน" },
  { name: "ข้าวผัดแหนม", cat: "ข้าวผัด", cal: 560, protein: 19, carbs: 70, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวผัดปลาสลิด", cat: "ข้าวผัด", cal: 550, protein: 22, carbs: 68, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวผัดกุนเชียง", cat: "ข้าวผัด", cal: 580, protein: 17, carbs: 75, fat: 23, per: "ต่อจาน" },
  { name: "ข้าวผัดเบคอน", cat: "ข้าวผัด", cal: 590, protein: 18, carbs: 68, fat: 27, per: "ต่อจาน" },
  { name: "ข้าวผัดปลาหมึก", cat: "ข้าวผัด", cal: 510, protein: 22, carbs: 69, fat: 16, per: "ต่อจาน" },
  { name: "ข้าวผัดโบราณ (ซีอิ๊วดำ)", cat: "ข้าวผัด", cal: 530, protein: 19, carbs: 72, fat: 18, per: "ต่อจาน (หมูชิ้น+คะน้า+มะเขือเทศ)" },
  { name: "ข้าวผัดต้มยำทะเล", cat: "ข้าวผัด", cal: 530, protein: 24, carbs: 70, fat: 16, per: "ต่อจาน" },
  { name: "ข้าวผัดน้ำพริกเผาหมู", cat: "ข้าวผัด", cal: 560, protein: 22, carbs: 72, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวผัดน้ำพริกกะปิปลาทูชะอม", cat: "ข้าวผัด", cal: 540, protein: 24, carbs: 68, fat: 19, per: "ต่อจาน" },
  { name: "ข้าวผัดน้ำพริกลงเรือ", cat: "ข้าวผัด", cal: 570, protein: 21, carbs: 72, fat: 22, per: "ต่อจาน" },
  { name: "ข้าวผัดน้ำพริกตาแดง", cat: "ข้าวผัด", cal: 500, protein: 18, carbs: 70, fat: 15, per: "ต่อจาน" },
  { name: "ข้าวผัดเขียวหวานไก่", cat: "ข้าวผัด", cal: 540, protein: 23, carbs: 68, fat: 19, per: "ต่อจาน" },
  { name: "ข้าวผัดไข่เค็ม", cat: "ข้าวผัด", cal: 520, protein: 16, carbs: 68, fat: 20, per: "ต่อจาน" },
  { name: "ข้าวผัดอเมริกัน", cat: "ข้าวผัด", cal: 720, protein: 28, carbs: 85, fat: 29, per: "ต่อจาน (ไก่ทอด+ไส้กรอก+ไข่ดาว)" },
  { name: "ข้าวผัดกิมจิ", cat: "ข้าวผัด", cal: 470, protein: 16, carbs: 68, fat: 14, per: "ต่อจาน" },
  { name: "ข้าวผัดกระเทียม", cat: "ข้าวผัด", cal: 320, protein: 6, carbs: 54, fat: 8, per: "ต่อ 1 ถ้วยเล็ก" },

  // ══════════════════════════════════════════════
  // 🥘 กับข้าวไทย / ซีฟู้ด / ร้านอาหาร (Side Dishes & Seafood)
  // ══════════════════════════════════════════════
  { name: "ปูผัดผงกะหรี่", cat: "กับข้าว", cal: 380, protein: 28, carbs: 14, fat: 24, per: "ค่าประมาณต่อจานกลาง (รวมเนื้อปู+ไข่)" },
  { name: "กุ้งผัดผงกะหรี่", cat: "กับข้าว", cal: 350, protein: 26, carbs: 12, fat: 22, per: "ค่าประมาณต่อจานกลาง" },
  { name: "ปลาหมึกผัดผงกะหรี่", cat: "กับข้าว", cal: 340, protein: 25, carbs: 12, fat: 21, per: "ค่าประมาณต่อจานกลาง" },
  { name: "ไก่ผัดผงกะหรี่", cat: "กับข้าว", cal: 330, protein: 29, carbs: 10, fat: 19, per: "ค่าประมาณต่อจานกลาง" },
  { name: "ทะเลผัดผงกะหรี่", cat: "กับข้าว", cal: 360, protein: 27, carbs: 13, fat: 22, per: "ค่าประมาณต่อจานกลาง" },
  { name: "หอยลายผัดพริกเผา", cat: "กับข้าว", cal: 260, protein: 16, carbs: 16, fat: 14, per: "ค่าประมาณต่อจาน" },
  { name: "ผัดฉ่าทะเล", cat: "กับข้าว", cal: 240, protein: 26, carbs: 10, fat: 10, per: "ค่าประมาณต่อจาน" },
  { name: "ผัดฉ่าปลากะพง", cat: "กับข้าว", cal: 260, protein: 28, carbs: 8, fat: 12, per: "ค่าประมาณต่อจาน" },
  { name: "ผัดฉ่าปลาดุกกรอบ", cat: "กับข้าว", cal: 390, protein: 20, carbs: 12, fat: 29, per: "ค่าประมาณต่อจาน" },
  { name: "กุ้งอบวุ้นเส้น", cat: "กับข้าว", cal: 360, protein: 22, carbs: 46, fat: 9, per: "ค่าประมาณต่อ 1 หม้อดิน" },
  { name: "ปูอบวุ้นเส้น", cat: "กับข้าว", cal: 380, protein: 24, carbs: 46, fat: 10, per: "ค่าประมาณต่อ 1 หม้อดิน" },
  { name: "กุ้งทอดซอสมะขาม", cat: "กับข้าว", cal: 420, protein: 22, carbs: 32, fat: 22, per: "ค่าประมาณต่อจาน (กุ้งชุบแป้งทอด)" },
  { name: "ปลากะพงทอดน้ำปลา", cat: "กับข้าว", cal: 450, protein: 38, carbs: 8, fat: 29, per: "ค่าประมาณต่อจาน (แบ่งทาน)" },
  { name: "ปลากะพงนึ่งมะนาว", cat: "กับข้าว", cal: 200, protein: 38, carbs: 6, fat: 2, per: "ค่าประมาณต่อตัวกลาง" },
  { name: "ปลากะพงนึ่งซีอิ๊ว", cat: "กับข้าว", cal: 240, protein: 38, carbs: 8, fat: 6, per: "ค่าประมาณต่อตัวกลาง" },
  { name: "ปลาช่อนลุยสวน", cat: "กับข้าว", cal: 480, protein: 36, carbs: 24, fat: 26, per: "ค่าประมาณต่อจาน" },
  { name: "ปลาทับทิมเผาเกลือ", cat: "กับข้าว", cal: 260, protein: 48, carbs: 0, fat: 7, per: "ค่าประมาณต่อ 1 ตัว (ไม่รวมน้ำจิ้ม)" },
  { name: "หอยแครงลวก", cat: "กับข้าว", cal: 90, protein: 16, carbs: 2, fat: 1.5, per: "ต่อ 1 จาน (~200g)" },
  { name: "หอยแมลงภู่อบโหระพา", cat: "กับข้าว", cal: 130, protein: 20, carbs: 4, fat: 3.5, per: "ต่อ 1 หม้อ (~300g)" },
  { name: "หอยนางรมสดทรงเครื่อง", cat: "กับข้าว", cal: 160, protein: 14, carbs: 12, fat: 6, per: "ต่อ 1 ชุด (หอย 6-8 ตัว)" },
  { name: "ออส่วนหอยนางรม (นิ่ม)", cat: "กับข้าว", cal: 420, protein: 18, carbs: 32, fat: 24, per: "ต่อ 1 จานร้อน" },
  { name: "หอยทอดแป้งกรอบ", cat: "กับข้าว", cal: 580, protein: 16, carbs: 48, fat: 36, per: "ต่อ 1 จาน" },
  { name: "ทอดมันกุ้ง (4 ชิ้น)", cat: "กับข้าว", cal: 360, protein: 18, carbs: 20, fat: 22, per: "ต่อ 4 ชิ้น" },
  { name: "ทอดมันปลากราย (5 ชิ้น)", cat: "กับข้าว", cal: 280, protein: 22, carbs: 8, fat: 17, per: "ต่อ 5 ชิ้น" },
  { name: "หอยจ๊อปู (5 ลูก)", cat: "กับข้าว", cal: 320, protein: 16, carbs: 18, fat: 20, per: "ต่อ 5 ลูก" },
  { name: "แฮ่กึ๊นทอด", cat: "กับข้าว", cal: 340, protein: 18, carbs: 16, fat: 22, per: "ต่อ 1 จาน" },
  { name: "ปีกไก่ทอดน้ำปลา (4 ชิ้น)", cat: "กับข้าว", cal: 340, protein: 26, carbs: 4, fat: 24, per: "ต่อ 4 ชิ้นกลาง" },
  { name: "เอ็นข้อไก่ทอด", cat: "กับข้าว", cal: 320, protein: 16, carbs: 14, fat: 22, per: "ต่อ 1 จาน" },
  { name: "ไก่ผัดเม็ดมะม่วงหิมพานต์", cat: "กับข้าว", cal: 380, protein: 24, carbs: 22, fat: 21, per: "ต่อ 1 จาน" },
  { name: "ซี่โครงหมูทอดกระเทียม", cat: "กับข้าว", cal: 420, protein: 24, carbs: 8, fat: 32, per: "ต่อ 1 จาน" },
  { name: "หมูกรอบทอดน้ำปลา", cat: "กับข้าว", cal: 520, protein: 22, carbs: 4, fat: 46, per: "ต่อ 100 กรัม" },
  { name: "หมูหวาน", cat: "กับข้าว", cal: 340, protein: 18, carbs: 28, fat: 17, per: "ต่อ 1 ถ้วยเล็ก" },
  { name: "หมูฮ้อง (หมูต้มซีอิ๊วภูเก็ต)", cat: "กับข้าว", cal: 480, protein: 24, carbs: 16, fat: 36, per: "ต่อ 1 ถ้วย" },
  { name: "ใบเหลียงผัดไข่", cat: "กับข้าว", cal: 240, protein: 9, carbs: 12, fat: 17, per: "ต่อ 1 จาน" },
  { name: "ผัดสะตอกุ้งสดหมูสับ", cat: "กับข้าว", cal: 290, protein: 24, carbs: 12, fat: 16, per: "ต่อ 1 จาน" },
  { name: "คั่วกลิ้งหมูสับ (กับข้าว)", cat: "กับข้าว", cal: 260, protein: 28, carbs: 6, fat: 14, per: "ต่อ 1 จาน" },
  { name: "คั่วกลิ้งไก่ (กับข้าว)", cat: "กับข้าว", cal: 210, protein: 32, carbs: 5, fat: 7, per: "ต่อ 1 จาน" },

  // ══════════════════════════════════════════════
  // 🥦 ผัดผัก / กับข้าวเพื่อสุขภาพ (Stir-fried Veggies)
  // ══════════════════════════════════════════════
  { name: "ผัดผักบุ้งไฟแดง", cat: "ผัด", cal: 180, protein: 4, carbs: 10, fat: 14, per: "ต่อจาน" },
  { name: "ผัดกะหล่ำปลีน้ำปลา", cat: "ผัด", cal: 160, protein: 3, carbs: 11, fat: 12, per: "ต่อจาน" },
  { name: "ผัดแขนงหมูกรอบ", cat: "ผัด", cal: 380, protein: 12, carbs: 14, fat: 31, per: "ต่อจาน" },
  { name: "ผัดคะน้าน้ำมันหอย", cat: "ผัด", cal: 160, protein: 4, carbs: 12, fat: 11, per: "ต่อจาน" },
  { name: "ผัดยอดฟักแม้วน้ำมันหอย", cat: "ผัด", cal: 150, protein: 3, carbs: 12, fat: 10, per: "ต่อจาน" },
  { name: "ผัดผักรวมมิตรกุ้ง", cat: "ผัด", cal: 210, protein: 16, carbs: 14, fat: 10, per: "ต่อจาน" },
  { name: "ผัดบล็อกโคลี่กุ้งสด", cat: "ผัด", cal: 200, protein: 18, carbs: 12, fat: 9, per: "ต่อจาน" },
  { name: "ผัดดอกกะหล่ำหมูสับ", cat: "ผัด", cal: 230, protein: 15, carbs: 14, fat: 13, per: "ต่อจาน" },
  { name: "ผัดผักกระเฉดหมูกรอบ", cat: "ผัด", cal: 390, protein: 12, carbs: 12, fat: 33, per: "ต่อจาน" },
  { name: "ผัดถั่วลันเตากุ้งสด", cat: "ผัด", cal: 190, protein: 15, carbs: 15, fat: 7, per: "ต่อจาน" },
  { name: "ผัดถั่วแขกหมูสับ", cat: "ผัด", cal: 240, protein: 14, carbs: 12, fat: 15, per: "ต่อจาน" },
  { name: "ผัดฟักทองใส่ไข่", cat: "ผัด", cal: 220, protein: 7, carbs: 24, fat: 11, per: "ต่อจาน" },
  { name: "ผัดบวบใส่ไข่", cat: "ผัด", cal: 170, protein: 7, carbs: 12, fat: 10, per: "ต่อจาน" },
  { name: "ผัดมะระใส่ไข่", cat: "ผัด", cal: 190, protein: 8, carbs: 10, fat: 13, per: "ต่อจาน" },
  { name: "ผัดดอกขจรใส่ไข่", cat: "ผัด", cal: 180, protein: 7, carbs: 11, fat: 12, per: "ต่อจาน" },
  { name: "ผัดเห็ดรวมกุ้ง", cat: "ผัด", cal: 160, protein: 16, carbs: 10, fat: 6, per: "ต่อจาน" },
  { name: "ผัดชะอมไข่เค็ม", cat: "ผัด", cal: 240, protein: 11, carbs: 10, fat: 17, per: "ต่อจาน" },
  { name: "ดอกหอมผัดตับหมู", cat: "ผัด", cal: 240, protein: 22, carbs: 12, fat: 11, per: "ต่อจาน" },
  { name: "ผัดถั่วงอกเต้าหู้หมูสับ", cat: "ผัด", cal: 210, protein: 15, carbs: 10, fat: 12, per: "ต่อจาน" },

  // ══════════════════════════════════════════════
  // 🍲 ต้ม / แกง / ซุป (Soups & Curries)
  // ══════════════════════════════════════════════
  { name: "ต้มยำกุ้งน้ำใส", cat: "ต้ม", cal: 130, protein: 18, carbs: 8, fat: 3, per: "ต่อถ้วย" },
  { name: "ต้มยำกุ้งน้ำข้น", cat: "ต้ม", cal: 260, protein: 19, carbs: 14, fat: 14, per: "ต่อถ้วย (ใส่นมข้นจืด)" },
  { name: "ต้มยำรวมมิตรทะเลน้ำข้น", cat: "ต้ม", cal: 280, protein: 22, carbs: 14, fat: 15, per: "ต่อถ้วย" },
  { name: "ต้มยำปลากะพงน้ำใส", cat: "ต้ม", cal: 150, protein: 24, carbs: 6, fat: 3, per: "ต่อถ้วย" },
  { name: "ต้มยำหัวปลาหม้อไฟ", cat: "ต้ม", cal: 280, protein: 26, carbs: 10, fat: 15, per: "ต่อ 1 หม้อเล็ก" },
  { name: "ต้มข่าไก่", cat: "ต้ม", cal: 310, protein: 22, carbs: 10, fat: 20, per: "ต่อถ้วย (กะทิ)" },
  { name: "ต้มแซ่บกระดูกหมูอ่อน", cat: "ต้ม", cal: 240, protein: 22, carbs: 6, fat: 14, per: "ต่อถ้วย" },
  { name: "ต้มแซ่บเนื้อลาย", cat: "ต้ม", cal: 250, protein: 26, carbs: 5, fat: 14, per: "ต่อถ้วย" },
  { name: "ต้มซุปเปอร์ขาไก่", cat: "ต้ม", cal: 280, protein: 25, carbs: 8, fat: 16, per: "ต่อถ้วย" },
  { name: "ต้มโคล้งปลากรอบ", cat: "ต้ม", cal: 190, protein: 20, carbs: 10, fat: 7, per: "ต่อถ้วย" },
  { name: "แกงจืดเต้าหู้หมูสับสาหร่าย", cat: "น้ำแกง", cal: 160, protein: 16, carbs: 7, fat: 7, per: "ต่อถ้วย" },
  { name: "แกงจืดไข่น้ำ", cat: "น้ำแกง", cal: 200, protein: 14, carbs: 5, fat: 13, per: "ต่อถ้วย" },
  { name: "แกงจืดแตงกวายัดไส้หมูสับ", cat: "น้ำแกง", cal: 150, protein: 15, carbs: 6, fat: 6, per: "ต่อถ้วย" },
  { name: "แกงจืดมะระยัดไส้หมูสับ", cat: "น้ำแกง", cal: 160, protein: 16, carbs: 6, fat: 7, per: "ต่อถ้วย" },
  { name: "แกงจืดวุ้นเส้นตำลึงหมูสับ", cat: "น้ำแกง", cal: 210, protein: 15, carbs: 22, fat: 6, per: "ต่อถ้วย" },
  { name: "แกงจืดฟักน่องไก่", cat: "น้ำแกง", cal: 170, protein: 18, carbs: 10, fat: 6, per: "ต่อถ้วย" },
  { name: "แกงเลียงกุ้งสด", cat: "น้ำแกง", cal: 140, protein: 16, carbs: 14, fat: 2, per: "ต่อถ้วย (ผักรวม)" },
  { name: "แกงส้มผักรวมกุ้งสด", cat: "แกง", cal: 160, protein: 18, carbs: 16, fat: 2, per: "ต่อถ้วย" },
  { name: "แกงส้มชะอมไข่กุ้งสด", cat: "แกง", cal: 320, protein: 20, carbs: 18, fat: 18, per: "ต่อถ้วย" },
  { name: "แกงส้มแป๊ะซะปลาช่อนทอด", cat: "แกง", cal: 460, protein: 32, carbs: 24, fat: 26, per: "ต่อ 1 หม้อไฟ (แบ่งทาน)" },
  { name: "แกงส้มใต้ปลากะพงยอดมะพร้าว (แกงเหลือง)", cat: "แกง", cal: 190, protein: 26, carbs: 12, fat: 3, per: "ต่อถ้วย" },
  { name: "แกงไตปลา", cat: "แกง", cal: 130, protein: 16, carbs: 12, fat: 1.5, per: "ต่อถ้วย (ผัก+เนื้อปลา)" },
  { name: "แกงเขียวหวานไก่", cat: "แกง", cal: 310, protein: 22, carbs: 12, fat: 19, per: "ต่อถ้วย (ไม่รวมข้าว)" },
  { name: "แกงเขียวหวานหมู", cat: "แกง", cal: 340, protein: 20, carbs: 12, fat: 24, per: "ต่อถ้วย" },
  { name: "แกงเขียวหวานเนื้อ", cat: "แกง", cal: 350, protein: 24, carbs: 11, fat: 23, per: "ต่อถ้วย" },
  { name: "แกงเขียวหวานลูกชิ้นปลากราย", cat: "แกง", cal: 290, protein: 18, carbs: 14, fat: 17, per: "ต่อถ้วย" },
  { name: "แกงเผ็ดเป็ดย่าง", cat: "แกง", cal: 390, protein: 22, carbs: 16, fat: 26, per: "ต่อถ้วย (ใส่มะเขือเทศ+สับปะรด)" },
  { name: "แกงพะแนงหมู", cat: "แกง", cal: 340, protein: 24, carbs: 10, fat: 22, per: "ต่อถ้วย (ไม่รวมข้าว)" },
  { name: "แกงพะแนงอกไก่", cat: "แกง", cal: 260, protein: 28, carbs: 10, fat: 11, per: "ต่อถ้วย" },
  { name: "แกงพะแนงเนื้อ", cat: "แกง", cal: 360, protein: 26, carbs: 10, fat: 24, per: "ต่อถ้วย" },
  { name: "แกงมัสมั่นไก่", cat: "แกง", cal: 420, protein: 24, carbs: 28, fat: 24, per: "ต่อถ้วย (รวมมันฝรั่ง)" },
  { name: "แกงมัสมั่นเนื้อ", cat: "แกง", cal: 460, protein: 26, carbs: 28, fat: 27, per: "ต่อถ้วย" },
  { name: "แกงกะหรี่ไก่", cat: "แกง", cal: 380, protein: 22, carbs: 26, fat: 20, per: "ต่อถ้วย" },
  { name: "แกงเทโพหมูสามชั้น", cat: "แกง", cal: 380, protein: 16, carbs: 14, fat: 29, per: "ต่อถ้วย (ผักบุ้ง+กะทิ)" },
  { name: "แกงคั่วหอยขม", cat: "แกง", cal: 280, protein: 18, carbs: 12, fat: 18, per: "ต่อถ้วย" },
  { name: "แกงคั่วสับปะรดหอยแมลงภู่", cat: "แกง", cal: 290, protein: 16, carbs: 22, fat: 16, per: "ต่อถ้วย" },
  { name: "แกงป่าไก่", cat: "แกง", cal: 140, protein: 24, carbs: 7, fat: 2, per: "ต่อถ้วย (ไม่ใส่กะทิ)" },
  { name: "แกงป่าหมูป่า", cat: "แกง", cal: 180, protein: 22, carbs: 7, fat: 7, per: "ต่อถ้วย" },
  { name: "แกงฮังเลหมู", cat: "แกง", cal: 420, protein: 22, carbs: 16, fat: 31, per: "ต่อถ้วย (แกงเหนือ)" },
  { name: "ซุปมิโซะ", cat: "ซุป", cal: 45, protein: 3, carbs: 5, fat: 1.5, per: "ต่อ 1 ถ้วย (เต้าหู้+สาหร่าย)" },
  { name: "ซุปเห็ดทรัฟเฟิล / ครีมเห็ด", cat: "ซุป", cal: 230, protein: 4, carbs: 18, fat: 16, per: "ต่อ 1 ถ้วย" },
  { name: "ซุปข้าวโพดหวาน", cat: "ซุป", cal: 210, protein: 4, carbs: 26, fat: 10, per: "ต่อ 1 ถ้วย" },

  // ══════════════════════════════════════════════
  // 🥗 ยำ / ลาบ / ส้มตำ / อาหารอีสาน & เหนือ (Isan & Northern)
  // ══════════════════════════════════════════════
  { name: "ส้มตำไทย", cat: "ยำ", cal: 140, protein: 4, carbs: 28, fat: 2, per: "ต่อจาน" },
  { name: "ส้มตำไทยไข่เค็ม", cat: "ยำ", cal: 220, protein: 9, carbs: 30, fat: 7, per: "ต่อจาน" },
  { name: "ส้มตำปูปลาร้า", cat: "ยำ", cal: 100, protein: 5, carbs: 18, fat: 1, per: "ต่อจาน" },
  { name: "ส้มตำหมูยอ", cat: "ยำ", cal: 220, protein: 14, carbs: 22, fat: 8, per: "ต่อจาน" },
  { name: "ส้มตำหอยดอง", cat: "ยำ", cal: 160, protein: 8, carbs: 24, fat: 2, per: "ต่อจาน" },
  { name: "ส้มตำข้าวโพดไข่เค็ม", cat: "ยำ", cal: 260, protein: 8, carbs: 42, fat: 7, per: "ต่อจาน" },
  { name: "ส้มตำป่า", cat: "ยำ", cal: 160, protein: 10, carbs: 24, fat: 2, per: "ต่อจาน (ผักกะเฉด+หมูยอ+หอย)" },
  { name: "ตำซั่ว (ขนมจีน)", cat: "ยำ", cal: 190, protein: 6, carbs: 38, fat: 1.5, per: "ต่อจาน" },
  { name: "ส้มตำแตง", cat: "ยำ", cal: 80, protein: 3, carbs: 16, fat: 0.5, per: "ต่อจาน" },
  { name: "ส้มตำถั่วฝักยาว", cat: "ยำ", cal: 120, protein: 5, carbs: 20, fat: 1.5, per: "ต่อจาน" },
  { name: "ส้มตำผลไม้รวม", cat: "ยำ", cal: 180, protein: 3, carbs: 40, fat: 1, per: "ต่อจาน" },
  { name: "ลาบหมู", cat: "กับข้าว", cal: 230, protein: 24, carbs: 8, fat: 11, per: "ต่อจาน" },
  { name: "ลาบไก่ / อกไก่", cat: "กับข้าว", cal: 180, protein: 28, carbs: 7, fat: 4, per: "ต่อจาน" },
  { name: "ลาบเป็ด", cat: "กับข้าว", cal: 280, protein: 26, carbs: 6, fat: 17, per: "ต่อจาน" },
  { name: "ลาบปลาดุกย่าง", cat: "กับข้าว", cal: 220, protein: 24, carbs: 8, fat: 10, per: "ต่อจาน" },
  { name: "ลาบเนื้อสุก", cat: "กับข้าว", cal: 240, protein: 28, carbs: 6, fat: 12, per: "ต่อจาน" },
  { name: "ลาบวุ้นเส้นหมูสับ", cat: "กับข้าว", cal: 280, protein: 18, carbs: 34, fat: 8, per: "ต่อจาน" },
  { name: "น้ำตกหมู", cat: "กับข้าว", cal: 260, protein: 24, carbs: 8, fat: 14, per: "ต่อจาน" },
  { name: "น้ำตกคอหมูย่าง", cat: "กับข้าว", cal: 350, protein: 20, carbs: 8, fat: 26, per: "ต่อจาน" },
  { name: "น้ำตกเนื้อ", cat: "กับข้าว", cal: 260, protein: 28, carbs: 7, fat: 13, per: "ต่อจาน" },
  { name: "ตับหวาน", cat: "กับข้าว", cal: 210, protein: 26, carbs: 8, fat: 7, per: "ต่อจาน" },
  { name: "ซุปหน่อไม้", cat: "กับข้าว", cal: 90, protein: 4, carbs: 14, fat: 1.5, per: "ต่อจาน" },
  { name: "แกงอ่อมหมู", cat: "แกง", cal: 160, protein: 22, carbs: 8, fat: 4, per: "ต่อถ้วย" },
  { name: "แกงอ่อมไก่บ้าน", cat: "แกง", cal: 150, protein: 24, carbs: 7, fat: 3, per: "ต่อถ้วย" },
  { name: "แกงหน่อไม้ใบย่านาง", cat: "แกง", cal: 110, protein: 6, carbs: 16, fat: 2, per: "ต่อถ้วย" },
  { name: "แกงเห็ดรวมอีสาน", cat: "แกง", cal: 90, protein: 6, carbs: 14, fat: 1, per: "ต่อถ้วย" },
  { name: "ยำวุ้นเส้นรวมมิตร", cat: "ยำ", cal: 220, protein: 14, carbs: 32, fat: 4, per: "ต่อจาน (หมูสับ+กุ้ง+ปลาหมึก)" },
  { name: "ยำวุ้นเส้นโบราณ (หมูสับถั่วลิสงกุ้งแห้ง)", cat: "ยำ", cal: 290, protein: 16, carbs: 36, fat: 9, per: "ต่อจาน" },
  { name: "ยำมาม่ารวมมิตร", cat: "ยำ", cal: 380, protein: 16, carbs: 48, fat: 14, per: "ต่อจาน" },
  { name: "ยำหมูยออุบล", cat: "ยำ", cal: 200, protein: 12, carbs: 14, fat: 10, per: "ต่อจาน" },
  { name: "ยำหมูยอไข่แดงเค็ม", cat: "ยำ", cal: 320, protein: 16, carbs: 18, fat: 20, per: "ต่อจาน" },
  { name: "ยำไข่ดาว (2 ฟอง)", cat: "ยำ", cal: 360, protein: 15, carbs: 12, fat: 28, per: "ต่อจาน" },
  { name: "ยำไข่ต้มยางมะตูม", cat: "ยำ", cal: 190, protein: 14, carbs: 10, fat: 10, per: "ต่อจาน (ไข่ 2 ฟอง)" },
  { name: "ยำแซลมอนสดน้ำยำไทย", cat: "ยำ", cal: 240, protein: 26, carbs: 8, fat: 11, per: "ต่อจาน" },
  { name: "กุ้งแช่น้ำปลา", cat: "ยำ", cal: 140, protein: 24, carbs: 6, fat: 1.5, per: "ต่อจาน (กุ้ง 6-8 ตัว)" },
  { name: "หมูมะนาว", cat: "กับข้าว", cal: 220, protein: 26, carbs: 6, fat: 10, per: "ต่อจาน" },
  { name: "น้ำพริกหนุ่ม", cat: "กับข้าว", cal: 60, protein: 3, carbs: 10, fat: 0.5, per: "ต่อ 1 ถ้วยเล็ก" },
  { name: "น้ำพริกอ่อง", cat: "กับข้าว", cal: 180, protein: 14, carbs: 10, fat: 9, per: "ต่อ 1 ถ้วยเล็ก (หมูสับ+มะเขือเทศ)" },
  { name: "แคบหมูไร้มัน", cat: "ของว่าง", cal: 150, protein: 22, carbs: 0, fat: 6.5, per: "ต่อ 30 กรัม" },
  { name: "แคบหมูติดมัน", cat: "ของว่าง", cal: 210, protein: 15, carbs: 0, fat: 17.0, per: "ต่อ 30 กรัม" },
  { name: "ไส้อั่วสมุนไพร", cat: "กับข้าว", cal: 320, protein: 18, carbs: 4, fat: 26, per: "ต่อ 100 กรัม" },

  // ══════════════════════════════════════════════
  // 🍜 ก๋วยเตี๋ยว / เมนูเส้น / พาสต้า (Noodles & Pasta)
  // ══════════════════════════════════════════════
  { name: "ก๋วยเตี๋ยวเรือน้ำตกหมู", cat: "เส้น", cal: 360, protein: 20, carbs: 48, fat: 10, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวเนื้อน้ำตก", cat: "เส้น", cal: 380, protein: 23, carbs: 47, fat: 11, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวต้มยำหมูมะนาว", cat: "เส้น", cal: 390, protein: 18, carbs: 54, fat: 11, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวต้มยำน้ำข้นทะเล", cat: "เส้น", cal: 440, protein: 22, carbs: 55, fat: 14, per: "ต่อชาม" },
  { name: "ก๋วยเตี๋ยวไก่ตุ๋น / มะระ", cat: "เส้น", cal: 380, protein: 25, carbs: 48, fat: 9, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวลูกชิ้นปลา / น้ำใส", cat: "เส้น", cal: 320, protein: 17, carbs: 50, fat: 5, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวเป็ดพะโล้", cat: "เส้น", cal: 460, protein: 26, carbs: 52, fat: 16, per: "ต่อชาม" },
  { name: "บะหมี่เกี๊ยวหมูแดง", cat: "เส้น", cal: 480, protein: 25, carbs: 63, fat: 14, per: "ค่าประมาณต่อชาม" },
  { name: "บะหมี่เกี๊ยวกุ้ง", cat: "เส้น", cal: 420, protein: 24, carbs: 58, fat: 10, per: "ต่อชาม" },
  { name: "บะหมี่แห้งเป็ดย่าง", cat: "เส้น", cal: 520, protein: 26, carbs: 60, fat: 18, per: "ค่าประมาณต่อชาม" },
  { name: "เย็นตาโฟน้ำ", cat: "เส้น", cal: 370, protein: 18, carbs: 55, fat: 8, per: "ค่าประมาณต่อชาม" },
  { name: "เย็นตาโฟแห้ง", cat: "เส้น", cal: 420, protein: 18, carbs: 58, fat: 12, per: "ค่าประมาณต่อชาม" },
  { name: "ก๋วยเตี๋ยวคั่วไก่", cat: "เส้น", cal: 540, protein: 25, carbs: 65, fat: 20, per: "ต่อจาน" },
  { name: "ก๋วยเตี๋ยวคั่วทะเล", cat: "เส้น", cal: 520, protein: 24, carbs: 64, fat: 18, per: "ต่อจาน" },
  { name: "สุกี้น้ำรวมมิตร", cat: "เส้น", cal: 340, protein: 25, carbs: 38, fat: 10, per: "ค่าประมาณต่อชาม (ใส่วุ้นเส้น)" },
  { name: "สุกี้แห้งรวมมิตร", cat: "เส้น", cal: 430, protein: 27, carbs: 43, fat: 17, per: "ค่าประมาณต่อจาน" },
  { name: "สุกี้ไก่คลีน (ไม่ใส่น้ำมัน)", cat: "เส้น", cal: 260, protein: 28, carbs: 28, fat: 3, per: "ค่าประมาณต่อชาม" },
  { name: "ผัดไทยกุ้งสด", cat: "เส้น", cal: 580, protein: 22, carbs: 72, fat: 22, per: "ต่อจาน (ไข่+เต้าหู้+ถั่ว)" },
  { name: "ผัดไทยไร้เส้นคลีน", cat: "เส้น", cal: 340, protein: 26, carbs: 18, fat: 16, per: "ต่อจาน (ใช้ถั่วงอก+กุ้ง)" },
  { name: "ผัดซีอิ๊วเส้นใหญ่หมู", cat: "เส้น", cal: 600, protein: 24, carbs: 78, fat: 22, per: "ต่อจาน" },
  { name: "ผัดซีอิ๊วเส้นใหญ่ไก่", cat: "เส้น", cal: 540, protein: 27, carbs: 76, fat: 15, per: "ต่อจาน" },
  { name: "ผัดซีอิ๊วหมูกรอบ", cat: "เส้น", cal: 690, protein: 20, carbs: 78, fat: 34, per: "ต่อจาน" },
  { name: "ราดหน้าหมูหมัก", cat: "เส้น", cal: 450, protein: 18, carbs: 60, fat: 15, per: "ต่อจาน" },
  { name: "ราดหน้าหมูกรอบ", cat: "เส้น", cal: 580, protein: 16, carbs: 62, fat: 29, per: "ต่อจาน" },
  { name: "ราดหน้าหมี่กรอบทะเล", cat: "เส้น", cal: 560, protein: 22, carbs: 65, fat: 24, per: "ต่อจาน" },
  { name: "ผัดขี้เมาเส้นใหญ่ทะเล", cat: "เส้น", cal: 520, protein: 24, carbs: 70, fat: 16, per: "ต่อจาน" },
  { name: "ผัดมาม่าขี้เมาหมูสับ", cat: "เส้น", cal: 560, protein: 18, carbs: 65, fat: 25, per: "ต่อจาน" },
  { name: "ผัดไวไวหอยลายพริกเผา", cat: "เส้น", cal: 520, protein: 16, carbs: 64, fat: 22, per: "ต่อจาน" },
  { name: "มาม่าต้มยำกุ้ง (ซอง)", cat: "เส้น", cal: 360, protein: 7, carbs: 50, fat: 14, per: "ต่อ 1 ซอง (ต้มไม่ใส่เครื่อง)" },
  { name: "ก๋วยจั๊บน้ำข้น", cat: "เส้น", cal: 440, protein: 23, carbs: 52, fat: 15, per: "ต่อชาม (หมูกรอบ+ไข่+เครื่องใน)" },
  { name: "ก๋วยจั๊บน้ำใส (เยาวราช)", cat: "เส้น", cal: 390, protein: 24, carbs: 50, fat: 10, per: "ต่อชาม (หมูกรอบ+หมูชิ้นพริกไทย)" },
  { name: "ก๋วยจั๊บญวน", cat: "เส้น", cal: 400, protein: 18, carbs: 62, fat: 9, per: "ต่อชาม (หมูยอ+กระดูกหมู)" },
  { name: "เกาเหลาเลือดหมูตำลึง", cat: "ต้ม", cal: 220, protein: 26, carbs: 6, fat: 10, per: "ต่อชาม (ไม่รวมข้าวสวย)" },
  { name: "เกาเหลาเนื้อตุ๋น", cat: "ต้ม", cal: 260, protein: 30, carbs: 6, fat: 12, per: "ต่อชาม" },
  { name: "ขนมจีนน้ำยาป่า", cat: "เส้น", cal: 230, protein: 12, carbs: 40, fat: 2, per: "ต่อจาน" },
  { name: "ขนมจีนน้ำยากะทิ", cat: "เส้น", cal: 340, protein: 14, carbs: 45, fat: 12, per: "ต่อจาน" },
  { name: "ขนมจีนน้ำยาปู", cat: "เส้น", cal: 380, protein: 20, carbs: 46, fat: 14, per: "ต่อจาน" },
  { name: "ขนมจีนแกงเขียวหวานไก่", cat: "เส้น", cal: 420, protein: 18, carbs: 48, fat: 17, per: "ต่อจาน" },
  { name: "ขนมจีนน้ำเงี้ยว", cat: "เส้น", cal: 320, protein: 15, carbs: 45, fat: 8, per: "ต่อชาม" },
  { name: "ขนมจีนน้ำพริก", cat: "เส้น", cal: 360, protein: 10, carbs: 56, fat: 10, per: "ต่อจาน" },
  { name: "ข้าวซอยไก่", cat: "เส้น", cal: 520, protein: 26, carbs: 56, fat: 22, per: "ต่อชาม" },
  { name: "ข้าวซอยเนื้อ", cat: "เส้น", cal: 560, protein: 28, carbs: 56, fat: 25, per: "ต่อชาม" },
  { name: "สปาเก็ตตี้คาโบนาร่า", cat: "เส้น", cal: 680, protein: 22, carbs: 68, fat: 34, per: "ต่อจาน" },
  { name: "สปาเก็ตตี้ซอสมะเขือเทศหมูสับ (Bolognese)", cat: "เส้น", cal: 480, protein: 24, carbs: 65, fat: 14, per: "ต่อจาน" },
  { name: "สปาเก็ตตี้พริกแห้งเบคอน", cat: "เส้น", cal: 530, protein: 16, carbs: 62, fat: 24, per: "ต่อจาน" },
  { name: "สปาเก็ตตี้ขี้เมาทะเล", cat: "เส้น", cal: 460, protein: 25, carbs: 64, fat: 11, per: "ต่อจาน" },
  { name: "สปาเก็ตตี้ซอสเพสโต้ (Pesto)", cat: "เส้น", cal: 520, protein: 12, carbs: 60, fat: 26, per: "ต่อจาน" },
  { name: "มักกะโรนีผัดกุ้งใส่ไข่", cat: "เส้น", cal: 490, protein: 22, carbs: 62, fat: 17, per: "ต่อจาน" },
  { name: "ลาซานญ่าหมูชีส", cat: "เส้น", cal: 620, protein: 30, carbs: 48, fat: 34, per: "ต่อ 1 ชิ้น" },
  { name: "ราเมงทงคตสึ (หมูชาชู)", cat: "เส้น", cal: 620, protein: 28, carbs: 70, fat: 25, per: "ต่อชาม" },
  { name: "ราเมงโชยุ", cat: "เส้น", cal: 480, protein: 22, carbs: 72, fat: 11, per: "ต่อชาม" },
  { name: "อุด้งแกงกะหรี่หมู", cat: "เส้น", cal: 580, protein: 22, carbs: 82, fat: 18, per: "ต่อชาม" },
  { name: "ยากิโซบะหมู", cat: "เส้น", cal: 520, protein: 18, carbs: 68, fat: 19, per: "ต่อจาน" },
  { name: "บะหมี่เย็นญี่ปุ่น (Zaru Soba)", cat: "เส้น", cal: 340, protein: 12, carbs: 68, fat: 2, per: "ต่อ 1 เซต" },
  { name: "เส้นบุกผัดซีอิ๊วคลีน", cat: "เส้น", cal: 220, protein: 24, carbs: 12, fat: 7, per: "ต่อจาน (ใช้เส้นบุก+อกไก่)" },

  // ══════════════════════════════════════════════
  // 🍗 โปรตีน / เมนูไข่ / ฟิตเนส (Proteins, Eggs & Clean Foods)
  // ══════════════════════════════════════════════
  { name: "อกไก่ต้ม / นึ่ง", cat: "โปรตีน", cal: 165, protein: 31, carbs: 0, fat: 3.6, per: "ต่อ 100 กรัม" },
  { name: "อกไก่ย่างเกลือ", cat: "โปรตีน", cal: 175, protein: 30, carbs: 2, fat: 4.5, per: "ต่อ 100 กรัม" },
  { name: "อกไก่นุ่ม 7-11 (ทุกรส)", cat: "โปรตีน", cal: 90, protein: 18, carbs: 2, fat: 1.5, per: "ต่อ 1 ซอง (~80g)" },
  { name: "สันในไก่ต้ม", cat: "โปรตีน", cal: 120, protein: 26, carbs: 0, fat: 1.5, per: "ต่อ 100 กรัม" },
  { name: "น่องไก่ย่าง (ไม่รวมหนัง)", cat: "โปรตีน", cal: 150, protein: 24, carbs: 1, fat: 5, per: "ต่อ 1 ชิ้นกลาง" },
  { name: "สะโพกไก่ย่าง", cat: "โปรตีน", cal: 240, protein: 26, carbs: 2, fat: 14, per: "ต่อ 1 ชิ้นกลาง" },
  { name: "ไก่ทอดหาดใหญ่ (สะโพก)", cat: "โปรตีน", cal: 380, protein: 25, carbs: 8, fat: 28, per: "ต่อ 1 ชิ้น" },
  { name: "ไก่ทอด KFC (สูตรกรอบ)", cat: "โปรตีน", cal: 320, protein: 21, carbs: 12, fat: 21, per: "ต่อ 1 ชิ้น (สะโพก/น่อง)" },
  { name: "หมูปิ้งนมสด (1 ไม้)", cat: "โปรตีน", cal: 140, protein: 8, carbs: 4, fat: 10, per: "ต่อ 1 ไม้" },
  { name: "คอหมูย่าง", cat: "โปรตีน", cal: 360, protein: 20, carbs: 4, fat: 29, per: "ต่อ 100 กรัม" },
  { name: "หมูแดดเดียวทอด", cat: "โปรตีน", cal: 340, protein: 26, carbs: 5, fat: 23, per: "ต่อ 100 กรัม" },
  { name: "สันนอกหมูย่าง", cat: "โปรตีน", cal: 210, protein: 28, carbs: 0, fat: 10, per: "ต่อ 100 กรัม" },
  { name: "สเต๊กอกไก่พริกไทยดำ", cat: "โปรตีน", cal: 260, protein: 36, carbs: 6, fat: 9, per: "ต่อ 1 จาน (รวมผักสลัด)" },
  { name: "สเต๊กหมูพอร์คชอป", cat: "โปรตีน", cal: 480, protein: 32, carbs: 10, fat: 34, per: "ต่อ 1 จาน" },
  { name: "สเต๊กเนื้อสันนอก (Sirloin 200g)", cat: "โปรตีน", cal: 420, protein: 38, carbs: 4, fat: 27, per: "ต่อ 1 จาน" },
  { name: "สเต๊กเนื้อริบอาย (Ribeye 200g)", cat: "โปรตีน", cal: 520, protein: 36, carbs: 2, fat: 40, per: "ต่อ 1 จาน" },
  { name: "ปลาแซลมอนย่างเกลือ / ซีอิ๊ว", cat: "โปรตีน", cal: 230, protein: 24, carbs: 2, fat: 14, per: "ต่อ 100 กรัม" },
  { name: "ปลานิลนึ่งมะนาว", cat: "โปรตีน", cal: 180, protein: 32, carbs: 4, fat: 3, per: "ต่อครึ่งตัว (~180g)" },
  { name: "ปลาทูทอด (ตัวกลาง)", cat: "โปรตีน", cal: 240, protein: 22, carbs: 0, fat: 16, per: "ต่อ 1 ตัว" },
  { name: "ปลาทูนึ่ง", cat: "โปรตีน", cal: 140, protein: 24, carbs: 0, fat: 4, per: "ต่อ 1 ตัว" },
  { name: "ทูน่าในน้ำแร่ (1 กระป๋อง)", cat: "โปรตีน", cal: 130, protein: 29, carbs: 0, fat: 1, per: "ต่อ 1 กระป๋อง (~130g)" },
  { name: "ทูน่าในน้ำเกลือ (1 กระป๋อง)", cat: "โปรตีน", cal: 140, protein: 29, carbs: 0, fat: 2, per: "ต่อ 1 กระป๋อง" },
  { name: "กุ้งลวก / ต้ม", cat: "โปรตีน", cal: 95, protein: 22, carbs: 0, fat: 0.8, per: "ต่อ 100 กรัม (กุ้ง ~6-8 ตัว)" },
  { name: "กุ้งเผา (100g)", cat: "โปรตีน", cal: 110, protein: 23, carbs: 0, fat: 1.5, per: "ต่อ 100 กรัม" },
  { name: "ปลาหมึกย่าง", cat: "โปรตีน", cal: 120, protein: 24, carbs: 2, fat: 1.8, per: "ต่อ 100 กรัม" },
  { name: "เต้าหู้ขาวแข็ง", cat: "โปรตีน", cal: 120, protein: 12, carbs: 3, fat: 6.5, per: "ต่อ 100 กรัม" },
  { name: "เต้าหู้ไข่ (1 หลอด)", cat: "โปรตีน", cal: 70, protein: 6, carbs: 2, fat: 4, per: "ต่อ 1 หลอด (~120g)" },
  { name: "เทมเป้ (Tempeh)", cat: "โปรตีน", cal: 195, protein: 19, carbs: 9, fat: 11, per: "ต่อ 100 กรัม" },
  { name: "ถั่วแระญี่ปุ่น (Edamame)", cat: "โปรตีน", cal: 120, protein: 11, carbs: 10, fat: 5, per: "ต่อ 1 ถ้วยเล็ก (~100g)" },
  { name: "ไข่ต้ม", cat: "ไข่", cal: 75, protein: 6.5, carbs: 0.6, fat: 5.0, per: "ต่อ 1 ฟอง" },
  { name: "ไข่ลวก", cat: "ไข่", cal: 70, protein: 6.3, carbs: 0.5, fat: 4.8, per: "ต่อ 1 ฟอง" },
  { name: "ไข่ออนเซ็น 7-11", cat: "ไข่", cal: 75, protein: 6.5, carbs: 0.6, fat: 5.0, per: "ต่อ 1 ฟอง" },
  { name: "ไข่ต้มยางมะตูม 7-11 (2 ฟอง)", cat: "ไข่", cal: 145, protein: 13.0, carbs: 1.0, fat: 9.8, per: "ต่อ 1 แพ็ก (2 ฟอง)" },
  { name: "ไข่ขาวต้ม (2 ฟอง)", cat: "ไข่", cal: 35, protein: 7.5, carbs: 0.4, fat: 0.1, per: "ต่อ 2 ฟอง" },
  { name: "ไข่ดาวทอดน้ำมัน", cat: "ไข่", cal: 180, protein: 7.0, carbs: 0.8, fat: 16.0, per: "ต่อ 1 ฟอง" },
  { name: "ไข่ดาวน้ำ (Poached egg)", cat: "ไข่", cal: 75, protein: 6.5, carbs: 0.6, fat: 5.0, per: "ต่อ 1 ฟอง (ไม่ใช้น้ำมัน)" },
  { name: "ไข่เจียว (1 ฟอง)", cat: "ไข่", cal: 240, protein: 7.5, carbs: 1.5, fat: 22.0, per: "ต่อ 1 ฟอง (ทอดน้ำมันปกติ)" },
  { name: "ไข่คน (Scrambled eggs 2 ฟอง)", cat: "ไข่", cal: 200, protein: 13.0, carbs: 2.0, fat: 15.0, per: "ต่อ 2 ฟอง (ใส่เนย/นม)" },
  { name: "ไข่ตุ๋นหมูสับ", cat: "ไข่", cal: 160, protein: 14.0, carbs: 3.0, fat: 10.0, per: "ต่อ 1 ถ้วย" },
  { name: "ไข่ตุ๋นคัพ 7-11", cat: "ไข่", cal: 110, protein: 9.0, carbs: 4.0, fat: 6.5, per: "ต่อ 1 ถ้วย" },
  { name: "ไข่พะโล้ (ไข่ 1 ฟอง + หมู 1 ชิ้น)", cat: "ไข่", cal: 260, protein: 14.0, carbs: 14.0, fat: 16.0, per: "ต่อ 1 ที่" },
  { name: "ไข่ลูกเขย (1 ฟอง)", cat: "ไข่", cal: 190, protein: 7.0, carbs: 18.0, fat: 10.0, per: "ต่อ 1 ฟอง (รวมน้ำราดหวาน)" },

  // ══════════════════════════════════════════════
  // 🥪 อาหารเช้า / อาหารฝรั่ง & ร้านสะดวกซื้อ (7-Eleven / CJ)
  // ══════════════════════════════════════════════
  { name: "โจ๊กหมูล้วน", cat: "อาหารเช้า", cal: 260, protein: 14, carbs: 42, fat: 4, per: "ต่อชาม" },
  { name: "โจ๊กหมูใส่ไข่", cat: "อาหารเช้า", cal: 340, protein: 20, carbs: 43, fat: 9, per: "ต่อชาม" },
  { name: "ข้าวต้มหมูสับ", cat: "อาหารเช้า", cal: 280, protein: 16, carbs: 44, fat: 4, per: "ต่อชาม" },
  { name: "ข้าวต้มกุ้ง", cat: "อาหารเช้า", cal: 250, protein: 18, carbs: 40, fat: 2, per: "ต่อชาม" },
  { name: "ข้าวต้มปลา", cat: "อาหารเช้า", cal: 240, protein: 20, carbs: 38, fat: 2, per: "ต่อชาม" },
  { name: "ปาท่องโก๋ (1 คู่)", cat: "อาหารเช้า", cal: 135, protein: 2.5, carbs: 16, fat: 7.0, per: "ต่อ 1 คู่กลาง" },
  { name: "สังขยาใบเตยดิป", cat: "อาหารเช้า", cal: 120, protein: 2.0, carbs: 22, fat: 3.0, per: "ต่อ 2 ช้อนโต๊ะ" },
  { name: "นมข้นหวานดิป", cat: "อาหารเช้า", cal: 130, protein: 2.5, carbs: 22, fat: 3.5, per: "ต่อ 2 ช้อนโต๊ะ" },
  { name: "ขนมปังขาว (1 แผ่น)", cat: "อาหารเช้า", cal: 75, protein: 2.5, carbs: 14, fat: 1.0, per: "ต่อ 1 แผ่น" },
  { name: "ขนมปังโฮลวีต (1 แผ่น)", cat: "อาหารเช้า", cal: 70, protein: 3.5, carbs: 12, fat: 1.0, per: "ต่อ 1 แผ่น" },
  { name: "แซนด์วิชแฮมชีส 7-11", cat: "อาหารเช้า", cal: 310, protein: 14, carbs: 30, fat: 15, per: "ต่อ 1 ชิ้น" },
  { name: "แซนด์วิชทูน่า 7-11", cat: "อาหารเช้า", cal: 280, protein: 16, carbs: 28, fat: 11, per: "ต่อ 1 ชิ้น" },
  { name: "แซนด์วิชครัวซองต์แฮมชีส 7-11", cat: "อาหารเช้า", cal: 380, protein: 11, carbs: 34, fat: 22, per: "ต่อ 1 ชิ้น" },
  { name: "ครัวซองต์เนยสด", cat: "อาหารเช้า", cal: 270, protein: 5, carbs: 28, fat: 15, per: "ต่อ 1 ชิ้นกลาง (~60g)" },
  { name: "ข้าวโอ๊ตต้มใส่นม", cat: "อาหารเช้า", cal: 210, protein: 8, carbs: 34, fat: 4.5, per: "ต่อ 1 ถ้วย (โอ๊ต 40g + นม)" },
  { name: "Overnight Oats (โอ๊ต+นม+เมล็ดเจีย)", cat: "อาหารเช้า", cal: 280, protein: 12, carbs: 42, fat: 7.0, per: "ต่อ 1 ถ้วย" },
  { name: "ข้าวปั้นโอนิกิริแซลมอนย่าง 7-11", cat: "อาหารเช้า", cal: 180, protein: 5, carbs: 36, fat: 1.5, per: "ต่อ 1 ชิ้น" },
  { name: "ข้าวปั้นโอนิกิริทูน่ามายองเนส 7-11", cat: "อาหารเช้า", cal: 210, protein: 5, carbs: 34, fat: 5.5, per: "ต่อ 1 ชิ้น" },
  { name: "ข้าวปั้นโอนิกิริไข่กุ้ง 7-11", cat: "อาหารเช้า", cal: 190, protein: 4, carbs: 35, fat: 3.5, per: "ต่อ 1 ชิ้น" },
  { name: "ซาลาเปาหมูสับ", cat: "อาหารเช้า", cal: 240, protein: 8, carbs: 36, fat: 7.0, per: "ต่อ 1 ลูก" },
  { name: "ซาลาเปาหมูแดง", cat: "อาหารเช้า", cal: 220, protein: 7, carbs: 38, fat: 4.5, per: "ต่อ 1 ลูก" },
  { name: "ซาลาเปาไส้ครีม", cat: "อาหารเช้า", cal: 210, protein: 4, carbs: 36, fat: 6.0, per: "ต่อ 1 ลูก" },
  { name: "ขนมจีบหมู (5 ลูก)", cat: "อาหารเช้า", cal: 200, protein: 12, carbs: 16, fat: 10.0, per: "ต่อ 5 ลูก" },
  { name: "ขนมจีบกุ้ง (5 ลูก)", cat: "อาหารเช้า", cal: 170, protein: 13, carbs: 16, fat: 5.5, per: "ต่อ 5 ลูก" },
  { name: "ไส้กรอกชีสไบท์ 7-11", cat: "อาหารเช้า", cal: 240, protein: 9, carbs: 6, fat: 20.0, per: "ต่อ 1 แพ็ก (4 ชิ้น)" },
  { name: "ไส้กรอกแฟรงค์ไก่ 7-11", cat: "อาหารเช้า", cal: 160, protein: 8, carbs: 3, fat: 13.0, per: "ต่อ 1 ชิ้น" },
  { name: "เบอร์เกอร์ข้าวเหนียวหมูปิ้ง 7-11", cat: "อาหารเช้า", cal: 290, protein: 10, carbs: 42, fat: 9.0, per: "ต่อ 1 ชิ้น" },
  { name: "เบอร์เกอร์หมูชีส", cat: "อาหารเช้า", cal: 450, protein: 22, carbs: 38, fat: 23.0, per: "ต่อ 1 ชิ้น" },
  { name: "เบอร์เกอร์เนื้อ Cheeseburger", cat: "อาหารเช้า", cal: 480, protein: 25, carbs: 36, fat: 26.0, per: "ต่อ 1 ชิ้น" },
  { name: "เฟรนช์ฟรายส์ (ขนาดกลาง)", cat: "ของว่าง", cal: 340, protein: 4, carbs: 44, fat: 16.0, per: "ต่อ 1 ซองกลาง" },
  { name: "นักเก็ตไก่ (6 ชิ้น)", cat: "ของว่าง", cal: 270, protein: 14, carbs: 16, fat: 16.0, per: "ต่อ 6 ชิ้น" },
  { name: "พิซซ่าหน้าฮาวายเอี้ยน (1 ชิ้น)", cat: "อาหารเช้า", cal: 280, protein: 12, carbs: 34, fat: 11.0, per: "ต่อ 1 ชิ้นแป้งหนานุ่ม" },
  { name: "ผักโขมอบชีส", cat: "อาหารเช้า", cal: 320, protein: 12, carbs: 14, fat: 24.0, per: "ต่อ 1 ถ้วยฟอยล์" },

  // ══════════════════════════════════════════════
  // 🍱 อาหารญี่ปุ่น & อาหารเกาหลี (Japanese & Korean)
  // ══════════════════════════════════════════════
  { name: "ข้าวแกงกะหรี่หมูทอดญี่ปุ่น", cat: "ข้าวราด", cal: 820, protein: 28, carbs: 105, fat: 32, per: "ต่อจาน" },
  { name: "ข้าวแกงกะหรี่ไก่คาราเกะ", cat: "ข้าวราด", cal: 760, protein: 27, carbs: 100, fat: 28, per: "ต่อจาน" },
  { name: "ข้าวหน้าเนื้อญี่ปุ่น (Gyudon)", cat: "ข้าวราด", cal: 620, protein: 28, carbs: 78, fat: 21, per: "ต่อชาม" },
  { name: "ข้าวหน้าหมูทอดทงคัตสึ (Katsudon)", cat: "ข้าวราด", cal: 750, protein: 30, carbs: 88, fat: 29, per: "ต่อชาม" },
  { name: "ข้าวหน้าไก่และไข่ (Oyakodon)", cat: "ข้าวราด", cal: 560, protein: 32, carbs: 74, fat: 14, per: "ต่อชาม" },
  { name: "ข้าวหน้าไก่เทอริยากิ", cat: "ข้าวราด", cal: 530, protein: 30, carbs: 75, fat: 12, per: "ต่อชาม" },
  { name: "ข้าวหน้าปลาแซลมอนย่างซีอิ๊ว", cat: "ข้าวราด", cal: 540, protein: 32, carbs: 68, fat: 14, per: "ต่อชาม" },
  { name: "ข้าวหน้าแซลมอนสด (Sake Don)", cat: "ข้าวราด", cal: 490, protein: 30, carbs: 65, fat: 11, per: "ต่อชาม" },
  { name: "ข้าวหน้าปลาไหล (Unadon)", cat: "ข้าวราด", cal: 640, protein: 26, carbs: 82, fat: 22, per: "ต่อชาม" },
  { name: "ซูชิหน้าแซลมอน (1 คำ)", cat: "ของว่าง", cal: 55, protein: 3.5, carbs: 8, fat: 1.0, per: "ต่อ 1 คำ" },
  { name: "ซูชิหน้าไข่หวาน (1 คำ)", cat: "ของว่าง", cal: 60, protein: 2.0, carbs: 10, fat: 1.2, per: "ต่อ 1 คำ" },
  { name: "แคลิฟอร์เนียโรล (4 คำ)", cat: "ของว่าง", cal: 220, protein: 6.0, carbs: 36, fat: 6.0, per: "ต่อ 4 ชิ้น" },
  { name: "ทาโกะยากิ (6 ลูก)", cat: "ของว่าง", cal: 320, protein: 9.0, carbs: 42, fat: 12.0, per: "ต่อ 6 ลูก (ราดซอส+มายองเนส)" },
  { name: "ไก่คาราเกะทอด (5 ชิ้น)", cat: "ของว่าง", cal: 340, protein: 24.0, carbs: 12, fat: 22.0, per: "ต่อ 5 ชิ้น" },
  { name: "เกี๊ยวซ่าทอด (5 ชิ้น)", cat: "ของว่าง", cal: 260, protein: 10.0, carbs: 24, fat: 14.0, per: "ต่อ 5 ชิ้น" },
  { name: "สลัดปูอัดไข่กุ้ง", cat: "สลัด", cal: 180, protein: 8.0, carbs: 16, fat: 9.0, per: "ต่อ 1 จาน" },
  { name: "ซุปกิมจิเต้าหู้อ่อนหมูสามชั้น", cat: "ซุป", cal: 260, protein: 18, carbs: 12, fat: 16, per: "ต่อ 1 ชามหม้อดิน" },
  { name: "ต็อกบกกี (Tteokbokki)", cat: "ของว่าง", cal: 380, protein: 7, carbs: 76, fat: 4.5, per: "ต่อ 1 ถ้วย (แป้งต็อก+ซอสโคชูจัง)" },
  { name: "ไก่ทอดเกาหลีซอสการ์ลิค (4 ชิ้น)", cat: "ของว่าง", cal: 440, protein: 26, carbs: 28, fat: 24.0, per: "ต่อ 4 ชิ้น" },
  { name: "บิบิมบับ (ข้าวยำเกาหลี)", cat: "ข้าวราด", cal: 560, protein: 22, carbs: 80, fat: 16.0, per: "ต่อ 1 ชามหินร้อน" },
  { name: "คิมบับ (ข้าวห่อสาหร่ายเกาหลี 1 เส้น)", cat: "ข้าวราด", cal: 380, protein: 12, carbs: 64, fat: 8.0, per: "ต่อ 1 เส้นหั่นชิ้น" },
  { name: "จาจังมยอน (บะหมี่ซอสถั่วดำ)", cat: "เส้น", cal: 580, protein: 18, carbs: 88, fat: 16.0, per: "ต่อ 1 ชาม" },
  { name: "กิมจิผักกาดขาว (1 ถ้วยเล็ก)", cat: "ของว่าง", cal: 30, protein: 1.5, carbs: 5, fat: 0.2, per: "ต่อ 80 กรัม" },

  // ══════════════════════════════════════════════
  // 🥤 เครื่องดื่ม & คาเฟ่ (Beverages & Cafe)
  // ══════════════════════════════════════════════
  { name: "กาแฟดำ / อเมริกาโน่ร้อนไม่หวาน", cat: "เครื่องดื่ม", cal: 5, protein: 0.3, carbs: 1.0, fat: 0.0, per: "ต่อแก้ว (ไม่ใส่น้ำตาล)" },
  { name: "อเมริกาโน่เย็นไม่หวาน", cat: "เครื่องดื่ม", cal: 10, protein: 0.5, carbs: 2.0, fat: 0.0, per: "ต่อแก้ว (ไม่ใส่น้ำเชื่อม)" },
  { name: "อเมริกาโน่น้ำส้ม", cat: "เครื่องดื่ม", cal: 130, protein: 1.5, carbs: 30.0, fat: 0.2, per: "ต่อแก้ว" },
  { name: "อเมริกาโน่น้ำมะพร้าว", cat: "เครื่องดื่ม", cal: 90, protein: 1.0, carbs: 20.0, fat: 0.2, per: "ต่อแก้ว" },
  { name: "อเมริกาโน่ยูซุโซดา", cat: "เครื่องดื่ม", cal: 120, protein: 0.5, carbs: 28.0, fat: 0.0, per: "ต่อแก้ว" },
  { name: "เอสเพรสโซ่เย็น (สูตรไทย หวานปกติ)", cat: "เครื่องดื่ม", cal: 260, protein: 6.0, carbs: 38.0, fat: 9.0, per: "ต่อแก้ว (ใส่นมข้น+นมสด)" },
  { name: "เอสเพรสโซ่เย็นหวานน้อย", cat: "เครื่องดื่ม", cal: 180, protein: 5.5, carbs: 24.0, fat: 7.0, per: "ต่อแก้ว" },
  { name: "ลาเต้เย็น (นมสดแท้ หวานน้อย)", cat: "เครื่องดื่ม", cal: 150, protein: 6.5, carbs: 16.0, fat: 6.5, per: "ต่อแก้ว" },
  { name: "ลาเต้ร้อน", cat: "เครื่องดื่ม", cal: 130, protein: 6.5, carbs: 12.0, fat: 6.0, per: "ต่อแก้ว" },
  { name: "คาปูชิโน่เย็น", cat: "เครื่องดื่ม", cal: 180, protein: 6.0, carbs: 22.0, fat: 7.0, per: "ต่อแก้ว" },
  { name: "มอคค่าเย็น", cat: "เครื่องดื่ม", cal: 280, protein: 6.0, carbs: 42.0, fat: 10.0, per: "ต่อแก้ว" },
  { name: "คาราเมลมัคคิอาโต้เย็น", cat: "เครื่องดื่ม", cal: 270, protein: 6.0, carbs: 40.0, fat: 9.5, per: "ต่อแก้ว" },
  { name: "ชาไทยเย็น (ชาเย็นหวานปกติ)", cat: "เครื่องดื่ม", cal: 320, protein: 5.0, carbs: 50.0, fat: 11.0, per: "ต่อแก้ว" },
  { name: "ชาไทยเย็นหวานน้อย", cat: "เครื่องดื่ม", cal: 210, protein: 4.5, carbs: 32.0, fat: 7.0, per: "ต่อแก้ว" },
  { name: "ชาเขียวนมเย็น", cat: "เครื่องดื่ม", cal: 290, protein: 5.0, carbs: 48.0, fat: 9.0, per: "ต่อแก้ว" },
  { name: "มัทฉะลาเต้เย็น (ไม่หวาน นมสด)", cat: "เครื่องดื่ม", cal: 120, protein: 6.5, carbs: 11.0, fat: 5.5, per: "ต่อแก้ว" },
  { name: "ชาเขียวมัทฉะเพียว (น้ำใส ไม่นม ไม่หวาน)", cat: "เครื่องดื่ม", cal: 10, protein: 1.0, carbs: 1.5, fat: 0.0, per: "ต่อแก้ว" },
  { name: "โฮจิฉะลาเต้เย็นหวานน้อย", cat: "เครื่องดื่ม", cal: 140, protein: 6.0, carbs: 16.0, fat: 5.5, per: "ต่อแก้ว" },
  { name: "ชามะนาวเย็น", cat: "เครื่องดื่ม", cal: 140, protein: 0.5, carbs: 35.0, fat: 0.0, per: "ต่อแก้ว" },
  { name: "ชาดำเย็น", cat: "เครื่องดื่ม", cal: 130, protein: 0.5, carbs: 32.0, fat: 0.0, per: "ต่อแก้ว" },
  { name: "ชาอู่หลง / ชาเขียวไม่มีน้ำตาล (ขวด)", cat: "เครื่องดื่ม", cal: 0, protein: 0.0, carbs: 0.0, fat: 0.0, per: "ต่อ 1 ขวด (500 ml)" },
  { name: "ชานมไข่มุก (หวานปกติ)", cat: "เครื่องดื่ม", cal: 380, protein: 4.0, carbs: 68.0, fat: 11.0, per: "ต่อ 1 แก้ว (รวมไข่มุก)" },
  { name: "ชานมไข่มุกบราวชูการ์", cat: "เครื่องดื่ม", cal: 430, protein: 5.0, carbs: 78.0, fat: 12.0, per: "ต่อ 1 แก้ว" },
  { name: "ชาพีชเย็น", cat: "เครื่องดื่ม", cal: 130, protein: 0.2, carbs: 32.0, fat: 0.0, per: "ต่อแก้ว" },
  { name: "โกโก้เย็นเข้มข้น", cat: "เครื่องดื่ม", cal: 290, protein: 6.0, carbs: 44.0, fat: 10.0, per: "ต่อแก้ว" },
  { name: "นมสดคาราเมลเย็น", cat: "เครื่องดื่ม", cal: 260, protein: 6.5, carbs: 38.0, fat: 8.5, per: "ต่อแก้ว" },
  { name: "นมชมพู (นมเย็น)", cat: "เครื่องดื่ม", cal: 250, protein: 5.5, carbs: 42.0, fat: 7.0, per: "ต่อแก้ว" },
  { name: "นมสดจืด (Cow milk)", cat: "เครื่องดื่ม", cal: 130, protein: 8.0, carbs: 12.0, fat: 5.5, per: "ต่อ 1 กล่อง (200-250 ml)" },
  { name: "นมจืดพร่องมันเนย (Low Fat)", cat: "เครื่องดื่ม", cal: 95, protein: 8.0, carbs: 12.0, fat: 1.8, per: "ต่อ 1 กล่อง (200-250 ml)" },
  { name: "นมอัลมอนด์ไม่หวาน", cat: "เครื่องดื่ม", cal: 40, protein: 1.5, carbs: 1.0, fat: 3.0, per: "ต่อ 1 กล่อง (180-200 ml)" },
  { name: "นมโอ๊ตไม่เติมน้ำตาล", cat: "เครื่องดื่ม", cal: 110, protein: 2.5, carbs: 16.0, fat: 4.0, per: "ต่อ 250 ml" },
  { name: "นมถั่วเหลืองไม่หวาน (Tofusan / ดีน่า)", cat: "เครื่องดื่ม", cal: 90, protein: 7.5, carbs: 4.0, fat: 4.5, per: "ต่อ 1 กล่อง (250 ml)" },
  { name: "นมถั่วเหลืองหวานปกติ (แลคตาซอย)", cat: "เครื่องดื่ม", cal: 160, protein: 6.0, carbs: 22.0, fat: 5.5, per: "ต่อ 1 กล่อง (250 ml)" },
  { name: "นมโปรตีนสูง Meiji High Protein (ไม่เติมน้ำตาล)", cat: "เครื่องดื่ม", cal: 170, protein: 28.0, carbs: 8.0, fat: 2.0, per: "ต่อ 1 ขวด (350 ml)" },
  { name: "นมโปรตีนสูง Dutch Mill High Protein", cat: "เครื่องดื่ม", cal: 180, protein: 28.0, carbs: 10.0, fat: 2.5, per: "ต่อ 1 ขวด (350 ml)" },
  { name: "เวย์โปรตีนเชค (Whey 1 scoop)", cat: "เครื่องดื่ม", cal: 125, protein: 25.0, carbs: 3.0, fat: 1.5, per: "ต่อ 1 สกู๊ป (~30g ผสมน้ำ)" },
  { name: "อกไก่ปั่นรสผลไม้ (1 ขวด)", cat: "เครื่องดื่ม", cal: 240, protein: 45.0, carbs: 10.0, fat: 2.0, per: "ต่อ 1 ขวด (~350 ml)" },
  { name: "น้ำมะพร้าวสด 100%", cat: "เครื่องดื่ม", cal: 60, protein: 1.0, carbs: 14.0, fat: 0.2, per: "ต่อ 1 ลูก / 250 ml" },
  { name: "น้ำส้มคั้นสด 100%", cat: "เครื่องดื่ม", cal: 110, protein: 1.5, carbs: 26.0, fat: 0.3, per: "ต่อ 1 แก้ว (250 ml)" },
  { name: "น้ำแตงโมปั่นหวานน้อย", cat: "เครื่องดื่ม", cal: 90, protein: 1.5, carbs: 22.0, fat: 0.3, per: "ต่อแก้ว" },
  { name: "น้ำมะนาวโซดา", cat: "เครื่องดื่ม", cal: 70, protein: 0.2, carbs: 17.0, fat: 0.0, per: "ต่อแก้ว" },
  { name: "น้ำอัดลมปกติ (โค้ก/เป๊ปซี่ 325ml)", cat: "เครื่องดื่ม", cal: 140, protein: 0.0, carbs: 35.0, fat: 0.0, per: "ต่อ 1 กระป๋อง" },
  { name: "น้ำอัดลม 0 แคลอรี่ (Coke Zero / Pepsi Max)", cat: "เครื่องดื่ม", cal: 0, protein: 0.0, carbs: 0.0, fat: 0.0, per: "ต่อ 1 กระป๋อง" },
  { name: "โซดาสิงห์ (0 แคลอรี่)", cat: "เครื่องดื่ม", cal: 0, protein: 0.0, carbs: 0.0, fat: 0.0, per: "ต่อ 1 ขวด" },
  { name: "เกลือแร่สปอนเซอร์ (ขวดแก้ว)", cat: "เครื่องดื่ม", cal: 90, protein: 0.0, carbs: 22.0, fat: 0.0, per: "ต่อ 1 ขวด" },

  // ══════════════════════════════════════════════
  // 🍎 ผลไม้สด (Fresh Fruits)
  // ══════════════════════════════════════════════
  { name: "กล้วยหอม", cat: "ผลไม้", cal: 105, protein: 1.3, carbs: 27, fat: 0.4, per: "ต่อ 1 ผลกลาง" },
  { name: "กล้วยน้ำว้า", cat: "ผลไม้", cal: 60, protein: 0.8, carbs: 15, fat: 0.1, per: "ต่อ 1 ผล" },
  { name: "กล้วยไข่", cat: "ผลไม้", cal: 45, protein: 0.6, carbs: 11, fat: 0.1, per: "ต่อ 1 ผล" },
  { name: "แอปเปิลฟูจิ (ผลกลาง)", cat: "ผลไม้", cal: 95, protein: 0.5, carbs: 25, fat: 0.3, per: "ต่อ 1 ผล (~180g)" },
  { name: "แอปเปิลเขียว", cat: "ผลไม้", cal: 80, protein: 0.6, carbs: 21, fat: 0.2, per: "ต่อ 1 ผล" },
  { name: "ฝรั่งกิมจู", cat: "ผลไม้", cal: 110, protein: 4.0, carbs: 24, fat: 1.2, per: "ต่อ 1 ผลกลาง (~200g)" },
  { name: "ส้มสายน้ำผึ้ง / เขียวหวาน", cat: "ผลไม้", cal: 60, protein: 1.2, carbs: 15, fat: 0.2, per: "ต่อ 1 ผลกลาง" },
  { name: "ส้มโอ (2 กลีบใหญ่)", cat: "ผลไม้", cal: 75, protein: 1.5, carbs: 18, fat: 0.2, per: "ต่อ 2 กลีบ (~150g)" },
  { name: "แตงโม (หั่นชิ้น)", cat: "ผลไม้", cal: 90, protein: 2.0, carbs: 22, fat: 0.5, per: "ต่อ 1 จานเล็ก (~300g)" },
  { name: "แคนตาลูป / เมลอน", cat: "ผลไม้", cal: 70, protein: 1.5, carbs: 17, fat: 0.3, per: "ต่อ 1 จานเล็ก (~200g)" },
  { name: "แก้วมังกร", cat: "ผลไม้", cal: 60, protein: 1.2, carbs: 13, fat: 0.5, per: "ต่อ 100 กรัม (ครึ่งลูก)" },
  { name: "ชมพู่ทับทิมจันทร์ (3 ผล)", cat: "ผลไม้", cal: 80, protein: 1.5, carbs: 19, fat: 0.4, per: "ต่อ 3 ผลกลาง" },
  { name: "มะละกอสุก", cat: "ผลไม้", cal: 85, protein: 1.0, carbs: 22, fat: 0.5, per: "ต่อ 1 ชิ้นยาว (~200g)" },
  { name: "สับปะรดภูแล (หั่นชิ้น)", cat: "ผลไม้", cal: 90, protein: 1.0, carbs: 24, fat: 0.2, per: "ต่อ 1 จานเล็ก (~180g)" },
  { name: "มะม่วงสุกน้ำดอกไม้", cat: "ผลไม้", cal: 140, protein: 1.5, carbs: 36, fat: 0.6, per: "ต่อ 1 ลูกกลาง (~200g)" },
  { name: "มะม่วงมันเขียวเสวย", cat: "ผลไม้", cal: 120, protein: 1.2, carbs: 30, fat: 0.4, per: "ต่อ 1 ลูก (~200g)" },
  { name: "ทุเรียนหมอนทอง (1 เม็ดกลาง)", cat: "ผลไม้", cal: 160, protein: 2.5, carbs: 28, fat: 5.0, per: "ต่อ 1 เม็ด (~100g)" },
  { name: "มังคุด (4 ผล)", cat: "ผลไม้", cal: 90, protein: 0.8, carbs: 22, fat: 0.4, per: "ต่อ 4 ผลกลาง" },
  { name: "เงาะ (6 ผล)", cat: "ผลไม้", cal: 95, protein: 1.0, carbs: 24, fat: 0.3, per: "ต่อ 6 ผล" },
  { name: "ลิ้นจี่ (6 ผล)", cat: "ผลไม้", cal: 80, protein: 1.0, carbs: 20, fat: 0.5, per: "ต่อ 6 ผล" },
  { name: "ลำไย (10 เม็ด)", cat: "ผลไม้", cal: 70, protein: 1.3, carbs: 18, fat: 0.1, per: "ต่อ 10 เม็ด" },
  { name: "อะโวคาโด (ครึ่งลูก)", cat: "ผลไม้", cal: 160, protein: 2.0, carbs: 9, fat: 15.0, per: "ต่อครึ่งผล (~100g)" },
  { name: "สตรอว์เบอร์รีสด (1 ถ้วย)", cat: "ผลไม้", cal: 50, protein: 1.0, carbs: 12, fat: 0.5, per: "ต่อ 1 ถ้วย (~150g)" },
  { name: "บลูเบอร์รีสด (1 ถ้วย)", cat: "ผลไม้", cal: 85, protein: 1.1, carbs: 21, fat: 0.5, per: "ต่อ 1 ถ้วย (~150g)" },
  { name: "องุ่นไร้เมล็ด (1 ถ้วย)", cat: "ผลไม้", cal: 100, protein: 1.0, carbs: 27, fat: 0.3, per: "ต่อ 1 ถ้วย (~150g)" },
  { name: "กีวี (1 ผล)", cat: "ผลไม้", cal: 45, protein: 0.9, carbs: 11, fat: 0.4, per: "ต่อ 1 ผลกลาง" },

  // ══════════════════════════════════════════════
  // 🥜 ของว่าง / ขนมไทย / เบเกอรี่ (Snacks, Sweets & Bakery)
  // ══════════════════════════════════════════════
  { name: "โยเกิร์ตรสธรรมชาติ", cat: "ของว่าง", cal: 110, protein: 6.0, carbs: 14, fat: 3.5, per: "ต่อ 1 ถ้วย (~135g)" },
  { name: "กรีกโยเกิร์ตแท้ (ไม่หวาน)", cat: "ของว่าง", cal: 120, protein: 15.0, carbs: 6, fat: 4.0, per: "ต่อ 1 ถ้วย (~130g)" },
  { name: "อัลมอนด์อบ (ไม่ใส่เกลือ)", cat: "ของว่าง", cal: 170, protein: 6.0, carbs: 6, fat: 15.0, per: "ต่อ 1 กำมือ (~30g / 23 เม็ด)" },
  { name: "ถั่วลิสงอบ", cat: "ของว่าง", cal: 170, protein: 7.5, carbs: 6, fat: 14.0, per: "ต่อ 1 กำมือ (~30g)" },
  { name: "เม็ดมะม่วงหิมพานต์อบ", cat: "ของว่าง", cal: 170, protein: 5.0, carbs: 9, fat: 13.0, per: "ต่อ 1 กำมือ (~30g)" },
  { name: "ถั่วพิสตาชิโออบ", cat: "ของว่าง", cal: 160, protein: 6.0, carbs: 8, fat: 13.0, per: "ต่อ 1 กำมือ (~30g)" },
  { name: "เมล็ดฟักทองอบ", cat: "ของว่าง", cal: 150, protein: 7.0, carbs: 5, fat: 13.0, per: "ต่อ 1 กำมือ (~30g)" },
  { name: "มันหวานญี่ปุ่นนึ่ง", cat: "ของว่าง", cal: 160, protein: 2.5, carbs: 38, fat: 0.3, per: "ต่อ 1 หัวกลาง (~180g)" },
  { name: "ฟักทองนึ่ง", cat: "ของว่าง", cal: 60, protein: 1.8, carbs: 14, fat: 0.3, per: "ต่อ 1 ถ้วย (~150g)" },
  { name: "ข้าวโพดหวานต้ม (1 ฝัก)", cat: "ของว่าง", cal: 140, protein: 4.5, carbs: 30, fat: 1.8, per: "ต่อ 1 ฝักกลาง" },
  { name: "กล้วยปิ้ง (ไม่ราดน้ำเชื่อม)", cat: "ของว่าง", cal: 140, protein: 1.8, carbs: 34, fat: 0.3, per: "ต่อ 2 ลูก" },
  { name: "กล้วยปิ้งราดน้ำกะทิหวาน", cat: "ของว่าง", cal: 260, protein: 2.2, carbs: 54, fat: 5.0, per: "ต่อ 1 ชุด (2 ลูก)" },
  { name: "โปรตีนบาร์ (Protein Bar)", cat: "ของว่าง", cal: 210, protein: 20.0, carbs: 22, fat: 7.0, per: "ต่อ 1 แท่ง (~60g)" },
  { name: "เนยถั่ว (Peanut butter 1 ชต.)", cat: "ของว่าง", cal: 95, protein: 4.0, carbs: 3.5, fat: 8.0, per: "ต่อ 1 ช้อนโต๊ะ (16g)" },
  { name: "ข้าวเหนียวมะม่วงชุดเล็ก", cat: "ขนม", cal: 420, protein: 5.0, carbs: 78, fat: 12.0, per: "ต่อ 1 ชุดเล็ก (ข้าวเหนียวมูน + มะม่วง)" },
  { name: "ข้าวเหนียวทุเรียน", cat: "ขนม", cal: 460, protein: 6.0, carbs: 82, fat: 15.0, per: "ต่อ 1 ถ้วย" },
  { name: "บัวลอยไข่หวาน", cat: "ขนม", cal: 380, protein: 7.0, carbs: 58, fat: 14.0, per: "ต่อ 1 ถ้วย" },
  { name: "บัวลอยน้ำขิง (4 ลูก)", cat: "ขนม", cal: 220, protein: 4.0, carbs: 46, fat: 3.0, per: "ต่อ 1 ถ้วย (งาดำ)" },
  { name: "ลอดช่องน้ำกะทิ", cat: "ขนม", cal: 280, protein: 2.5, carbs: 48, fat: 10.0, per: "ต่อ 1 ถ้วย" },
  { name: "ทับทิมกรอบน้ำกะทิ", cat: "ขนม", cal: 290, protein: 2.0, carbs: 52, fat: 9.0, per: "ต่อ 1 ถ้วย" },
  { name: "เฉาก๊วยนมสด", cat: "ขนม", cal: 220, protein: 4.5, carbs: 38, fat: 6.0, per: "ต่อ 1 ถ้วย" },
  { name: "รวมมิตรน้ำกะทิ", cat: "ขนม", cal: 320, protein: 3.0, carbs: 56, fat: 11.0, per: "ต่อ 1 ถ้วย" },
  { name: "เต้าทึงน้ำลำไย", cat: "ขนม", cal: 190, protein: 3.5, carbs: 44, fat: 0.5, per: "ต่อ 1 ถ้วย (ไม่ใส่กะทิ)" },
  { name: "เต้าฮวยน้ำขิง", cat: "ขนม", cal: 140, protein: 6.0, carbs: 24, fat: 2.5, per: "ต่อ 1 ถ้วย" },
  { name: "ขนมครก (1 คู่)", cat: "ขนม", cal: 110, protein: 1.8, carbs: 14, fat: 5.5, per: "ต่อ 1 คู่" },
  { name: "ขนมถ้วยตะไล (1 คู่)", cat: "ขนม", cal: 130, protein: 1.5, carbs: 22, fat: 4.5, per: "ต่อ 1 คู่" },
  { name: "ขนมชั้น (2 ชิ้น)", cat: "ขนม", cal: 180, protein: 1.0, carbs: 36, fat: 4.0, per: "ต่อ 2 ชิ้น" },
  { name: "ทองหยอด / ฝอยทอง (1 ชุดเล็ก)", cat: "ขนม", cal: 240, protein: 4.0, carbs: 48, fat: 4.5, per: "ต่อ 1 ชุดเล็ก" },
  { name: "โรตีธรรมดาใส่นมน้ำตาล", cat: "ขนม", cal: 340, protein: 6.0, carbs: 52, fat: 13.0, per: "ต่อ 1 แผ่น" },
  { name: "โรตีกล้วยหอมใส่ไข่", cat: "ขนม", cal: 460, protein: 10.0, carbs: 68, fat: 18.0, per: "ต่อ 1 แผ่น" },
  { name: "ฮันนี่โทสต์ไอศกรีม", cat: "ขนม", cal: 780, protein: 12.0, carbs: 105, fat: 36.0, per: "ต่อ 1 จาน (แบ่งทาน)" },
  { name: "บิงซูสตรอว์เบอร์รี", cat: "ขนม", cal: 450, protein: 8.0, carbs: 75, fat: 14.0, per: "ต่อ 1 ถ้วยกลาง" },
  { name: "บิงซูมะม่วง", cat: "ขนม", cal: 480, protein: 7.0, carbs: 82, fat: 15.0, per: "ต่อ 1 ถ้วยกลาง" },
  { name: "ไอศกรีมวานิลลา / ช็อกโกแลต", cat: "ขนม", cal: 150, protein: 3.0, carbs: 18, fat: 8.0, per: "ต่อ 1 สกู๊ป (~75g)" },
  { name: "โดนัทเกลซ Krispy Kreme", cat: "ขนม", cal: 190, protein: 3.0, carbs: 22, fat: 11.0, per: "ต่อ 1 ชิ้น" },
  { name: "เค้กช็อกโกแลตหน้านิ่ม", cat: "ขนม", cal: 360, protein: 5.0, carbs: 48, fat: 18.0, per: "ต่อ 1 ชิ้น" },
  { name: "ชีสเค้กหน้าไหม้ (Basque Cheesecake)", cat: "ขนม", cal: 400, protein: 8.0, carbs: 32, fat: 28.0, per: "ต่อ 1 ชิ้น" },
  { name: "บราวนี่ฟัดจ์ช็อกโกแลต", cat: "ขนม", cal: 260, protein: 4.0, carbs: 34, fat: 13.0, per: "ต่อ 1 ชิ้น" },
  { name: "ขนมปังปิ้งเนยนมข้น (1 แผ่น)", cat: "ขนม", cal: 210, protein: 4.0, carbs: 30, fat: 9.0, per: "ต่อ 1 แผ่น" },

  // ══════════════════════════════════════════════
  // 🍔 ฟาสต์ฟู้ดแบรนด์ดัง (Fast Food: McDonald's, KFC, Pizza, Burger King, Chester's, Subway, Bonchon)
  // ══════════════════════════════════════════════
  // McDonald's
  { name: "McDonald's เบอร์เกอร์บิ๊กแมค (Big Mac)", cat: "ฟาสต์ฟู้ด", cal: 550, protein: 25, carbs: 45, fat: 30, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's ดับเบิ้ลชีสเบอร์เกอร์ (Double Cheeseburger)", cat: "ฟาสต์ฟู้ด", cal: 450, protein: 25, carbs: 34, fat: 24, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's แมคฟิช (Filet-O-Fish)", cat: "ฟาสต์ฟู้ด", cal: 380, protein: 16, carbs: 39, fat: 18, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's แมคสไปซี่ชิกเก้นเบอร์เกอร์", cat: "ฟาสต์ฟู้ด", cal: 520, protein: 24, carbs: 50, fat: 25, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's ซามูไรเบอร์เกอร์หมู", cat: "ฟาสต์ฟู้ด", cal: 490, protein: 18, carbs: 44, fat: 27, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's แมคนักเก็ต (6 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 270, protein: 15, carbs: 16, fat: 16, per: "ต่อ 6 ชิ้น (ไม่รวมซอส)" },
  { name: "McDonald's แมคนักเก็ต (10 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 450, protein: 25, carbs: 27, fat: 27, per: "ต่อ 10 ชิ้น" },
  { name: "McDonald's เฟรนช์ฟรายส์ ขนาดกลาง (M)", cat: "ฟาสต์ฟู้ด", cal: 340, protein: 4, carbs: 44, fat: 16, per: "ต่อ 1 ซองกลาง" },
  { name: "McDonald's เฟรนช์ฟรายส์ ขนาดใหญ่ (L)", cat: "ฟาสต์ฟู้ด", cal: 480, protein: 6, carbs: 64, fat: 23, per: "ต่อ 1 ซองใหญ่" },
  { name: "McDonald's แฮชบราวน์ (Hash Browns)", cat: "ฟาสต์ฟู้ด", cal: 150, protein: 1.5, carbs: 16, fat: 9, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's พายแอปเปิ้ล (Apple Pie)", cat: "ขนม", cal: 230, protein: 2, carbs: 32, fat: 11, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's พายข้าวโพด (Corn Pie)", cat: "ขนม", cal: 260, protein: 3, carbs: 35, fat: 12, per: "ต่อ 1 ชิ้น" },
  { name: "McDonald's แมคเฟลอร์รี่ โอริโอ้ (McFlurry Oreo)", cat: "ขนม", cal: 340, protein: 7, carbs: 54, fat: 11, per: "ต่อ 1 ถ้วย" },
  { name: "McDonald's ซอฟต์เสิร์ฟโคน (Ice Cream Cone)", cat: "ขนม", cal: 140, protein: 3.5, carbs: 23, fat: 3.8, per: "ต่อ 1 โคน" },

  // KFC
  { name: "KFC ไก่ทอดสูตรผู้พัน (Original 1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 260, protein: 22, carbs: 8, fat: 16, per: "ต่อ 1 ชิ้น (สะโพก/อก)" },
  { name: "KFC ไก่ทอดฮอตแอนด์สไปซี่ (Hot & Spicy 1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 320, protein: 20, carbs: 14, fat: 21, per: "ต่อ 1 ชิ้น" },
  { name: "KFC วิงซ์แซ่บ (3 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 270, protein: 18, carbs: 12, fat: 17, per: "ต่อ 3 ชิ้น" },
  { name: "KFC ไก่ป๊อป (7 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 180, protein: 10, carbs: 14, fat: 9, per: "ต่อ 1 ชุดเล็ก (7 ชิ้น)" },
  { name: "KFC ข้าวยำไก่แซ่บ", cat: "ฟาสต์ฟู้ด", cal: 560, protein: 28, carbs: 72, fat: 18, per: "ต่อ 1 ถ้วย" },
  { name: "KFC ข้าวยำไก่ซี้ด", cat: "ฟาสต์ฟู้ด", cal: 540, protein: 26, carbs: 70, fat: 17, per: "ต่อ 1 ถ้วย" },
  { name: "KFC ข้าวไก่กรอบแกงเขียวหวาน", cat: "ฟาสต์ฟู้ด", cal: 590, protein: 24, carbs: 76, fat: 22, per: "ต่อ 1 ถ้วย" },
  { name: "KFC ทาร์ตไข่ (Egg Tart 1 ชิ้น)", cat: "ขนม", cal: 220, protein: 4, carbs: 22, fat: 13, per: "ต่อ 1 ชิ้น" },
  { name: "KFC มันบด (Mashed Potato ถ้วยปกติ)", cat: "ฟาสต์ฟู้ด", cal: 90, protein: 1.5, carbs: 17, fat: 1.5, per: "ต่อ 1 ถ้วยปกติ" },
  { name: "KFC โคลสลอว์ (Coleslaw)", cat: "ฟาสต์ฟู้ด", cal: 140, protein: 1, carbs: 12, fat: 10, per: "ต่อ 1 ถ้วยปกติ" },
  { name: "KFC นักเก็ตส์ (6 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 250, protein: 14, carbs: 15, fat: 15, per: "ต่อ 6 ชิ้น" },

  // The Pizza Company & Pizza Hut
  { name: "The Pizza Company พิซซ่าฮาวายเอี้ยน หนานุ่ม (1 ชิ้นถาดกลาง)", cat: "ฟาสต์ฟู้ด", cal: 270, protein: 11, carbs: 32, fat: 11, per: "ต่อ 1 ชิ้น (ถาดกลาง 6 ชิ้น)" },
  { name: "The Pizza Company พิซซ่ามีทเดอลุกซ์ หนานุ่ม (1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 310, protein: 14, carbs: 32, fat: 14, per: "ต่อ 1 ชิ้น" },
  { name: "The Pizza Company พิซซ่าซีฟู้ดเดอลุกซ์ (1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 260, protein: 12, carbs: 31, fat: 10, per: "ต่อ 1 ชิ้น" },
  { name: "The Pizza Company พิซซ่าบางกรอบ ฮาวายเอี้ยน (1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 180, protein: 9, carbs: 18, fat: 8, per: "ต่อ 1 ชิ้นแป้งบางกรอบ" },
  { name: "The Pizza Company ปีกไก่บาร์บีคิว (4 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 320, protein: 24, carbs: 12, fat: 19, per: "ต่อ 4 ชิ้น" },
  { name: "The Pizza Company ขนมปังกระเทียม (1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 140, protein: 3, carbs: 16, fat: 7, per: "ต่อ 1 ชิ้น" },
  { name: "The Pizza Company สปาเก็ตตี้ขี้เมาไส้กรอก", cat: "เส้น", cal: 480, protein: 18, carbs: 64, fat: 16, per: "ต่อ 1 จาน" },

  // Burger King
  { name: "Burger King วอปเปอร์ (Whopper)", cat: "ฟาสต์ฟู้ด", cal: 660, protein: 28, carbs: 50, fat: 39, per: "ต่อ 1 ชิ้น" },
  { name: "Burger King วอปเปอร์ จูเนียร์ (Whopper Jr.)", cat: "ฟาสต์ฟู้ด", cal: 340, protein: 14, carbs: 29, fat: 19, per: "ต่อ 1 ชิ้น" },
  { name: "Burger King ดับเบิ้ลเบคอนชีสเบอร์เกอร์", cat: "ฟาสต์ฟู้ด", cal: 580, protein: 32, carbs: 32, fat: 36, per: "ต่อ 1 ชิ้น" },
  { name: "Burger King ซิงเกิ้ลมัชรูมสวิสเบอร์เกอร์", cat: "ฟาสต์ฟู้ด", cal: 460, protein: 22, carbs: 32, fat: 27, per: "ต่อ 1 ชิ้น" },
  { name: "Burger King หอมทอด (Onion Rings ขนาดกลาง)", cat: "ของว่าง", cal: 320, protein: 3, carbs: 40, fat: 16, per: "ต่อ 1 ซอง" },

  // Chester's Grill
  { name: "Chester's ข้าวไก่เผ็ดเชสเตอร์", cat: "ฟาสต์ฟู้ด", cal: 520, protein: 28, carbs: 68, fat: 14, per: "ต่อ 1 จาน" },
  { name: "Chester's ข้าวไก่อบเชสเตอร์", cat: "ฟาสต์ฟู้ด", cal: 490, protein: 30, carbs: 68, fat: 10, per: "ต่อ 1 จาน" },
  { name: "Chester's ข้าวสเต๊กปลาลุยสวน", cat: "ฟาสต์ฟู้ด", cal: 540, protein: 26, carbs: 70, fat: 17, per: "ต่อ 1 จาน" },
  { name: "Chester's ไก่ย่างเชสเตอร์ (1 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 240, protein: 26, carbs: 3, fat: 13, per: "ต่อ 1 ชิ้น" },
  { name: "Chester's ฮอทดอกเชสเตอร์", cat: "ฟาสต์ฟู้ด", cal: 310, protein: 11, carbs: 26, fat: 18, per: "ต่อ 1 ชิ้น" },

  // Subway
  { name: "Subway แซนด์วิชไก่อบ 6 นิ้ว (Roasted Chicken Sub)", cat: "ฟาสต์ฟู้ด", cal: 320, protein: 24, carbs: 44, fat: 5, per: "ต่อ 6 นิ้ว (ขนมปังวีท+ผักสด ไม่รวมซอส)" },
  { name: "Subway แซนด์วิชทูน่า 6 นิ้ว (Tuna Sub)", cat: "ฟาสต์ฟู้ด", cal: 450, protein: 20, carbs: 44, fat: 21, per: "ต่อ 6 นิ้ว" },
  { name: "Subway แซนด์วิชอกไก่งวง 6 นิ้ว (Turkey Breast Sub)", cat: "ฟาสต์ฟู้ด", cal: 280, protein: 18, carbs: 45, fat: 3.5, per: "ต่อ 6 นิ้ว" },
  { name: "Subway แซนด์วิชอิตาเลียน บีเอ็มที 6 นิ้ว (Italian B.M.T.)", cat: "ฟาสต์ฟู้ด", cal: 410, protein: 20, carbs: 45, fat: 17, per: "ต่อ 6 นิ้ว" },
  { name: "Subway คุกกี้ช็อกโกแลตชิพ (1 ชิ้น)", cat: "ขนม", cal: 210, protein: 2, carbs: 30, fat: 10, per: "ต่อ 1 ชิ้น" },

  // Bonchon
  { name: "Bonchon ไก่ทอดบอนชอน ซอยการ์ลิค น่องเล็ก (4 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 480, protein: 32, carbs: 32, fat: 24, per: "ต่อ 4 ชิ้น (น่องเล็ก S)" },
  { name: "Bonchon ไก่ทอดบอนชอน ฮอท ปีก (4 ชิ้น)", cat: "ฟาสต์ฟู้ด", cal: 460, protein: 30, carbs: 30, fat: 24, per: "ต่อ 4 ชิ้น (ปีก S)" },
  { name: "Bonchon ซุปกิมจิเต้าหู้อ่อน", cat: "ซุป", cal: 240, protein: 16, carbs: 14, fat: 13, per: "ต่อ 1 ถ้วย" },
  { name: "Bonchon ข้าวผัดกิมจิห่อสาหร่าย", cat: "ข้าวผัด", cal: 520, protein: 18, carbs: 76, fat: 15, per: "ต่อ 1 ที่" },

  // ══════════════════════════════════════════════
  // 🍲 เชนร้านอาหารยอดนิยมในห้าง (MK, Bar B Q Plaza, Hachiban, Yayoi, S&P, Shabushi, Mo-Mo)
  // ══════════════════════════════════════════════
  // MK Restaurants
  { name: "MK บะหมี่หยกเป็ดย่าง (1 จาน)", cat: "เส้น", cal: 520, protein: 26, carbs: 64, fat: 18, per: "ต่อ 1 จาน (บะหมี่ 2 ก้อน + เป็ดย่าง)" },
  { name: "MK เป็ดย่าง จานเล็ก", cat: "กับข้าว", cal: 380, protein: 28, carbs: 8, fat: 26, per: "ต่อ 1 จานเล็ก (~150g)" },
  { name: "MK เป็ดย่าง จานใหญ่", cat: "กับข้าว", cal: 760, protein: 56, carbs: 16, fat: 52, per: "ต่อ 1 จานใหญ่ (~300g แบ่งทาน)" },
  { name: "MK หมูกรอบ จานเล็ก", cat: "กับข้าว", cal: 420, protein: 18, carbs: 6, fat: 36, per: "ต่อ 1 จานเล็ก" },
  { name: "MK บะหมี่หยก (1 ก้อน)", cat: "เส้น", cal: 160, protein: 5, carbs: 32, fat: 1.5, per: "ต่อ 1 ก้อน (ไม่รวมเป็ด)" },
  { name: "MK ลูกชิ้นเอ็มเค (3 ลูก)", cat: "โปรตีน", cal: 90, protein: 8, carbs: 6, fat: 3.5, per: "ต่อ 1 คอนโด (3 ลูก)" },
  { name: "MK ขนมจีบกุ้ง (3 ลูก)", cat: "อาหารเช้า", cal: 130, protein: 9, carbs: 10, fat: 5, per: "ต่อ 1 เข่ง" },
  { name: "MK เผือกทอด (2 ชิ้น)", cat: "ของว่าง", cal: 260, protein: 4, carbs: 28, fat: 15, per: "ต่อ 1 จาน (2 ชิ้น)" },
  { name: "MK ชุดผักสุขภาพ สุกี้ (ชุดเล็ก)", cat: "ผัด", cal: 120, protein: 6, carbs: 22, fat: 1, per: "ต่อ 1 เซตผักรวม" },

  // Bar B Q Plaza (บาร์บีกอน)
  { name: "Bar B Q Plaza ข้าวผัดกระเทียมบาร์บีกอน (1 ถ้วย)", cat: "ข้าวผัด", cal: 280, protein: 6, carbs: 48, fat: 7, per: "ต่อ 1 ถ้วย" },
  { name: "Bar B Q Plaza หมูสันคอสไลซ์ (1 ถาดคอนโด)", cat: "โปรตีน", cal: 190, protein: 18, carbs: 0, fat: 13, per: "ต่อ 1 ถาด (~100g)" },
  { name: "Bar B Q Plaza เบคอนหมูสไลซ์ (1 ถาดคอนโด)", cat: "โปรตีน", cal: 320, protein: 14, carbs: 0, fat: 29, per: "ต่อ 1 ถาด (~100g)" },
  { name: "Bar B Q Plaza เกี๊ยวซ่าทอดบาร์บีกอน (5 ชิ้น)", cat: "ของว่าง", cal: 280, protein: 9, carbs: 26, fat: 15, per: "ต่อ 1 จาน" },
  { name: "Bar B Q Plaza อุด้งผัดเบคอน", cat: "เส้น", cal: 510, protein: 16, carbs: 65, fat: 20, per: "ต่อ 1 ที่" },

  // Hachiban Ramen (ฮะจิบัง ราเมน)
  { name: "Hachiban ฮะจังเมน (Hachang-men)", cat: "เส้น", cal: 420, protein: 18, carbs: 66, fat: 9, per: "ต่อ 1 ชาม (ราเมนซุปโชยุ)" },
  { name: "Hachiban ชาชูเมน (Chashu-men)", cat: "เส้น", cal: 520, protein: 24, carbs: 68, fat: 16, per: "ต่อ 1 ชาม" },
  { name: "Hachiban ต้มยำชาชูเมน (Tom Yum Chashu-men)", cat: "เส้น", cal: 540, protein: 24, carbs: 70, fat: 17, per: "ต่อ 1 ชาม" },
  { name: "Hachiban ไพตันราเมน (Paitan Ramen)", cat: "เส้น", cal: 560, protein: 22, carbs: 68, fat: 22, per: "ต่อ 1 ชาม (ซุปกระดูกหมูข้น)" },
  { name: "Hachiban ซารุราเมน (Zaru Ramen บะหมี่เย็น)", cat: "เส้น", cal: 380, protein: 14, carbs: 76, fat: 2, per: "ต่อ 1 เซต" },
  { name: "Hachiban เกี๊ยวซ่าซ่า (Gyoza 6 ชิ้น)", cat: "ของว่าง", cal: 260, protein: 10, carbs: 24, fat: 13, per: "ต่อ 6 ชิ้น" },
  { name: "Hachiban ไก่คาราเกะ (4 ชิ้น)", cat: "ของว่าง", cal: 290, protein: 18, carbs: 12, fat: 19, per: "ต่อ 4 ชิ้น" },
  { name: "Hachiban ทาโกะยากิ (4 ลูก)", cat: "ของว่าง", cal: 220, protein: 6, carbs: 28, fat: 9, per: "ต่อ 4 ลูก" },

  // Yayoi (ยาโยอิ)
  { name: "Yayoi เซตหมูทอดทงคัตสึ (Tonkatsu Set)", cat: "ข้าวราด", cal: 790, protein: 32, carbs: 95, fat: 30, per: "ต่อ 1 เซต (รวมข้าว+ซุป+สลัด)" },
  { name: "Yayoi เซตสเต๊กหมูกระทะร้อน (Pork Steak Set)", cat: "ข้าวราด", cal: 680, protein: 34, carbs: 80, fat: 24, per: "ต่อ 1 เซต" },
  { name: "Yayoi เซตปลาซาบะย่างซีอิ๊ว (Saba Teriyaki Set)", cat: "ข้าวราด", cal: 620, protein: 32, carbs: 78, fat: 18, per: "ต่อ 1 เซต" },
  { name: "Yayoi เซตปลาแซลมอนย่างเกลือ (Salmon Shio Set)", cat: "ข้าวราด", cal: 580, protein: 36, carbs: 75, fat: 15, per: "ต่อ 1 เซต" },

  // S&P
  { name: "S&P ข้าวผัดน้ำพริกลงเรือ S&P", cat: "ข้าวผัด", cal: 580, protein: 22, carbs: 74, fat: 21, per: "ต่อ 1 จาน" },
  { name: "S&P ข้าวคลุกกะปิ S&P", cat: "ข้าวราด", cal: 590, protein: 22, carbs: 78, fat: 21, per: "ต่อ 1 จาน" },
  { name: "S&P ข้าวไก่อบ S&P", cat: "ข้าวราด", cal: 490, protein: 30, carbs: 68, fat: 10, per: "ต่อ 1 จาน" },
  { name: "S&P พายไก่ (Chicken Pie 1 ชิ้น)", cat: "ขนม", cal: 260, protein: 7, carbs: 24, fat: 15, per: "ต่อ 1 ชิ้น" },
  { name: "S&P พายสับปะรด (Pineapple Pie 1 ชิ้น)", cat: "ขนม", cal: 230, protein: 2, carbs: 32, fat: 10, per: "ต่อ 1 ชิ้น" },
  { name: "S&P เค้กเนยสดบัตเตอร์ (Butter Cake 1 ชิ้น)", cat: "ขนม", cal: 210, protein: 3, carbs: 24, fat: 11, per: "ต่อ 1 ชิ้น" },

  // Shabushi & Mo-Mo-Paradise
  { name: "Mo-Mo-Paradise ชาบูเนื้อ US (1 ถาด)", cat: "โปรตีน", cal: 220, protein: 20, carbs: 0, fat: 15, per: "ต่อ 1 ถาด (~100g)" },
  { name: "Mo-Mo-Paradise ชาบูหมูคุโรบูตะ (1 ถาด)", cat: "โปรตีน", cal: 240, protein: 18, carbs: 0, fat: 18, per: "ต่อ 1 ถาด (~100g)" },
  { name: "Mo-Mo-Paradise ซุปสุกี้ยากี้น้ำดำ (1 ถ้วยซุป)", cat: "ซุป", cal: 60, protein: 2, carbs: 12, fat: 0.5, per: "ต่อ 1 ถ้วยตักซุป" },
  { name: "Mo-Mo-Paradise ไข่ดิบจิ้มเนื้อ (1 ฟอง)", cat: "ไข่", cal: 75, protein: 6.5, carbs: 0.6, fat: 5, per: "ต่อ 1 ฟองเกรดทานดิบ" },
  { name: "Shabushi ซูชิหน้ากุ้ง (1 คำ)", cat: "ของว่าง", cal: 45, protein: 3, carbs: 8, fat: 0.3, per: "ต่อ 1 คำ" },
  { name: "Shabushi ซูชิหน้าแซลมอน (1 คำ)", cat: "ของว่าง", cal: 55, protein: 3.5, carbs: 8, fat: 1, per: "ต่อ 1 คำ" },
  { name: "Shabushi สลัดมันฝรั่ง (1 ถ้วยเล็ก)", cat: "สลัด", cal: 160, protein: 2, carbs: 18, fat: 9, per: "ต่อ 1 ถ้วย" },

  // ══════════════════════════════════════════════
  // 🏪 อาหารกล่อง EZYGO, ไส้กรอก CP, ฟาร์มเฮ้าส์ & 7-Eleven
  // ══════════════════════════════════════════════
  // ข้าวกล่อง EZYGO / 7-11
  { name: "7-11 EZYGO ข้าวผัดกะเพราหมู", cat: "ข้าวราด", cal: 460, protein: 18, carbs: 68, fat: 13, per: "ต่อ 1 กล่อง (~280g)" },
  { name: "7-11 EZYGO ข้าวกะเพราไก่ไข่ดาว", cat: "ข้าวราด", cal: 580, protein: 24, carbs: 70, fat: 22, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวผัดกุ้ง", cat: "ข้าวผัด", cal: 420, protein: 16, carbs: 66, fat: 10, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวผัดปู", cat: "ข้าวผัด", cal: 410, protein: 15, carbs: 66, fat: 9, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวกะเพราหมูกรอบ", cat: "ข้าวราด", cal: 590, protein: 17, carbs: 68, fat: 28, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวหมูทอดกระเทียม", cat: "ข้าวราด", cal: 480, protein: 20, carbs: 68, fat: 14, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวไก่เทอริยากิ", cat: "ข้าวราด", cal: 440, protein: 22, carbs: 70, fat: 8, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวพะแนงหมู", cat: "ข้าวราด", cal: 490, protein: 19, carbs: 68, fat: 16, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวแกงเขียวหวานไก่", cat: "ข้าวราด", cal: 470, protein: 20, carbs: 68, fat: 14, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวคลุกกะปิ", cat: "ข้าวราด", cal: 520, protein: 18, carbs: 78, fat: 15, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวปลาซาบะย่างซีอิ๊ว", cat: "ข้าวราด", cal: 460, protein: 22, carbs: 68, fat: 11, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวมันไก่", cat: "ข้าวราด", cal: 520, protein: 22, carbs: 68, fat: 18, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ข้าวไข่เจียวกุ้ง", cat: "ข้าวราด", cal: 480, protein: 16, carbs: 64, fat: 18, per: "ต่อ 1 กล่อง" },

  // สปาเก็ตตี้ & เมนูเส้น 7-11
  { name: "7-11 EZYGO สปาเก็ตตี้คาโบนาร่า", cat: "เส้น", cal: 460, protein: 15, carbs: 54, fat: 20, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO สปาเก็ตตี้ขี้เมาไก่", cat: "เส้น", cal: 390, protein: 18, carbs: 56, fat: 10, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO สปาเก็ตตี้ซอสมะเขือเทศไก่สับ", cat: "เส้น", cal: 370, protein: 17, carbs: 56, fat: 8, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO มักกะโรนีผัดกุ้ง", cat: "เส้น", cal: 380, protein: 16, carbs: 54, fat: 11, per: "ต่อ 1 กล่อง" },
  { name: "7-11 EZYGO ผัดซีอิ๊วหมู", cat: "เส้น", cal: 450, protein: 18, carbs: 62, fat: 14, per: "ต่อ 1 กล่อง" },
  { name: "7-11 CP เกี๊ยวกุ้งน้ำ EZYGO", cat: "น้ำแกง", cal: 170, protein: 12, carbs: 22, fat: 3.5, per: "ต่อ 1 ถ้วย (เกี๊ยวกุ้ง 5 ตัว)" },
  { name: "7-11 CP เกี๊ยวกุ้งต้มยำ", cat: "ต้ม", cal: 210, protein: 13, carbs: 26, fat: 5, per: "ต่อ 1 ถ้วย" },

  // เบเกอรี่, ขนมปังฟาร์มเฮ้าส์ & ไส้กรอก CP
  { name: "Farmhouse ขนมปังแซนด์วิชทูน่ามายองเนส", cat: "อาหารเช้า", cal: 240, protein: 10, carbs: 28, fat: 9, per: "ต่อ 1 ซอง" },
  { name: "Farmhouse ขนมปังแซนด์วิชหมูหยองมายองเนส", cat: "อาหารเช้า", cal: 260, protein: 8, carbs: 32, fat: 11, per: "ต่อ 1 ซอง" },
  { name: "Farmhouse ขนมปังโฮลวีตชนิดแผ่น (1 แผ่น)", cat: "อาหารเช้า", cal: 65, protein: 3, carbs: 12, fat: 0.8, per: "ต่อ 1 แผ่น" },
  { name: "7-11 แซนด์วิชเบคอนไข่ดาว", cat: "อาหารเช้า", cal: 320, protein: 12, carbs: 28, fat: 17, per: "ต่อ 1 ชิ้น" },
  { name: "7-11 แซนด์วิชครัวซองต์ไส้กรอกชีส", cat: "อาหารเช้า", cal: 390, protein: 11, carbs: 35, fat: 23, per: "ต่อ 1 ชิ้น" },
  { name: "7-11 CP ไส้กรอกเวียนเนอร์ (1 แพ็ก)", cat: "อาหารเช้า", cal: 260, protein: 12, carbs: 4, fat: 22, per: "ต่อ 1 ซอง (4 ชิ้น)" },
  { name: "7-11 CP ไส้กรอกมินิคอกเทล (1 แพ็ก)", cat: "อาหารเช้า", cal: 230, protein: 10, carbs: 4, fat: 19, per: "ต่อ 1 ซอง" },
  { name: "7-11 CP สโมคกี้ไบท์", cat: "อาหารเช้า", cal: 270, protein: 11, carbs: 5, fat: 23, per: "ต่อ 1 ซอง" },
  { name: "7-11 CP โบโลน่าหมูพริก (1 ซอง)", cat: "อาหารเช้า", cal: 170, protein: 11, carbs: 3, fat: 12, per: "ต่อ 1 ซอง (~100g)" },
  { name: "7-11 CP โบโลน่าไก่ (1 ซอง)", cat: "อาหารเช้า", cal: 160, protein: 12, carbs: 3, fat: 10, per: "ต่อ 1 ซอง (~100g)" },
  { name: "7-11 อกไก่นุ่มรสกระเทียมพริกไทย CP", cat: "โปรตีน", cal: 90, protein: 18, carbs: 1.5, fat: 1.2, per: "ต่อ 1 ซอง (~80g)" },
  { name: "7-11 อกไก่นุ่มรสพริกสด CP", cat: "โปรตีน", cal: 90, protein: 18, carbs: 2, fat: 1.2, per: "ต่อ 1 ซอง (~80g)" },
  { name: "7-11 สันในไก่ย่างถ่าน CP", cat: "โปรตีน", cal: 100, protein: 20, carbs: 2, fat: 1.5, per: "ต่อ 1 ซอง (~90g)" },
  { name: "7-11 กล้วยหอมทอง (1 ผล)", cat: "ผลไม้", cal: 110, protein: 1.3, carbs: 28, fat: 0.3, per: "ต่อ 1 ผลในซอง" },
  { name: "7-11 ไดฟุกุสตรอว์เบอร์รีถั่วแดง", cat: "ขนม", cal: 180, protein: 3, carbs: 38, fat: 1.5, per: "ต่อ 1 ลูก" },
  { name: "7-11 เค้กโรลวนิลา", cat: "ขนม", cal: 240, protein: 4, carbs: 32, fat: 10, per: "ต่อ 1 ชิ้น" },
  { name: "7-11 ซอฟต์คุกกี้ช็อกโกแลตลาวา", cat: "ขนม", cal: 220, protein: 3, carbs: 28, fat: 11, per: "ต่อ 1 ชิ้น" },

  // ══════════════════════════════════════════════
  // 🥤 เชนเครื่องดื่ม & ชานม & คาเฟ่ & ตู้เต่าบิน (Amazon, Starbucks, Inthanin, ChaTraMue, KOI, Tao Bin)
  // ══════════════════════════════════════════════
  // Cafe Amazon (คาเฟ่ อเมซอน)
  { name: "Amazon แบล็คคอฟฟี่เย็น (ไม่หวาน 0%)", cat: "เครื่องดื่ม", cal: 15, protein: 0.5, carbs: 3, fat: 0, per: "ต่อ 1 แก้วใหญ่ (22 oz)" },
  { name: "Amazon แบล็คคอฟฟี่เย็น (หวานปกติ)", cat: "เครื่องดื่ม", cal: 130, protein: 0.5, carbs: 32, fat: 0, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon เอสเปรสโซ่เย็น (หวานปกติ)", cat: "เครื่องดื่ม", cal: 320, protein: 6, carbs: 48, fat: 11, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon เอสเปรสโซ่เย็น (หวานน้อย 50%)", cat: "เครื่องดื่ม", cal: 210, protein: 5.5, carbs: 28, fat: 8, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ลาเต้อเมซอนเย็น", cat: "เครื่องดื่ม", cal: 280, protein: 7, carbs: 38, fat: 10, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ชาเขียวนมเย็น", cat: "เครื่องดื่ม", cal: 340, protein: 6, carbs: 54, fat: 10, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ชาไทยเย็น", cat: "เครื่องดื่ม", cal: 330, protein: 5.5, carbs: 52, fat: 10, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ชามะนาวเย็น", cat: "เครื่องดื่ม", cal: 190, protein: 0.5, carbs: 46, fat: 0, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ดาร์กช็อกโกแลตเย็น", cat: "เครื่องดื่ม", cal: 330, protein: 7, carbs: 50, fat: 11, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ไวท์ช็อกมัคคิอาโต้เย็น", cat: "เครื่องดื่ม", cal: 350, protein: 6.5, carbs: 52, fat: 12, per: "ต่อ 1 แก้วใหญ่" },
  { name: "Amazon ชาเขียวน้ำผึ้งมะนาวเจลลี่", cat: "เครื่องดื่ม", cal: 230, protein: 1, carbs: 56, fat: 0, per: "ต่อ 1 แก้วใหญ่" },

  // Starbucks (สตาร์บัคส์)
  { name: "Starbucks Iced Caffe Americano (Grande)", cat: "เครื่องดื่ม", cal: 15, protein: 1, carbs: 3, fat: 0, per: "ต่อ 1 แก้ว Grande (16 oz ไม่หวาน)" },
  { name: "Starbucks Iced Caffe Latte (Grande)", cat: "เครื่องดื่ม", cal: 130, protein: 8, carbs: 13, fat: 5, per: "ต่อ 1 แก้ว Grande (นมวัว 2%)" },
  { name: "Starbucks Iced Caramel Macchiato (Grande)", cat: "เครื่องดื่ม", cal: 250, protein: 7, carbs: 35, fat: 8, per: "ต่อ 1 แก้ว Grande" },
  { name: "Starbucks Java Chip Frappuccino (Grande)", cat: "เครื่องดื่ม", cal: 440, protein: 6, carbs: 65, fat: 18, per: "ต่อ 1 แก้ว Grande (รวมวิปครีม)" },
  { name: "Starbucks Green Tea Frappuccino (Grande)", cat: "เครื่องดื่ม", cal: 410, protein: 6, carbs: 62, fat: 16, per: "ต่อ 1 แก้ว Grande (รวมวิปครีม)" },
  { name: "Starbucks Cold Brew (Grande)", cat: "เครื่องดื่ม", cal: 5, protein: 0.3, carbs: 0, fat: 0, per: "ต่อ 1 แก้ว Grande (ไม่ใส่น้ำเชื่อม)" },

  // Inthanin (อินทนิล)
  { name: "Inthanin กาแฟอินทนิลออลเดย์เย็น", cat: "เครื่องดื่ม", cal: 270, protein: 6, carbs: 40, fat: 9, per: "ต่อ 1 แก้ว (16 oz)" },
  { name: "Inthanin เอสเปรสโซ่เย็น", cat: "เครื่องดื่ม", cal: 260, protein: 5.5, carbs: 38, fat: 9, per: "ต่อ 1 แก้ว" },
  { name: "Inthanin โกโก้อินทนิลเย็น", cat: "เครื่องดื่ม", cal: 290, protein: 6.5, carbs: 44, fat: 9.5, per: "ต่อ 1 แก้ว" },
  { name: "Inthanin ชาไทยอินทนิลเย็น", cat: "เครื่องดื่ม", cal: 280, protein: 5, carbs: 44, fat: 8.5, per: "ต่อ 1 แก้ว" },

  // ChaTraMue (ชาตรามือ)
  { name: "ชาตรามือ ชาไทยเย็น (หวาน 100%)", cat: "เครื่องดื่ม", cal: 340, protein: 5, carbs: 54, fat: 11, per: "ต่อ 1 แก้ว (รวมนมข้น+นมสด)" },
  { name: "ชาตรามือ ชาไทยเย็น (หวาน 30% / หวานน้อย)", cat: "เครื่องดื่ม", cal: 190, protein: 4.5, carbs: 26, fat: 7, per: "ต่อ 1 แก้ว" },
  { name: "ชาตรามือ ชาเขียวนมเย็น", cat: "เครื่องดื่ม", cal: 320, protein: 5, carbs: 50, fat: 10, per: "ต่อ 1 แก้ว" },
  { name: "ชาตรามือ ชาดำเย็น", cat: "เครื่องดื่ม", cal: 130, protein: 0.5, carbs: 32, fat: 0, per: "ต่อ 1 แก้ว" },
  { name: "ชาตรามือ ชากุหลาบน้ำผึ้งมะนาว", cat: "เครื่องดื่ม", cal: 140, protein: 0.2, carbs: 34, fat: 0, per: "ต่อ 1 แก้ว" },
  { name: "ชาตรามือ ชากุหลาบนมเย็น", cat: "เครื่องดื่ม", cal: 310, protein: 5, carbs: 48, fat: 10, per: "ต่อ 1 แก้ว" },
  { name: "ชาตรามือ ซอฟต์เสิร์ฟไอศกรีมชาไทย", cat: "ขนม", cal: 170, protein: 4, carbs: 26, fat: 5.5, per: "ต่อ 1 โคน" },

  // KOI Thé & Kamu & Bearhouse
  { name: "KOI Thé ชานมไข่มุก Golden Bubble Milk Tea (M)", cat: "เครื่องดื่ม", cal: 390, protein: 4, carbs: 70, fat: 10, per: "ต่อ 1 แก้ว M (หวานปกติ 100%)" },
  { name: "KOI Thé ชานมไข่มุก Golden Bubble (M หวาน 50%)", cat: "เครื่องดื่ม", cal: 280, protein: 3.8, carbs: 46, fat: 8.5, per: "ต่อ 1 แก้ว M" },
  { name: "KOI Thé Black Tea Macchiato (M หวาน 50%)", cat: "เครื่องดื่ม", cal: 190, protein: 2, carbs: 24, fat: 9, per: "ต่อ 1 แก้ว M" },
  { name: "Kamu ชานม Dino Milo", cat: "เครื่องดื่ม", cal: 380, protein: 6, carbs: 62, fat: 11, per: "ต่อ 1 แก้ว M" },
  { name: "Kamu ชาผลไม้ชีส (Cheese Fruit Tea)", cat: "เครื่องดื่ม", cal: 260, protein: 4, carbs: 38, fat: 9.5, per: "ต่อ 1 แก้ว" },
  { name: "Bearhouse ชานมไข่มุกโมจิ (M)", cat: "เครื่องดื่ม", cal: 360, protein: 4, carbs: 64, fat: 9, per: "ต่อ 1 แก้ว M" },

  // ตู้เต่าบิน (Tao Bin)
  { name: "เต่าบิน อเมริกาโน่เย็น (หวาน 0%)", cat: "เครื่องดื่ม", cal: 10, protein: 0.5, carbs: 2, fat: 0, per: "ต่อ 1 แก้วเต่าบิน" },
  { name: "เต่าบิน อเมริกาโน่เย็น (หวาน 1-3)", cat: "เครื่องดื่ม", cal: 70, protein: 0.5, carbs: 17, fat: 0, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน เอสเปรสโซ่เย็น", cat: "เครื่องดื่ม", cal: 190, protein: 4.5, carbs: 28, fat: 6.5, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน มัทฉะลาเต้เย็น", cat: "เครื่องดื่ม", cal: 210, protein: 5, carbs: 32, fat: 6.5, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน ชาไทยเย็น", cat: "เครื่องดื่ม", cal: 220, protein: 4.5, carbs: 34, fat: 7, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน โกโก้เย็นภูเขาไฟ", cat: "เครื่องดื่ม", cal: 240, protein: 5.5, carbs: 36, fat: 8, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน เมลอนโซดา", cat: "เครื่องดื่ม", cal: 120, protein: 0, carbs: 30, fat: 0, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน บ๊วยมะนาวโซดา", cat: "เครื่องดื่ม", cal: 110, protein: 0, carbs: 27, fat: 0, per: "ต่อ 1 แก้ว" },
  { name: "เต่าบิน โปรตีนเชค รสช็อกโกแลต (Protein Shake)", cat: "เครื่องดื่ม", cal: 190, protein: 25, carbs: 14, fat: 3, per: "ต่อ 1 แก้วเต่าบิน (~25g Protein)" },
  { name: "เต่าบิน นมชมพูเย็น", cat: "เครื่องดื่ม", cal: 190, protein: 4.5, carbs: 30, fat: 5.5, per: "ต่อ 1 แก้ว" },

  // ══════════════════════════════════════════════
  // 🏋️ เวย์โปรตีน, นมโปรตีนสูง & สุขภาพสายฟิตเนส (Fitness & High Protein)
  // ══════════════════════════════════════════════
  // นมโปรตีนสูงขวดพร้อมดื่ม
  { name: "Meiji High Protein ช็อกโกแลต (350ml)", cat: "เครื่องดื่ม", cal: 190, protein: 28, carbs: 12, fat: 2.5, per: "ต่อ 1 ขวด (350 ml)" },
  { name: "Meiji High Protein รสจืดไม่เติมน้ำตาลทราย (350ml)", cat: "เครื่องดื่ม", cal: 170, protein: 28, carbs: 8, fat: 2, per: "ต่อ 1 ขวด (350 ml)" },
  { name: "Meiji High Protein กลิ่นกล้วย (350ml)", cat: "เครื่องดื่ม", cal: 190, protein: 28, carbs: 12, fat: 2.5, per: "ต่อ 1 ขวด" },
  { name: "Dutch Mill High Protein ดาร์กช็อกโกแลต (350ml)", cat: "เครื่องดื่ม", cal: 180, protein: 28, carbs: 10, fat: 2.5, per: "ต่อ 1 ขวด" },
  { name: "Dutch Mill High Protein รสจืดไม่เติมน้ำตาล (350ml)", cat: "เครื่องดื่ม", cal: 160, protein: 28, carbs: 7, fat: 2, per: "ต่อ 1 ขวด" },
  { name: "Hooray! Protein Shake ช็อกโกแลต (30g P)", cat: "เครื่องดื่ม", cal: 210, protein: 30, carbs: 14, fat: 3.5, per: "ต่อ 1 ขวด (~330ml)" },
  { name: "Hooray! Plant Protein นมถั่วเหลือง/พืช", cat: "เครื่องดื่ม", cal: 200, protein: 27, carbs: 13, fat: 4, per: "ต่อ 1 ขวด" },
  { name: "Tofusan High Protein นมถั่วเหลืองไม่ใส่น้ำตาล (350ml)", cat: "เครื่องดื่ม", cal: 160, protein: 28, carbs: 4, fat: 3.5, per: "ต่อ 1 ขวด" },

  // เวย์โปรตีน & โปรตีนพืชผง
  { name: "ON Gold Standard 100% Whey (1 scoop)", cat: "เครื่องดื่ม", cal: 120, protein: 24, carbs: 3, fat: 1.5, per: "ต่อ 1 สกู๊ป (~30g)" },
  { name: "Dymatize ISO 100 Hydrolyzed Whey (1 scoop)", cat: "เครื่องดื่ม", cal: 110, protein: 25, carbs: 1, fat: 0.5, per: "ต่อ 1 สกู๊ป (~30g)" },
  { name: "MyProtein Impact Whey (1 scoop)", cat: "เครื่องดื่ม", cal: 103, protein: 21, carbs: 1, fat: 1.9, per: "ต่อ 1 สกู๊ป (~25g)" },
  { name: "Plantae Complete Plant Protein (1 scoop)", cat: "เครื่องดื่ม", cal: 140, protein: 30, carbs: 4, fat: 1.5, per: "ต่อ 1 สกู๊ป" },
  { name: "FITTO Plant Protein (1 ซอง)", cat: "เครื่องดื่ม", cal: 120, protein: 20, carbs: 5, fat: 2, per: "ต่อ 1 ซอง" },

  // นมทางเลือก & โยเกิร์ตสุขภาพ
  { name: "Almond Breeze นมอัลมอนด์ไม่หวาน (Unsweetened 180ml)", cat: "เครื่องดื่ม", cal: 25, protein: 1, carbs: 0.5, fat: 2, per: "ต่อ 1 กล่อง (180 ml)" },
  { name: "137 Degrees นมอัลมอนด์สูตรดั้งเดิมไม่หวาน", cat: "เครื่องดื่ม", cal: 60, protein: 2, carbs: 1.5, fat: 5, per: "ต่อ 1 กล่อง (180 ml)" },
  { name: "โยเกิร์ตโยลิดา Yolida (รสธรรมชาติ ไม่หวาน)", cat: "ของว่าง", cal: 100, protein: 7, carbs: 9, fat: 3.5, per: "ต่อ 1 ถ้วย (150g)" },
  { name: "กรีกโยเกิร์ต Farmers Union (Greek Yogurt 100g)", cat: "ของว่าง", cal: 130, protein: 9, carbs: 5.5, fat: 9, per: "ต่อ 100 กรัม" },
  { name: "ดัชชี่ 0% Fat รสธรรมชาติ", cat: "ของว่าง", cal: 80, protein: 5, carbs: 15, fat: 0, per: "ต่อ 1 ถ้วย (135g)" },
  { name: "ยาคูลท์ (Yakult สูตรปกติ)", cat: "เครื่องดื่ม", cal: 50, protein: 1.2, carbs: 12, fat: 0.1, per: "ต่อ 1 ขวด (80 ml)" },
  { name: "ยาคูลท์ ไลท์ (Yakult Light สูตรน้ำตาลน้อย)", cat: "เครื่องดื่ม", cal: 30, protein: 1.2, carbs: 7, fat: 0.1, per: "ต่อ 1 ขวด (80 ml)" },
  { name: "บีทาเก้น ไลท์ (Betagen Light 2% น้ำตาล)", cat: "เครื่องดื่ม", cal: 45, protein: 1.5, carbs: 9, fat: 0.2, per: "ต่อ 1 ขวด (140 ml)" }
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
