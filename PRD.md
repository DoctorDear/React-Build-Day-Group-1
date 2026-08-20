# 🍲 PRD & Technical Blueprint: KinHub (วันนี้กินอะไรดี)
> **Project:** Minimalist Food & Drink Randomizer Web App  
> **Course / Cohort:** JSD 13 (Junior Software Developer) - React Build Day  
> **Sprint Duration:** 4 Hours Timebox  
> **Team:** Group 1 (5 Members)  
> **Tech Stack:** React 19 (Vite), Tailwind CSS, Lucide Icons  
> **Reference Code:** ดูโค้ดตัวอย่างฉบับสมบูรณ์ได้ที่ [IMPLEMENTATION.md](./IMPLEMENTATION.md)

---

## 1. 📌 Executive Summary & Problem Statement

### 1.1 The Problem (ปัญหาที่พบ)
ในแต่ละวัน ผู้คนมักเสียเวลาและเกิด **"Decision Fatigue"** กับการเลือกว่าจะ *"กินข้าวอะไร"* หรือ *"สั่งเครื่องดื่มอะไรดี"* ในช่วงพักกลางวันและช่วงบ่าย

### 1.2 The Solution (ทางออกของแอปพลิเคชัน)
เว็บแอปพลิเคชัน **KinHub** สไตล์ Minimalist คลีนตา ใช้งานง่ายบนมือถือและเดสก์ท็อป:
1. สลับโหมดเลือกระหว่าง **"🍴 อาหาร"** หรือ **"☕ เครื่องดื่ม"**
2. กดปุ่ม **"สุ่มใหม่"** เพื่อสุ่มเมนูพร้อมแอนิเมชัน
3. กดปุ่ม **"📍 ค้นหาร้านใกล้ฉัน"** เพื่อเปิด Google Maps นำทางหรือค้นหาร้านอาหาร/คาเฟ่เมนูนั้นที่อยู่ใกล้ตัวทันที

---

## 2. 🎯 Core Features & User Stories (Acceptance Criteria)

```
+-------------------------------------------------------+
|  KinHub                                               |
|                                                       |
|                    วันนี้กินอะไรดี                    |
|                                                       |
|             [ 🍴 อาหาร ]   [ ☕ เครื่องดื่ม ]          |
|                                                       |
|           +-------------------------------+           |
|           |                               |           |
|           |         [ Food Image ]        |           |
|           |                               |           |
|           |           ผัดซีอิ๊ว           |           |
|           |                               |           |
|           |          [ 🔄 สุ่มใหม่ ]       |           |
|           |                               |           |
|           |     [ 📍 ค้นหาร้านใกล้ฉัน ]    |           |
|           +-------------------------------+           |
+-------------------------------------------------------+
```

### Feature 1: Mode Switcher (สลับโหมด อาหาร / เครื่องดื่ม)
* **User Story:** ในฐานะผู้ใช้ ฉันต้องการสลับเลือกระหว่างเมนูอาหารคาวกับเครื่องดื่มได้ง่ายๆ
* **Acceptance Criteria (AC1):**
  * **Given:** ผู้ใช้อยู่หน้าจอหลัก
  * **When:** ผู้ใช้คลิกแท็บ *"🍴 อาหาร"* หรือ *"☕ เครื่องดื่ม"*
  * **Then:** รายการข้อมูลเมนูจะเปลี่ยนตามโหมดที่เลือกทันที
  * **And:** แท็บที่เลือกต้องมีกรอบหรือสีไฮไลต์ (Active State) ชัดเจน

---

### Feature 2: Randomizer Engine (ระบบสุ่มเมนู)
* **User Story:** ในฐานะผู้ใช้ ฉันต้องการกดปุ่มสุ่มเพื่อให้ระบบเลือกเมนูให้พร้อมแอนิเมชันที่ตื่นเต้น
* **Acceptance Criteria (AC2):**
  * **Given:** ผู้ใช้อยู่ในโหมดอาหารหรือเครื่องดื่ม
  * **When:** ผู้ใช้กดปุ่ม *"🔄 สุ่มใหม่"*
  * **Then:** ระบบต้องแสดง Shuffling Effect (สลับรูปภาพและชื่อเมนูอย่างรวดเร็วประมาณ 1.5 วินาที)
  * **And:** ระหว่างที่สุ่ม ปุ่มต้อง `disabled` ชั่วคราวเพื่อป้องกันการกดซ้ำ
  * **And:** เมื่อหยุดสุ่ม ต้องแสดงรูปภาพและชื่อเมนูผลลัพธ์สุดท้าย

