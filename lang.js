const translations = {
    // 1. Navbar & General UI
    "nav_home": { th: "หน้าแรก", en: "Home" },
    "nav_works": { th: "ผลงาน", en: "Works" },
    "nav_exp": { th: "เส้นทางของฉัน", en: "My Journey" },
    "nav_contact": { th: "ติดต่อ", en: "Contact" },
    "btn_close": { th: "ปิด", en: "Close" },

    // 2. Hero Section (Home)
    "hero_greeting": { th: "สวัสดีครับ, ผมชื่อ", en: "Hello, I am" },
    "hero_name": { th: "เสนีย์ เกาะสูงเนิน", en: "Seni Gohsongnoen" },
    "label_age": { th: "อายุ 24 ปี", en: "Age 24" },
    "label_gender": { th: "ชาย", en: "Male" },
    "hero_bio": {
        th: "ผมเป็นคนรักเทคโนโลยีที่เริ่มต้นจากการเป็น IT Support และผันตัวมาเป็น Web Developer ด้วยใจรัก ผมเชื่อในการเรียนรู้ตลอดชีวิตและการสร้างสรรค์ผลงานที่มีคุณค่าครับ",
        en: "I am a tech enthusiast who started as IT Support and transitioned into Web Development with passion. I believe in lifelong learning and creating valuable work."
    },

    // อาชีพ (ใช้กับ Typewriter)
    "hero_role_1": { th: "นักพัฒนาเว็บไซต์", en: "Web Developer" },
    "hero_role_2": { th: "ช่างภาพอิสระ", en: "Freelance Photographer" },
    "hero_role_3": { th: "เจ้าหน้าที่ IT Support", en: "IT Support" },

    "btn_resume": { th: "ดาวน์โหลด Resume", en: "Download Resume" },
    "btn_contact_me": { th: "ติดต่อฉัน", en: "Contact Me" },

    // 3. Experience & Skills Section (Home)
    "title_experience": { th: "เส้นทางประสบการณ์", en: "My Journey" },

    // Left Column: Work Experience
    "header_work": { th: "ประสบการณ์ทำงาน", en: "Work Experience" },

    "work_web_role": { th: "Web Developer", en: "Web Developer" },
    "work_web_place": { th: "Freelance / Project Base", en: "Freelance / Project Base" },
    "work_web_desc": { th: "พัฒนาเว็บไซต์และเว็บแอปพลิเคชัน", en: "Web & Web Application Development" },

    "work_photo_role": { th: "Freelance Photographer", en: "Freelance Photographer" },
    "work_photo_place": { th: "ทั่วไป", en: "General Services" },
    "work_photo_desc": { th: "รับงานถ่ายภาพทั่วไป", en: "General Photography Services" },

    "work_true_role": { th: "IT Support", en: "IT Support" },
    "work_true_place": { th: "True Corporation", en: "True Corporation" },
    "work_true_desc": { th: "ดูแลระบบ IT และแก้ไขปัญหาทางเทคนิค", en: "Technical Support & Troubleshooting" },

    "work_sso_role": { th: "IT Staff (สัญญาจ้าง)", en: "IT Staff (Contract)" },
    "work_sso_place": { th: "สำนักงานประกันสังคม (สปส.)", en: "Social Security Office" },
    "work_sso_desc": { th: "สนับสนุนงานด้านไอทีในองค์กร", en: "IT Operations Support" },

    // Right Column: Education
    "header_edu": { th: "การศึกษา", en: "Education" },
    "edu_spu_degree": { th: "ปริญญาตรี", en: "Bachelor's Degree" },
    "edu_spu_place": { th: "มหาวิทยาลัยศรีปทุม", en: "Sripatum University" },
    "edu_ttc_degree": { th: "ปวส.", en: "Associate's Degree" },
    "edu_ttc_place": { th: "วิทยาลัยเทคโนโลยีตั้งตรงจิตรพณิชยการ", en: "TTC Commercial College" },

    // Right Column: Languages
    "header_lang": { th: "ภาษา", en: "Languages" },
    "lang1_name": { th: "ไทย", en: "Thai" },
    "lang1_level": { th: "ภาษาแม่", en: "Native Speaker" },
    "lang2_name": { th: "อังกฤษ", en: "English" },
    "lang2_level": { th: "สื่อสารได้ดี", en: "Communicative Proficiency" },

    // Right Column: Skills
    "header_skill": { th: "ทักษะ", en: "Skills" },
    "skill_tech_title": { th: "Technical Skills", en: "Technical Skills" },
    "skill_tech_desc": { th: "HTML, CSS, JavaScript, Bootstrap, Hardware Support, Network Troubleshooting", en: "HTML, CSS, JavaScript, Bootstrap, Hardware Support, Network Troubleshooting" },
    "skill_create_title": { th: "Creative Skills", en: "Creative Skills" },
    "skill_create_desc": {
        th: "การถ่ายภาพ, การแก้ไขภาพ (Lightroom, Photoshop), การวาดด้วยมือ, การออกแบบ UI/UX",
        en: "Photography, Photo Editing (Lightroom, Photoshop), Hand Drawing, UI/UX Design"
    },

    // Right Column: Achievements
    "header_ach": { th: "ความสำเร็จ", en: "Achievements" },
    "ach_proj_title": { th: "Project Completion", en: "Project Completion" },
    "ach_proj_desc": { th: "พัฒนาเว็บไซต์ Portfolio ด้วยตนเองจนสำเร็จ", en: "Successfully developed personal portfolio from scratch." },
    "ach_feed_title": { th: "Positive Feedback", en: "Positive Feedback" },
    "ach_feed_desc": { th: "ได้รับคำชมเรื่องการแก้ปัญหา IT ที่รวดเร็วและมีประสิทธิภาพ", en: "Praised for quick and effective IT problem-solving." },

    // 4. Works Page
    "title_featured_works": { th: "ผลงานของฉัน", en: "My Works" },
    "label_tech": { th: "เทคโนโลยีที่ใช้", en: "Tech Stack" },
    "label_desc": { th: "รายละเอียด", en: "Description" },

    // ข้อมูลโปรเจกต์ (Project Data)
    // Web Dev
    "proj_01_name": { th: "เว็บ E-Commerce", en: "E-Commerce Web" },
    "proj_01_desc": { th: "ระบบตะกร้าสินค้า 2 ภาษา พัฒนาด้วย Vanilla JS และ LocalStorage", en: "Bilingual Shopping Cart System developed with Vanilla JS and LocalStorage." },

    // Designs
    "proj_02_name": { th: "ออกแบบ Logo", en: "ZepSwitch Logo" },
    "proj_02_desc": { th: "ออกแบบโลโก้วงดนตรี", en: "Music Band Logo Design." },

    // Project 03: Photography
    "proj_03_name": { th: "Dirty Bar", en: "Dirty Bar" },
    "proj_03_desc": { th: "ภาพถ่ายพอร์ตเทรต Modeling Sukie", en: "Modeling Sukie Portrait Photo." },

    // Project 04: Drawing
    "proj_04_name": { th: "ภาพเหมือน", en: "Draw a portrait" },
    "proj_04_desc": { th: "ภาพวาดเหมือนขนาด A4 วาดเป็นของขวัญวันเกิด", en: "A4 sized portrait drawn as a birthday present." },
    "proj_05_name": { th: "ภาพเหมือนพระ", en: "Draw a portrait of monk" },
    "proj_05_desc": { th: "ภาพวาดเหมือนขนาด A4 วาดเป็นของขวัญวันเกิด", en: "A4 sized portrait drawn as a birthday present." },

    // =========================================
    // 5. Contact Page (หน้าติดต่อ)
    // =========================================
    "contact_title": { th: "ติดต่อฉัน", en: "Get In Touch" },
    "contact_desc": { th: "สนใจร่วมงานหรือมีคำถาม? ส่งข้อความหาผมได้เลยครับ", en: "Interested in working together? Feel free to send me a message." },

    "info_title": { th: "ข้อมูลการติดต่อ", en: "Contact Info" },
    "info_phone": { th: "โทรศัพท์", en: "Phone" },
    "info_email": { th: "อีเมล", en: "Email" },
    "info_location": { th: "ที่อยู่", en: "Location" },
    "info_social": { th: "ติดตามฉัน", en: "Follow Me" },

    "form_title": { th: "ส่งข้อความ", en: "Send Message" },
    "label_name": { th: "ชื่อของคุณ", en: "Your Name" },
    "label_email": { th: "อีเมล", en: "Your Email" },
    "label_subject": { th: "หัวข้อเรื่อง", en: "Subject" },
    "label_message": { th: "ข้อความ", en: "Message" },
    "btn_send": { th: "ส่งข้อความ", en: "Send Message" },

    "alert_sending": { th: "กำลังส่ง...", en: "Sending..." },
    "alert_success": { th: "ส่งข้อความเรียบร้อยแล้ว!", en: "Message Sent Successfully!" },
    "btn_back": { th: "ย้อนกลับ", en: "Back" },

    "title_cert": { th: "ใบรับรอง & เกียรติบัตร", en: "Certificates" },
    "title_services": { th: "บริการของฉัน", en: "My Services" },
    "serv_1_title": { th: "รับทำเว็บไซต์", en: "Web Development" },
    "serv_1_desc": { th: "สร้างเว็บไซต์ทันสมัย รองรับมือถือ (Responsive) และ SEO Friendly", en: "Building modern, responsive, and SEO-friendly websites." },
    "serv_2_title": { th: "ถ่ายภาพ", en: "Photography" },
    "serv_2_desc": { th: "รับถ่ายภาพงานรับปริญญา งานอีเวนต์ และภาพโปรไฟล์", en: "Portrait, Event, and Graduation photography services." },
    "serv_3_title": { th: "IT Support", en: "IT Support" },
    "serv_3_desc": { th: "ซ่อมคอมพิวเตอร์ แก้ปัญหาเน็ตเวิร์ก และให้คำปรึกษาด้านไอที", en: "Hardware repair, Network troubleshooting, and IT consulting." },
    "serv_4_title": { th: "วาดภาพประกอบ", en: "Illustration" },
    "serv_4_desc": { th: "รับวาดภาพ Digital Art, คาแรคเตอร์ดีไซน์ และงานวาดมือ", en: "Digital art, Character design, and Hand drawing services." },
    "serv_5_title": { th: "กราฟิกดีไซน์", en: "Graphic Design" },
    "serv_5_desc": { th: "ออกแบบโลโก้ แบนเนอร์ และสื่อโฆษณาออนไลน์", en: "Logo design, Banners, and Social Media creatives." },
    "serv_6_title": { th: "เร็วๆ นี้", en: "Coming Soon" },
    "serv_6_desc": { th: "ติดตามบริการใหม่ๆ ได้ที่นี่", en: "Stay tuned for more upcoming services." },


}