import json

post1_body = """<div class="space-y-6">
  <div class="bg-[#FAF8F5] border border-[#E0D8CE] p-6 rounded-md">
    <div class="text-xs uppercase font-bold text-[#1B5E20] tracking-wider mb-2">النص العربي الأصلي • Arabic Text</div>
    <p class="font-heading text-xl md:text-2xl text-right leading-loose text-[#2D3436] font-semibold" dir="rtl">
      عَنْ عَدِيِّ بْنِ حَاتِمٍ رَضِيَ اللَّهُ عَنْهُ قَالَ : قَالَ رَسُولُ اللَّهِ ﷺ : 
      <br/>
      «<strong>اتَّقُوا النَّارَ وَلَوْ بِشِقِّ تَمْرَةٍ فَمَنْ لَمْ يَجِدْ فَبِكَلِمَةٍ طَيِّبَةٍ</strong>»
    </p>
    <div class="text-right text-xs text-[#636E72] mt-2 font-medium" dir="rtl">
      [متفقٌ عليه — رواه البخاري (1417) ومسلم (1016)]
    </div>
  </div>

  <div class="bg-white border-l-4 border-[#1B5E20] pl-4 py-2">
    <h3 class="text-lg font-bold text-[#2D3436] mb-1 font-heading">የትርጉም ማብራሪያ (Amharic)</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      የአላህ መልክተኛ (ሰለላሁ ዐለይሂ ወሰለም) እንዲህ ብለዋል፦ 
      <em>«የተምር ስንጣቂ በመለገስም ቢሆን እሳትን (ጀሀነምን) ተከላከሉ፤ ይህንን ያላገኘ ሰው ግን በመልካም ንግግር (ራሱን ከእሳት ይጠብቅ)።»</em>
      <span class="text-xs text-[#636E72] block mt-1">(ቡኻሪና ሙስሊም የተስማሙበት)</span>
    </p>
  </div>

  <div class="bg-white border-l-4 border-[#B8860B] pl-4 py-2">
    <h3 class="text-lg font-bold text-[#2D3436] mb-1 font-heading">English Translation & Commentary</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      Narrated by Adi bin Hatim (may Allah be pleased with him): The Messenger of Allah (ﷺ) said:
      <em>"Guard yourselves against the Fire, even if with half a date-fruit; and whoever cannot afford even that, then with a good and kind word."</em>
      <span class="text-xs text-[#636E72] block mt-1">(Agreed upon — Sahih al-Bukhari & Sahih Muslim)</span>
    </p>
  </div>

  <div class="bg-white border-l-4 border-[#636E72] pl-4 py-2">
    <h3 class="text-lg font-bold text-[#2D3436] mb-1 font-heading">Hiikkaa Afaan Oromoo (Oromo)</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      Ergamaan Rabbii (nagaa fi rahmanni irratti haa jiraatu) akkana jedhan:
      <em>"Cabbii timiraatiinuu taatu ibiddarraa eeggadhaa; namni san dhabe immoo dubbii gaariidhaan (lubbuu isaa haa baraarsu)."</em>
      <span class="text-xs text-[#636E72] block mt-1">(Bukhaarii fi Muslim irratti waliigalan)</span>
    </p>
  </div>

  <div class="pt-4 border-t border-[#E0D8CE] space-y-4">
    <h3 class="font-heading font-bold text-xl text-[#2D3436]">ከዚህ ታላቅ ሐዲስ የምንቀስማቸው ቁልፍ ትምህርቶች</h3>
    <ul class="list-disc list-inside space-y-2 text-[#636E72]">
      <li><strong class="text-[#2D3436]">ምንም አይነት መልካም ስራ አነስተኛ ተብሎ አይናቅም፦</strong> የተምር ስንጣቂ እንኳን በአላህ ዘንድ በቅን ልብ ሲሰጥ ከአደጋ የምትታደግ ዋጋ አላት።</li>
      <li><strong class="text-[#2D3436]">ሶደቃህ እሳትን ታጠፋለች፦</strong> ልግስና ውሃ እሳትን እንደሚያጠፋ ወንጀልን ያብሳል።</li>
      <li><strong class="text-[#2D3436]">የመልካም ንግግር ምንዳ፦</strong> የሚሰጠው ያጣ ሰው ፊቱን አበርቶ፣ አጽናንቶና በመልካም ቃል ተናግሮ ማለፉ ልክ እንደ ገንዘብ ልገሳ ይቆጠራል።</li>
    </ul>
  </div>
</div>"""

