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
  { id: "main_miaoli_wood", name: "苗栗三義木雕老街", cost: 2, type: "MainTheme", rarity: "主線", image: "../card_bank/main_cards/images/10_miaoli_sanyi_woodcarving_street.png", communityType: "工藝保存社區", desc: "工藝保存需要師傅、時間與傳承，不主要是把作品賣出去。", scores: { income: 0, tourism: 0, culture: 3, ecology: 0, publicSupport: 0 }, shopCost: 5 },
];

const buildCards = [];
const functionCards = [];

const bonusCards = [
  { id: "bonus_grant_funding", name: "補助款", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/01_elder_help.png", desc: "瞬間：錢 +3。善用資源，讓家鄉變得更美好。", effect: { money: 3 }, shopCost: 4 },
  { id: "bonus_good_weather", name: "好天氣", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/02_temp_work_crew.png", desc: "瞬間：幸運值 +1、觀光 +1。下次增加觀光時額外 +1。", effect: { luck: 1, tourism: 1 }, shopCost: 3 },
  { id: "bonus_volunteers_arrived_actual", name: "志工來了", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/03_good_reputation.png", desc: "瞬間：人口 +1、人力 +2。下次支付人力成本 -1。", effect: { population: 1, manpower: 2 }, shopCost: 4 },
  { id: "bonus_small_luck", name: "小確幸", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/04_social_share.png", desc: "瞬間：幸運值 +2。下次不利事件可重抽 1 次。", effect: { luck: 2 }, shopCost: 4 },
  { id: "bonus_crowd_bonus", name: "人潮紅利", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/05_crowd_bonus.png", desc: "瞬間：觀光 +2、收入 +1。觀光過高時容易引來人潮攻擊。", effect: { tourism: 2, income: 1 }, shopCost: 4 },
  { id: "bonus_local_spending", name: "在地消費", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/06_local_spending.png", desc: "瞬間：錢 +1、收入 +2。接下來 2 回合收入 +1。", effect: { money: 1, income: 2 }, shopCost: 4 },
  { id: "bonus_good_reputation", name: "好口碑", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/07_good_weather.png", desc: "瞬間：民心 +1、幸運值 +1。下次受到攻擊時，傷害 -1。", effect: { publicSupport: 1, luck: 1 }, shopCost: 3 },
  { id: "bonus_social_share", name: "社群轉發", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/08_volunteers_arrive.png", desc: "瞬間：觀光 +2、幸運值 +1。回合結束若沒增加文化，文化 -1。", effect: { tourism: 2, luck: 1 }, shopCost: 4 },
  { id: "bonus_elder_help", name: "長輩幫忙", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/09_small_luck.png", desc: "瞬間：文化 +1、民心 +1。延時：下次文化錯誤類攻擊無效。", effect: { culture: 1, publicSupport: 1 }, shopCost: 3 },
  { id: "bonus_temp_work_crew", name: "臨時工班", cost: 0, type: "Utility", rarity: "普通", image: "../card_bank/bonus_cards/images/10_grant_funding.png", desc: "瞬間：技術 +2。延時：下次維修類攻擊少扣錢 2。", effect: { tech: 2 }, shopCost: 3 },
  { id: "bonus_student_idea", name: "學生創意", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/11_bonus_extra_01.png", desc: "學生提出新點子，文化、觀光與幸運都增加。", effect: { luck: 1, culture: 1, tourism: 1 }, shopCost: 5 },
  { id: "bonus_media_exposure", name: "媒體曝光", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/12_bonus_extra_02.png", desc: "觀光 +3，但人潮壓力也會上升。", effect: { tourism: 3 }, shopCost: 5 },
  { id: "bonus_charity_donation", name: "公益捐款", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/13_bonus_extra_03.png", desc: "錢 +2、民心 +2。第一次文化或生態提升時額外 +1。", effect: { money: 2, publicSupport: 2 }, shopCost: 5 },
  { id: "bonus_traffic_overtime", name: "交通加班", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/14_bonus_extra_04.png", desc: "瞬間：觀光 +1、效率 +2。延時：下次交通攻擊無效。", effect: { tourism: 1, efficiency: 2 }, shopCost: 5 },
  { id: "bonus_environment_bonus", name: "環境加分", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/15_bonus_extra_05.png", desc: "瞬間：生態 +2、幸運值 +1。延時：下次生態攻擊，傷害 -2。", effect: { ecology: 2, luck: 1 }, shopCost: 5 },
  { id: "bonus_business_coop", name: "商圈合作", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/16_bonus_extra_06.png", desc: "瞬間：錢 +2、人口 +1。延時：2 回合內，每回合錢 +1。", effect: { money: 2, population: 1 }, shopCost: 5 },
  { id: "bonus_mysterious_helper", name: "神奇貴人", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/17_bonus_extra_07.png", desc: "瞬間：幸運值 +3。延時：可選一次：擺地攤 / 金額加倍 / 抽 2 選 1。", effect: { luck: 3 }, shopCost: 5 },
  { id: "bonus_success_event", name: "大成功", cost: 0, type: "Utility", rarity: "史詩", image: "../card_bank/bonus_cards/images/18_bonus_extra_08.png", desc: "瞬間：錢 +2、幸運值 +2、人口 +1。延時：本回合以五分加分效率 +1。", effect: { money: 2, luck: 2, population: 1 }, shopCost: 6 },
  { id: "bonus_ancestors_protect", name: "祖先保佑", cost: 0, type: "Utility", rarity: "稀有", image: "../card_bank/bonus_cards/images/19_bonus_extra_09.png", desc: "瞬間：幸運值 +2、民心 +2。延時：下次文化或衝突，1 傷害轉文化 +1。", effect: { luck: 2, publicSupport: 2 }, shopCost: 5 },
  { id: "bonus_full_house_actual", name: "爆棚人氣", cost: 0, type: "Utility", rarity: "史詩", image: "../card_bank/bonus_cards/images/20_bonus_extra_10.png", desc: "瞬間：觀光 +4、收入 +2。延時：百位數算人潮，有動線/接駁/分流站可免。", effect: { tourism: 4, income: 2 }, shopCost: 6 },
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

const eventCards = [];

const rawSampleCards = [
  ...communityMainCards,
  ...buildCards,
  ...functionCards,
  ...bonusCards,
  ...attackCards,
  ...defenseCards,
  ...trapCards,
  ...eventCards,
];

const sampleCards = rawSampleCards.filter((card) => Boolean(card.image));

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
