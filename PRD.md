# 🍲 PRD & Technical Blueprint: KinHub (วันนี้กินอะไรดี)
> **Project Name:** KinHub - Minimalist Food & Drink Randomizer  
> **Course / Cohort:** JSD 13 (Junior Software Developer) - React Build Day Sprint  
> **Duration:** 4 Hours Timebox  
> **Team:** Group 1 (5 Members)  
> **Tech Stack:** React 19 (Vite), Tailwind CSS, Lucide Icons  
> **Reference Code:** [IMPLEMENTATION.md](./IMPLEMENTATION.md)

---

## 1. 📌 Executive Summary & Objective

### 1.1 ที่มาของปัญหา (Problem Statement)
ในแต่ละวัน ผู้คนมักเจอปัญหา **"Decision Fatigue" (ความเหนื่อยล้าในการตัดสินใจ)** ในการเลือกเมนูอาหารคาวช่วงพักเที่ยง หรือการเลือกเครื่องดื่มแก้ง่วงช่วงบ่าย ซึ่งมักทำให้เสียเวลาและเกิดความลังเล

### 1.2 วัตถุประสงค์ของโปรเจกต์ (Project Objective)
1. **Product Goal:** สร้างเว็บแอปพลิเคชันสไตล์ Minimalist ที่ช่วยสุ่มอาหารและเครื่องดื่มให้ผู้ใช้ได้ทันทีใน 1 คลิก พร้อมทั้งสามารถค้นหาร้านค้าที่ขายเมนูนั้นรอบตัวผ่าน Google Maps ได้ทันที
2. **Learning Goal (JSD 13):** ฝึกทักษะการทำงานร่วมกัน 5 คนในฐานะ Software Engineer ผ่านการวาง Architecture, การออกแบบ Component Interface (Props/State), และการประยุกต์ใช้ React Core Concepts ได้อย่างถูกต้อง

---

## 2. 🎯 Scope of Work (ขอบเขตงานอย่างละเอียด)

```
+-------------------------------------------------------------------+
|  KinHub (Header)                                                  |
|                                                                   |
|                    วันนี้กินอะไรดี (Title)                         |
|                                                                   |
|             [ 🍴 อาหาร ]   [ ☕ เครื่องดื่ม ] (ModeSelector)         |
|                                                                   |
|           +-------------------------------+                       |
|           |                               |                       |
|           |         [ Menu Image ]        | (MenuCard)            |
|           |                               |                       |
|           |           ผัดซีอิ๊ว           |                       |
|           |                               |                       |
|           |          [ 🔄 สุ่มใหม่ ]       |                       |
|           |                               |                       |
|           |     [ 📍 ค้นหาร้านใกล้ฉัน ]    |                       |
|           +-------------------------------+                       |
+-------------------------------------------------------------------+
```

### 2.1 In-Scope (สิ่งที่ต้องทำใน MVP 4 ชั่วโมง)
* ✅ **โหมดอาหารและเครื่องดื่ม (Mode Switching):** ผู้ใช้สามารถกดสลับระหว่างเมนู "อาหาร" (Food) และ "เครื่องดื่ม" (Drink) ได้
* ✅ **ระบบสุ่มแบบ Shuffling Animation (Randomizer Engine):** เมื่อกดปุ่ม "สุ่มใหม่" ระบบจะสลับภาพและชื่อเมนูอย่างรวดเร็ว (80ms x 12 รอบ) ก่อนหยุดที่ผลลัพธ์สุดท้าย
* ✅ **การ์ดแสดงผล (Menu Display Card):** แสดงรูปภาพเมนู และชื่อเมนูเด่นชัดในกรอบสี่เหลี่ยมมินิมอล
* ✅ **เชื่อมต่อแผนที่ (Nearby Search Integration):** กดปุ่ม "ค้นหาร้านใกล้ฉัน" เพื่อเปิด Google Maps ค้นหาร้านที่ขายเมนูนั้นในละแวกของผู้ใช้
* ✅ **Responsive Design:** ใช้งานได้สมบูรณ์ทั้งบนหน้าจอมือถือ (375px - 430px) และหน้าจอคอมพิวเตอร์