---

### Feature 3: Nearby Search Integration (ค้นหาร้านใกล้ฉันผ่าน Google Maps)
* **User Story:** ในฐานะผู้ใช้ เมื่อได้เมนูที่ถูกใจแล้ว ฉันต้องการหาร้านที่ขายเมนูนี้รอบตัวทันที
* **Acceptance Criteria (AC3):**
  * **Given:** มีเมนูอาหารหรือเครื่องดื่มแสดงอยู่บนหน้าจอ
  * **When:** ผู้ใช้คลิกปุ่ม *"📍 ค้นหาร้านใกล้ฉัน"*
  * **Then:** ระบบต้องเปิดหน้าต่างใหม่ไปยัง Google Maps Search ด้วยคำค้นหา `[ชื่อเมนู] ใกล้ฉัน` (เช่น `https://www.google.com/maps/search/ผัดซีอิ๊ว+ใกล้ฉัน`)

---

## 3. 🏗️ Component Hierarchy & Architecture

```text
App (Root - Holds State & Random Logic)
│
├── Header (Brand 'KinHub' & Title 'วันนี้กินอะไรดี')
│
├── ModeSelector (Pill Buttons: '🍴 อาหาร' vs '☕ เครื่องดื่ม')
│
└── MenuCard (Image Container, Menu Title, 'สุ่มใหม่' Button, 'ค้นหาร้านใกล้ฉัน' Button)
```

---

### 3.1 Props & State Contract (ข้อตกลง Interface ระหว่างสมาชิก)

| Component | Props Name | Type | Description |
| :--- | :--- | :--- | :--- |
| **`Header`** | - | - | แสดงโลโก้และชื่อหัวข้อ |
| **`ModeSelector`** | `currentMode` | `string` | โหมดปัจจุบัน (`'food'` หรือ `'drink'`) |
| | `onSelectMode` | `(mode: string) => void` | Callback ส่งโหมดที่เลือกกลับไปที่ App |
| **`MenuCard`** | `item` | `object \| null` | ข้อมูลเมนูปัจจุบัน `{ id, name, category, type, imageUrl }` |
| | `isShuffling` | `boolean` | สถานะว่ากำลังสุ่มอยู่หรือไม่ (ใช้ปรับ Effect ภาพ) |
| | `onRandomize` | `() => void` | Callback เมื่อกดปุ่ม "สุ่มใหม่" |
| | `onFindNearby` | `() => void` | Callback เมื่อกดปุ่ม "ค้นหาร้านใกล้ฉัน" |

---

## 4. 📊 Data Schema & State Dictionary

### 4.1 Mock Data Schema (`src/data/menus.json`)
```json
[
  {
    "id": "food-01",
    "name": "ผัดซีอิ๊ว",
    "type": "food",
    "category": "เส้น",
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "drink-01",
    "name": "ชาไทยเย็น",
    "type": "drink",
    "category": "ชา",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  }
]
```

### 4.2 State Table in `App.jsx`

| State Name | Type | Initial Value | Purpose |
| :--- | :--- | :--- | :--- |
| `mode` | `string` | `'food'` | ควบคุมโหมดปัจจุบัน (`'food'` หรือ `'drink'`) |
| `currentItem` | `object \| null` | `menusData[0]` | เมนูที่กำลังแสดงผลอยู่ในการ์ด |
| `isRandomizing` | `boolean` | `false` | จัดการสถานะแอนิเมชันและ Disable ปุ่ม |

---

## 5. 🎓 JSD 13 Rubric Alignment Checklist

