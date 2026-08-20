# 🚀 4-Hour Sprint Playbook: แผนปฏิบัติการ Build Day แบบ Step-by-Step
> **เป้าหมาย:** ทำงานขนานกันได้ 100%, โค้ดไม่ชนกัน (Zero Git Conflicts), เสร็จทันเวลา, และพรีเซนต์ได้คะแนนเต็ม

---

## ⏱️ Phase 1: Setup & Data Sync (นาทีที่ 0 - 30)
**เป้าหมาย:** ทุกคนต้องมี Source Code ตั้งต้น และข้อมูล `menus.json` ชุดเดียวกันอยู่ในเครื่อง

1. **[Member 1 - Lead]** สร้างโปรเจกต์ Vite (ลบไฟล์ขยะออกให้หมด), ติดตั้ง `tailwindcss`, `lucide-react`
2. **[Member 1 - Lead]** สร้างโฟลเดอร์ `src/components` และ `src/data` (ทิ้งไฟล์เปล่าไว้) แล้ว Push ขึ้น GitHub (Branch: `main`)
3. **[Member 5 - Data]** สร้างไฟล์ `src/data/menus.json` ใส่ข้อมูลให้ครบ 10-15 เมนู แล้ว Push ขึ้น `main`
4. **[Member 2, 3, 4]** รอจนกว่า Member 5 จะ Push ข้อมูลเสร็จ ➡️ ทำการ `git pull origin main` เพื่อดึงข้อมูลล่าสุดลงเครื่อง
5. **[ทุกคน]** แตก Branch ของตัวเอง ทันที:
   - M1: `git checkout -b feat/app-logic`
   - M2: `git checkout -b feat/mode-selector`
   - M3: `git checkout -b feat/menu-card`
   - M4: `git checkout -b feat/buttons-animation`
   - M5: `git checkout -b feat/header`

---

## 💻 Phase 2: Component Isolation (นาทีที่ 30 - 120) / ให้เวลา 1.5 ชม.
**เป้าหมาย:** ทุกคนเขียน Component ของตัวเองโดย **ห้ามยุ่งกับไฟล์ของคนอื่นเด็ดขาด** (นี่คือคีย์สำคัญที่จะไม่เกิด Conflict)

* **กฎเหล็ก:** ให้รับ `props` แบบจำลอง (Mock Props) ไปก่อน ยังไม่ต้องสนว่า App จะส่งอะไรมาจริง
* **M1 (App.jsx):** ระหว่างรอเพื่อน ให้สร้าง State ทั้งหมดรอไว้ และ Import ไฟล์เปล่าๆ ของเพื่อนเข้ามาวางโครง (Layout)
* **M2, M3, M4, M5:** โฟกัสเฉพาะไฟล์ Component ตัวเอง ใช้ข้อมูลจำลองชั่วคราวในการจัด UI ให้สวยที่สุด
* 🚨 **Checkpoint:** เมื่อถึงนาทีที่ 120 ทุกคนต้อง *หยุดทำ UI* ไม่ว่าจะสวยแค่ไหนก็ตาม เพื่อเตรียมรวมโค้ด

---

## 🔗 Phase 3: Integration & Wiring (นาทีที่ 120 - 180) / ให้เวลา 1 ชม.
**เป้าหมาย:** นำ Component ย่อยๆ มารวมกันที่ `App.jsx` และเชื่อม State เข้าด้วยกัน

1. **[ทุกคน]** ทำการ `git add .`, `git commit -m "done: component name"`, และ `git push` ขึ้น Branch ของตัวเอง
2. **[Member 1 - Lead]** ทำหน้าที่ **Merge Master**:
   - นำโค้ดจาก `feat/header` มา Merge ก่อน เช็กว่าแสดงผลไหม
   - นำ `feat/mode-selector` มา Merge แล้วโยง Props `currentMode`, `onSelectMode`
   - นำ `feat/menu-card` มา Merge แล้วโยง Props `item`, `isShuffling`
3. **[ทุกคน]** ล้อมวงดูจอของ Member 1 (หรือแชร์จอ) เพื่อช่วยกัน Debug หากมีการส่ง Props ผิดพลาด หรือ UI พังตอนนำมารวมกัน