### 2.2 Out-of-Scope (สิ่งที่ไม่ทำใน 4 ชั่วโมง เพื่อคุมเวลา)
* ❌ ระบบ Login / Register และ Backend Database (ใช้ Mock Data `menus.json` และ Client-side React State แทน)
* ❌ ระบบสั่งอาหารเดลิเวอรีจริง (ใช้การ Redirect ไปยัง Google Maps Search แทน)
* ❌ ระบบคิดเงินหรือชำระเงิน

### 2.3 Non-Functional Requirements (เกณฑ์คุณภาพ)
* **Performance:** แอนิเมชันการสุ่มต้องลื่นไหล ไม่กระตุก และมีการ Clear Interval เมื่อสุ่มเสร็จเพื่อป้องกัน Memory Leak
* **Usability:** ปุ่มกดมีขนาดใหญ่ กดง่ายบนมือถือ (Touch Target >= 44px) และมีสถานะ Active/Disabled ชัดเจน
* **Code Modularity:** แบ่ง Component แยกไฟล์ชัดเจน ไม่เขียนโค้ดรวมกันในไฟล์เดียว เพื่อให้สมาชิก 5 คนแบ่งงานกันได้

---

## 3. 🧠 Knowledge & Tech Stack Map (องค์ความรู้และทักษะที่นำมาใช้)

ในการพัฒนาโปรเจกต์นี้ ทีมจะใช้และฝึกฝนองค์ความรู้ด้าน Software Development ดังนี้:

### 3.1 ⚛️ React Core Concepts
1. **Component-Driven Development:** การแบ่ง UI ออกเป็นส่วนย่อยที่มีหน้าที่เฉพาะเจาะจง (Single Responsibility Principle) เช่น `Header`, `ModeSelector`, `MenuCard`
2. **Props & One-way Data Binding:** การส่งผ่านข้อมูลและฟังก์ชัน Callback จาก Parent Component (`App.jsx`) ลงไปยัง Child Components
3. **Lifting State Up:** การยก State ที่ต้องใช้ร่วมกัน (`mode`, `currentItem`, `isRandomizing`) ไปไว้ที่ `App.jsx` เพื่อให้ทุก Component เข้าถึงและเปลี่ยนแปลงข้อมูลชุดเดียวกันได้
4. **Keys in Lists:** การกำหนด `key={mode.id}` เมื่อใช้ `.map()` เพื่อช่วยให้ React Virtual DOM เปรียบเทียบและอัปเดต Element ได้อย่างมีประสิทธิภาพ

### 3.2 🪝 React Hooks & Lifecycle
1. **`useState`:** ใช้จัดการ Reactive State ภายในแอป (เช่น โหมดที่เลือก, ข้อมูลเมนูปัจจุบัน, สถานะกำลังสุ่ม)
2. **`useEffect`:** ใช้ดักจับการเปลี่ยนแปลงของ `mode` เพื่อเปลี่ยนเมนูเริ่มต้นของโหมดนั้นๆ ทันที
3. **`useMemo`:** ใช้คำนวณและกรอง Array ข้อมูลอาหาร/เครื่องดื่มจาก `menus.json` เพื่อป้องกันการคำนวณซ้ำโดยไม่จำเป็นเมื่อ Component Re-render

### 3.3 💻 JavaScript (ES6+) Features
1. **Array Methods:**
   * `Array.prototype.map()`: ใช้แปลง Array ของโหมดเป็นปุ่ม UI
   * `Array.prototype.filter()`: ใช้กรองเมนูตาม `type: "food"` หรือ `type: "drink"`
