# 🃏 KinHub: Full Implementation Reference (โค้ดอ้างอิงไพ่ตาย)
> **เอกสารคู่มือโค้ดอ้างอิงสำหรับ:** JSD 13 Build Day - Group 1  
> **PRD หลัก:** [PRD.md](./PRD.md)  
> **ดีไซน์:** สไตล์ Minimalist Warm Beige ตามแบบ UI Mockup

---

## 📑 สารบัญไฟล์
1. [`src/data/menus.json`](#1-srcdatamenusjson-mock-data-อาหาร--เครื่องดื่ม) (Member 5)
2. [`src/components/Header.jsx`](#2-srccomponentsheaderjsx-brand--title) (Member 5)
3. [`src/components/ModeSelector.jsx`](#3-srccomponentsmodeselectorjsx-ปุ่มเลือกโหมด) (Member 2)
4. [`src/components/MenuCard.jsx`](#4-srccomponentsmenucardjsx-การ์ดแสดงผล--ปุ่มกด) (Member 3 & 4)
5. [`src/App.jsx`](#5-srcappjsx-state--random-engine) (Member 1)

---

### 1. `src/data/menus.json` (Mock Data อาหาร & เครื่องดื่ม)
*(รับผิดชอบโดย Member 5)*

```json
[
  {
    "id": "food-01",
    "name": "ผัดซีอิ๊วหมู",
    "type": "food",
    "category": "เส้น",
    "imageUrl": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "food-02",
    "name": "กะเพราหมูกรอบไข่ดาว",
    "type": "food",
    "category": "ข้าว",
    "imageUrl": "https://images.unsplash.com/photo-1569058242567-93de6f36f8e6?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "food-03",
    "name": "ข้าวมันไก่ต้ม",
    "type": "food",
    "category": "ข้าว",
    "imageUrl": "https://images.unsplash.com/photo-1626804475297-41608ea09aeb?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "food-04",
    "name": "ก๋วยเตี๋ยวต้มยำกุ้ง",
    "type": "food",
    "category": "เส้น",
    "imageUrl": "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "food-05",
    "name": "ข้าวหน้าเนื้อญี่ปุ่น (Gyudon)",
    "type": "food",
    "category": "ข้าว",
    "imageUrl": "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "food-06",
    "name": "สุกี้น้ำรวมมิตร",
    "type": "food",
    "category": "ต้ม/แกง",
    "imageUrl": "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "drink-01",
    "name": "ชาไทยเย็นโบราณ",
    "type": "drink",
    "category": "ชา",
    "imageUrl": "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "drink-02",
    "name": "มัทฉะลาเต้เย็น",
    "type": "drink",
    "category": "ชา",
    "imageUrl": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "drink-03",
    "name": "อเมริกาโน่เย็น",
    "type": "drink",
    "category": "กาแฟ",
    "imageUrl": "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "drink-04",
    "name": "ชามะนาวเย็น",
    "type": "drink",
    "category": "ชา",
    "imageUrl": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    "id": "drink-05",
    "name": "นมสดคาราเมลเย็น",
    "type": "drink",
    "category": "นม",
    "imageUrl": "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=600&q=80"
  }
]
```

---

### 2. `src/components/Header.jsx` (Brand & Title)
*(รับผิดชอบโดย Member 5)*

```jsx
import React from 'react';

/**
 * Header Component
 * แสดงชื่อแบรนด์ KinHub และหัวข้อ "วันนี้กินอะไรดี"
 */
export default function Header() {
  return (
    <div className="text-center pt-8 pb-4 space-y-4">
      {/* Brand Name */}
      <h2 className="text-sm font-bold text-amber-900/80 tracking-wide uppercase">
        KinHub
      </h2>

      {/* Main Title */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
        วันนี้กินอะไรดี
      </h1>
    </div>
  );
}
```

---

### 3. `src/components/ModeSelector.jsx` (ปุ่มเลือกโหมด)
*(รับผิดชอบโดย Member 2)*

```jsx
import React from 'react';
import { Utensils, Coffee } from 'lucide-react';

/**
 * ModeSelector Component
 * [JSD Concept: .map() Render] เรนเดอร์ปุ่มสลับโหมด อาหาร vs เครื่องดื่ม
 * 
 * Props:
 * - currentMode (string): 'food' หรือ 'drink'
 * - onSelectMode (function): Callback ส่งค่าโหมดที่เลือกกลับไปที่ App
 */

const MODES = [
  { id: 'food', label: 'อาหาร', icon: Utensils },
  { id: 'drink', label: 'เครื่องดื่ม', icon: Coffee },
];

export default function ModeSelector({ currentMode, onSelectMode }) {
  return (
    <div className="flex justify-center items-center gap-3 my-4">
      {MODES.map((mode) => {
        const IconComponent = mode.icon;
        const isActive = currentMode === mode.id;

        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => onSelectMode(mode.id)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-200 active:scale-95 shadow-xs ${
              isActive
                ? 'bg-white text-gray-900 border-2 border-stone-400 shadow-sm'
                : 'bg-white/70 text-gray-500 border border-stone-200 hover:border-stone-300 hover:text-gray-700'
            }`}
          >
            <IconComponent className={`w-4 h-4 ${isActive ? 'text-amber-800' : 'text-gray-400'}`} />
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
```

---

### 4. `src/components/MenuCard.jsx` (การ์ดแสดงผล & ปุ่มกด)
*(รับผิดชอบโดย Member 3 & Member 4)*

```jsx
import React from 'react';
import { RotateCw, MapPin, Sparkles } from 'lucide-react';

/**
 * MenuCard Component
 * 
 * Props:
 * - item (object | null): เมนูที่กำลังแสดงผล
 * - isShuffling (boolean): สถานะว่ากำลังสุ่มอยู่หรือไม่
 * - onRandomize (function): Callback เมื่อกดปุ่ม "สุ่มใหม่"
 * - onFindNearby (function): Callback เมื่อกดปุ่ม "ค้นหาร้านใกล้ฉัน"
 */
export default function MenuCard({ item, isShuffling, onRandomize, onFindNearby }) {
  if (!item) return null;

  return (
    <div className="w-full max-w-sm mx-auto bg-white rounded-3xl p-6 shadow-sm border border-stone-200/80 space-y-6">
      
      {/* 1. Image Container (กรอบรูปตรงกลางตาม Mockup) */}
      <div className="w-full aspect-square bg-stone-100 rounded-2xl overflow-hidden relative border border-stone-200/50 shadow-inner flex items-center justify-center">
        {item.imageUrl ? (
          <img
            src={item.imageUrl}
            alt={item.name}
            className={`w-full h-full object-cover transition-all duration-200 ${
              isShuffling ? 'scale-95 blur-[1px] opacity-70' : 'scale-100 blur-0 opacity-100'
            }`}
          />
        ) : (
          /* Placeholder กรณีไม่มีภาพ */
          <div className="w-full h-full flex items-center justify-center text-stone-300">
            <div className="w-16 h-16 border-2 border-dashed border-stone-300 rounded-xl" />
          </div>
        )}
      </div>

      {/* 2. Menu Name */}
      <div className="text-center">
        <h3 className="text-xl font-bold text-gray-900 tracking-tight">
          {item.name}
        </h3>
      </div>

      {/* 3. Action Buttons */}
      <div className="space-y-3 pt-2">
        {/* ปุ่ม 1: สุ่มใหม่ */}
        <button
          type="button"
          onClick={onRandomize}
          disabled={isShuffling}
          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all active:scale-95 ${
            isShuffling
              ? 'bg-stone-300 text-stone-500 cursor-not-allowed'
              : 'bg-stone-200 hover:bg-stone-300 text-stone-800'
          }`}
        >
          {isShuffling ? (
            <>
              <Sparkles className="w-4 h-4 animate-spin text-stone-600" />
              กำลังสุ่ม...
            </>
          ) : (
            <>
              <RotateCw className="w-4 h-4 text-stone-700" />
              สุ่มใหม่
            </>
          )}
        </button>

        {/* ปุ่ม 2: ค้นหาร้านใกล้ฉัน (เปิด Google Maps) */}
        <button
          type="button"
          onClick={onFindNearby}
          disabled={isShuffling}
          className="w-full py-3.5 rounded-xl font-bold text-sm bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-2xs"
        >
          <MapPin className="w-4 h-4 text-amber-800" />
          ค้นหาร้าน ใกล้ฉัน
        </button>
      </div>
    </div>
  );
}
```

---

### 5. `src/App.jsx` (State & Random Engine)
*(รับผิดชอบโดย Member 1)*

```jsx
import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import ModeSelector from './components/ModeSelector';
import MenuCard from './components/MenuCard';
import menusData from './data/menus.json';

export default function App() {
  // 1. [JSD Concept: useState] โหมดปัจจุบัน ('food' หรือ 'drink')
  const [mode, setMode] = useState('food');

  // 2. [JSD Concept: useState] เมนูที่กำลังแสดงผล
  const [currentItem, setCurrentItem] = useState(null);

  // 3. [JSD Concept: useState] สถานะระหว่างสุ่ม (Shuffling)
  const [isRandomizing, setIsRandomizing] = useState(false);

  // กรองรายการอาหาร/เครื่องดื่มตามโหมดที่เลือก
  const availableItems = useMemo(() => {
    return menusData.filter((item) => item.type === mode);
  }, [mode]);

  // เมื่อเปลี่ยนโหมด ให้ตั้งค่าเมนูเริ่มต้นของโหมดนั้น
  useEffect(() => {
    if (availableItems.length > 0) {
      setCurrentItem(availableItems[0]);
    }
  }, [mode, availableItems]);

  // [JSD Concept: Event Handler #1] สลับโหมด
  const handleModeChange = (newMode) => {
    if (isRandomizing) return;
    setMode(newMode);
  };

  // [JSD Concept: Event Handler #2] ฟังก์ชันสุ่มเมนู (Shuffling Animation)
  const handleRandomize = () => {
    if (availableItems.length === 0 || isRandomizing) return;

    setIsRandomizing(true);
    let counter = 0;
    const totalSteps = 12; // สลับภาพ 12 ครั้ง
    const intervalTime = 80; // ทุกๆ 80 ms

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableItems.length);
      setCurrentItem(availableItems[randomIndex]);
      counter++;

      if (counter >= totalSteps) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * availableItems.length);
        setCurrentItem(availableItems[finalIndex]);
        setIsRandomizing(false);
      }
    }, intervalTime);
  };

  // [JSD Concept: Event Handler #3] เปิด Google Maps เพื่อค้นหาร้านใกล้ฉัน
  const handleFindNearby = () => {
    if (!currentItem) return;
    const searchQuery = `${currentItem.name} ใกล้ฉัน`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
    window.open(googleMapsUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-stone-50 text-gray-900 flex flex-col justify-center px-4 py-8 font-sans selection:bg-amber-100">
      <div className="w-full max-w-md mx-auto space-y-4">
        {/* Component 1: Header */}
        <Header />

        {/* Component 2: Mode Selector */}
        <ModeSelector
          currentMode={mode}
          onSelectMode={handleModeChange}
        />

        {/* Component 3: Menu Card */}
        <MenuCard
          item={currentItem}
          isShuffling={isRandomizing}
          onRandomize={handleRandomize}
          onFindNearby={handleFindNearby}
        />
      </div>
    </div>
  );
}
```
