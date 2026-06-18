from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import (
    BaseDocTemplate,
    Frame,
    PageTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path("D:/Codex/home_community_battle")
DOC_DIR = ROOT / "doc"
FONT_PATH = Path("C:/Windows/Fonts/NotoSansTC-VF.ttf")
FONT_NAME = "NotoSansTC"
pdfmetrics.registerFont(TTFont(FONT_NAME, str(FONT_PATH)))

ACCENT = colors.HexColor("#2E74B5")
DARK = colors.HexColor("#1F4D78")
INK = colors.HexColor("#17324A")
MUTED = colors.HexColor("#506070")
FILL = colors.HexColor("#E8EEF5")
LIGHT = colors.HexColor("#F4F6F9")
CALLOUT = colors.HexColor("#FFF7D6")


styles = getSampleStyleSheet()
styles.add(ParagraphStyle("CoverTitle", fontName=FONT_NAME, fontSize=22, leading=28, alignment=TA_CENTER, textColor=DARK, spaceAfter=8))
styles.add(ParagraphStyle("SubTitle", fontName=FONT_NAME, fontSize=11, leading=16, alignment=TA_CENTER, textColor=MUTED, spaceAfter=16))
styles.add(ParagraphStyle("H1X", fontName=FONT_NAME, fontSize=15, leading=20, textColor=ACCENT, spaceBefore=14, spaceAfter=8))
styles.add(ParagraphStyle("H2X", fontName=FONT_NAME, fontSize=12, leading=17, textColor=DARK, spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle("BodyX", fontName=FONT_NAME, fontSize=10, leading=15, textColor=INK, spaceAfter=6, wordWrap="CJK"))
styles.add(ParagraphStyle("SmallX", fontName=FONT_NAME, fontSize=8.5, leading=12.5, textColor=INK, wordWrap="CJK"))
styles.add(ParagraphStyle("HeaderCell", fontName=FONT_NAME, fontSize=9, leading=12, textColor=DARK, alignment=TA_CENTER, wordWrap="CJK"))
styles.add(ParagraphStyle("Cell", fontName=FONT_NAME, fontSize=8.2, leading=11.8, textColor=INK, wordWrap="CJK"))


def p(text, style="BodyX"):
    return Paragraph(str(text).replace("\n", "<br/>"), styles[style])


def bullet(text):
    return Paragraph(f"• {text}", styles["BodyX"])


def numbered(index, text):
    return Paragraph(f"{index}. {text}", styles["BodyX"])


def table(headers, rows, widths):
    data = [[p(h, "HeaderCell") for h in headers]]
    data.extend([[p(cell, "Cell") for cell in row] for row in rows])
    t = Table(data, colWidths=widths, repeatRows=1, hAlign="CENTER")
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), FILL),
        ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#C7D2FE")),
        ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
        ("LEFTPADDING", (0, 0), (-1, -1), 6),
        ("RIGHTPADDING", (0, 0), (-1, -1), 6),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
    ]))
    return t


def callout(title, body):
    t = Table([[p(f"<b>{title}</b><br/>{body}", "BodyX")]], colWidths=[6.45 * inch])
    t.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, -1), CALLOUT),
        ("BOX", (0, 0), (-1, -1), 0.6, colors.HexColor("#F2B84B")),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 8),
        ("TOPPADDING", (0, 0), (-1, -1), 7),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 7),
    ]))
    return t


def on_page(canvas, doc):
    canvas.saveState()
    canvas.setFont(FONT_NAME, 8)
    canvas.setFillColor(MUTED)
    canvas.drawCentredString(letter[0] / 2, 0.45 * inch, f"愛我家鄉・社區營造大作戰｜第 {doc.page} 頁")
    canvas.restoreState()


def build_pdf(filename, title, subtitle, story):
    path = DOC_DIR / filename
    doc = BaseDocTemplate(
        str(path),
        pagesize=letter,
        leftMargin=1 * inch,
        rightMargin=1 * inch,
        topMargin=0.82 * inch,
        bottomMargin=0.78 * inch,
    )
    frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="normal")
    doc.addPageTemplates([PageTemplate(id="main", frames=[frame], onPage=on_page)])
    full_story = [p(title, "CoverTitle"), p(subtitle, "SubTitle"), *story]
    doc.build(full_story)
    return path


