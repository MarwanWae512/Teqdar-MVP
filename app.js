/* ==========================================
   TAQDAR APP – Mock Data & Shared Logic
   app.js
   ========================================== */

/* ── MOCK USERS ── */
const MOCK_USERS = {
  parent: {
    id: 'parent_001',
    type: 'parent',
    name: 'احمد محمد',
    email: 'ahmed@taqdar.app',
    password: '123456',
    avatar: 'أ',
    child_id: 'student_001'
  },
  student: {
    id: 'student_001',
    type: 'student',
    name: 'ياسين أحمد',
    email: 'yaseen@taqdar.app',
    password: '123456',
    avatar: 'ي',
    age: 10,
    grade: 'الصف الرابع الابتدائي',
    disability_type: 'adhd',
    disability_label: 'اضطراب ADHD',
    profile_complete: true,
    parent_id: 'parent_001'
  }
};

/* ── MOCK STUDENT PROGRESS (for dashboard) ── */
const MOCK_PROGRESS = {
  overall_percent: 68,
  lessons_completed: 12,
  lessons_total: 20,
  streak_days: 7,
  points: 1240,
  level: 4,
  level_label: 'نجم صاعد',
  weekly_sessions: [3, 5, 2, 4, 6, 3, 5],
  attention_score: 74,
  quiz_avg: 82,
  badges: [
    { icon: 'fa-star', label: 'أول درس', color: 'gold' },
    { icon: 'fa-fire', label: '7 أيام متتالية', color: 'red' },
    { icon: 'fa-brain', label: 'مثابر', color: 'blue' },
    { icon: 'fa-trophy', label: 'متفوق في الكويز', color: 'gold' }
  ],
  recent_lessons: [
    { id: 1, title: 'الجمع والطرح', subject: 'رياضيات', progress: 100, score: 90 },
    { id: 2, title: 'حروف المد', subject: 'لغة عربية', progress: 100, score: 85 },
    { id: 3, title: 'الكائنات الحية', subject: 'علوم', progress: 60, score: null }
  ],
  weekly_report: {
    focus_time: '4 ساعات و20 دقيقة',
    sessions_count: 14,
    improvement: '+12%',
    best_subject: 'رياضيات',
    mood_trend: 'إيجابي'
  }
};

