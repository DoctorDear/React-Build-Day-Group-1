# 🧩 Task Checklist (ลิสต์งานและข้อกำหนดของแต่ละไฟล์)
> **วิธีใช้:** ให้สมาชิกแต่ละคน ก๊อปปี้กล่องข้อความ (Comment) ของตัวเอง ไปแปะไว้บรรทัดบนสุดในไฟล์ `.jsx` ที่ตัวเองรับผิดชอบ เพื่อใช้เป็น Checklist ว่าต้องสร้างตัวแปรหรือฟังก์ชันชื่ออะไรบ้าง (จะได้ชื่อตรงกันตอนรวมร่าง)

---

### 1. `src/App.jsx` (Member 1)
```javascript
/*
  TODO: ภารกิจของ App.jsx
  [ ] 1. สร้าง Component หลักชื่อ App
  [ ] 2. สร้าง State ชื่อ `mode` (ค่าเริ่มต้น 'food')
  [ ] 3. สร้าง State ชื่อ `currentItem` (ค่าเริ่มต้น null)
  [ ] 4. สร้าง State ชื่อ `isRandomizing` (ค่าเริ่มต้น false)
  [ ] 5. สร้างฟังก์ชันชื่อ `handleModeChange(newMode)` ไว้ดักการเปลี่ยนโหมด
  [ ] 6. สร้างฟังก์ชันชื่อ `handleRandomize()` ไว้ทำแอนิเมชันสุ่มเมนู
  [ ] 7. สร้างฟังก์ชันชื่อ `handleFindNearby()` ไว้เปิด URL Google Maps
  [ ] 8. ในส่วน return ให้จัด Layout และเรียกใช้ <Header />, <ModeSelector /> และ <MenuCard />
  [ ] 9. นำ State และ Function ทั้งหมด ส่งเป็น Props ลงไปให้ Component ลูกตามที่ตกลงกันไว้
*/
```

---

### 2. `src/components/ModeSelector.jsx` (Member 2)
```javascript
/*
  TODO: ภารกิจของ ModeSelector.jsx
  [ ] 1. สร้าง Component ที่รับ Props 2 ตัว คือ `currentMode` และ `onSelectMode`
  [ ] 2. สร้าง Array สำหรับเก็บข้อมูลโหมด (เช่น มี id: 'food' กับ 'drink')
  [ ] 3. ในส่วน return ให้ใช้ .map() วนลูป Array เพื่อสร้างแท็ก <button>
  [ ] 4. ที่ <button> ให้ผูก onClick เพื่อเรียกใช้ onSelectMode พร้อมส่ง id โหมดกลับไป
  [ ] 5. เขียนเงื่อนไข CSS (Ternary Operator) ว่าถ้า currentMode ตรงกับปุ่มนี้ ให้สลับคลาสสีปุ่มเป็นสถานะ Active
*/
```

---

### 3. `src/components/MenuDisplay.jsx` (Member 3)
```javascript
/*
  TODO: ภารกิจของ MenuDisplay.jsx
  [ ] 1. สร้าง Component ที่รับ Props 2 ตัว คือ `item` และ `isShuffling`
  [ ] 2. เขียนดักไว้บนสุดว่า ถ้า item ยังไม่มีค่า (null) ให้ return null หรือแสดงข้อความโหลด
  [ ] 3. ในส่วน return ให้สร้างแท็ก <img> โดยดึง URL จาก `item.imageUrl` มาแสดง
  [ ] 4. สร้างแท็กข้อความ ดึงชื่อเมนูจาก `item.name` มาแสดง
  [ ] 5. เขียนเงื่อนไข CSS ที่รูปภาพ ว่าถ้า `isShuffling` เป็น true ให้เพิ่มคลาสทำภาพเบลอ (เช่น blur-sm)
*/
```

---

### 4. `src/components/ActionButtons.jsx` (Member 4)
```javascript
/*
  TODO: ภารกิจของ ActionButtons.jsx
  [ ] 1. สร้าง Component ที่รับ Props 3 ตัว คือ `isShuffling`, `onRandomize`, `onFindNearby`
  [ ] 2. สร้างปุ่มที่ 1 "สุ่มใหม่" และผูก onClick เข้ากับ `onRandomize`
  [ ] 3. สร้างปุ่มที่ 2 "ค้นหาร้านใกล้ฉัน" และผูก onClick เข้ากับ `onFindNearby`
  [ ] 4. ที่ปุ่มทั้งสอง ให้เพิ่มแอตทริบิวต์ disabled โดยผูกกับค่า `isShuffling` (ถ้าสุ่มอยู่ ห้ามกดปุ่ม)
  [ ] 5. ที่ปุ่ม "สุ่มใหม่" ให้เขียนเงื่อนไขว่า ถ้า `isShuffling` เป็น true ให้เปลี่ยนข้อความปุ่มเป็น "กำลังสุ่ม..."
*/
```