post2_body = """<div class="space-y-6">
  <div class="bg-[#FAF8F5] border border-[#E0D8CE] p-6 rounded-md space-y-4">
    <div class="text-xs uppercase font-bold text-[#1B5E20] tracking-wider">🌟 فضل الصلاة على النبي ﷺ يوم الجمعة وليلته • Arabic Text</div>
    
    <p class="font-heading text-lg md:text-xl text-right leading-loose text-[#2D3436]" dir="rtl">
      قال النبي ﷺ : «<strong>أَكْثِرُوا الصَّلَاةَ عَلَيَّ يَوْمَ الْجُمُعَةِ وَلَيْلَةَ الْجُمُعَةِ، فَمَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللهُ عَلَيْهِ بِهَا عَشْرًا</strong>» [أخرجه: البيهقي]
    </p>

    <p class="font-heading text-lg md:text-xl text-right leading-loose text-[#2D3436]" dir="rtl">
      وقال ﷺ : «<strong>أكثِروا عليَّ منَ الصَّلاةِ يومِ الجمعةِ؛ فإنَّ صلاةَ أمَّتي تُعرَضُ عليَّ في كلِّ يومِ جمعةٍ</strong>» [أخرجه: البيهقي]
    </p>
  </div>

  <div class="bg-white border-l-4 border-[#1B5E20] pl-4 py-2 space-y-3">
    <h3 class="text-lg font-bold text-[#2D3436] font-heading">የጁምዓ ቀንና ሌሊት በነቢዩ ላይ ሰለዋት የማውረድ ትሩፋት (Amharic)</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      ነቢዩ ﷺ እንዲህ ብለዋል፦ <em>"በዓርብ ቀንና በዓርብ ሌሊት በእኔ ላይ ሰለዋትን አብዙ፤ በእኔ ላይ አንድ ጊዜ ሰለዋት ያወረደ አላህ በእርሱ ላይ አስር ጊዜ እዝነቱን ያወርዳል።"</em> [አል-በይሀቂ]
    </p>
    <p class="text-[#2D3436] text-base leading-relaxed">
      እንዲሁም ነቢዩ ﷺ እንዲህ ብለዋል፦ <em>"በዓርብ ቀን በእኔ ላይ ሰለዋትን አብዙ፤ የኡመቴ ሰለዋት በየሳምንቱ ዓርብ ለእኔ ይቀርብልኛልና።"</em> [አል-በይሀቂ]
    </p>
  </div>

  <div class="bg-[#1B5E20]/5 border border-[#1B5E20]/20 p-6 rounded-md">
    <h3 class="text-lg font-bold text-[#1B5E20] mb-3 font-heading">📜 الصيغة المفضلة / በላጩ የሰለዋት አባባል (الصلاة الإبراهيمية)</h3>
    <p class="text-sm text-[#636E72] mb-3">وهي الصيغة التي علّمها النبي ﷺ لأصحابه (البخاري ومسلم) / ይህች ነቢዩ ﷺ ለሶሃቦቻቸው ያስተማሯት በላጭ ሰለዋት ናት፦</p>
    
    <div class="bg-white p-4 rounded border border-[#E0D8CE] mb-4 text-right" dir="rtl">
      <p class="font-heading text-lg text-[#2D3436] leading-loose font-bold">
        "اللَّهُمَّ صَلِّ على مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ، اللَّهُمَّ بَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ، كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ، إِنَّكَ حَمِيدٌ مَجِيدٌ"
      </p>
    </div>

    <div class="space-y-3 text-sm text-[#2D3436]">
      <p>
        <strong>በአማርኛ፦</strong> <em>"አላህ ሆይ! በኢብራሂምና በኢብራሂም ቤተሰቦች ላይ እዝነትህን እንዳወረድክ ሁሉ በሙሐመድና በሙሐመድ ቤተሰቦች ላይ እዝነትህን አውርድ፤ አንተ ምስጉንና የላቅክ ነህና። አላህ ሆይ! በኢብራሂምና በኢብራሂም ቤተሰቦች ላይ በረከትህን እንደባረክክ ሁሉ በሙሐመድና በሙሐመድ ቤተሰቦች ላይ በረከትህን አውርድ፤ አንተ ምስጉንና የላቅክ ነህና።"</em>
      </p>
      <p>
        <strong>In English:</strong> <em>"O Allah, bestow Your favor upon Muhammad and upon the family of Muhammad, as You bestowed favor upon Ibrahim and upon the family of Ibrahim; indeed, You are Praiseworthy and Glorious. O Allah, bless Muhammad and the family of Muhammad, as You blessed Ibrahim and the family of Ibrahim; indeed, You are Praiseworthy and Glorious."</em>
      </p>
      <p>
        <strong>Afaan Oromoo:</strong> <em>"Yaa Rabbi! Akkuma Ibraahiimii fi maatii Ibraahiim irratti rahmata buufte, Muhammad fi maatii Muhammad irrattis rahmata buusi; ati faarfamaa fi guddaadha. Yaa Rabbi! Akkuma Ibraahiimii fi maatii Ibraahiim eebbiste, Muhammad fi maatii Muhammadis eebbisi; ati faarfamaa fi guddaadha."</em>
      </p>
    </div>
  </div>
</div>"""