/* ── MOCK LESSONS ── */
const MOCK_LESSONS = [
  {
    id: 1,
    subject: 'رياضيات',
    title: 'الجمع والطرح حتى 100',
    description: 'نتعلم كيف نجمع ونطرح الأعداد بطريقة ممتعة وسهلة',
    icon: 'fa-calculator',
    color: '#3B5BDB',
    duration: '20 دقيقة',
    difficulty: 'سهل',
    completed: true,
    score: 90,
    sections: [
      {
        id: 's1',
        title: 'مقدمة: الجمع',
        type: 'lesson',
        image_placeholder: 'fa-plus-circle',
        image_color: '#3B5BDB',
        summary: 'الجمع هو إضافة عدد إلى عدد آخر للحصول على مجموع أكبر. مثلاً: ٥ + ٣ = ٨. نستخدم الجمع في حياتنا اليومية كثيراً — عندما نحسب عدد التفاحات، أو عدد الكتب، أو أي شيء آخر!',
        ai_tip: 'رائع! الجمع مثل إضافة ألعاب لمجموعتك 🎮 كلما أضفت أكثر، كلما زاد العدد!'
      },
      {
        id: 's2',
        title: 'أمثلة تطبيقية',
        type: 'lesson',
        image_placeholder: 'fa-chalkboard-teacher',
        image_color: '#2845b8',
        summary: 'لنحل معاً: ٢٤ + ١٥ = ؟\n\nالخطوة الأولى: نجمع الآحاد → ٤ + ٥ = ٩\nالخطوة الثانية: نجمع العشرات → ٢ + ١ = ٣\nالإجابة: ٣٩\n\nحاول أنت: ٣٢ + ٢٦ = ؟',
        ai_tip: 'أنت ذكي جداً! تذكّر: ابدأ دائماً من اليمين — الآحاد أولاً، ثم العشرات.'
      },
      {
        id: 's3',
        title: 'الطرح: عكس الجمع',
        type: 'lesson',
        image_placeholder: 'fa-minus-circle',
        image_color: '#1e3a8a',
        summary: 'الطرح هو إزالة عدد من عدد آخر. مثلاً: ١٠ - ٤ = ٦. تخيّل أن معك ١٠ حلويات وأكلت ٤ منها — كم تبقّى لك؟',
        ai_tip: 'الطرح مثل أكل الحلوى! كلما أكلت أكثر، قلّ ما تبقّى 🍬 لكن لا تأكل كثيراً!'
      }
    ],
    quiz: [
      { q: 'كم يساوي ١٥ + ٢٣؟', options: ['٣٦', '٣٨', '٤٠', '٣٥'], answer: 1 },
      { q: 'كم يساوي ٥٠ - ١٧؟', options: ['٣٣', '٣١', '٣٥', '٢٩'], answer: 0 },
      { q: 'كم يساوي ٤٢ + ٣٣؟', options: ['٧٤', '٧٥', '٧٦', '٧٧'], answer: 1 },
      { q: 'إذا كان معك ٨٠ كتاباً وأعطيت ٢٥، كم تبقّى؟', options: ['٥٦', '٥٥', '٥٤', '٥٧'], answer: 1 },
      { q: 'كم يساوي ١٠٠ - ٤٥؟', options: ['٥٤', '٥٦', '٥٥', '٥٣'], answer: 2 }
    ]
  },
  {
    id: 2,
    subject: 'لغة عربية',
    title: 'حروف المد والقراءة الصحيحة',
    description: 'نتعلم حروف المد الثلاثة ونطق الكلمات بشكل صحيح',
    icon: 'fa-book-open',
    color: '#7c3aed',
    duration: '25 دقيقة',
    difficulty: 'متوسط',
    completed: true,
    score: 85,
    sections: [
      {
        id: 's1',
        title: 'ما هي حروف المد؟',
        type: 'lesson',
        image_placeholder: 'fa-language',
        image_color: '#7c3aed',
        summary: 'حروف المد هي: الألف (ا) والواو الساكنة (و) والياء الساكنة (ي). هذه الحروف تمدّ الصوت عند النطق بها. مثلاً: كِتَاب — الألف تمدّ الصوت في "تا".',
        ai_tip: 'حروف المد مثل الشهيق العميق! عندما ترى واحداً منها، خذ نفسك وامدد الصوت قليلاً.'
      },
      {
        id: 's2',
        title: 'أمثلة على حروف المد',
        type: 'lesson',
        image_placeholder: 'fa-pen-nib',
        image_color: '#6d28d9',
        summary: 'مع الألف: كِتَاب، بَاب، دَار\nمع الواو: نُور، طُول، بُوم\nمع الياء: بِيت، كَيف، لَيل\n\nلاحظ كيف يمتدّ الصوت في كل كلمة؟ جرّب النطق بصوت عالٍ!',
        ai_tip: 'ممتاز! القراءة بصوت عالٍ تساعدك على تذكّر حروف المد أكثر. استمر!'
      }
    ],
    quiz: [
      { q: 'أيّ كلمة تحتوي على حرف مد؟', options: ['كتب', 'بَاب', 'قرأ', 'كتم'], answer: 1 },
      { q: 'ما حروف المد الثلاثة؟', options: ['أ، ب، ت', 'ا، و، ي', 'م، ن، ل', 'ح، خ، ع'], answer: 1 },
      { q: 'في كلمة "نُور"، ما حرف المد؟', options: ['النون', 'الراء', 'الواو', 'لا يوجد'], answer: 2 },
      { q: 'أكمل: البَ___ب (مع حرف مد)', options: ['ا', 'ب', 'ت', 'و'], answer: 0 }
    ]
  },
  {
    id: 3,
    subject: 'علوم',
    title: 'الكائنات الحية وغير الحية',
    description: 'نكتشف الفرق بين الكائنات الحية وغير الحية من حولنا',
    icon: 'fa-seedling',
    color: '#16a34a',
    duration: '18 دقيقة',
    difficulty: 'سهل',
    completed: false,
    score: null,
    sections: [
      {
        id: 's1',
        title: 'ما هي الكائنات الحية؟',
        type: 'lesson',
        image_placeholder: 'fa-leaf',
        image_color: '#16a34a',
        summary: 'الكائنات الحية هي كل كائن يتنفّس، وينمو، ويتكاثر، ويحتاج للغذاء. مثل: الإنسان، الحيوانات، النباتات. لاحظ أنك أنت كائن حي — تتنفّس وتأكل وتنمو!',
        ai_tip: 'أنت كائن حي رائع! تتنفس الآن وأنت تقرأ هذا الدرس 🌱'
      },
      {
        id: 's2',
        title: 'الكائنات غير الحية',
        type: 'lesson',
        image_placeholder: 'fa-mountain',
        image_color: '#15803d',
        summary: 'الكائنات غير الحية لا تتنفّس ولا تنمو ولا تأكل. مثل: الحجارة، الماء، الكرسي، السيارة. الفرق الرئيسي: الكائن الحي يحتاج للطاقة والغذاء للبقاء.',
        ai_tip: 'سؤال ممتع: هل الشجرة كائن حي؟ نعم! لأنها تنمو وتتنفس وتحتاج الماء والضوء.'
      }
    ],
    quiz: [
      { q: 'أيّ من التالي كائن حي؟', options: ['حجر', 'كرسي', 'قطة', 'سيارة'], answer: 2 },
      { q: 'ما الذي يميّز الكائن الحي؟', options: ['اللون', 'التنفس والنمو', 'الحجم', 'الصلابة'], answer: 1 },
      { q: 'الشجرة هي...', options: ['كائن غير حي', 'كائن حي', 'جماد', 'معدن'], answer: 1 },
      { q: 'أيّ من التالي ليس كائناً حياً؟', options: ['إنسان', 'نبات', 'حيوان', 'ماء'], answer: 3 },
      { q: 'هل السمكة كائن حي؟', options: ['نعم، لأنها تتنفس', 'لا، لأنها في الماء', 'نعم، لأنها تسبح فقط', 'لا، لأنها صغيرة'], answer: 0 }
    ]
  },
  {
    id: 4,
    subject: 'رياضيات',
    title: 'الأشكال الهندسية',
    description: 'نتعرف على الأشكال الهندسية الأساسية وخصائصها',
    icon: 'fa-shapes',
    color: '#0891b2',
    duration: '22 دقيقة',
    difficulty: 'متوسط',
    completed: false,
    score: null,
    sections: [
      {
        id: 's1',
        title: 'المثلث والمربع',
        type: 'lesson',
        image_placeholder: 'fa-draw-polygon',
        image_color: '#0891b2',
        summary: 'المثلث: شكل له 3 أضلاع و3 زوايا. المربع: شكل له 4 أضلاع متساوية و4 زوايا قائمة. يمكنك رؤية هذه الأشكال في حياتك اليومية!',
        ai_tip: 'ابحث حولك الآن! هل ترى أي شكل مثلث أو مربع في غرفتك؟'
      }
    ],
    quiz: [
      { q: 'كم ضلعاً للمثلث؟', options: ['2', '3', '4', '5'], answer: 1 },
      { q: 'كم زاوية للمربع؟', options: ['2', '3', '5', '4'], answer: 3 },
      { q: 'أيّ شكل له 4 أضلاع متساوية؟', options: ['مثلث', 'دائرة', 'مربع', 'مستطيل'], answer: 2 }
    ]
  }
];