def lesson_story():
    story = [
        callout("教學定位", "以社區營造放置型攻防卡牌遊戲，引導學生在收入、觀光、文化、生態、民心與效率之間做取捨。"),
        Spacer(1, 10),
        p("一、課程基本資料", "H1X"),
        table(["項目", "內容"], [
            ["領域/科目", "社會領域，亦可跨國語、綜合活動、資訊教育"],
            ["年級建議", "國小四年級為核心，可延伸至五下區域互動、六年級公共參與與多元文化"],
            ["節數", "2 節課，每節 40 分鐘；可擴充為 3-4 節專題課"],
            ["教學媒材", "大螢幕或互動白板、遊戲首頁、學生任務單、教師觀察紀錄表"],
            ["遊戲時間", "建議 30 分鐘一局，保留 10 分鐘整理與反思"],
        ], [1.55 * inch, 4.9 * inch]),
        p("二、108 課綱對應", "H1X"),
        table(["面向", "對應精神", "本遊戲中的學習表現"], [
            ["核心素養", "自主行動、溝通互動、社會參與", "學生在有限資源下規劃社區，與同儕攻防、協商、反思公共生活。"],
            ["學習表現", "理解與思辨、態度與價值、實作與參與", "判讀地方特色、評估成本與風險、選擇防禦或預防策略。"],
            ["學習內容", "家鄉特色、地方發展、公共生活、環境與文化保存", "主題卡代表地方特色；攻擊卡代表發展問題；防禦卡代表治理方法。"],
            ["議題融入", "環境教育、多元文化教育、戶外教育、資訊教育", "學生理解過度觀光、文化誤讀、生態破壞與媒體宣傳的影響。"],
        ], [1.1 * inch, 1.85 * inch, 3.5 * inch]),
        p("三、學習目標", "H1X"),
        *[bullet(x) for x in [
            "能說明至少一種家鄉特色如何被整理成社區主題。",
            "能判斷社區營造需要花費錢、人力、時間與技術等資源。",
            "能在觀光、收入、文化、生態、民心與效率之間做平衡決策。",
            "能解釋攻擊事件背後的社區問題，並選擇適當防禦或預防策略。",
            "能根據遊戲結局星芒圖，說出自己策略的優點與可改進方向。",
        ]],
        p("四、教學流程", "H1X"),
        table(["階段", "時間", "教師活動", "學生活動", "評量重點"], [
            ["引起動機", "5 分", "展示首頁地圖，提問：家鄉變熱鬧一定是好事嗎？", "分享旅遊、夜市、廟會、老街或特產經驗。", "能提出地方發展的優缺點。"],
            ["規則導入", "8 分", "說明主題卡、營運卡、攻擊、防禦、陷阱、加成與商店。", "觀察卡牌圖像，猜測卡牌可能代表的社區問題。", "能分辨卡牌類型與基本用途。"],
            ["遊戲實作", "30 分", "設定玩家與 AI，提醒每回合做決策並觀察人流。", "輪流放牌、攻擊、防禦、購買卡牌與收成。", "能依狀態選擇策略，不只追求單一分數。"],
            ["結局分析", "10 分", "開啟結束分析、星芒圖與獎狀。", "閱讀自己的強項，找出一項失衡風險。", "能連結策略結果與 108 課綱能力。"],
            ["反思分享", "7 分", "引導：如果再玩一次，你會先保護哪一個指標？", "完成一句反思並分享。", "能提出具體調整策略。"],
        ], [0.8 * inch, 0.55 * inch, 1.75 * inch, 1.75 * inch, 1.6 * inch]),
        p("五、評量規準", "H1X"),
        table(["項目", "4 分", "3 分", "2 分", "1 分"], [
            ["認識家鄉特色", "能連結主題卡與地方故事", "能說出主題卡代表的特色", "只知道卡名，說明不足", "無法說明特色"],
            ["成本與資源判斷", "能平衡錢、人力、時間、技術", "能注意至少兩種成本", "偶爾注意成本", "只看分數或圖像"],
            ["公共生活與永續", "能兼顧民心、文化、生態", "能注意其中兩項", "只注意其中一項", "忽略公共影響"],
            ["問題解決", "能用防禦/陷阱預防危機", "遇攻擊能選擇處理", "需要提醒才處理", "無法提出處理方式"],
        ], [1.25 * inch, 1.3 * inch, 1.3 * inch, 1.3 * inch, 1.3 * inch]),
    ]
    return story


