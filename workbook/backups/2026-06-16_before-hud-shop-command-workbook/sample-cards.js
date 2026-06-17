const communityMainCards = [
  { id: "main_hsinchu_food", name: "新竹米粉與貢丸", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/01_hsinchu_rice_noodles_meatballs.png", communityType: "食品特產社區", desc: "食品特產能帶動收入，但要避免地方特色變成普通商品。", scores: { income: 2, tourism: 0, culture: 1, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_kaohsiung_squid", name: "高雄花枝丸觀光工廠", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/02_kaohsiung_squid_ball_factory.png", communityType: "水產加工社區", desc: "加工體驗能吸引遊客，也要兼顧安全與地方故事。", scores: { income: 2, tourism: 1, culture: 1, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_changhua_cookie", name: "彰化餅乾觀光工廠", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/03_changhua_cookie_factory.png", communityType: "產業體驗社區", desc: "體驗經濟很熱鬧，但要注意垃圾、成本與文化空洞。", scores: { income: 2, tourism: 2, culture: 0, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_nantou_tea", name: "南投茶葉與茶博活動", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/04_nantou_tea_expo.png", communityType: "農產節慶社區", desc: "茶文化可以結合觀光，但天候與活動成本要先想好。", scores: { income: 0, tourism: 2, culture: 2, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_yunlin_janfusun", name: "雲林劍湖山與農產推廣", cost: 3, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/05_yunlin_janfusun_farm_promo.png", communityType: "遊樂觀光社區", desc: "大型遊樂區能帶人潮，重點是如何把人潮連回地方農產。", scores: { income: 2, tourism: 4, culture: 0, ecology: 0, publicSupport: 0 }, shopCost: 6 },
  { id: "main_pingtung_indigenous", name: "屏東原住民族文化園區", cost: 3, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/06_pingtung_indigenous_culture_park.png", communityType: "族群文化社區", desc: "文化展示要尊重、正確，不能只把文化當表演。", scores: { income: 0, tourism: 1, culture: 4, ecology: 0, publicSupport: 0 }, shopCost: 6 },
  { id: "main_chiayi_blue_shoe", name: "嘉義布袋藍色玻璃鞋", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/07_chiayi_budai_blue_glass_shoe.png", communityType: "地景藝術社區", desc: "打卡景點很吸睛，但不能讓社區只剩拍照。", scores: { income: 1, tourism: 3, culture: 0, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_hualien_bear", name: "花蓮玉里黑熊車站偶", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/08_hualien_yuli_black_bear_station.png", communityType: "生態打卡社區", desc: "生態意象可愛好拍，也要讓遊客理解保育。", scores: { income: 0, tourism: 2, culture: 0, ecology: 1, publicSupport: 0 }, shopCost: 5 },
  { id: "main_tainan_milkfish", name: "台南虱目魚頭人", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/09_tainan_milkfish_head_mascot.png", communityType: "地方梗與水產社區", desc: "網路梗可以帶來關注，但要轉成地方理解才不會只剩玩笑。", scores: { income: 2, tourism: 2, culture: 0, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_miaoli_wood", name: "苗栗三義木雕老街", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/10_miaoli_sanyi_woodcarving_street.png", communityType: "工藝保存社區", desc: "工藝保存需要師傅、時間與傳承，不只是把作品賣出去。", scores: { income: 0, tourism: 0, culture: 3, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_taitung_katsuobushi", name: "台東柴魚加工故事", cost: 2, type: "MainTheme", rarity: "主線", communityType: "海洋加工社區", desc: "海洋加工能變成地方故事，也要注意安全、氣味與環境。", scores: { income: 2, tourism: 1, culture: 2, ecology: 0, publicSupport: 0 }, shopCost: 5 },
  { id: "main_miaoli_leopard_cat_rice", name: "苗栗石虎米友善農業", cost: 3, type: "MainTheme", rarity: "主線", communityType: "生態農業社區", desc: "友善農業能照顧棲地，但短期收入與產量壓力要處理。", scores: { income: 0, tourism: 1, culture: 1, ecology: 3, publicSupport: 0 }, shopCost: 6 },
  { id: "main_tainan_longci_temple", name: "台南龍崎文衡殿英雄護法", cost: 2, type: "MainTheme", rarity: "主線", communityType: "宮廟奇觀社區", desc: "宮廟奇觀容易吸睛，也要避免只玩梗而忽略信仰脈絡。", scores: { income: 0, tourism: 2, culture: 2, ecology: 0, publicSupport: 1 }, shopCost: 5 },
  { id: "main_dajia_mazu", name: "大甲鎮瀾宮媽祖遶境", cost: 3, type: "MainTheme", rarity: "主線", communityType: "信仰節慶社區", desc: "信仰活動能凝聚地方，也會帶來人潮、交通與禮俗挑戰。", scores: { income: 1, tourism: 3, culture: 3, ecology: 0, publicSupport: 1 }, shopCost: 6 },
  { id: "main_penghu_fireworks", name: "澎湖國際海上花火節", cost: 3, type: "MainTheme", rarity: "主線", communityType: "離島節慶社區", desc: "節慶很亮眼，但天候、交通與住宿承載都要準備。", scores: { income: 2, tourism: 4, culture: 1, ecology: 0, publicSupport: 0 }, shopCost: 6 },
  { id: "main_matsu_blue_tears", name: "馬祖藍眼淚", cost: 3, type: "MainTheme", rarity: "主線", communityType: "自然奇景社區", desc: "自然奇景需要保護，過度行銷會傷害生態與居民生活。", scores: { income: 1, tourism: 4, culture: 0, ecology: 2, publicSupport: 0 }, shopCost: 6 },
  { id: "main_tamsui_mackay", name: "淡水馬偕醫療教育故事", cost: 2, type: "MainTheme", rarity: "主線", communityType: "人物古蹟社區", desc: "人物古蹟要把故事講清楚，讓學生理解地方與歷史的連結。", scores: { income: 0, tourism: 1, culture: 3, ecology: 0, publicSupport: 1 }, shopCost: 5 },
  { id: "main_wanjin_basilica", name: "屏東萬金聖母聖殿", cost: 2, type: "MainTheme", rarity: "主線", communityType: "宗教古蹟社區", desc: "宗教古蹟兼具朝聖與觀光，需要尊重禮儀與維護成本。", scores: { income: 0, tourism: 2, culture: 3, ecology: 0, publicSupport: 1 }, shopCost: 5 },
];

const buildCards = [
  { id: "build_signage", name: "導覽牌", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "整理路線與說明，讓遊客更容易理解地方。", effect: { culture: 1, tourism: 1 }, shopCost: 3 },
  { id: "build_story_wall", name: "故事牆", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "把社區記憶變成可以閱讀的公共空間。", effect: { culture: 2 }, shopCost: 3 },
  { id: "build_photo_spot", name: "打卡點", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "設計好拍照的位置，提升觀光能見度。", effect: { tourism: 2 }, shopCost: 3 },
  { id: "build_market", name: "市集", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "讓在地產品與居民一起參與經濟活動。", effect: { income: 2 }, shopCost: 4 },
  { id: "build_flow_line", name: "分流線", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "把人流分散，減少擁擠與居民困擾。", effect: { efficiency: 2 }, shopCost: 3 },
  { id: "build_volunteer_station", name: "志工站", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "讓居民與學生一起協助導覽、清潔與服務。", effect: { publicSupport: 1, manpower: 1 }, shopCost: 3 },
  { id: "build_recycling", name: "回收站", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "讓活動後的環境壓力下降。", effect: { ecology: 2 }, shopCost: 3 },
  { id: "build_mini_gallery", name: "小展館", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "集中展示故事、照片與地方物件。", effect: { culture: 2, tourism: 1 }, shopCost: 4 },
  { id: "build_workshop", name: "體驗課", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "把工藝、農產或故事變成可參與的課程。", effect: { culture: 1, income: 1 }, shopCost: 4 },
  { id: "build_shuttle", name: "接駁車", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "改善交通接近性，降低塞車壓力。", effect: { efficiency: 2, tourism: 1 }, shopCost: 4 },
  { id: "build_friendly_field", name: "友善田", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "保護農田生態，但短期收入較慢。", effect: { ecology: 3, income: -1 }, shopCost: 4 },
  { id: "build_night_lights", name: "夜間燈", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "延長活動時間，但需要支付維護與電力。", effect: { tourism: 2, money: -1 }, shopCost: 3 },
  { id: "build_story_map", name: "故事地圖", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "把景點串成故事路線。", effect: { culture: 1, efficiency: 1 }, shopCost: 3 },
  { id: "build_rest_area", name: "休息亭", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "讓長輩與遊客有地方休息，提升友善度。", effect: { publicSupport: 1, tourism: 1 }, shopCost: 3 },
  { id: "build_local_menu", name: "在地菜單", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "把地方食材轉化成清楚的飲食故事。", effect: { income: 1, culture: 1 }, shopCost: 3 },
  { id: "build_eco_path", name: "生態步道", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "讓遊客接近自然，但要控制承載量。", effect: { tourism: 1, ecology: 2 }, shopCost: 4 },
  { id: "build_safety_sign", name: "安全告示", cost: 1, type: "Utility", rarity: "營造", category: "Build", desc: "降低活動風險與誤闖危險區域。", effect: { efficiency: 1, publicSupport: 1 }, shopCost: 3 },
  { id: "build_local_brand", name: "地方品牌", cost: 2, type: "Utility", rarity: "營造", category: "Build", desc: "統整視覺與故事，讓社區更容易被記住。", effect: { income: 1, tourism: 1, culture: 1 }, shopCost: 4 },
];

const functionCards = [
  { id: "function_good_news", name: "好消息", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "翻到好消息，立刻獲得一點幸運與一點民心。", effect: { luck: 1, publicSupport: 1 }, shopCost: 2 },
  { id: "function_bad_news", name: "壞消息", cost: 0, type: "Debuff", rarity: "功能", category: "Function", desc: "社區遇到麻煩，對目標造成 4 點傷害。", effect: { damage: 4 }, shopCost: 2 },
  { id: "function_meeting", name: "社區會議", cost: 1, type: "Defense", rarity: "功能", category: "Function", desc: "先把話說清楚，覆蓋防禦並增加民心。", effect: { block: 8, publicSupport: 1 }, shopCost: 3 },
  { id: "function_prepare", name: "事前準備", cost: 0, type: "Trap", rarity: "功能", category: "Function", desc: "放一張準備牌，等待事件發生時啟動。", effect: { trapDamage: 4, efficiency: 1 }, shopCost: 3 },
  { id: "function_incident", name: "突發事件", cost: 0, type: "Attack", rarity: "功能", category: "Function", desc: "突發狀況讓對手措手不及。", effect: { damage: 5 }, shopCost: 3 },
  { id: "function_publicity", name: "公開宣傳", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "觀光增加，但也更容易引來人潮壓力。", effect: { tourism: 1, luck: 1 }, shopCost: 3 },
  { id: "function_resident_voice", name: "居民意見", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "聽見居民聲音，民心增加。", effect: { publicSupport: 1 }, shopCost: 2 },
  { id: "function_budget_review", name: "預算審查", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "檢查錢是否夠用，獲得錢與效率。", effect: { money: 1, efficiency: 1 }, shopCost: 3 },
  { id: "function_field_visit", name: "田野調查", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "重新理解地方，增加文化與幸運。", effect: { culture: 1, luck: 1 }, shopCost: 3 },
  { id: "function_media_call", name: "媒體來電", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "曝光上升，觀光增加。", effect: { tourism: 2 }, shopCost: 4 },
  { id: "function_class_task", name: "戶外教育任務", cost: 0, type: "Utility", rarity: "功能", category: "Function", desc: "學生參與讓文化與生態都被看見。", effect: { culture: 1, ecology: 1 }, shopCost: 4 },
  { id: "function_conflict_mediation", name: "衝突協調", cost: 1, type: "Defense", rarity: "功能", category: "Function", desc: "協調不同意見，抵擋一次衝突。", effect: { block: 10, publicSupport: 1 }, shopCost: 4 },
];

const bonusCards = [
  { id: "bonus_elder_help", name: "長輩幫忙", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/01_elder_help.png", desc: "瞬間：文化 +1、民心 +1。延時：下次文化錯誤類攻擊無效。", effect: { culture: 1, publicSupport: 1 }, shopCost: 3 },
  { id: "bonus_temp_work_crew", name: "臨時工班", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/02_temp_work_crew.png", desc: "瞬間：技術 +2。延時：下次維修類攻擊少扣錢 2。", effect: { tech: 2 }, shopCost: 3 },
  { id: "bonus_good_reputation", name: "好口碑", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/03_good_reputation.png", desc: "瞬間：民心 +1、幸運值 +1。下次受到攻擊時，傷害 -1。", effect: { publicSupport: 1, luck: 1 }, shopCost: 3 },
  { id: "bonus_social_share", name: "社群轉發", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/04_social_share.png", desc: "瞬間：觀光 +2、幸運值 +1。回合結束若沒增加文化，文化 -1。", effect: { tourism: 2, luck: 1 }, shopCost: 4 },
  { id: "bonus_crowd_bonus", name: "人潮紅利", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/05_crowd_bonus.png", desc: "瞬間：觀光 +2、收入 +1。觀光過高時容易引來人潮攻擊。", effect: { tourism: 2, income: 1 }, shopCost: 4 },
  { id: "bonus_local_spending", name: "在地消費", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/06_local_spending.png", desc: "瞬間：錢 +1、收入 +2。接下來 2 回合收入 +1。", effect: { money: 1, income: 2 }, shopCost: 4 },
  { id: "bonus_good_weather", name: "好天氣", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/07_good_weather.png", desc: "瞬間：幸運值 +1、觀光 +1。下次增加觀光時額外 +1。", effect: { luck: 1, tourism: 1 }, shopCost: 3 },
  { id: "bonus_volunteers_arrive", name: "志工來了", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/08_volunteers_arrive.png", desc: "瞬間：人口 +1、人力 +2。下次支付人力成本 -1。", effect: { population: 1, manpower: 2 }, shopCost: 4 },
  { id: "bonus_small_luck", name: "小確幸", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/09_small_luck.png", desc: "瞬間：幸運值 +2。下次不利事件可重抽 1 次。", effect: { luck: 2 }, shopCost: 4 },
  { id: "bonus_grant_funding", name: "補助款", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/10_grant_funding.png", desc: "瞬間：錢 +3。善用資源，讓家鄉變得更美好。", effect: { money: 3 }, shopCost: 4 },
  { id: "bonus_student_idea", name: "學生創意", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/11_bonus_extra_01.png", desc: "學生提出新點子，文化、觀光與幸運都增加。", effect: { luck: 1, culture: 1, tourism: 1 }, shopCost: 5 },
  { id: "bonus_media_exposure", name: "媒體曝光", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/12_bonus_extra_02.png", desc: "觀光 +3，但人潮壓力也會上升。", effect: { tourism: 3 }, shopCost: 5 },
  { id: "bonus_charity_donation", name: "公益捐款", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/13_bonus_extra_03.png", desc: "錢 +2、民心 +2。第一次文化或生態提升時額外 +1。", effect: { money: 2, publicSupport: 2 }, shopCost: 5 },
  { id: "bonus_full_house", name: "爆棚人氣", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/14_bonus_extra_04.png", desc: "觀光 +4、收入 +2，但回合結束容易抽人潮攻擊。", effect: { tourism: 4, income: 2 }, shopCost: 6 },
  { id: "bonus_local_guide", name: "在地導覽員", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/15_bonus_extra_05.png", desc: "文化 +2、觀光 +1，讓故事被正確理解。", effect: { culture: 2, tourism: 1 }, shopCost: 5 },
  { id: "bonus_clean_team", name: "清潔小隊", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/16_bonus_extra_06.png", desc: "生態 +1、民心 +1，降低髒亂壓力。", effect: { ecology: 1, publicSupport: 1 }, shopCost: 4 },
  { id: "bonus_local_creator", name: "地方創作者", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/17_bonus_extra_07.png", desc: "文化 +1、收入 +1、觀光 +1。", effect: { culture: 1, income: 1, tourism: 1 }, shopCost: 5 },
  { id: "bonus_public_support", name: "居民支持", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/18_bonus_extra_08.png", desc: "民心 +2，人力 +1。事情有人願意一起做。", effect: { publicSupport: 2, manpower: 1 }, shopCost: 4 },
  { id: "bonus_skill_exchange", name: "技術交流", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/19_bonus_extra_09.png", desc: "技術 +2、效率 +1，設備與網站維護更順利。", effect: { tech: 2, efficiency: 1 }, shopCost: 4 },
  { id: "bonus_green_award", name: "永續獎章", cost: 0, type: "Utility", rarity: "史詩", image: "../card_bank/bonus_cards/images/20_bonus_extra_10.png", desc: "生態 +2、民心 +1、幸運 +1。", effect: { ecology: 2, publicSupport: 1, luck: 1 }, shopCost: 6 },
];

const attackCards = [
  { id: "attack_crowd_surge", name: "爆量", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/01_crowd_surge.png", desc: "人潮突然湧入，造成 6 點壓力傷害。", effect: { damage: 6 }, shopCost: 3 },
  { id: "attack_delay", name: "拖延", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/02_delay.png", desc: "準備時間不足，造成 4 點傷害。", effect: { damage: 4 }, shopCost: 3 },
  { id: "attack_overcrowding", name: "塞爆", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/03_overcrowding.png", desc: "交通與動線塞住，造成 6 點傷害。", effect: { damage: 6 }, shopCost: 3 },
  { id: "attack_parking_scramble", name: "搶車位", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/04_parking_scramble.png", desc: "車位衝突讓居民不滿，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "attack_drone_photo", name: "空拍照", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/05_drone_photo.png", desc: "未規範空拍造成干擾，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "attack_hype_cooldown", name: "退燒", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/06_hype_cooldown.png", desc: "熱度快速下降，造成 4 點傷害。", effect: { damage: 4 }, shopCost: 3 },
  { id: "attack_labor_shortage", name: "缺工", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/07_labor_shortage.png", desc: "人手不足，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "attack_budget_loss", name: "破財", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/08_budget_loss.png", desc: "預算失控，造成 6 點傷害。", effect: { damage: 6 }, shopCost: 3 },
  { id: "attack_equipment_failure", name: "故障", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/09_equipment_failure.png", desc: "設備故障，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "attack_maintenance_fee", name: "維修費", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/10_maintenance_fee.png", desc: "維護成本突然增加，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "attack_cultural_misstatement", name: "說錯", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/11_cultural_misstatement.png", desc: "文化故事說錯，造成 7 點傷害。", effect: { damage: 7 }, shopCost: 4 },
  { id: "attack_commodity_only", name: "只賣貨", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/12_commodity_only.png", desc: "只剩商品，地方故事變薄，造成 7 點傷害。", effect: { damage: 7 }, shopCost: 4 },
  { id: "attack_fake_performance", name: "假表演", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/13_fake_performance.png", desc: "不尊重文化脈絡，造成 8 點傷害。", effect: { damage: 8 }, shopCost: 4 },
  { id: "attack_lost_tradition", name: "失傳", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/14_lost_tradition.png", desc: "傳承中斷，造成 7 點傷害。", effect: { damage: 7 }, shopCost: 4 },
  { id: "attack_misused_meme", name: "玩壞", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/15_misused_meme.png", desc: "地方梗被過度消費，造成 6 點傷害。", effect: { damage: 6 }, shopCost: 4 },
  { id: "attack_litter_mess", name: "髒亂", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/16_litter_mess.png", desc: "垃圾與髒亂造成居民壓力，造成 6 點傷害。", effect: { damage: 6 }, shopCost: 3 },
  { id: "attack_overdevelopment", name: "過開發", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/17_overdevelopment.png", desc: "開發超過環境承受，造成 8 點傷害。", effect: { damage: 8 }, shopCost: 4 },
  { id: "attack_habitat_crisis", name: "棲地危機", cost: 2, type: "Attack", rarity: "稀有", image: "../card_bank/attack_cards/images/18_habitat_crisis.png", desc: "生物棲地被干擾，造成 8 點傷害。", effect: { damage: 8 }, shopCost: 4 },
  { id: "attack_water_shortage", name: "缺水", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/19_water_shortage.png", desc: "活動與生活用水壓力升高，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "attack_light_pollution", name: "光害", cost: 1, type: "Attack", rarity: "普通", image: "../card_bank/attack_cards/images/20_light_pollution.png", desc: "夜間燈光干擾居民與生態，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
];

const defenseCards = [
  { id: "defense_guided_tour", name: "導覽", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/01_guided_tour.png", desc: "抵擋文化誤讀與只賣貨，阻擋 10 點傷害。", effect: { block: 10, culture: 1 }, shopCost: 3 },
  { id: "defense_friendly_farming", name: "友善農法", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/02_friendly_farming.png", desc: "抵擋棲地危機與過開發，阻擋 10 點傷害。", effect: { block: 10, ecology: 1 }, shopCost: 3 },
  { id: "defense_route_planning", name: "動線", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/03_route_planning.png", desc: "抵擋爆量、塞爆與搶車位，阻擋 9 點傷害。", effect: { block: 9, efficiency: 1 }, shopCost: 3 },
  { id: "defense_etiquette", name: "禮俗解說", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/04_etiquette_explanation.png", desc: "抵擋禮儀誤解與文化誤讀，阻擋 9 點傷害。", effect: { block: 9, culture: 1, publicSupport: 1 }, shopCost: 4 },
  { id: "defense_sorting_station", name: "分類站", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/05_sorting_station.png", desc: "抵擋髒亂與垃圾問題，阻擋 8 點傷害。", effect: { block: 8, ecology: 1 }, shopCost: 3 },
  { id: "defense_town_meeting", name: "說明會", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/06_town_meeting.png", desc: "抵擋抗議、施壓與居民抱怨，阻擋 10 點傷害。", effect: { block: 10, publicSupport: 1 }, shopCost: 4 },
  { id: "defense_budget_sheet", name: "預算表", cost: 1, type: "Defense", rarity: "普通", image: "../card_bank/defense_cards/images/07_budget_sheet.png", desc: "抵擋破財與維修費，阻擋 8 點傷害。", effect: { block: 8, efficiency: 1 }, shopCost: 3 },
  { id: "defense_heritage_repair", name: "古蹟修繕", cost: 2, type: "Defense", rarity: "稀有", image: "../card_bank/defense_cards/images/08_heritage_repair.png", desc: "抵擋古蹟漏水與維修費，阻擋 12 點傷害。", effect: { block: 12, culture: 1 }, shopCost: 5 },
  { id: "defense_shuttle_bus", name: "接駁", cost: 2, type: "Defense", rarity: "稀有", image: "../card_bank/defense_cards/images/09_shuttle_bus.png", desc: "抵擋塞爆、朝聖塞車與船班滿，阻擋 11 點傷害。", effect: { block: 11, tourism: 1, efficiency: 1 }, shopCost: 5 },
  { id: "defense_photo_rule", name: "拍照規範", cost: 1, type: "Defense", rarity: "普通", desc: "抵擋拍照干擾與空拍照，阻擋 8 點傷害。", effect: { block: 8, publicSupport: 1 }, shopCost: 3 },
];

const trapCards = [
  { id: "trap_crowd_flow_map", name: "分流圖", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/01_crowd_flow_map.png", desc: "觸發爆量或塞爆時，反制並造成 4 點傷害。", effect: { trapDamage: 4, efficiency: 1 }, shopCost: 3 },
  { id: "trap_reservation_site", name: "預約網", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/02_reservation_site.png", desc: "過度行銷或爆量時啟動，減少壓力。", effect: { trapDamage: 4, efficiency: 1 }, shopCost: 3 },
  { id: "trap_rain_plan", name: "雨備", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/03_rain_plan.png", desc: "遇到颱風或大雨時啟動。", effect: { trapDamage: 3, publicSupport: 1 }, shopCost: 3 },
  { id: "trap_documentation_folder", name: "資料夾", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/04_documentation_folder.png", desc: "遇到說錯或文化誤讀時啟動。", effect: { trapDamage: 4, culture: 1 }, shopCost: 3 },
  { id: "trap_clarification_draft", name: "澄清稿", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/05_clarification_draft.png", desc: "遇到假消息或玩壞時啟動。", effect: { trapDamage: 4, publicSupport: 1 }, shopCost: 3 },
  { id: "trap_emergency_fund", name: "基金", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/06_emergency_fund.png", desc: "遇到維修費或古蹟漏水時啟動。", effect: { trapDamage: 3, money: 2 }, shopCost: 4 },
  { id: "trap_safety_checklist", name: "安檢表", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/07_safety_checklist.png", desc: "遇到故障或安全事故時啟動。", effect: { trapDamage: 4, efficiency: 1 }, shopCost: 3 },
  { id: "trap_buffer_zone", name: "緩衝區", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/08_buffer_zone.png", desc: "遇到棲地危機或過開發時啟動。", effect: { trapDamage: 4, ecology: 1 }, shopCost: 3 },
  { id: "trap_records", name: "紀錄", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/09_records.png", desc: "遇到施壓或抗議時啟動。", effect: { trapDamage: 3, publicSupport: 1 }, shopCost: 3 },
  { id: "trap_volunteer_roster", name: "志工名單", cost: 1, type: "Trap", rarity: "陷阱", image: "../card_bank/trap_cards/images/10_volunteer_roster.png", desc: "遇到缺工或人手不足時啟動。", effect: { trapDamage: 3, manpower: 1 }, shopCost: 3 },
];

const eventCards = [
  { id: "event_long_weekend", name: "連假", cost: 0, type: "Utility", rarity: "事件", category: "Event", desc: "所有觀光 +2，但人潮壓力上升。", effect: { tourism: 2 }, shopCost: 4 },
  { id: "event_typhoon", name: "颱風", cost: 0, type: "Debuff", rarity: "事件", category: "Event", desc: "戶外活動暫停，造成 5 點傷害。", effect: { damage: 5 }, shopCost: 3 },
  { id: "event_viral", name: "爆紅", cost: 0, type: "Utility", rarity: "事件", category: "Event", desc: "觀光 +3，但文化壓力提高。", effect: { tourism: 3 }, shopCost: 5 },
  { id: "event_budget_cut", name: "縮水", cost: 0, type: "Debuff", rarity: "事件", category: "Event", desc: "經費縮水，造成 4 點傷害。", effect: { damage: 4 }, shopCost: 3 },
  { id: "event_interview", name: "採訪", cost: 0, type: "Utility", rarity: "事件", category: "Event", desc: "文化被看見，文化 +2。", effect: { culture: 2 }, shopCost: 4 },
  { id: "event_public_meeting", name: "大會", cost: 0, type: "Defense", rarity: "事件", category: "Event", desc: "民心低者推不動，先抵擋 8 點傷害。", effect: { block: 8, publicSupport: 1 }, shopCost: 4 },
  { id: "event_environment_check", name: "環檢", cost: 0, type: "Defense", rarity: "事件", category: "Event", desc: "檢查環境承載，生態 +1 並抵擋 8 點。", effect: { block: 8, ecology: 1 }, shopCost: 4 },
  { id: "event_expo_sale", name: "展售", cost: 0, type: "Utility", rarity: "事件", category: "Event", desc: "收入最高者受矚目，收入 +2。", effect: { income: 2 }, shopCost: 4 },
];

const sampleCards = [
  ...communityMainCards,
  ...buildCards,
  ...functionCards,
  ...bonusCards,
  ...attackCards,
  ...defenseCards,
  ...trapCards,
  ...eventCards,
];

function readCardJsonBank() {
  return sampleCards;
}

if (typeof globalThis !== "undefined") {
  globalThis.sampleCards = sampleCards;
  globalThis.communityMainCards = communityMainCards;
  globalThis.communityBuildCards = buildCards;
  globalThis.communityFunctionCards = functionCards;
  globalThis.communityBonusCards = bonusCards;
  globalThis.communityAttackCards = attackCards;
  globalThis.communityDefenseCards = defenseCards;
  globalThis.communityTrapCards = trapCards;
  globalThis.communityEventCards = eventCards;
}

if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
  module.exports = sampleCards;
}