/* ── AI COMPANION RESPONSES (Mock) ── */
const AI_RESPONSES = {
  greet: [
    'أهلاً يا يوسف! أنا هنا معك. كيف حالك اليوم؟ 😊',
    'مرحباً! جاهز تتعلم معي شيئاً جديداً اليوم؟',
    'أهلاً! يسعدني أن أساعدك اليوم. ما الذي تريد أن تتعلمه؟'
  ],
  encouragement: [
    'ممتاز! أنت تقدّم بشكل رائع جداً! استمر هكذا 🌟',
    'رائع! أنا فخور بك جداً. كل يوم تتحسّن أكثر!',
    'أحسنت! هذا الجواب صحيح تماماً. أنت نجم حقيقي! ⭐'
  ],
  help: [
    'لا تقلق! خذ وقتك. أنا هنا لمساعدتك في أي وقت.',
    'هذا السؤال صعب شوية، لكن أنا واثق أنك ستجيب عليه. فكّر ببطء.',
    'تذكّر ما تعلمناه في الدرس. ابدأ من الخطوة الأولى.'
  ],
  lesson_done: [
    'أنهيت الدرس! أنت رائع جداً. هل تريد تجربة الكويز؟ 🎯',
    'ممتاز! انتهيت من الدرس بنجاح. جاهز للاختبار الصغير؟'
  ],
  quiz_correct: [
    'صحيح تماماً! 🎉 أنت ذكي جداً!',
    'إجابة ممتازة! هكذا أريدك دائماً!',
    'أحسنت! هذا صحيح. استمر!'
  ],
  quiz_wrong: [
    'لا تقلق، حاول مرة أخرى. كلنا نخطئ ونتعلم.',
    'قريب جداً! الإجابة الصحيحة هي... فكّر مرة أخرى.',
    'خطأ بسيط. راجع الدرس وستعرف الإجابة الصحيحة.'
  ],
  default: [
    'سؤال ممتاز! سأحاول مساعدتك بأفضل طريقة.',
    'أنا هنا للمساعدة! أخبرني أكثر عما تريد.',
    'فكرة جيدة! دعنا نتعلم هذا معاً.'
  ]
};