---

## 🧪 Phase 4: QA, Polish & ซ้อมพรีเซนต์ (นาทีที่ 180 - 240) / ให้เวลา 1 ชม.สุดท้าย
**เป้าหมาย:** อุดรอยรั่ว, จัดการ Edge Cases, และเตรียมสคริปต์พูดให้ตรงกับ Rubric

### 🛡️ Checklist ทดสอบระบบ (QA):
- [ ] กดสลับ อาหาร/เครื่องดื่ม รัวๆ โปรแกรมค้างไหม?
- [ ] ตอนแอนิเมชันกำลังสุ่ม ปุ่มกดอื่นๆ (สลับโหมด, ค้นหาร้าน) ต้องกดไม่ได้
- [ ] กดย่อจอเป็นขนาดมือถือ (Mobile View) UI ล้นขอบหรือไม่?
- [ ] กดปุ่ม "ค้นหาร้านใกล้ฉัน" แล้วเปิดแท็บใหม่ในหน้าต่างอื่นหรือไม่?

### 🎤 โพยซ้อมพรีเซนต์ (แจกบทให้ 5 คน พูดคนละ 1-2 นาที):
เพื่อให้ Instructor เห็นว่าทุกคนมีความรู้และทำตรงตาม Rubric:

* **🗣️ Member 1 (Lead):** 
  > *"ผมรับผิดชอบโครงสร้างหลักและ `useState` ทั้งหมดครับ เราใช้เทคนิค Lifting State Up ดึง State โหมดและข้อมูลเมนูมาไว้ที่ `App.jsx` เพื่อแจกจ่ายให้ Component อื่น และทำ Event Handler จัดการฟังก์ชัน `setInterval` สำหรับแอนิเมชันสุ่มครับ"*
* **🗣️ Member 2 (Mode Selector):** 
  > *"ผมทำ `ModeSelector.jsx` ครับ ตรงนี้ใช้ความรู้เรื่องการเรนเดอร์ `.map()` วนลูปสร้างปุ่มโหมดอาหารและเครื่องดื่ม และทำ Conditional Rendering เพื่อเช็กว่าถ้าเป็นโหมดปัจจุบัน ให้ไฮไลต์สีปุ่มครับ"*
* **🗣️ Member 3 (Card UI):** 
  > *"ผมดูแล Layout ของ `MenuCard.jsx` ครับ เน้นเรื่อง Responsive ให้สวยงามบนมือถือ และใช้ Conditional Rendering (Ternary Operator) เช็ก Prop `isShuffling` ถ้าเป็น true ให้เบลอรูปภาพเพื่อทำ Effect ครับ"*
* **🗣️ Member 4 (Action & Integration):** 
  > *"ผมดูแลปุ่ม Interaction ในการ์ดครับ คือปุ่มสุ่มใหม่และค้นหาร้านใกล้ฉัน โดยปุ่มค้นหา เราใช้ความรู้เรื่อง Web API ผสมกับ `encodeURIComponent` โยนชื่อเมนูที่สุ่มได้ส่งไปให้ Google Maps Search ครับ"*
* **🗣️ Member 5 (Data & Header):** 
  > *"ผมทำ `Header.jsx` และออกแบบ Mock Data `menus.json` ครับ โดยวาง Schema ให้มี type เป็น food และ drink อย่างชัดเจน เพื่อให้ Component อื่นนำไป `.filter()` ใช้งานต่อได้ง่ายครับ"*

---

## 🆘 แผนสำรองฉุกเฉิน (Contingency Plan)
* **ถ้า Git พังแก้ไม่ได้ (Conflict รุนแรง):** ให้ Member 1 สร้างโฟลเดอร์ใหม่ แล้วให้เพื่อนแต่ละคน "Copy โค้ดจากไฟล์ในเครื่องตัวเอง" ส่งผ่าน แชท/Discord ให้ Member 1 วางแปะตรงๆ (ไพ่ตายในการรันโปรเจกต์ให้เสร็จทันเวลา)
* **ถ้าสุ่มภาพแล้วค้าง:** เช็กด่วนว่าได้ใส่ `clearInterval` ตอนที่จำนวนรอบ `counter >= totalSteps` แล้วหรือยัง