| เกณฑ์การประเมิน (Rubric) | สิ่งที่มีในโปรเจกต์ KinHub | เหตุผลทางเทคนิค (สำหรับตอบคำถาม) |
| :--- | :--- | :--- |
| **1. At least 3 Components** | แยก `Header`, `ModeSelector`, `MenuCard` และ `App` | **Component Modularity:** แยกส่วน Header, การเลือกโหมด, และการ์ดแสดงผล เพื่อให้โค้ดอ่านง่ายและ Reuse ได้ |
| **2. At least 1 `useState`** | มี 3 `useState` ใน `App.jsx` (`mode`, `currentItem`, `isRandomizing`) | ควบคุมการเปลี่ยนโหมดและ Re-render ผลลัพธ์การสุ่มแบบ Reactive |
| **3. At least 2 Event Handlers** | `handleRandomize()`, `handleFindNearby()`, `handleModeChange()` | จัดการ User Interaction ในการสุ่มเมนูและเปิดลิงก์ภายนอก |
| **4. At least 1 `.map()` Render** | เรนเดอร์ปุ่มเลือกโหมดใน `ModeSelector` จาก Array `MODES` | แปลง Array ข้อมูลเป็น JSX Button Elements พร้อมกำหนด `key` |
| **5. At least 1 Conditional Render** | สลับสไตล์ Active ของปุ่มโหมด และสถานะ `{isRandomizing ? ... : ...}` | แสดงผล UI ตามสถานะของแอปพลิเคชัน |

---

## 6. 👥 การแบ่งงาน 5 คนในทีม (Task Breakdown)

* **🧑‍💻 สมาชิกคนที่ 1 (Lead & Logic):**
  * รับผิดชอบ: `src/App.jsx`
  * หน้าที่: ควบคุม State กลาง (`mode`, `currentItem`, `isRandomizing`), ฟังก์ชันสุ่ม Shuffling Effect, และฟังก์ชันเปิด Google Maps
* **🧑‍💻 สมาชิกคนที่ 2 (Mode Switcher):**
  * รับผิดชอบ: `src/components/ModeSelector.jsx`
  * หน้าที่: สร้างปุ่มสลับ "🍴 อาหาร" และ "☕ เครื่องดื่ม" โดยใช้ `.map()` พร้อมสไตล์ Active/Inactive
* **🧑‍💻 สมาชิกคนที่ 3 (Card UI & Layout):**
  * รับผิดชอบ: `src/components/MenuCard.jsx`
  * หน้าที่: จัดวางกล่องรูปภาพตรงกลาง, ข้อความชื่อเมนู, และจัดระยะ Padding/Shadow สไตล์ Minimalist
* **🧑‍💻 สมาชิกคนที่ 4 (Action Buttons & Animations):**
  * รับผิดชอบ: ปุ่ม *"สุ่มใหม่"* และ *"ค้นหาร้านใกล้ฉัน"* ใน `MenuCard.jsx`
  * หน้าที่: ใส่แอนิเมชันปุ่มกด (Active scale, Spinner) และตกแต่งปุ่มโทนสีน้ำตาล-เบจตาม Mockup
* **🧑‍💻 สมาชิกคนที่ 5 (Branding & Data):**
  * รับผิดชอบ: `src/components/Header.jsx` และ `src/data/menus.json`
  * หน้าที่: ออกแบบโลโก้ KinHub และรวบรวมข้อมูลอาหาร + เครื่องดื่มอย่างละ 10 เมนูพร้อมรูปภาพสวยๆ

---

## 7. 🧪 Quality Assurance & Edge Cases Checklist

1. [ ] **Mode Switching:** เมื่อสลับโหมดจาก "อาหาร" เป็น "เครื่องดื่ม" การ์ดต้องสุ่มเมนูเครื่องดื่มเริ่มต้นทันที
2. [ ] **Google Maps Search:** เมื่อกดปุ่มค้นหาร้านใกล้ฉัน ต้องเปิด Tab ใหม่ไปยัง Google Maps และค้นหาชื่อเมนูนั้นถูกต้อง
3. [ ] **Spam Click Protection:** ระหว่างที่กำลังสุ่ม (1.5 วินาที) ต้องกดปุ่มสุ่มซ้ำไม่ได้
4. [ ] **Mobile Responsiveness:** หน้าจอแสดงผลได้สวยงามทั้งบนจอมือถือและเดสก์ท็อป
