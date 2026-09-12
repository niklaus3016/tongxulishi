import { Emperor } from '../types';

export const EMPERORS: Emperor[] = [
  // === 秦朝 ===
  {
    id: 'qin-shihuang',
    dynastyId: 'qin',
    dynastyName: '秦朝',
    name: '嬴政',
    templeName: '无 (秦法不设庙号)',
    posthumousName: '始皇帝',
    reignName: '无 (尚未创年号)',
    reignPeriod: '前247 — 前210 (前221称帝)',
    reignYears: 37,
    lifespan: '50岁 (前259 — 前210)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王', '盛世明君'],
    overview: '千古一帝，中国历史上第一位大一统皇帝。他灭六国一统华夏，彻底废分封立郡县，统一度量衡、货币与文字，修筑万里长城与驰道，奠定中国两千多年大一统国家基本格局。',
    achievements: [
      '十年奋战扫灭韩赵魏楚燕齐六国，结束春秋战国五百余年割据纷争',
      '确立皇帝制度与三公九卿中央官制，在全国彻底推行郡县制',
      '推行“车同轨、书同文、行同伦”，统一度量衡与圆形方孔秦半两钱',
      '北击匈奴收复河南地并修筑万里长城，南征百越凿灵渠设郡县'
    ],
    flaws: [
      '好大喜功，频繁滥征天下徭役兵役修建阿房宫、骊山陵墓与长城',
      '严刑苛法，实行连坐与告奸制度，焚书坑儒摧残学术思想与文化典籍'
    ],
    anecdotes: ['荆轲刺秦王图穷匕见', '徐福东渡寻长生不老药', '博浪沙张良铁椎刺秦'],
    historicalEvaluation: '明代李贽赞其为“千古一帝”。功盖三皇，德高五帝；虽有焚书酷刑之过，但其开拓之大一统制度与书轨规制，历代皆承秦制。'
  },
  {
    id: 'qin-erzhi',
    dynastyId: 'qin',
    dynastyName: '秦朝',
    name: '胡亥',
    templeName: '无',
    posthumousName: '二世皇帝',
    reignName: '无',
    reignPeriod: '前210 — 前207',
    reignYears: 3,
    lifespan: '23岁 (前230 — 前207)',
    generationLevel: 2,
    lineageParentId: 'qin-shihuang',
    lineageType: 'son',
    tags: ['亡国之君', '争议君王'],
    overview: '秦朝第二任皇帝。沙丘之变中与赵高、李斯合谋篡改遗诏逼死长兄扶苏与大将蒙恬夺位。在位期间极端荒淫残暴，宠信赵高指鹿为马，终致天下起义秦朝覆灭。',
    achievements: ['巡视天下郡县，续立泰山、碣石石刻纪功'],
    flaws: [
      '弑兄屠妹，诛杀公子十二人、公主十人，残害李斯等辅政忠良大臣',
      '赵高当道专权“指鹿为马”，不问政事穷奢极欲，横征暴敛激起大泽乡起义'
    ],
    anecdotes: ['沙丘之变篡诏夺位', '赵高指鹿为马试探群臣', '望夷宫之变被赵高心腹阎乐逼令自刎'],
    historicalEvaluation: '司马迁《史记》评：“胡亥极愚，乘二世之资，遂任凶狡，自速天亡。”是昏暴断送祖宗基业的反面典型。'
  },

  // === 汉朝 ===
  {
    id: 'han-gaozu',
    dynastyId: 'west-han',
    dynastyName: '西汉',
    name: '刘邦',
    templeName: '汉太祖 (通称汉高祖)',
    posthumousName: '高皇帝',
    reignName: '无',
    reignPeriod: '前202 — 前195',
    reignYears: 8,
    lifespan: '62岁 (前256 — 前195)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王', '盛世明君'],
    overview: '西汉开国皇帝，布衣起兵得天下的杰出政治家与军事指挥家。善于纳谏知人善任，重用萧何、张良、韩信“汉初三杰”，楚汉争霸击败西楚霸王项羽，建立雄浑大汉帝国。',
    achievements: [
      '率先率军入关灭秦，进入咸阳“约法三章”，尽收关中父老民心',
      '高瞻远瞩拜韩信为大将，楚汉战争逆境翻盘，垓下之战彻底击败项羽',
      '休养生息，轻徭薄赋，制定《九章律》，确立白马之盟非刘氏不得王'
    ],
    flaws: [
      '晚年对韩信、彭越、英布等异姓诸侯王猜忌残杀，翦除功臣过甚',
      '亲征匈奴在平城白登山被匈奴四十万骑兵围困七日，被迫行和亲岁币'
    ],
    anecdotes: ['沛县芒砀山斩白蛇起义', '鸿门宴斗智脱险', '大风起兮云飞扬威加海内兮归故乡'],
    historicalEvaluation: '毛泽东称赞其为“封建皇帝里边最厉害的一个”。从沛县泗水亭长提三尺剑取天下，知人善任豁达大度，奠定汉家四百年基业。'
  },
  {
    id: 'han-wudi',
    dynastyId: 'west-han',
    dynastyName: '西汉',
    name: '刘彻',
    templeName: '汉世宗',
    posthumousName: '武皇帝',
    reignName: '建元、元朔、元狩、天汉等 (首创年号)',
    reignPeriod: '前141 — 前87',
    reignYears: 54,
    lifespan: '70岁 (前156 — 前87)',
    generationLevel: 4,
    lineageType: 'descendant',
    tags: ['盛世明君'],
    overview: '西汉第七位皇帝，雄才大略、开拓版图的一代雄主。采纳主父偃“推恩令”和平解决诸侯王国分裂隐患；采纳董仲舒“罢黜百家，独尊儒术”；任用卫青、霍去病封狼居胥破匈奴；遣张骞凿空西域。',
    achievements: [
      '颁行“推恩令”并设十三州部刺史，彻底解决汉初封国割据隐患，中央集权大巩固',
      '任用卫青霍去病出击漠北，“匈奴远遁，漠南无王庭”，收复河套与河西走廊',
      '采纳董仲舒建议“罢黜百家，独尊儒术”，确立儒学为国家正统主流思想',
      '派遣张骞两次出使西域开辟“丝绸之路”，设置酒泉、张掖、敦煌、武威河西四郡'
    ],
    flaws: [
      '连年穷兵黩武，致“海内虚耗，户口减半”；晚年巫蛊之祸逼死戾太子刘据与卫子夫',
      '崇信方士迷信神仙，严刑峻法，滥用酷吏'
    ],
    anecdotes: ['金屋藏娇陈阿娇', '首创中国历史年号“建元”', '轮台罪己诏幡然悔悟反思农耕'],
    historicalEvaluation: '司马迁在《汉书》评其“雄才大略”。汉武帝奠定中国疆域与“汉”民族之魂；晚年下《轮台罪己诏》罢兵屯田，善始善终保全汉祚。'
  },
  {
    id: 'han-guangwu',
    dynastyId: 'east-han',
    dynastyName: '东汉',
    name: '刘秀',
    templeName: '汉世祖',
    posthumousName: '光武皇帝',
    reignName: '建武、中元',
    reignPeriod: '25 — 57',
    reignYears: 32,
    lifespan: '63岁 (前5 — 57)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王', '中兴之主', '盛世明君'],
    overview: '东汉开国皇帝，光武中兴的开创者。昆阳之战以弱胜强三千破四十二万王莽军神话；称帝后平定陇右西蜀一统天下。善待云台二十八将功臣，轻徭薄赋退功臣进文吏，史称“风化最美”。',
    achievements: [
      '昆阳之战挽狂澜于既倒，彻底击溃新莽百万精锐主力',
      '定都洛阳重建汉室，裁撤冗员减免赋役三十税一，释放大量奴婢',
      '以柔道治国，善待开国云台二十八将功臣无一人获罪诛戮，退功臣进文吏',
      '度田整顿土地户籍，使东汉人口由战乱千万人恢复至三千余万'
    ],
    flaws: ['度田改革遭遇地方豪强世族顽强抵抗后妥协，为东汉后期豪族膨胀埋下隐患'],
    anecdotes: ['仕宦当作执金吾，娶妻当得阴丽华', '昆阳城下流星陨营破敌奇迹', '披荆斩棘冯异大树将军'],
    historicalEvaluation: '司马光《资治通鉴》赞：“光武提孤剑破百万之师，取天下如拾芥，自古中兴之盛，无过于此。”'
  },

  // === 三国与隋朝 ===
  {
    id: 'sui-wen',
    dynastyId: 'sui',
    dynastyName: '隋朝',
    name: '杨坚',
    templeName: '隋高祖',
    posthumousName: '文皇帝',
    reignName: '开皇、仁寿',
    reignPeriod: '581 — 604',
    reignYears: 24,
    lifespan: '64岁 (541 — 604)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王', '盛世明君'],
    overview: '隋朝开国皇帝，终结中国近400年魏晋南北朝大分裂的伟大君主。开创“开皇之治”，首创三省六部制与科举制度取士，营建大兴城，编纂《开皇律》，使天下仓廪充盈人口大增。',
    achievements: [
      '渡江灭南朝陈，结束自西晋永嘉之乱以来近四百年分裂，重塑华夏大一统',
      '首创三省六部制并颁布《开皇律》，废除九品中正制创立科举制度雏形',
      '大修含嘉仓、广通仓等巨型粮仓，开皇盛世户口达八百九十万户',
      '大败突厥，突厥各部尊杨坚为“圣人可汗”'
    ],
    flaws: ['晚年猜忌多疑，严酷苛察，听信独孤皇后与杨素之谗言废长立幼改立杨广'],
    anecdotes: ['惧内独孤皇后誓不纳妾', '开皇之治仓廪粮食五十年不腐', '营造大兴城万世之都'],
    historicalEvaluation: '西方学者迈克尔·哈特所著《影响人类历史进程的100位名人》中位列前茅。结束漫长乱世，开创科举制度与中央制度典范。'
  },

  // === 唐朝 ===
  {
    id: 'tang-gaozu',
    dynastyId: 'tang',
    dynastyName: '唐朝',
    name: '李渊',
    templeName: '唐高祖',
    posthumousName: '神尧大圣大光孝皇帝',
    reignName: '武德',
    reignPeriod: '618 — 626',
    reignYears: 8,
    lifespan: '70岁 (566 — 635)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王'],
    overview: '唐朝开国皇帝。太原起兵反隋，迅速直取长安拥立杨侑后受禅称帝。统筹全局运筹帷幄，任用李世民、李孝恭等平定王世充、窦建德、薛仁杲、萧铣等割据群雄，奠定大唐一统基业。',
    achievements: [
      '审时度势太原首义，百日破长安称帝建唐',
      '平定全国群雄混战一统江山，确立唐初三省六部与府兵制度',
      '颁行“五铢钱”改革铸造“开元通宝”，确立中国古代钱币宝文制度',
      '颁布《武德律》与均田制租庸调法'
    ],
    flaws: ['在继承人问题上犹豫不决，导致太子李建成与秦王李世民水火不容酿成玄武门兵变'],
    anecdotes: ['太原起兵首义神断', '开元通宝欧阳询题字', '玄武门变被迫退位禅让太上皇'],
    historicalEvaluation: '近代史学界为其平反，指出高祖绝非碌碌平庸之辈，而是兼具战略眼光与政治魄力的成熟开国雄主。'
  },
  {
    id: 'tang-taizong',
    dynastyId: 'tang',
    dynastyName: '唐朝',
    name: '李世民',
    templeName: '唐太宗',
    posthumousName: '文武大圣大广孝皇帝',
    reignName: '贞观',
    reignPeriod: '626 — 649',
    reignYears: 23,
    lifespan: '52岁 (598 — 649)',
    generationLevel: 2,
    lineageParentId: 'tang-gaozu',
    lineageType: 'son',
    tags: ['盛世明君', '开国帝王'],
    overview: '中国历史上公认的古代封建帝王典范。军事上平灭薛仁杲、刘武周、王世充、窦建德军功盖世；在位期间虚怀纳谏任人唯贤（魏徵、房玄龄、杜如晦），开创“贞观之治”，被各少数民族尊为“天可汗”。',
    achievements: [
      '任人唯贤虚己纳谏，容忍诤臣魏徵犯颜直谏二百余次，房谋杜断成君臣知遇美谈',
      '推行均田制租庸调，轻徭薄赋劝课农桑，夜不闭户道不拾遗天下大治',
      '击灭东突厥生擒颉利可汗，设安西都护府，各民族各首领拜长安尊奉“天可汗”',
      '完善科举制扩充进士科，“天下英雄入吾彀中矣”；促进文成公主入藏汉藏和亲'
    ],
    flaws: ['晚年亲征高句丽虽胜未能彻底平定；晚年诸子夺嫡争位（李承乾、李泰）引忧思'],
    anecdotes: ['以铜为镜正衣冠，以人为镜明得失', '昭陵六骏战马浮雕', '天下英雄入吾彀中矣'],
    historicalEvaluation: '《旧唐书》赞：“文武并用，大略兼优。天作高山，大王荒之。”政治清明、民族融合、文化繁荣的古代治世最高标杆。'
  },
  {
    id: 'wu-zetian',
    dynastyId: 'tang',
    dynastyName: '唐朝 (武周)',
    name: '武曌 (武则天)',
    templeName: '周则天大圣皇帝 / 称帝后还政唐中宗',
    posthumousName: '则天顺圣皇后',
    reignName: '载初、天授、如意、长寿、延载、神功、长安等',
    reignPeriod: '690 — 705 (称帝15年，摄政共近半个世纪)',
    reignYears: 15,
    lifespan: '82岁 (624 — 705)',
    lineageType: 'usurper',
    tags: ['盛世明君', '争议君王'],
    overview: '中国历史上唯一被正史普遍承认的正统女皇帝。改国号为周，定都洛阳神都。打破关陇门阀垄断，首创科举“殿试”与武举，广开言路唯才是举（狄仁杰、张柬之、姚崇）。上承贞观下启开元。',
    achievements: [
      '开创殿试制度、武举制度与考卷糊名法，破格提拔寒门寒士打击门阀贵族',
      '识拔重用狄仁杰、姚崇、宋璟、娄师德等经邦济世贤臣良相',
      '重视农桑水利减轻赋税，人口从唐初三百八十万户增至六百一十五万户',
      '收复安西四镇，稳固西域疆土并设北庭都护府'
    ],
    flaws: [
      '初期为巩固帝位大兴酷吏政治（周兴、来俊臣），大肆杀戮唐宗室李氏宗亲大臣',
      '晚年生活奢靡崇信张易之、张昌宗男宠兄弟，导致朝政动荡引发神龙政变'
    ],
    anecdotes: ['请君入瓮惩酷吏', '自创“曌”字日月当空', '乾陵前立无字碑任由后人评说'],
    historicalEvaluation: '郭沫若先生题词：“政启开元，治宏贞观；芳流剑阁，光被利州。”承前启后功绩卓著，乾陵无字碑更显豁达气度。'
  },
  {
    id: 'tang-xuanzong',
    dynastyId: 'tang',
    dynastyName: '唐朝',
    name: '李隆基',
    templeName: '唐玄宗',
    posthumousName: '至道大圣大明孝皇帝',
    reignName: '先天、开元、天宝',
    reignPeriod: '712 — 756',
    reignYears: 44,
    lifespan: '78岁 (685 — 762)',
    generationLevel: 5,
    lineageType: 'descendant',
    tags: ['盛世明君', '亡国之君', '争议君王'],
    overview: '大唐由盛转衰的关键帝王。前期励精图治任用姚崇、宋璟、张九龄，开创极盛“开元盛世”，人口与经济达封建社会顶峰；后期怠政专宠杨贵妃，任用李林甫、杨国忠，宠信安禄山酿成安史之乱。',
    achievements: [
      '前期锐意图新整顿吏治，精选刺史县令，崇俭黜奢开创盛唐“开元盛世”',
      '设立十节度使以防边患，疆域拓展与国际文化交流登峰造极',
      '精通音律雅好辞赋，创办“梨园”被后世尊奉为戏曲祖师'
    ],
    flaws: [
      '后期改元天宝怠政享乐专宠杨玉环，“一骑红尘妃子笑”',
      '李林甫口蜜腹剑杜绝言路，任安禄山兼任范阳等三镇节度使酿成安史之乱浩劫',
      '马嵬驿兵变仓皇逃蜀，大唐从此一蹶不振沦入藩镇割据'
    ],
    anecdotes: ['霓裳羽衣曲天籁之音', '口蜜腹剑李林甫', '马嵬坡长恨歌杨贵妃'],
    historicalEvaluation: '前半生堪称英明圣主，后半生极度昏聩自误。杜甫诗云：“忆昔开元全盛日，小邑犹藏万家室”，后世叹其功过参半、毁誉交织。'
  },

  // === 宋朝 ===
  {
    id: 'song-taizu',
    dynastyId: 'north-song',
    dynastyName: '北宋',
    name: '赵匡胤',
    templeName: '宋太祖',
    posthumousName: '启运立极英武睿文神德圣功至明大孝皇帝',
    reignName: '建隆、乾德、开宝',
    reignPeriod: '960 — 976',
    reignYears: 16,
    lifespan: '50岁 (927 — 976)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王', '盛世明君'],
    overview: '北宋开国皇帝。后周殿前都检点，陈桥兵变黄袍加身和平代周建宋。通过“杯酒释兵权”解除节度使军权，确立崇文抑武祖训，使中国彻底终结唐末五代百余年藩镇割据与军阀干政恶疾。',
    achievements: [
      '陈桥兵变不流血和平更迭政权，革除五代武夫乱政血腥旧弊',
      '两次“杯酒释兵权”以和平赏赐换取宿将交出兵权，收地方精兵归中央禁军',
      '推行“重文轻武”国策，立“不杀士大夫及言事者”石刻誓碑，缔造宋代士大夫黄金时代',
      '制定“先南后北”战略平定荆南、武平、后蜀、南汉、南唐诸割据政权'
    ],
    flaws: [
      '更戍法与兵将分离导致宋朝军队战斗力日趋羸弱，“积贫积弱”伏笔早埋',
      '未能收复燕云十六州，中原无险可守受辽朝与北方游牧政权压制'
    ],
    anecdotes: ['陈桥驿黄袍加身', '杯酒释兵权酒席化兵戈', '烛影斧声千古谜案'],
    historicalEvaluation: '《宋史》赞：“太祖聪明豁达，知人善任，文德武功，卓越千古。”终结天下五代割据惨景，开启雅致繁荣的宋代文明。'
  },
  {
    id: 'song-taizong',
    dynastyId: 'north-song',
    dynastyName: '北宋',
    name: '赵光义 (赵炅)',
    templeName: '宋太宗',
    posthumousName: '至仁应道神功圣德文武睿烈大明广孝皇帝',
    reignName: '太平兴国、雍熙、端拱、淳化、至道',
    reignPeriod: '976 — 997',
    reignYears: 21,
    lifespan: '59岁 (939 — 997)',
    generationLevel: 2,
    lineageParentId: 'song-taizu',
    lineageType: 'brother',
    tags: ['盛世明君', '争议君王'],
    overview: '宋太祖之弟，北宋第二任皇帝。继位后逼降吴越钱俶、灭北汉彻底终结五代十国割据。大扩科举录取人数收揽士心，编纂《太平御览》等鸿篇巨著。但雍熙北伐惨败使宋廷转入守势。',
    achievements: [
      '出兵太原灭北汉，消灭十国最后一个割据政权，完成中原大部统一',
      '极度扩大科举取士名额（每科数百上千人），奠定两宋文官体制根基',
      '崇文兴学主持编修《太平御览》《文苑英华》《太平广记》等四大类书'
    ],
    flaws: [
      '高梁河之战中箭乘驴车狼狈南逃；雍熙北伐大败杨业战死，燕云收复无望',
      '“金匮之盟”传承合法性受后世质疑，赵德昭、赵德芳、赵廷美相继暴毙'
    ],
    anecdotes: ['高梁河驴车神亭脱逃', '开卷有益成语出处', '烛影斧声金匮之盟'],
    historicalEvaluation: '文治彪炳，武略拙劣。扩大文官选拔深刻塑造两宋文化，但军事指挥一再受挫导致宋朝在宋辽争雄中陷入永久被动。'
  },

  // === 明朝 ===
  {
    id: 'ming-taizu',
    dynastyId: 'ming',
    dynastyName: '明朝',
    name: '朱元璋',
    templeName: '明太祖',
    posthumousName: '开天行道肇纪立极大圣至神仁文义武俊德成功高皇帝',
    reignName: '洪武',
    reignPeriod: '1368 — 1398',
    reignYears: 30,
    lifespan: '71岁 (1328 — 1398)',
    generationLevel: 1,
    lineageType: 'founder',
    tags: ['开国帝王', '盛世明君'],
    overview: '明朝开国皇帝，从讨饭孤儿到一统天下的布衣皇帝传奇。鄱阳湖水战消灭陈友谅，命徐达常遇春北伐驱逐蒙古贵族恢复中华。废中书省丞相独揽大权，厉行反腐剥皮萱草，开创“洪武之治”。',
    achievements: [
      '“驱逐胡虏，恢复中华，立纲陈纪，救济斯民”，推翻元朝统治恢复汉家山河',
      '废除延续千年的丞相制度，权分六部；创设锦衣卫与卫所制',
      '雷厉风行铁腕反腐，创“剥皮实草”，贪污六十两银子即斩首弃市',
      '编制《赋役黄册》与《鱼鳞图册》清丈天下田亩，恢复农耕移民屯田'
    ],
    flaws: [
      '多疑好杀，借胡惟庸案、蓝玉案大肆兴狱株连数万人，几乎将开国功臣宿将屠戮殆尽',
      '废丞相使皇帝独断乾纲负荷过重，分封诸王拥兵边疆酿成建文朝靖难之役'
    ],
    anecdotes: ['珍珠翡翠白玉汤', '高筑墙广积粮缓称王', '微服私访查廉政'],
    historicalEvaluation: '清康熙帝南巡亲谒明孝陵题词“治隆唐宋”。以一介平民布衣手创巍巍大明，反腐安民意志之刚烈古今罕有，唯晚年嗜杀残忍为人诟病。'
  },
  {
    id: 'ming-chengzu',
    dynastyId: 'ming',
    dynastyName: '明朝',
    name: '朱棣',
    templeName: '明太宗 (明世宗改明成祖)',
    posthumousName: '启天弘道高明肇运圣武神功纯仁至孝文皇帝',
    reignName: '永乐',
    reignPeriod: '1402 — 1424',
    reignYears: 22,
    lifespan: '65岁 (1360 — 1424)',
    generationLevel: 2,
    lineageParentId: 'ming-taizu',
    lineageType: 'son',
    tags: ['盛世明君'],
    overview: '明朝第三任皇帝，永乐大帝。发动靖难之役从侄子建文帝手中夺取皇位。迁都北京开创“天子守国门”，派郑和七下西洋远达非洲，编纂《永乐大典》，五次亲征漠北，开创“永乐盛世”。',
    achievements: [
      '力排众议将大明首都由南京北迁北京，修筑紫禁城紫阙金殿，“天子守国门”',
      '派遣三宝太监郑和率领庞大宝船舰队七下西洋，开辟海上丝绸之路空前高峰',
      '召集解缙等两千余名文臣编纂《永乐大典》两万二千余卷，搜罗天下典籍',
      '五次亲征漠北瓦剌与鞑靼，巩固北方边疆；设立内阁制度辅弼政务'
    ],
    flaws: [
      '靖难入南京后残酷清算建文朝廷旧臣，方孝孺被诛十族、铁铉等惨烈殉难',
      '大兴土木与连年北伐、南征安南耗竭国库银两赋税'
    ],
    anecdotes: ['燕王装疯避大祸', '方孝孺不屈诛十族', '郑和下西洋宝船船队'],
    historicalEvaluation: '“雄武之略，同符高祖”。迁都北京定百年国本，派遣远航扬国威于海外，功业彪炳，气吞万里如虎。'
  },

  // === 清朝 ===
  {
    id: 'qing-kangxi',
    dynastyId: 'qing',
    dynastyName: '清朝',
    name: '爱新觉罗·玄烨',
    templeName: '清圣祖',
    posthumousName: '仁皇帝',
    reignName: '康熙',
    reignPeriod: '1661 — 1722',
    reignYears: 61,
    lifespan: '69岁 (1654 — 1722)',
    generationLevel: 4,
    lineageType: 'son',
    tags: ['盛世明君'],
    overview: '清朝第四任皇帝，中国历史上在位时间最长（61年）的守成雄主。少年智擒鳌拜夺回大权，平定三藩之乱，收复台湾设立府县，雅克萨之战驱逐沙俄侵略者签订《尼布楚条约》，三征准噶尔，开创“康乾盛世”。',
    achievements: [
      '十四岁智设摔跤童子勇擒专权辅政大臣鳌拜，迅速将大权收归皇帝乾纲',
      '历经八年艰苦征战平定吴三桂、耿精忠、尚之信“三藩之乱”',
      '任用施琅收复台湾并在台湾设立一府三县，永久纳入清朝行政管辖',
      '两次组织雅克萨自卫反击战击退沙俄，签订中国首份近代平等边界条约《尼布楚条约》',
      '三征噶尔丹平定漠北漠西蒙古叛乱；宣布“滋生人丁，永不加赋”'
    ],
    flaws: [
      '晚年在立储问题上反反复复，“九子夺嫡”酿成诸阿哥结党倾轧骨肉相残',
      '大兴文字狱开恶劣先例禁锢思想；虽好学西方科技但仅作皇家私好未予推广'
    ],
    anecdotes: ['智擒鳌拜于内廷', '六次南巡查视河工', '九子夺嫡血泪内争'],
    historicalEvaluation: '奠定现代中国辽阔疆域的政治巨擘。文治武功卓绝，勤政爱民，开启大清帝国一百三十余年的繁盛辉煌。'
  },
  {
    id: 'qing-qianlong',
    dynastyId: 'qing',
    dynastyName: '清朝',
    name: '爱新觉罗·弘历',
    templeName: '清高宗',
    posthumousName: '纯皇帝',
    reignName: '乾隆',
    reignPeriod: '1735 — 1795 (退位太上皇掌权至1799)',
    reignYears: 60,
    lifespan: '89岁 (1711 — 1799)',
    generationLevel: 6,
    lineageType: 'descendant',
    tags: ['盛世明君', '争议君王'],
    overview: '清朝第六任皇帝，自诩“十全老人”，中国历史上实际执政时间最长、寿命最长的帝王。平定准噶尔与大小和卓叛乱彻底定名新疆，编修《四库全书》。但晚年骄奢自大、宠信和珅，实行闭关锁国政策错失工业革命机遇。',
    achievements: [
      '彻底平定准噶尔部与大小和卓叛乱，统一天山南北并设立“新疆”，设伊犁将军统辖',
      '组织数千学者历经十余年编纂《四库全书》，收录典籍三千四百余部是古代最大丛书',
      '自夸“十全武功”，极盛期大清版图达一千三百多万平方公里，国库盈余八千万两',
      '制定“金瓶掣签”制度，强化中央政府对西藏达赖、班禅转世灵童的权威管辖'
    ],
    flaws: [
      '晚年极其自满奢靡，六下江南耗费巨万公帑，宠信第一巨贪和珅任其贪墨数亿白银',
      '借修书大肆焚毁篡改不利清廷的古代书籍，兴文字狱一百三十余起达封建巅峰',
      '实行“闭关锁国”与“一口通商”，傲慢拒绝马戛尔尼使团交流，导致中国迅速落后于西方'
    ],
    anecdotes: ['下江南微服私访民间传说', '自号十全老人作诗四万首', '富可敌国和珅跌倒嘉庆吃饱'],
    historicalEvaluation: '清朝由鼎盛走向衰败的转折枢纽。前期承雍正廉政硕果武功浩大，奠定辽阔版图；后期好大喜功闭关自守，埋下近代百年屈辱挨打的祸根。'
  },
  {
    id: 'qing-puyi',
    dynastyId: 'qing',
    dynastyName: '清朝',
    name: '爱新觉罗·溥仪',
    templeName: '无 (正史无庙号，末代皇帝)',
    posthumousName: '无',
    reignName: '宣统',
    reignPeriod: '1908 — 1912 (1917张勋复辟12天)',
    reignYears: 3,
    lifespan: '62岁 (1906 — 1967)',
    generationLevel: 12,
    lineageType: 'uncle',
    tags: ['亡国之君'],
    overview: '中国两千多年封建帝制的末代皇帝。三岁登基懵懂即位，辛亥革命爆发后隆裕太后代颁《清帝退位诏书》，宣告大清王朝及君主专制覆灭。后被日本人诱骗沦为伪满洲国傀儡皇帝，晚年获特赦成为新中国政协委员。',
    achievements: ['签署退位诏书顺应共和潮流，和平移交政权避免中原大规模生灵涂炭'],
    flaws: [
      '一心渴望复辟大清祖业，九一八事变后投靠日本侵略者出任伪满洲国执政与皇帝',
      '沦为关东军屠杀掠夺东北军民的殖民傀儡与历史罪人'
    ],
    anecdotes: ['三岁登基紫禁城玩蝈蝈', '张勋辫子军复辟十二天闹剧', '著自传《我的前半生》'],
    historicalEvaluation: '封建时代终结的悲剧活化石。从紫禁城九五之尊到伪满傀儡汉奸，最终经新中国战犯抚顺改造为普通公民与政协委员，一生见证中国近代惊天巨变。'
  }
];

