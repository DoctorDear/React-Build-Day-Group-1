/*
  TODO: ภารกิจของ ModeSelector.jsx
  [ ] 1. สร้าง Component ที่รับ Props 2 ตัว คือ `currentMode` และ `onSelectMode`
  [ ] 2. สร้าง Array สำหรับเก็บข้อมูลโหมด (เช่น มี id: 'food' กับ 'drink')
  [ ] 3. ในส่วน return ให้ใช้ .map() วนลูป Array เพื่อสร้างแท็ก <button>
  [ ] 4. ที่ <button> ให้ผูก onClick เพื่อเรียกใช้ onSelectMode พร้อมส่ง id โหมดกลับไป
  [ ] 5. เขียนเงื่อนไข CSS (Ternary Operator) ว่าถ้า currentMode ตรงกับปุ่มนี้ ให้สลับคลาสสีปุ่มเป็นสถานะ Active
*/

import React from "react";
import { useContext } from "react";
import { UtensilsCrossed, CupSoda } from "lucide-react";

const Modes = [
  { id: "food", label: "อาหาร", icon: UtensilsCrossed },
  { id: "drink", label: "เครื่องดื่ม", icon: CupSoda },
];

export default function ModeSelector({ currentMode, onSelectMode }) {
  return (
    <div className="flex justify-center items-center gap-4 my-4">
      {Modes.map((mode) => {
        const IconComponent = mode.icon;
        const isActive = currentMode === mode.id;

        return (
          <button
            key={mode.id}
            type="button"
            onClick={() => onSelectMode(mode.id)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 active:scale-95 showdow-xs ${
              isActive
                ? "bg-white text-amber-700 border border-stone-500 shadow-md hover:bg-gray-100"
                : "bg-white text-slate-500 border border-stone-200 hover:border-stone-200 hover:text-slate-700"
            }`}
          >
            <IconComponent
              className={`w-4 h-4 ${isActive ? "text-amber-700" : "text-gray-400 hover:text-slate-700"}`}
            />
            {mode.label}
          </button>
        );
      })}
    </div>
  );
}