2. **Asynchronous Timers (`setInterval` & `clearInterval`):** ใช้สร้างลูปสลับภาพเมนูแบบสุ่มอย่างรวดเร็วเพื่อสร้าง Animation Effect และสั่งหยุดเมื่อครบเวลา
3. **Math API:** `Math.floor(Math.random() * length)` สำหรับการสุ่ม Index ของ Array
4. **URL Encoding & Web API:** `encodeURIComponent()` และ `window.open(url, '_blank')` สำหรับสร้าง Link และเปิดหน้าต่าง Google Maps Search

### 3.4 🎨 Styling & CSS (Tailwind CSS)
1. **Utility-First Styling:** ใช้คลาสของ Tailwind เช่น `flex`, `items-center`, `justify-center`, `rounded-3xl`, `shadow-sm`
2. **Color Palette & Theme:** ใช้วรรณะสี Earth Tone (Stone, Amber, Neutral Gray) ให้ความรู้สึกมินิมอล คลีนตา
3. **Transitions & Transforms:** ใช้ `transition-all`, `active:scale-95`, `animate-spin` เพื่อสร้าง Micro-interaction ให้ปุ่มกดและไอคอน
4. **Responsive Breakpoints:** ใช้ `sm:`, `w-full max-w-md` เพื่อจัดการความกว้างบนหน้าจอขนาดต่างๆ

### 3.5 🤝 Git & Team Collaboration
1. **Feature Branching:** แยก Branch สำหรับแต่ละ Component เช่น `feat/header`, `feat/mode-selector`, `feat/menu-card`
2. **Interface Agreement:** การตกลง Props Interface ล่วงหน้า เพื่อให้ทุกคนเขียนโค้ดขนานกันได้โดยไม่ต้องรอโค้ดของเพื่อน

---

## 4. 📋 User Stories & Acceptance Criteria (Gherkin Format)

### Story 1: สลับประเภทเมนู (Mode Switching)
* **Given:** ผู้ใช้อยู่ที่หน้าจอหลักของ KinHub
* **When:** ผู้ใช้คลิกเลือกแท็บ *"☕ เครื่องดื่ม"*
* **Then:** ระบบต้องเปลี่ยนสถานะโหมดเป็น `drink` และสไตล์ปุ่มต้องแสดงสถานะ Active
* **And:** การ์ดเมนูต้องเปลี่ยนมาแสดงเมนูเครื่องดื่มเริ่มต้นทันที

### Story 2: การสุ่มเมนูพร้อมแอนิเมชัน (Randomizing)
* **Given:** ผู้ใช้เปิดดูเมนูในโหมดใดโหมดหนึ่ง
* **When:** ผู้ใช้กดปุ่ม *"🔄 สุ่มใหม่"*
* **Then:** รูปภาพและชื่อเมนูต้องสลับเปลี่ยนแบบสุ่มอย่างรวดเร็ว (Shuffling) เป็นเวลาประมาณ 1.5 วินาที
* **And:** ปุ่มสุ่มต้องอยู่ในสถานะ `disabled` และแสดงข้อความ *"กำลังสุ่ม..."* พร้อมไอคอนหมุน
* **And:** เมื่อครบเวลา ระบบต้องแสดงผลลัพธ์เมนูสุดท้ายที่ถูกสุ่มได้

### Story 3: การค้นหาร้านใกล้ฉัน (Nearby Search)
* **Given:** สุ่มได้เมนูผลลัพธ์ เช่น *"ผัดซีอิ๊ว"*
* **When:** ผู้ใช้กดปุ่ม *"📍 ค้นหาร้านใกล้ฉัน"*
* **Then:** เว็บเบราว์เซอร์ต้องเปิดแท็บใหม่ไปยัง Google Maps ด้วย URL `https://www.google.com/maps/search/ผัดซีอิ๊ว+ใกล้ฉัน`

---

## 5. 📂 Project Structure & Component Architecture