export function getEmperorHighlightTitle(emp: Emperor): {
  mainTitle: string;
  personalName: string;
  fullDisplayText: string;
} {
  if (emp.id === 'qin-shihuang') {
    return { mainTitle: '秦始皇', personalName: '嬴政', fullDisplayText: '秦始皇 · 嬴政' };
  }
  if (emp.id === 'qin-erzhi') {
    return { mainTitle: '秦二世', personalName: '胡亥', fullDisplayText: '秦二世 · 胡亥' };
  }
  if (emp.id === 'han-gaozu') {
    return { mainTitle: '汉高祖', personalName: '刘邦', fullDisplayText: '汉高祖 · 刘邦' };
  }
  if (emp.id === 'han-wudi') {
    return { mainTitle: '汉武帝', personalName: '刘彻', fullDisplayText: '汉武帝 · 刘彻' };
  }
  if (emp.id === 'han-guangwu') {
    return { mainTitle: '汉光武帝', personalName: '刘秀', fullDisplayText: '汉光武帝 · 刘秀' };
  }
  if (emp.id === 'sui-wen') {
    return { mainTitle: '隋文帝', personalName: '杨坚', fullDisplayText: '隋文帝 · 杨坚' };
  }
  if (emp.id === 'tang-gaozu') {
    return { mainTitle: '唐高祖', personalName: '李渊', fullDisplayText: '唐高祖 · 李渊' };
  }
  if (emp.id === 'tang-taizong') {
    return { mainTitle: '唐太宗', personalName: '李世民', fullDisplayText: '唐太宗 · 李世民' };
  }
  if (emp.id === 'wu-zetian') {
    return { mainTitle: '一代女皇 武则天', personalName: '武曌', fullDisplayText: '武则天 · 武曌' };
  }
  if (emp.id === 'tang-xuanzong') {
    return { mainTitle: '唐玄宗', personalName: '李隆基', fullDisplayText: '唐玄宗 · 李隆基' };
  }
  if (emp.id === 'song-taizu') {
    return { mainTitle: '宋太祖', personalName: '赵匡胤', fullDisplayText: '宋太祖 · 赵匡胤' };
  }
  if (emp.id === 'song-taizong') {
    return { mainTitle: '宋太宗', personalName: '赵光义', fullDisplayText: '宋太宗 · 赵光义' };
  }
  if (emp.id === 'ming-taizu') {
    return { mainTitle: '明太祖 (洪武帝)', personalName: '朱元璋', fullDisplayText: '明太祖 · 朱元璋' };
  }
  if (emp.id === 'ming-chengzu') {
    return { mainTitle: '明成祖 (永乐帝)', personalName: '朱棣', fullDisplayText: '明成祖 · 朱棣' };
  }
  if (emp.id === 'qing-kangxi') {
    return { mainTitle: '康熙皇帝', personalName: '爱新觉罗·玄烨', fullDisplayText: '康熙帝 · 玄烨' };
  }
  if (emp.id === 'qing-qianlong') {
    return { mainTitle: '乾隆皇帝', personalName: '爱新觉罗·弘历', fullDisplayText: '乾隆帝 · 弘历' };
  }
  if (emp.id === 'qing-puyi') {
    return { mainTitle: '末代宣统帝', personalName: '爱新觉罗·溥仪', fullDisplayText: '宣统帝 · 溥仪' };
  }

  let title = emp.templeName;
  if (title.includes('(')) {
    title = title.split('(')[0].trim();
  }
  if (title === '无' || !title) {
    title = emp.posthumousName !== '无' ? emp.posthumousName : emp.name;
  }
  return { mainTitle: title, personalName: emp.name, fullDisplayText: `${title} · ${emp.name}` };
}
