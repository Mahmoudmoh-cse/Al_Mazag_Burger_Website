/**
 * Al-Mazag bilingual UI (EN / AR). Loaded by Al-Mazag_website_Semifinal.html
 */
(function (w) {
  'use strict';

  var MAZAG_LANG = {
    en: {
      metaTitle: 'المزاج · Al-Mazag Restaurant',
      nav: {
        story: 'Our Story',
        menu: 'Menu',
        location: 'Location',
        contact: 'Contact',
        delivery: 'Delivery',
        order: 'Order Now'
      },
      hero: {
        badge: 'Est. 2015 · Premium Burgers & Grills',
        title1: 'Al-Mazag',
        title2: 'Restaurant',
        sub: 'Kol w Etmazag',
        explore: 'Explore Menu',
        order: 'Order Now',
        stat1: 'Years of Fire',
        stat2: 'Daily Orders',
        stat3: 'Fresh Ingredients',
        scroll: 'Scroll'
      },
      about: {
        cardName1: 'Chef Omar',
        cardRole1: 'Founder & Head Chef',
        cardName2: 'The Al-Mazag Story',
        cardRole2: 'One team. One flavour.',
        tag: 'Our Story',
        title: 'Born From <em>Passion</em>,<br>Built on <em>Fire</em>',
        p1: 'Omar started Al-Mazag three years ago in Moharram Bek with a small grill, a bold recipe, and one promise: every burger should feel like more than just food.',
        p2: 'Today Al-Mazag is one of Alexandria’s favorite burger spots. Omar’s young restaurant is built on fresh ingredients, warm service, and a growing local reputation.',
        st1: 'Years of Fire',
        st2: 'Customers',
        st3: 'Fresh Daily'
      },
      menu: {
        tag: 'Our Menu',
        title: 'Al-Mazag <span>Specialties</span>',
        add: 'Add to Cart',
        secBurg: 'Burgers & sandwiches',
        secFries: 'Fries',
        secDrink: 'Drinks',
        catBurg: 'Signature Burgers',
        catPizza: 'Wood-Fired Pizzas',
        catFries: 'Fries',
        catSides: 'Drinks',
        d1n: 'Smash Burger',
        d1d: 'A 100g smashed beef patty covered in cheddar sauce, Big Tasty sauce, ketchup, pickles, and caramelized onions.',
        d2n: 'Classic Burger',
        d2d: 'A 70g beef patty covered in cheddar sauce, ketchup, Big Tasty sauce, tomatoes, pickles, lettuce, and onions.',
        d3n: 'Chicken Burger',
        d3d: 'A whole chicken breast piece covered in cheddar sauce, ranch sauce, and ketchup, topped with pickles, tomatoes, smoked turkey, lettuce, and onions.',
        d4n: 'El-Mazag',
        d4d: 'A 70g beef patty covered in cheddar sauce, ketchup, Big Tasty sauce, tomatoes, pickles, lettuce, and onions.',
        b4: 'Best Seller',
        d5n: 'Pepperoni Supreme',
        d5d: 'Pepperoni, mozzarella, parmesan, Italian herbs, 12"',
        d6n: 'BBQ Chicken Pizza',
        d6d: 'Grilled chicken, BBQ sauce, red onions, cilantro, 12"',
        b6: 'New',
        fr1n: 'Standard Fries',
        fr1d: 'Crispy golden fries',
        fr2n: 'Spicy Fries',
        fr2d: 'Fries with spicy seasoning',
        fr3n: 'Ranch Fries',
        fr3d: 'Fries with ranch dressing',
        fr4n: 'Cheese Fries',
        fr4d: 'Loaded with melted cheese',
        d9n: 'Cola',
        d9d: 'Choose your type: Classic, Diet, or Pink V Cola',
        b9: 'Soft Drink',
        exSecSauces: 'Sauces & Toppings',
        exSecProtein: 'Protein & Fillings',
        exSecSides: 'Sides & Extras',
        ex_add: 'Add',
        ex_katchb: 'Katchb',
        ex_big_testy: 'Big Testy',
        ex_spaicy: 'Spaicy',
        ex_ranch: 'Ranch',
        ex_chesse: 'Chesse',
        ex_pastrami: 'Pastrami',
        ex_mashroum: 'Mashroum',
        ex_beef_beacon: 'Beef Beacon',
        ex_smoky_beef: 'Smoky Beef',
        ex_classic_piece_beef: 'Classic piece Beef',
        ex_a_piece_of_mazzag: 'A piece Of Mazzag',
        ex_piece_chicken: 'Piece Chicken',
        ex_combo: 'Combo',
        ex_bun: 'Bun',
        ex_ice_cream: 'ICE CREAM',
        ex_cola: 'Cola'
      },
      loc: {
        tag: 'Find Us',
        title: 'Our <em>Location</em>',
        addr: 'Address',
        addrV: '12 Al-Mazag St, Cairo',
        addrS: 'Free parking available on-site.',
        hrs: 'Opening Hours',
        hrsV: 'Every Day',
        hrsS: '12:00 PM – 2:00 AM',
        get: 'Getting Here',
        getV: '5 Min from Ring Road',
        getS: 'Uber / Careem drop-off at main gate.'
      },
      hot: {
        tag: 'Contact Us',
        title: "We're <em style=\"color:var(--yellow);\">Always</em> Here",
        rsv: 'Reservations',
        rsvH: 'Daily 10am – 10pm',
        del: 'Delivery Orders',
        delH: 'Daily 11am – 2am',
        wa: 'WhatsApp',
        waH: '24 / 7 Available'
      },
      del: {
        tag: 'Home Delivery',
        title: 'Al-Mazag at<br>Your <em>Doorstep</em>',
        p: 'Fresh, hot, and packed with care — we bring the full Al-Mazag experience right to you.',
        f1t: '30 Minutes or Less',
        f1s: 'Our thermal packaging keeps every bite fresh and hot.',
        f2t: 'Live Order Tracking',
        f2s: 'Follow your order from kitchen to door in real time.',
        f3t: 'Free Delivery Over 200 EGP',
        f3s: 'Use code MAZAG10 for 10% off your first order.',
        btn1: 'Order Now',
        btn2: 'View Menu',
        bd: 'Avg Delivery'
      },
      ord: {
        tag: 'Place Your Order',
        title: 'Order <em>Fresh</em>,<br>Eat Happy',
        p: "Leave your number and we'll call back in minutes to confirm.",
        deliveryNote: 'This total covers food only — delivery is not included. Customer service will confirm the delivery fee and whether your area is covered.',
        ph: 'Your phone number...',
        btn: 'Order Now'
      },
      ft: {
        p: 'Bold flavors, real passion, freshly grilled every day. Al-Mazag is where great food meets great people.',
        nav: 'Navigate',
        svc: 'Services',
        fol: 'Follow Us',
        hd: 'Home Delivery',
        pn: 'Private Events',
        cat: 'Catering',
        ig: 'Instagram',
        tt: 'TikTok',
        fb: 'Facebook',
        gm: 'Google Maps',
        cr: '© 2024 Al-Mazag Restaurant · All rights reserved.',
        mk: 'Made with 🔥 in Egypt'
      },
      cart: {
        title: '🛒 Your Order',
        empty: 'Your cart is empty.<br>Add some fire! 🔥',
        total: 'Total',
        deliveryNote: 'Food total only — delivery fee is not included. Our customer service will confirm delivery cost and coverage with you.',
        go: 'Place Order →',
        alertEmpty: 'Add some items first! 🔥'
      },
      om: {
        s1tag: 'Almost there',
        s1title: 'Complete your order',
        s1lead: 'Pick how you’d like to reach us — we’ll guide you with your cart ready to go.',
        deliveryNote: 'Delivery is billed separately — please arrange fees and zone details with customer service.',
        callT: 'Call us',
        callS: 'Talk to customer service now',
        waT: 'WhatsApp',
        waS: 'Send your order in one tap',
        s2st: 'WhatsApp',
        s2title: 'Your order message',
        s2lead: 'Before you send on WhatsApp, please fill in the details above (Arabic section). Then review the message below (cart summary is already included) and send.',
        waLbl: 'WhatsApp number',
        s2tip: 'Fill in the details line-by-line above, then copy the message or open WhatsApp after reviewing it. <br>Tip: <strong style="color:rgba(255,255,255,.65);">Copy message</strong> or <strong style="color:rgba(255,255,255,.65);">Open WhatsApp</strong>.',
        fArea: 'Area',
        fName: 'Name',
        fPhone1: 'Phone number',
        fPhone2: 'Extra phone / landline',
        fStreet: 'Main street and side street',
        fBuilding: 'Building / floor / apartment',
        fLandmark: 'Nearest landmark',
        phArea: 'Example: Smouha',
        phName: 'Customer name',
        phPhone1: 'Main mobile number',
        phPhone2: 'Optional extra number',
        phStreet: 'Main street and side street',
        phBuilding: 'Example: Building 12, floor 3, apt 7',
        phLandmark: 'Example: Next to mosque / school',
        msgLbl: 'الرسالة — Message',
        copy: 'Copy message',
        copied: 'Copied!',
        openWa: 'Open WhatsApp',
        copyFail: 'Could not copy — select the text and copy manually.',
        fillRequired: 'Please complete the required delivery details before sending.'
      },
      wa: {
        orderHead: '🔥 Al-Mazag — New order',
        hi: 'Hi! I would like to place this order:',
        total: '💰 Total:',
        deliveryNote: '🚚 Delivery fee is not included in this total — please confirm delivery cost and area with customer service.',
        end: 'Please confirm availability and delivery time. Thank you!'
      }
      ,
      pay: {
        tag: 'Payment Methods',
        title: 'Pay Your Way<br><em>Secure & Easy</em>',
        p: 'We support all major payment methods so you can pay however suits you best — at the branch or on delivery (where available).',
        secure: 'Secure, fast checkout',
        visa: 'Visa / MasterCard',
        visaS: 'Credit & debit cards accepted.',
        apple: 'Apple Pay',
        appleS: 'Tap & pay from your iPhone or Apple Watch.',
        instapay: 'InstaPay',
        instapayS: 'Instant bank transfer via InstaPay app.',
        cash: 'Cash',
        cashS: 'Cash on delivery or at the branch.'
      }
    },
    ar: {
      metaTitle: 'المزاج · مطعم المزاج',
      nav: {
        story: 'قصتنا',
        menu: 'المنيو',
        location: 'الموقع',
        contact: 'تواصل',
        delivery: 'التوصيل',
        order: 'اطلب الآن'
      },
      hero: {
        badge: 'منذ 2015 · برجر ومشويات متميزة',
        title1: 'المزاج',
        title2: 'مطعم',
        sub: 'كل و اتمزج',
        explore: 'استكشف المنيو',
        order: 'اطلب الآن',
        stat1: 'سنوات من الشغف',
        stat2: 'طلبات يومية',
        stat3: 'مكونات طازجة',
        scroll: 'مرّر للأسفل'
      },
      about: {
        cardName1: 'الشيف عمر',
        cardRole1: 'المؤسس والشيف التنفيذي',
        cardName2: 'قصة المزاج',
        cardRole2: 'فريق واحد… ونكهة واحدة.',
        tag: 'قصتنا',
        title: 'وُلِد من <em>الشغف</em>،<br>وصُنع على <em>النار</em>',
        p1: 'بدأ الشيف عمر «المزاج» قبل 3 سنوات في محرم بك بشواية صغيرة، وصفة جريئة ووعد واحد: كل برجر لازم يكون أكثر من مجرد وجبة.',
        p2: 'اليوم «المزاج» من أنسب أماكن البرجر في الإسكندرية. المطعم الشاب قائم على مكونات طازجة وخدمة ودودة وسمعة محلية متزايدة.',
        st1: 'سنوات من الشغف',
        st2: 'عملاء',
        st3: 'طازج يومياً'
      },
      menu: {
        tag: 'منيو المزاج',
        title: 'تخصصات <span>المزاج</span>',
        add: 'أضف للسلة',
        secBurg: 'برجر وساندوتش',
        secFries: 'بطاطس',
        secDrink: 'مشروبات',
        catBurg: 'برجر مميز',
        catPizza: 'بيتزا على الحطب',
        catFries: 'بطاطس',
        catSides: 'مشروبات',
        // Updated items based on the menu image
        d1n: 'سماش برجر',
        d1d: 'قطعة لحم سماش 100 جرام مغطاة بصوص الشيدر والبيج تيستي والكاتشب مع الخيار والبصل المكرمل.',
        d2n: 'كلاسيك برجر',
        d2d: 'قطعة لحم بقري 70 جرام مغطاة بصوص الشيدر والكاتشب والبيج تيستي مع الطماطم والخيار والخس والبصل.',
        d3n: 'تشيكن برجر',
        d3d: 'قطعة صدور فراخ كاملة مغطاة بصوص الشيدر والرانش والكاتشب والخيار والطماطم مع الرومي المدخن والخس والبصل.',
        d4n: 'برجر المزاج',
        d4d: 'قطعة لحم بقري 150 جرام محشوة بالجبنة ومغطاة بصوص الشيدر والكاتشب والبسطرمة والبيج تيستي والخيار والطماطم والخس والبصل.',
        b4: 'الأكثر مبيعاً',
        // Standard items
        d5n: 'بيبروني سوبرم',
        d5d: 'بيبروني، موزاريلا، بارميزان، أعشاب إيطالية، 12 بوصة',
        d6n: 'بيتزا دجاج باربيكيو',
        d6d: 'دجاج مشوي، صوص باربيكيو، بصل أحمر، كزبرة، 12 بوصة',
        b6: 'جديد',
        fr1n: 'بطاطس عادية',
        fr1d: 'بطاطس مقرمشة ذهبية',
        fr2n: 'بطاطس سبايسي',
        fr2d: 'بطاطس بنكهة حارة',
        fr3n: 'بطاطس رانش',
        fr3d: 'بطاطس مع صوص رانش',
        fr4n: 'بطاطس بالجبنة',
        fr4d: 'بطاطس محمّلة بالجبن الذائب',
        d9n: 'كولا',
        d9d: 'اختر النوع: كولا عادية أو دايت أو بينك V كولا',
        b9: 'مشروب غازي',
        exSecSauces: 'الصلصات والإضافات',
        exSecProtein: 'البروتين والحشوات',
        exSecSides: 'الجوانب والإضافات',
        ex_add: 'أضف',
        ex_katchb: 'كاتشب',
        ex_big_testy: 'بيج تيستي',
        ex_spaicy: 'سبايسي',
        ex_ranch: 'رانش',
        ex_chesse: 'تشيز',
        ex_pastrami: 'بسطرمة',
        ex_mashroum: 'مشرووم',
        ex_beef_beacon: 'بيف بيكون',
        ex_smoky_beef: 'سموكي بيف',
        ex_classic_piece_beef: 'قطعة لحم بقري',
        ex_a_piece_of_mazzag: 'قطعة من المزاج',
        ex_piece_chicken: 'قطعة دجاج',
        ex_combo: 'كومبو',
        ex_bun: 'بون',
        ex_ice_cream: 'آيس كريم',
        ex_cola: 'كولا'
      },
      loc: {
        tag: 'موقعنا',
        title: 'موقع <em>المطعم</em>',
        addr: 'العنوان',
        addrV: '١٢ شارع المزاج، القاهرة',
        addrS: 'موقف سيارات مجاني في المكان.',
        hrs: 'مواعيد العمل',
        hrsV: 'كل يوم',
        hrsS: '١٢ ظهراً – ٢ صباحاً',
        get: 'الوصول إلينا',
        getV: '٥ دقائق من الطريق الدائري',
        getS: 'نقطة إنزال أوبر / كريم عند البوابة الرئيسية.'
      },
      hot: {
        tag: 'تواصل معنا',
        title: 'نحن <em style="color:var(--yellow);">معك</em> دائماً',
        rsv: 'الحجوزات',
        rsvH: 'يومياً ١٠ ص – ١٠ م',
        del: 'طلبات التوصيل',
        delH: 'يومياً ١١ ص – ٢ ص',
        wa: 'واتساب',
        waH: 'متاح ٢٤/٧'
      },
      del: {
        tag: 'توصيل للمنزل',
        title: 'المزاج<br>عند <em>بابك</em>',
        p: 'ساخن وطازج ومعبأ بعناية… نوصل تجربة المزاج كاملة حتى عندك.',
        f1t: '٣٠ دقيقة أو أقل',
        f1s: 'عبواتنا الحرارية تحافظ على الحرارة والقرمشة.',
        f2t: 'تتبع الطلب',
        f2s: 'تابع طلبك من المطبخ حتى باب منزلك.',
        f3t: 'توصيل مجاني فوق ٢٠٠ ج.م.',
        f3s: 'استخدم كود MAZAG10 لخصم ١٠٪ على أول طلب.',
        btn1: 'اطلب الآن',
        btn2: 'عرض المنيو',
        bd: 'متوسط التوصيل'
      },
      ord: {
        tag: 'قدّم طلبك',
        title: 'اطلب <em>طازج</em>،<br>كُل بسعادة',
        p: 'اترك رقمك وسنعاود الاتصال خلال دقائق للتأكيد.',
        deliveryNote: 'الإجمالي المعروض للأصناف فقط ولا يشمل مصاريف التوصيل. خدمة العملاء تؤكد معك تكلفة التوصيل وتغطية المنطقة.',
        ph: 'رقم تليفونك…',
        btn: 'اطلب الآن'
      },
      ft: {
        p: 'نكهات جريئة وشغف حقيقي ومشوي طازج كل يوم. المزاج حيث يلتقي الطعم الرائع بالناس الرائعة.',
        nav: 'تصفح',
        svc: 'الخدمات',
        fol: 'تابعنا',
        hd: 'توصيل منزلي',
        pn: 'مناسبات خاصة',
        cat: 'كيتيرينج',
        ig: 'إنستغرام',
        tt: 'تيك توك',
        fb: 'فيسبوك',
        gm: 'خرائط جوجل',
        cr: '© ٢٠٢٤ مطعم المزاج · جميع الحقوق محفوظة.',
        mk: 'صُنع بشغف في مصر'
      },
      cart: {
        title: '🛒 طلبك',
        empty: 'سلتك فاضية.<br>زوّدها بنار! 🔥',
        total: 'الإجمالي',
        deliveryNote: 'الإجمالي للأصناف فقط — مصاريف التوصيل غير مشمولة. خدمة العملاء تؤكد معك التكلفة والمنطقة.',
        go: 'إتمام الطلب ←',
        alertEmpty: 'أضف أصناف للسلة أولاً! 🔥'
      },
      om: {
        s1tag: 'قربنا نخلص',
        s1title: 'أكمل طلبك',
        s1lead: 'اختَر الطريقة المناسبة للتواصل — جاهزين نساعدك بمحتوى السلة.',
        deliveryNote: 'التوصيل يُحسب بشكل منفصل — راجع التكلفة والمنطقة مع خدمة العملاء.',
        callT: 'اتصل بنا',
        callS: 'تحدث مع خدمة العملاء',
        waT: 'واتساب',
        waS: 'أرسل طلبك برسالة',
        s2st: 'واتساب',
        s2title: 'رسالة الطلب',
        s2lead: 'قبل ما ترسل على واتساب، أكمل البيانات في الأعلى (القسم العربي). ثم راجع رسالة الطلب بالأسفل (ملخص السلة موجود بالفعل) وأرسل.',
        waLbl: 'رقم واتساب',
        s2tip: 'أكمل بياناتك بعد كل سطر في الأعلى، ثم انسخ أو افتح واتساب — بعد المراجعة فقط.<br>نصيحة: <strong style="color:rgba(255,255,255,.65);">نسخ الرسالة</strong> أو <strong style="color:rgba(255,255,255,.65);">فتح واتساب</strong>.',
        fArea: 'المنطقة',
        fName: 'الإسم',
        fPhone1: 'رقم تليفون',
        fPhone2: 'رقم إضافي / أرضي',
        fStreet: 'الشارع الرئيسي والمتفرع',
        fBuilding: 'رقم العمارة / الدور / الشقة',
        fLandmark: 'علامة مميزة',
        phArea: 'مثال: سموحة',
        phName: 'اسم العميل',
        phPhone1: 'رقم الموبايل الأساسي',
        phPhone2: 'رقم إضافي اختياري',
        phStreet: 'اسم الشارع الرئيسي والمتفرع',
        phBuilding: 'مثال: عمارة 12، الدور 3، شقة 7',
        phLandmark: 'مثال: بجوار مسجد أو مدرسة',
        msgLbl: 'الرسالة — Message',
        copy: 'نسخ الرسالة',
        copied: 'تم النسخ!',
        openWa: 'فتح واتساب',
        copyFail: 'تعذّر النسخ — حدّد النص وانسخه يدوياً.',
        fillRequired: 'من فضلك أكمل بيانات التوصيل المطلوبة قبل الإرسال.'
      },
      wa: {
        orderHead: '🔥 المزاج — طلب جديد',
        hi: 'مرحباً! أود تقديم هذا الطلب:',
        total: '💰 الإجمالي:',
        deliveryNote: '🚚 مصاريف التوصيل غير مشمولة في الإجمالي — يُرجى تأكيد تكلفة التوصيل والمنطقة مع خدمة العملاء.',
        end: 'يرجى تأكيد التوفر وموعد التوصيل. شكراً لك!'
      }
      ,
      pay: {
        tag: 'طرق الدفع',
        title: 'ادفع بطريقتك<br><em>آمن وسهل</em>',
        p: 'نوفر كل وسائل الدفع الأساسية لتختار الطريقة الأنسب لك — داخل الفرع أو عند الاستلام (حسب المتاح).',
        secure: 'دفع آمن وسريع',
        visa: 'فيزا / ماستر كارد',
        visaS: 'نقبل بطاقات الائتمان والخصم المباشر.',
        apple: 'Apple Pay',
        appleS: 'ادفع بسهولة عبر iPhone أو Apple Watch.',
        instapay: 'InstaPay',
        instapayS: 'تحويل بنكي فوري عبر تطبيق إنستا باي.',
        cash: 'كاش',
        cashS: 'دفع نقدي عند الاستلام أو داخل الفرع.'
      }
    }
  };

  function getMazagT(path) {
    var lang = document.documentElement.getAttribute('lang') === 'ar' ? 'ar' : 'en';
    var parts = path.split('.');
    function walk(root) {
      var cur = root;
      for (var i = 0; i < parts.length; i++) {
        cur = cur && cur[parts[i]];
      }
      return typeof cur === 'string' ? cur : null;
    }
    var v = walk(MAZAG_LANG[lang]);
    if (v) return v;
    v = walk(MAZAG_LANG.en);
    return v || path;
  }

  function applyMazagI18n() {
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var k = el.getAttribute('data-i18n');
      if (!k) return;
      var t = getMazagT(k);
      if (t) el.textContent = t;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-html');
      if (!k) return;
      var t = getMazagT(k);
      if (t) el.innerHTML = t;
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var k = el.getAttribute('data-i18n-placeholder');
      if (!k) return;
      var t = getMazagT(k);
      if (t) el.setAttribute('placeholder', t);
    });
    var mt = getMazagT('metaTitle');
    if (mt) document.title = mt;
  }

  function setMazagLang(lang) {
    if (lang !== 'en' && lang !== 'ar') lang = 'en';
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    try {
      localStorage.setItem('mazag_lang', lang);
    } catch (e) {}
    var ben = document.getElementById('btn-lang-en');
    var bar = document.getElementById('btn-lang-ar');
    if (ben) ben.classList.toggle('active', lang === 'en');
    if (bar) bar.classList.toggle('active', lang === 'ar');
    applyMazagI18n();
    if (typeof w.renderCart === 'function') w.renderCart();
  }

  w.getMazagT = getMazagT;
  w.setMazagLang = setMazagLang;
  w.applyMazagI18n = applyMazagI18n;
  w.MAZAG_LANG = MAZAG_LANG;
  w.mazagSetLangSafe = function (lang) {
    try {
      if (typeof w.setMazagLang === 'function') w.setMazagLang(lang);
    } catch (e) {
      // If anything goes wrong, keep the site usable.
      try { document.documentElement.classList.add('perf-lite'); } catch (e2) {}
    }
  };

  document.addEventListener('DOMContentLoaded', function () {
    try {
      var s = localStorage.getItem('mazag_lang');
      if (s === 'ar' || s === 'en') {
        setMazagLang(s);
        return;
      }
    } catch (e2) {}
    applyMazagI18n();
    var ben = document.getElementById('btn-lang-en');
    var bar = document.getElementById('btn-lang-ar');
    if (ben) ben.classList.add('active');
    if (bar) bar.classList.remove('active');
  });
})(typeof window !== 'undefined' ? window : this);