function getAIResponse(context = 'default') {
  const arr = AI_RESPONSES[context] || AI_RESPONSES.default;
  return arr[Math.floor(Math.random() * arr.length)];
}

/* ── ONBOARDING QUESTIONS ── */
const ONBOARDING_STUDENT = [
  {
    id: 'q1',
    question: 'كم عمرك؟',
    type: 'choice',
    options: [
      { value: '6-8', label: 'من ٦ إلى ٨ سنوات', icon: 'fa-child' },
      { value: '9-11', label: 'من ٩ إلى ١١ سنة', icon: 'fa-child-reaching' },
      { value: '12-14', label: 'من ١٢ إلى ١٤ سنة', icon: 'fa-person' },
      { value: '15+', label: 'أكبر من ذلك', icon: 'fa-user' }
    ]
  },
  {
    id: 'q2',
    question: 'ما مادتك المفضلة في المدرسة؟',
    type: 'choice',
    options: [
      { value: 'math', label: 'الرياضيات', icon: 'fa-calculator' },
      { value: 'arabic', label: 'اللغة العربية', icon: 'fa-book-open' },
      { value: 'science', label: 'العلوم', icon: 'fa-flask' },
      { value: 'arts', label: 'الفنون', icon: 'fa-palette' }
    ]
  },
  {
    id: 'q3',
    question: 'كيف تحب أن تتعلم أكثر؟',
    type: 'choice',
    options: [
      { value: 'visual', label: 'بالصور والألوان', icon: 'fa-image' },
      { value: 'stories', label: 'بالقصص والحكايات', icon: 'fa-book' },
      { value: 'games', label: 'بالألعاب والتحديات', icon: 'fa-gamepad' },
      { value: 'audio', label: 'بالاستماع والإنصات', icon: 'fa-headphones' }
    ]
  },
  {
    id: 'q4',
    question: 'كم تستطيع التركيز بدون استراحة؟',
    type: 'scale',
    label_min: 'دقائق قليلة جداً',
    label_max: 'ساعة أو أكثر',
    options: ['٥ دقائق', '١٠ دقائق', '٢٠ دقيقة', '٣٠ دقيقة', 'أكثر من ساعة']
  },
  {
    id: 'q5',
    question: 'هل تحتاج أي من هذه المساعدات؟',
    type: 'multi',
    options: [
      { value: 'sign', label: 'لغة الإشارة', icon: 'fa-hands-asl-interpreting' },
      { value: 'voice', label: 'التحكم بالصوت', icon: 'fa-microphone' },
      { value: 'eye', label: 'تتبع العين', icon: 'fa-eye' },
      { value: 'simplified', label: 'محتوى مبسّط جداً', icon: 'fa-feather' }
    ]
  }
];

const ONBOARDING_PARENT = [
  {
    id: 'q1',
    question: 'ما عمر طفلك؟',
    type: 'choice',
    options: [
      { value: '6-8', label: 'من ٦ إلى ٨ سنوات', icon: 'fa-child' },
      { value: '9-11', label: 'من ٩ إلى ١١ سنة', icon: 'fa-child-reaching' },
      { value: '12-14', label: 'من ١٢ إلى ١٤ سنة', icon: 'fa-person' },
      { value: '15+', label: 'أكبر من ذلك', icon: 'fa-user' }
    ]
  },
  {
    id: 'q2',
    question: 'ما تشخيص طفلك؟ (اختر ما ينطبق)',
    type: 'multi',
    options: [
      { value: 'adhd', label: 'اضطراب ADHD', icon: 'fa-bolt' },
      { value: 'down', label: 'متلازمة داون', icon: 'fa-heart' },
      { value: 'hearing', label: 'إعاقة سمعية أو كلامية', icon: 'fa-ear-deaf' },
      { value: 'physical', label: 'إعاقة حركية', icon: 'fa-wheelchair' }
    ]
  },
  {
    id: 'q3',
    question: 'كيف يتعلم طفلك بشكل أفضل؟',
    type: 'choice',
    options: [
      { value: 'visual', label: 'بالصور والمرئيات', icon: 'fa-image' },
      { value: 'audio', label: 'بالصوت والاستماع', icon: 'fa-volume-high' },
      { value: 'games', label: 'بالألعاب التفاعلية', icon: 'fa-gamepad' },
      { value: 'stories', label: 'بالقصص المبسطة', icon: 'fa-book' }
    ]
  },
  {
    id: 'q4',
    question: 'ما مدة تركيز طفلك في المتوسط؟',
    type: 'scale',
    label_min: 'دقائق قليلة',
    label_max: 'ساعة فأكثر',
    options: ['٥ دقائق', '١٠ دقائق', '٢٠ دقيقة', '٣٠ دقيقة', 'أكثر من ساعة']
  },
  {
    id: 'q5',
    question: 'هل طفلك يحتاج أياً من هذه التقنيات المساعدة؟',
    type: 'multi',
    options: [
      { value: 'sign', label: 'لغة الإشارة', icon: 'fa-hands-asl-interpreting' },
      { value: 'voice', label: 'الأوامر الصوتية', icon: 'fa-microphone' },
      { value: 'eye', label: 'تتبع العين', icon: 'fa-eye' },
      { value: 'simplified', label: 'محتوى مبسّط جداً', icon: 'fa-feather' }
    ]
  },
  {
    id: 'q6',
    question: 'ما أهدافك الرئيسية من استخدام تقدر؟',
    type: 'multi',
    options: [
      { value: 'academic', label: 'تحسين المستوى الدراسي', icon: 'fa-graduation-cap' },
      { value: 'focus', label: 'تطوير مهارات التركيز', icon: 'fa-crosshairs' },
      { value: 'social', label: 'تنمية المهارات الاجتماعية', icon: 'fa-people-group' },
      { value: 'confidence', label: 'بناء الثقة بالنفس', icon: 'fa-star' }
    ]
  }
];