def manual_story():
    story = [
        callout("一句話玩法", "你是社區營造小隊，要讓家鄉更有特色、更多人來玩，也不能把居民生活、文化與環境弄壞。"),
        Spacer(1, 10),
        p("一、你要做什麼？", "H1X"),
        *[bullet(x) for x in ["讓家鄉被看見：提高觀光、文化、收入。", "讓家鄉住得下去：照顧生態、民心、效率。", "保護自己的社區：遇到攻擊時用防禦或陷阱。", "看懂自己的策略：遊戲結束會看到星芒圖和獎狀。"]],
        p("二、畫面上有什麼？", "H1X"),
        table(["區域", "你可以做的事"], [
            ["桌牌區", "看自己和其他玩家放了哪些攻擊、防禦、加成牌；點擊可放大整理。"],
            ["手牌區", "看自己手上最多 5 張牌；點牌可放大閱讀，再決定要不要出牌。"],
            ["地方主題", "S1-S3 是重要的地方主題區，主題卡會幫你賺點數與帶來人潮。"],
            ["卡牌商店", "用點數買卡牌；主題卡很稀有，第一次購買比較便宜。"],
            ["玩家資訊", "看生命值、護甲、能量、點數、現金流、本月觀光人潮。"],
        ], [1.5 * inch, 4.95 * inch]),
        p("三、卡牌怎麼用？", "H1X"),
        table(["卡牌", "放哪裡", "效果"], [
            ["主題卡", "S1-S3", "讓社區開始營運，增加點數、現金流和人潮。"],
            ["營運/加成卡", "加成區", "讓你的社區更會賺、更受歡迎或比較安全。"],
            ["攻擊卡", "指定別人", "讓對手遇到問題，例如爆量、髒亂、破財、文化誤讀。"],
            ["防禦卡", "防禦區", "先覆蓋起來，被攻擊時可能會幫你擋住危機。"],
            ["陷阱卡", "加成/陷阱區", "事前準備，等事件發生時反制。"],
        ], [1.2 * inch, 1.2 * inch, 4.05 * inch]),
        p("四、輪到你時怎麼玩？", "H1X"),
        *[numbered(i + 1, x) for i, x in enumerate(["先看右邊玩家資訊：生命值、點數、現金流、本月人潮。", "點手牌，看清楚每張牌的功能。", "如果有主題卡，可以放到 S1-S3，讓家鄉開始營運。", "想保護自己，可以放防禦卡或陷阱卡。", "想影響對手，可以選攻擊卡，再指定要攻擊哪一位玩家。", "如果手牌卡住，可以在自己的回合棄牌換牌。", "完成後按結束回合，換下一位玩家或 AI 行動。"])],
        p("五、小提醒", "H1X"),
        *[bullet(x) for x in ["觀光太高可能會塞爆、髒亂或被居民抱怨。", "只賺錢但不顧文化，家鄉會變得沒有故事。", "民心太低，很多事情都推不動。", "防禦卡雖然是覆蓋牌，但很重要。", "不要只看誰分數最高，要看誰能平衡發展。"]],
    ]
    return story


