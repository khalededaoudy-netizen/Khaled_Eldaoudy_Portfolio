# 📐 موقع المهندس خالد الداودي | Mechatronics Engineering Blueprint Portfolio

موقع شخصي وبورتفوليو هندسي تفاعلي ثنائي اللغة (**English + العربية RTL**) مصمم بهوية **"Engineering Blueprint"** المبتكرة، ومبني بأحدث معايير الويب الخفيفة (HTML5 + Modern CSS + Vanilla JavaScript ES Modules + GSAP Animations) دون أي أطر عمل أو تعقيدات في البناء، ليعمل مباشرة بمجرد رفعه على أي استضافة مجانية.

---

## ⚡ 1. التشغيل المحلي الفوري (Local Testing)

نظراً لأن الموقع يعتمد على جلب ملفات البيانات بصيغة JSON عبر JavaScript Modules (`fetch`)، يتطلب تشغيله خادماً محلياً بسيطاً لتفادي قيود المتصفح الأمنية (CORS):

### الطريقة 1: باستخدام Python (الأسهل والأسرع)
افتح موجه الأوامر في مجلد المشروع واكتب:
```bash
python -m http.server 8000
```
ثم افتح متصفحك على الرابط: `http://localhost:8000`

### الطريقة 2: باستخدام Node.js
```bash
npx serve .
```

---

## 🚀 2. خطوات النشر المجاني (Deployment Guide)

الموقع جاهز بنسبة 100% للنشر المجاني السحابي عبر أي من المنصات التالية:

### أ) النشر عبر Netlify (خلال دقيقة واحدة):
1. **طريقة السحب والإفلات (Drag & Drop):**
   * سجّل دخولك مجاناً على [Netlify](https://app.netlify.com/).
   * اسحب مجلد المشروع بالكامل وأفلته داخل نافذة **"Sites"**.
   * سيتم نشر الموقع فورياً وسيعطيك رابطاً مجانياً بصيغة: `https://your-name.netlify.app`.
2. **طريقة الربط مع GitHub:**
   * ارفع المشروع على مستودع (Repository) في حسابك على GitHub.
   * اختر **"Add new site" > "Import an existing project"** واختر المستودع.
   * اترك إعدادات البناء فارغة لأن الموقع ثابت (Static) والمجلد هو الجزر الرئيسي `.`.
   * يتضمن المشروع ملف `netlify.toml` المهيأ مسبقاً برؤوس الأمان والتخزين المؤقت.

### ب) النشر عبر GitHub Pages:
1. أنشئ مستودعاً جديداً على GitHub باسم `khaled_Eldaoudy_portfolio` أو `khaled.dev`.
2. ارفع ملفاتك إلى المستودع:
   ```bash
   git init
   git add .
   git commit -m "Initial Mechatronics Blueprint Portfolio"
   git branch -M main
   git remote add origin https://github.com/USERNAME/khaled_Eldaoudy_portfolio.git
   git push -u origin main
   ```
3. توجه إلى إعدادات المستودع **Settings > Pages**.
4. تحت خانة **Build and deployment > Source** اختر **GitHub Actions**.
5. سيعمل ملف الـ Workflow التلقائي المتوفر بالمشروع `.github/workflows/deploy.yml` على نشر الموقع فورياً.

### ج) ربط نطاق خاص مجاني أو مدفوع (Custom Domain):
* داخل لوحة تحكم Netlify أو GitHub Pages، ادخل على **Domain Management**.
* اكتب نطاقك الخاص (مثلاً `khaled.dev` أو `khaled-mechatronics.com`).
* أضف سجلات CNAME أو A Records التي توفرها المنصة في لوحة تحكم مزود النطاق. يتم تفعيل شهادة الأمان SSL تلقائياً مجاناً.

---

## 🔧 3. ما تحتاج إلى استبداله وتخصيصه (Replacement Checklist)

1. **نموذج التواصل (Formspree Endpoint):**
   * ادخل على [Formspree.io](https://formspree.io/) وأنشئ نموذجاً مجانياً جديداً.
   * انسخ الرابط وضعّه في السطر 9 من ملف `js/config.js`:
     ```javascript
     FORMSPREE_ENDPOINT: "https://formspree.io/f/your_form_id",
     ```
2. **الصورة الشخصية وخلفيتها:**
   * تم وضع صورتك الحالية في `/assets/profile/profile.png` داخل إطار Blueprint هندسي مزود بأقواس نيون وهالة ضوئية خلف الرأس، مع إضافة قناع تدرج CSS (`mask-image`) ناعم في الأسفل لدمج حوافها مع الخلفية الداكنة `#0A0E14`.
   * إذا رغبت في عزل خلفيتها بشكل كامل مستقبلاً، يمكنك إزالة خلفية الصورة عبر أي أداة عزل مثل (remove.bg أو Photoshop) واستبدال ملف `profile.png`.
3. **الصور الحقيقية للمشاريع والمسابقات:**
   * الموقع مزود بمولد رسومات Blueprint SVG تفاعلي وجمالي يرسم مخططات دوائر ومتحكمات وأذرع روبوتية بشكل تلقائي للمشاريع والمسابقات لحين وضع صورك الحقيقية.
   * فور التقاط صور مشروعاتك، ضعها داخل المجلدات المخصصة في `assets/projects/<slug>/` أو `assets/competitions/<slug>/`.
   * شغّل الأمر التالي لربط الصور تلقائياً بملفات البيانات:
     ```bash
     npm run sync-images
     ```

---

## ⏱️ 4. إضافة مشروع هندسي جديد في أقل من دقيقتين

1. افتح ملف `data/projects.json`.
2. انسخ أي كائن مشروع موجود وألصقه في الأسفل مع تعديل البيانات:
   ```json
   {
     "id": "proj-new-robot",
     "slug": "new-robot",
     "category": "robotics",
     "year": 2026,
     "title": { "en": "New Robot Name", "ar": "اسم الروبوت الجديد" },
     "summary": { "en": "English summary", "ar": "ملخص عربي" },
     "description": { "en": "Full description", "ar": "الوصف الكامل" },
     "role": { "en": "Developer", "ar": "تطوير وتنفيذ" },
     "tech": ["Arduino", "Sensors", "CAD"],
     "platform": "Embedded MCU",
     "images": [],
     "cover": "",
     "featured": true
   }
   ```
3. احفظ الملف، وسيظهر المشروع فوراً في الموقع مع فلترته وتفاصيله الدقيقة!

---

## 🧪 5. الأوامر المساعدة في المشروع

* `npm run validate`: فحص اكتمال نصوص اللغتين وتواجد مسارات الملفات.
* `npm run sync-images`: فحص مجلدات الصور وربطها تلقائياً بملفات الـ JSON وتفضيل صيغ WebP الحديثة.
* `npm run optimize`: تحويل الصور الأصلية إلى WebP وتوليد نسخ مصغرة وحفظ النسخ الأصلية بأمان.
