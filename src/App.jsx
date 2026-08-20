// /*
//   TODO: ภารกิจของ App.jsx
//   [ ] 1. สร้าง Component หลักชื่อ App
//   [ ] 2. สร้าง State ชื่อ `mode` (ค่าเริ่มต้น 'food')
//   [ ] 3. สร้าง State ชื่อ `currentItem` (ค่าเริ่มต้น null)
//   [ ] 4. สร้าง State ชื่อ `isRandomizing` (ค่าเริ่มต้น false)
//   [ ] 5. สร้างฟังก์ชันชื่อ `handleModeChange(newMode)` ไว้ดักการเปลี่ยนโหมด
//   [ ] 6. สร้างฟังก์ชันชื่อ `handleRandomize()` ไว้ทำแอนิเมชันสุ่มเมนู
//   [ ] 7. สร้างฟังก์ชันชื่อ `handleFindNearby()` ไว้เปิด URL Google Maps
//   [ ] 8. ในส่วน return ให้จัด Layout และเรียกใช้ <Header />, <ModeSelector /> และ <MenuCard />
//   [ ] 9. นำ State และ Function ทั้งหมด ส่งเป็น Props ลงไปให้ Component ลูกตามที่ตกลงกันไว้
// */

import { useState, useEffect, useMemo } from "react";
import Header from "./components/Header";
import ModeSelector from "./components/ModeSelector";
import MenuCard from "./components/MenuCard";
import menusData from "./data/menus.js";

const App = () => {
  const [mode, setMode] = useState("food");
  const [currentItem, setCurrentItem] = useState(null);
  const [isRandomizing, setIsRandomzing] = useState(false);

  const availableItem = useMemo(() => {
    return menusData.filter((menu) => menu.type === mode);
  }, [mode]);
  console.log(mode);

  useEffect(() => {
    if (availableItem.length > 0) {
      setCurrentItem(availableItem[0]);
    }
  }, [availableItem]);

  const handleModeChange = (newMode) => {
    if (isRandomizing) return;
    setMode(newMode);
  };

  const handleRandomize = () => {
    if (availableItem.lenght === 0 || isRandomizing) return;

    setIsRandomzing(true);
    let counter = 0;
    const totalSteps = 12;
    const intervalTime = 80;

    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * availableItem.lenght);
      setCurrentItem(availableItem[randomIndex]);
      counter++;

      if (counter >= totalSteps) {
        clearInterval(interval);
        const finalIndex = Math.floor(Math.random() * availableItem.length);
        setCurrentItem(availableItem[finalIndex]);
        setIsRandomzing(false);
      }
    }, intervalTime);
  };

  const handleFindNearby = () => {
    if (!currentItem) return;
    const searchQuery = `${currentItem.name} ใกล้ฉัน`;
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
    window.open(googleMapsUrl, "_blank");
  };

  return (
    <div>
      <div>
        <Header />
        <ModeSelector currentMode={mode} onSelectMode={handleModeChange} />
        <MenuCard
          item={currentItem}
          isShuffling={isRandomizing}
          onRandomize={handleRandomize}
          onFindNearby={handleFindNearby}
        />
      </div>
    </div>
  );
};

export default App;