/* ── SESSION MANAGEMENT ── */
const Session = {
  set(key, val) { localStorage.setItem('taqdar_' + key, JSON.stringify(val)); },
  get(key) {
    try { return JSON.parse(localStorage.getItem('taqdar_' + key)); }
    catch { return null; }
  },
  remove(key) { localStorage.removeItem('taqdar_' + key); },
  clear() {
    Object.keys(localStorage)
      .filter(k => k.startsWith('taqdar_'))
      .forEach(k => localStorage.removeItem(k));
  },
  isLoggedIn() { return !!this.get('current_user'); },
  currentUser() { return this.get('current_user'); },
  onboardingDone() { return !!this.get('onboarding_done'); }
};

/* ── ROUTING ── */
function goTo(page) { window.location.href = page; }

function guardAuth() {
  if (!Session.isLoggedIn()) { goTo('login.html'); return false; }
  return true;
}

function guardOnboarding() {
  if (!Session.onboardingDone()) { goTo('onboarding.html'); return false; }
  return true;
}

/* ── CANVAS PARTICLE BG ── */
function initParticleBg(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, pts = [];

  function resize() {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  function init() {
    pts = [];
    const cols = Math.ceil(W / 90), rows = Math.ceil(H / 90);
    for (let i = 0; i <= cols; i++) for (let j = 0; j <= rows; j++) {
      pts.push({
        x: i*90, y: j*90, ox: i*90, oy: j*90,
        vx: (Math.random()-.5)*.25, vy: (Math.random()-.5)*.25,
        r: Math.random()*.9+.3, a: Math.random()*Math.PI*2
      });
    }
  }
  function draw() {
    ctx.clearRect(0, 0, W, H);
    pts.forEach(p => {
      p.x += p.vx; p.y += p.vy; p.a += .004;
      if (Math.abs(p.x-p.ox)>18) p.vx*=-1;
      if (Math.abs(p.y-p.oy)>18) p.vy*=-1;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI*2);
      ctx.fillStyle = `rgba(59,91,219,${.2+.1*Math.sin(p.a)})`;
      ctx.fill();
    });
    for (let i = 0; i < pts.length; i++) {
      for (let j = i+1; j < pts.length; j++) {
        const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y;
        const d=Math.sqrt(dx*dx+dy*dy);
        if (d<90) {
          ctx.beginPath();
          ctx.moveTo(pts[i].x, pts[i].y);
          ctx.lineTo(pts[j].x, pts[j].y);
          ctx.strokeStyle=`rgba(59,91,219,${.05*(1-d/90)})`;
          ctx.lineWidth=.5; ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  resize(); init(); draw();
  window.addEventListener('resize', () => { resize(); init(); });
}

/* ── TOAST ── */
function showToast(msg, type = 'success') {
  const t = document.createElement('div');
  t.className = `toast ${type}`;
  t.innerHTML = `<i class="fa-solid ${type==='success'?'fa-circle-check':'fa-circle-xmark'}"></i> ${msg}`;
  document.body.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

/* ── PROGRESS BAR ANIMATE ── */
function animateProgress(el, target) {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.style.width = current + '%';
    if (current >= target) clearInterval(timer);
  }, 16);
}
