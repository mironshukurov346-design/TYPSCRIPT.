"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let admins = ['miron', 'ivan'];
// admins.push('petr'); //Error: Property 'push' does not exist on type 'readonly string[]'.
// admins[0] = 'petr'; //Error: Index signature in type 'readonly string[]' only permits reading.
console.log(admins);
// yani readonly - bu massivni o'zgartirishga ruxsat bermaydi,
//  ya'ni yangi element qo'shish yoki mavjud elementlarni o'zgartirish mumkin emas.
//  Bu massivni faqat o'qish uchun ishlatish uchun mo'ljallangan.
// bu malumotlar xavfsizligini berish uchun ishlatiladi, masalan, agar siz biror joyda admins massivini o'zgartirishni xohlamasangiz, uni readonly qilib belgilashingiz mumkin.
//# sourceMappingURL=app.js.map