### 5.1 Project Folder Structure (โครงสร้างไฟล์)
เพื่อให้ทีมเห็นภาพรวมของโค้ด โฟลเดอร์และไฟล์ใน `src/` จะถูกจัดระเบียบดังนี้ เพื่อให้ทุกคนรู้ว่าตัวเองต้องทำงานที่ไฟล์ไหน:

```text
kinhub-project/
├── index.html           # หน้า HTML หลัก (ใส่ฟอนต์ Prompt)
├── package.json         # Dependencies (React, Tailwind, Lucide Icons)
└── src/
    ├── main.jsx         # ไฟล์ Mount React (Boilerplate)
    ├── index.css        # ไฟล์เรียกใช้ Tailwind CSS (Boilerplate)
    ├── App.jsx          # 🔴 [Member 1] Component หลักสำหรับคุม State & Logic ทั้งหมด
    ├── data/
    │   └── menus.json   # 🟡 [Member 5] ฐานข้อมูลจำลอง (Mock Data)
    └── components/
        ├── Header.jsx       # 🟢 [Member 5] แถบหัวเว็บและโลโก้แอป
        ├── ModeSelector.jsx # 🔵 [Member 2] ปุ่มสลับโหมดอาหาร/เครื่องดื่ม
        └── MenuCard.jsx     # 🟣 [Member 3, 4] การ์ดแสดงรูปภาพเมนู และปุ่มกดต่างๆ
```

### 5.2 Component Hierarchy & Props Contract
```
                              [ App.jsx ]
       ┌───────────────────────────┼───────────────────────────┐
       ▼                           ▼                           ▼
  [ Header ]               [ ModeSelector ]               [ MenuCard ]
  - Title & Brand          - currentMode                  - item (Object)
                           - onSelectMode (Callback)      - isShuffling (Boolean)
                                                          - onRandomize (Callback)
                                                          - onFindNearby (Callback)
```

### รายละเอียด Props Interface แต่ละ Component:

| Component | Props Name | Type | Description |
| :--- | :--- | :--- | :--- |
| **`Header`** | *(ไม่มี)* | - | แสดงแบรนด์ KinHub และหัวข้อ "วันนี้กินอะไรดี" |
| **`ModeSelector`** | `currentMode` | `string` | โหมดปัจจุบัน (`'food'` หรือ `'drink'`) |
| | `onSelectMode` | `(mode: string) => void` | ฟังก์ชัน Callback ส่งโหมดที่เลือกกลับไปที่ App |
| **`MenuCard`** | `item` | `object \| null` | ข้อมูลเมนูปัจจุบัน `{ id, name, category, type, imageUrl }` |
| | `isShuffling` | `boolean` | สถานะกำลังสุ่ม (ใช้ควบคุมการเบลอรูปภาพและ Disable ปุ่ม) |
| | `onRandomize` | `() => void` | ฟังก์ชัน Callback เมื่อคลิกปุ่ม "สุ่มใหม่" |
| | `onFindNearby` | `() => void` | ฟังก์ชัน Callback เมื่อคลิกปุ่ม "ค้นหาร้านใกล้ฉัน" |

---

## 6. 🎓 JSD 13 Rubric Mapping & Technical Defense

ตารางสำหรับเตรียมความพร้อมในการตอบคำถามและนำเสนอโปรเจกต์:

| เกณฑ์การประเมิน (Rubric) | จุดที่นำมาใช้ในโปรเจกต์ | คำอธิบายทางเทคนิค (สำหรับตอบผู้ตรวจ) |
| :--- | :--- | :--- |
| **1. At least 3 Components** | แยก `Header`, `ModeSelector`, `MenuCard` และ `App` | ใช้หลักการ **Modular Architecture** เพื่อแยก UI ออกเป็นส่วนๆ ทำให้โค้ด Clean, อ่านง่าย, และแบ่งงานในทีม 5 คนได้สะดวก |
| **2. At least 1 `useState`** | มี 3 States: `mode`, `currentItem`, `isRandomizing` ใน `App.jsx` | ใช้จัดการ State แบบ **Reactive** เมื่อค่าเปลี่ยน React จะทำการ Re-render หน้าจอเฉพาะส่วนที่เกี่ยวข้องโดยอัตโนมัติ |
| **3. At least 2 Event Handlers** | `handleRandomize()`, `handleFindNearby()`, `handleModeChange()` | ใช้จัดการ Event ที่เกิดจากการกระทำของผู้ใช้ (User Interactions) เช่น การกดปุ่ม และควบคุม State |
| **4. At least 1 `.map()` Render** | เรนเดอร์ปุ่มโหมดใน `ModeSelector.jsx` จาก Array `MODES` | ใช้แปลง JavaScript Array เป็น JSX Button Elements พร้อมกำหนด `key` เพื่อประสิทธิภาพของ Virtual DOM |
| **5. At least 1 Conditional Render** | สลับสไตล์ Active ของปุ่มโหมด และข้อความระหว่างกำลังสุ่ม `{isShuffling ? ... : ...}` | ควบคุมการแสดงผลของ UI ตามเงื่อนไขของสถานะแอปพลิเคชันในขณะนั้น |

---

## 7. 👥 4-Hour Sprint Plan & Task Allocation (แบ่งงาน 5 คน)

| สมาชิก | หน้าที่ / บทบาท | ไฟล์ที่รับผิดชอบ | รายละเอียดงานที่ต้องทำ |
| :--- | :--- | :--- | :--- |
| **Member 1 (Lead)** | **State & Random Engine** | `src/App.jsx` | วางโครงสร้าง State กลาง, เขียนฟังก์ชัน `handleRandomize` (Interval Shuffling), และฟังก์ชันเปิด Google Maps |
| **Member 2** | **Mode Selector Component** | `src/components/ModeSelector.jsx` | สร้างปุ่มสลับ "อาหาร" / "เครื่องดื่ม" ด้วย `.map()`, จัดการ Active/Inactive Style |
| **Member 3** | **Menu Card Presentation** | `src/components/MenuCard.jsx` (Layout) | จัดการ Layout การ์ดสี่เหลี่ยม, กรอบรูปภาพ, จัด Typography ชื่อเมนู และจัด Responsive |
| **Member 4** | **Action Buttons & Animation** | `src/components/MenuCard.jsx` (Buttons) | ทำปุ่ม "สุ่มใหม่" (พร้อม Loading Spinner) และปุ่ม "ค้นหาร้านใกล้ฉัน" พร้อม Effect ปุ่มกด |
| **Member 5** | **Branding & Mock Data** | `src/components/Header.jsx`, `src/data/menus.json` | ออกแบบ Header สไตล์ Minimalist และเตรียมข้อมูลอาหาร + เครื่องดื่ม 10-15 เมนูพร้อมรูปภาพ |

---

## 8. 🧪 Quality Assurance & Edge Cases Checklist

- [ ] **Data Filtering:** เมื่อสลับโหมด อาหารต้องไม่ออกมาปนกับเครื่องดื่ม
- [ ] **Animation Cleanup:** เมื่อสุ่มเสร็จ `clearInterval` ต้องทำงานถูกต้อง ไม่เกิดการสุ่มค้าง
- [ ] **External Link:** ปุ่มค้นหาร้านใกล้ฉัน ต้องเปิด Tab ใหม่ (`target="_blank"`) และคำค้นหาถูกต้อง
- [ ] **Spam Click Lock:** ขณะกำลังสุ่ม (isRandomizing = true) ต้องกดปุ่มสุ่มซ้ำไม่ได้
- [ ] **Responsive Test:** ทดสอบเปิดบนหน้าจอขนาดมือถือ (Mobile View) แล้วจัดวางกึ่งกลางสวยงาม