def teacher_story():
    story = [
        callout("教師角色", "教師不是只講規則，而是把學生的出牌選擇轉成社會領域討論：為什麼這樣發展？誰受益？誰承擔成本？如何避免失衡？"),
        Spacer(1, 10),
        p("一、課前準備", "H1X"),
        table(["準備項目", "建議做法"], [
            ["設備", "使用大螢幕、互動白板或投影；建議全螢幕開啟 GitHub Pages 首頁。"],
            ["座位", "四人一局最佳；若人數不足可用 AI 代玩。"],
            ["時間", "一局 30 分鐘，另留 10 分鐘結局分析與討論。"],
            ["角色分工", "可指定一位記錄員、一位規則提醒員、一位策略發言人。"],
            ["教學焦點", "本課重點不是贏牌，而是看見社區發展取捨。"],
        ], [1.55 * inch, 4.9 * inch]),
        p("二、課中提問句", "H1X"),
        table(["時機", "教師可問"], [
            ["學生放主題卡", "這個地方特色是文化、產業、生態、信仰，還是觀光打卡？"],
            ["學生只衝觀光", "人變多以後，垃圾、交通、居民生活會怎麼樣？"],
            ["學生攻擊他人", "這張攻擊卡在真實社區中像什麼問題？誰需要處理？"],
            ["學生防禦成功", "這張防禦卡代表哪一種公共治理方法？"],
            ["學生陷入危機", "現在最該先救的是錢、人流、文化、生態，還是民心？為什麼？"],
            ["結局分析", "你的星芒圖哪一項最強？哪一項下次要補？"],
        ], [1.55 * inch, 4.9 * inch]),
        p("三、教師觀察紀錄", "H1X"),
        table(["觀察面向", "可記錄的學生行為", "對應能力"], [
            ["認識家鄉", "能說出主題卡代表的地方特色與故事。", "家鄉特色理解"],
            ["成本判斷", "放牌前會看點數、現金流、人力或風險。", "資源與效率判斷"],
            ["公共生活", "會在攻擊或人潮過高時想到居民感受。", "公共參與與民心"],
            ["永續思考", "會避免文化、生態或民心被犧牲。", "環境與文化保存"],
            ["問題解決", "能用防禦、陷阱或換牌處理危機。", "策略調整"],
        ], [1.3 * inch, 3.2 * inch, 1.95 * inch]),
        p("四、常見狀況處理", "H1X"),
        table(["狀況", "教師處理方式"], [
            ["學生一直攻擊別人", "提醒攻擊也會造成自己烏雲與人流流失，引導討論衝突的成本。"],
            ["學生只買強牌", "請學生說明這張牌如何幫助社區，而不只是看分數。"],
            ["學生看不懂卡牌", "請他先點卡牌放大，再用一句話說出卡牌代表的社區問題。"],
            ["時間不夠", "可直接按結束遊戲進入分析與獎狀，保留反思時間。"],
            ["AI 太快或太亂", "把 AI 當成不同個性的同學，讓學生觀察其策略差異。"],
        ], [1.75 * inch, 4.7 * inch]),
        p("五、評量與回饋建議", "H1X"),
        *[bullet(x) for x in ["不要只用輸贏評分，應看學生是否能說出策略理由。", "可用結局星芒圖當作學生自評起點，而非唯一成績。", "課後可請學生寫下：我做了什麼、造成什麼問題、下次怎麼調整。", "獎狀可作為正向回饋，重點放在努力與理解，而不是只獎第一名。"]],
    ]
    return story


def main():
    outputs = [
        build_pdf("愛我家鄉_108課綱模式教案.pdf", "愛我家鄉：社區營造大作戰 108 課綱模式教案", "適用國小中高年級社會領域｜大螢幕四人攻防卡牌遊戲", lesson_story()),
        build_pdf("愛我家鄉_玩家操作手冊_小學生版.pdf", "愛我家鄉 玩家操作手冊", "寫給小學生看的大螢幕遊戲說明", manual_story()),
        build_pdf("愛我家鄉_教師教學指引.pdf", "愛我家鄉 教師教學指引", "課前準備、課中引導、課後評量與常見狀況處理", teacher_story()),
    ]
    for path in outputs:
        reader = PdfReader(str(path))
        print(f"{path} pages={len(reader.pages)}")


if __name__ == "__main__":
    main()