post3_body = """<div class="space-y-6">
  <div class="bg-[#FAF8F5] border border-[#E0D8CE] p-6 rounded-md">
    <div class="text-xs uppercase font-bold text-[#1B5E20] tracking-wider mb-2">#لا_تفسد_آخرتك_لمرضاة_الناس • Arabic Text</div>
    <p class="font-heading text-lg md:text-xl text-right leading-loose text-[#2D3436]" dir="rtl">
      عَنْ عَائِشَةَ رَضِيَ اللَّهُ عَنْهَا أَنَّ النَّبِيَّ ﷺ قَالَ : 
      <br/>
      «<strong>مَنِ الْتَمَسَ رِضَى اللَّهِ بِسَخَطِ النَّاسِ، رَضِيَ اللَّهُ عَنْهُ وَأَرْضَى عَنْهُ النَّاسَ، وَمَنِ الْتَمَسَ رِضَا النَّاسِ بِسَخَطِ اللَّهِ، سَخَطَ اللَّهُ عَلَيْهِ وَأَسْخَطَ عَلَيْهِ النَّاسَ</strong>»
    </p>
    <div class="text-right text-xs text-[#636E72] mt-2 font-medium" dir="rtl">
      [رواه ابن حبان في صحيحه والترمذي]
    </div>
  </div>

  <div class="bg-white border-l-4 border-[#1B5E20] pl-4 py-2">
    <h3 class="text-lg font-bold text-[#2D3436] mb-1 font-heading">#ለሰው_ብለህ_አኼራህን_አታበላሽ (Amharic)</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      ከዓኢሻ (ረዲየላሁ ዐንሃ) እንደተላለፈው የአላህ መልክተኛ ﷺ እንዲህ ብለዋል፦
      <br/>
      <em>«ሰዎች ቢቆጡም እንኳ የአላህን ውዴታ ያስቀደመ ሰው፣ አላህ ይወደዋል፤ ሰዎችንም እርሱን እንዲወዱ ያደርጋቸዋል። በአንጻሩ አላህን በማስቆጣት የሰዎችን ውዴታ የፈለገ ሰው ግን፣ አላህ በእርሱ ላይ ይቆጣል፤ ሰዎችም በእርሱ ላይ እንዲቆጡና እንዲጠሉት ያደርጋቸዋል።»</em>
      <span class="text-xs text-[#636E72] block mt-1">(ኢብኑ ሒባን በሶሒሐቸው ዘግበውታል)</span>
    </p>
  </div>

  <div class="bg-white border-l-4 border-[#B8860B] pl-4 py-2">
    <h3 class="text-lg font-bold text-[#2D3436] mb-1 font-heading">English Translation & Ethical Principle</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      Narrated by Aisha (may Allah be pleased with her): The Prophet (ﷺ) said:
      <br/>
      <em>"Whoever seeks the pleasure of Allah at the risk of people's displeasure, Allah will be pleased with him and will make the people pleased with him. And whoever seeks the pleasure of people at the cost of Allah's displeasure, Allah will be displeased with him and will make the people displeased with him."</em>
      <span class="text-xs text-[#636E72] block mt-1">(Reported by Ibn Hibban and at-Tirmidhi)</span>
    </p>
  </div>

  <div class="bg-white border-l-4 border-[#636E72] pl-4 py-2">
    <h3 class="text-lg font-bold text-[#2D3436] mb-1 font-heading">Hiikkaa Afaan Oromoo (Oromo)</h3>
    <p class="text-[#2D3436] text-base leading-relaxed">
      Aa'ishaa (ra) irraa akka dhufeetti, Ergamaan Rabbii (saw) akkana jedhan:
      <br/>
      <em>"Namni dallansuu namootaatiin jaalala Rabbii barbaade, Rabbiin isa jaalata; namootas akka isa jaalatan godha. Namni ammoo dallansuu Rabbiitiin jaalala namaa barbaade, Rabbiin isarratti dallana; namootas akka isarratti dallanan godha."</em>
      <span class="text-xs text-[#636E72] block mt-1">(Ibnu Hibbaan Sahiiha isaanii keessatti gabaasan)</span>
    </p>
  </div>

  <div class="pt-4 border-t border-[#E0D8CE] space-y-4">
    <h3 class="font-heading font-bold text-xl text-[#2D3436]">መንፈሳዊ ማስታወሻና ተግሣጽ</h3>
    <p class="text-[#636E72] leading-relaxed">
      በህይወታችን ውስጥ ትልቁ ፈተና የሰዎችን ይሁንታ ለማግኘት ስንል የፈጣሪን ህግና መርህ መጣስ ነው። 
      ሰዎች ዛሬ አሞግሰው ነገ ሊያወግዙህ ይችላሉ፤ የአላህ ውዴታ ግን ቋሚና የማያልፍ ክብር ነው። 
      የአላህን ውዴታ ከልብ የቀደመ ሰው፣ አላህ የሰዎችንም ልብ በእጁ ስለሆነ ያዘነብልለታል። 
      ስለዚህ ለሰው ይሉኝታ ተብሎ ዲንና አኼራን መስዋዕት ከማድረግ እንጠንቀቅ!
    </p>
  </div>
</div>"""

print("Bodies generated successfully")
