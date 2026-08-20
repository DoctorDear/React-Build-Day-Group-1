/*
  TODO: ภารกิจของ ActionButtons.jsx
  [ ] 1. สร้าง Component ที่รับ Props 3 ตัว คือ `isShuffling`, `onRandomize`, `onFindNearby`
  [ ] 2. สร้างปุ่มที่ 1 "สุ่มใหม่" และผูก onClick เข้ากับ `onRandomize`
  [ ] 3. สร้างปุ่มที่ 2 "ค้นหาร้านใกล้ฉัน" และผูก onClick เข้ากับ `onFindNearby`
  [ ] 4. ที่ปุ่มทั้งสอง ให้เพิ่มแอตทริบิวต์ disabled โดยผูกกับค่า `isShuffling` (ถ้าสุ่มอยู่ ห้ามกดปุ่ม)
  [ ] 5. ที่ปุ่ม "สุ่มใหม่" ให้เขียนเงื่อนไขว่า ถ้า `isShuffling` เป็น true ให้เปลี่ยนข้อความปุ่มเป็น "กำลังสุ่ม..."
*/

export default function ActionButtons({
  isShuffling,
  onRandomize,
  onFindNearby,
}) {
  return (
    <div className="action-buttons">
      <button
        onClick={onRandomize}
        disabled={isShuffling}
        className="w-full py-3.5 rounded-xl font-bold text-sm bg-orange-300 border border-stone-300 hover:bg-stone-400 text-stone-800 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-2xs"
      >
        {isShuffling ? "กำลังสุ่ม..." : "สุ่มใหม่"}
      </button>

      <button
        onClick={onFindNearby}
        disabled={isShuffling}
        className="w-full py-3.5 rounded-xl font-bold text-sm bg-white border border-stone-300 hover:bg-stone-50 text-stone-800 flex items-center justify-center gap-2 transition-all active:scale-95 shadow-2xs"
      >
        ค้นหาร้านใกล้ฉัน
      </button>
    </div>
  );
}
