import { AncientCityMatch, EraConversionItem } from '../types';

export const ANCIENT_CITIES: AncientCityMatch[] = [
  {
    ancientName: '长安 / 京兆 / 大兴',
    modernName: '陕西省 西安市',
    dynastyEra: '西周(宗周)、西汉、新、东汉末、西晋末、前秦、后秦、西魏、北周、隋、唐',
    province: '陕西',
    notes: '中国十三朝古都，丝绸之路陆路真正起点。唐代长安城面积逾84平方公里，为当时全球第一大都会。'
  },
  {
    ancientName: '洛阳 / 洛邑 / 东都 / 神都',
    modernName: '河南省 洛阳市',
    dynastyEra: '夏(斟鄩)、商、东周、东汉、曹魏、西晋、北魏、隋、唐(神都武周)、后唐',
    province: '河南',
    notes: '十三朝古都，素称“天下之中”。龙门石窟、白马寺坐落于此，北魏孝文帝迁都于此推行全面汉化。'
  },
  {
    ancientName: '金陵 / 建业 / 建康 / 应天府 / 江宁',
    modernName: '江苏省 南京市',
    dynastyEra: '东吴、东晋、南朝(宋齐梁陈)、南唐、明初、中华民国',
    province: '江苏',
    notes: '六朝古都、十朝都会。钟山风雨起苍黄，朱元璋在此建都开创明朝，孙中山在此就职中华民国临时大总统。'
  },
  {
    ancientName: '临安 / 钱塘 / 武林',
    modernName: '浙江省 杭州市',
    dynastyEra: '吴越国、南宋',
    province: '浙江',
    notes: '“暖风熏得游人醉，直把杭州作汴州”。南宋在此偏安150余年，马可·波罗赞为“世界上最美丽华贵之天城”。'
  },
  {
    ancientName: '幽州 / 蓟城 / 燕京 / 中都 / 大都 / 顺天府',
    modernName: '北京市',
    dynastyEra: '燕国、辽(陪都)、金(中都)、元(大都)、明、清、民国(北平)',
    province: '北京',
    notes: '元明清三代正统帝都。朱棣迁都北京开创“天子守国门”，拥有规模宏伟的紫禁城明清皇宫。'
  },
  {
    ancientName: '东京 / 汴京 / 汴梁 / 梁州',
    modernName: '河南省 开封市',
    dynastyEra: '战国魏(大梁)、后梁、后晋、后汉、后周、北宋、金(末期)',
    province: '河南',
    notes: '七朝古都，北宋一百六十余年繁盛帝京。《清明上河图》所绘虹桥坊市、夜市樊楼皆在此地。'
  },
  {
    ancientName: '姑苏 / 吴郡 / 平江府',
    modernName: '江苏省 苏州市',
    dynastyEra: '春秋吴国、两宋平江府',
    province: '江苏',
    notes: '“姑苏城外寒山寺，夜半钟声到客船”。江南水乡园林甲天下，明清江南首富重镇与苏绣之乡。'
  },
  {
    ancientName: '广陵 / 维扬 / 江都',
    modernName: '江苏省 扬州市',
    dynastyEra: '吴王刘濞、隋炀帝巡幸江都、唐宋',
    province: '江苏',
    notes: '“天下三分明月夜，二分无赖是扬州”。隋炀帝开大运河直抵江都，唐代“扬一益二”冠绝天下。'
  },
  {
    ancientName: '益州 / 蜀郡 / 锦官城',
    modernName: '四川省 成都市',
    dynastyEra: '古蜀国、蜀汉、前蜀、后蜀',
    province: '四川',
    notes: '“晓看红湿处，花重锦官城”。汉唐天府之国核心，诸葛亮治蜀重镇，北宋诞生世界第一种纸币交子。'
  },
  {
    ancientName: '盛京 / 奉天',
    modernName: '辽宁省 沈阳市',
    dynastyEra: '后金、清代陪都',
    province: '辽宁',
    notes: '努尔哈赤与皇太极定都盛京，建有沈阳故宫，顺治入关后升为陪都。'
  },
  {
    ancientName: '江陵 / 郢都 / 荆州',
    modernName: '湖北省 荆州市',
    dynastyEra: '楚国(郢都四百年)、三国荆州争夺、南朝梁',
    province: '湖北',
    notes: '“千里江陵一日还”。楚文化发源地，三国刘备借荆州、关羽大意失荆州的历史舞台。'
  },
  {
    ancientName: '兰陵',
    modernName: '山东省 临沂市 兰陵县 / 枣庄市',
    dynastyEra: '战国楚、汉晋兰陵萧氏',
    province: '山东',
    notes: '“兰陵美酒郁金香，玉碗盛来琥珀光”。荀子曾任兰陵令，南朝齐梁皇族兰陵萧氏郡望所在地。'
  },
  {
    ancientName: '姑臧 / 凉州',
    modernName: '甘肃省 武威市',
    dynastyEra: '汉武帝河西四郡之一、前凉、后凉、南凉、北凉',
    province: '甘肃',
    notes: '“葡萄美酒夜光杯，欲饮琵琶马上催”。丝绸之路重镇，“车马相交错，歌吹日纵横”。'
  },
  {
    ancientName: '浔阳 / 柴桑',
    modernName: '江西省 九江市',
    dynastyEra: '三国东吴水军基地、东晋唐宋',
    province: '江西',
    notes: '“浔阳江头夜送客，枫叶荻花秋瑟瑟”。白居易《琵琶行》创作地，周瑜柴桑大点兵抗曹。'
  }
];

export const FAMOUS_ERAS: EraConversionItem[] = [
  { dynasty: '西汉', emperor: '汉武帝刘彻', eraName: '建元', startYear: -140, endYear: -135, ganzhi: '辛丑' },
  { dynasty: '东汉', emperor: '汉光武帝刘秀', eraName: '建武', startYear: 25, endYear: 56, ganzhi: '乙酉' },
  { dynasty: '三国·魏', emperor: '魏文帝曹丕', eraName: '黄初', startYear: 220, endYear: 226, ganzhi: '庚子' },
  { dynasty: '蜀汉', emperor: '后主刘禅(诸葛亮辅政)', eraName: '建兴', startYear: 223, endYear: 237, ganzhi: '癸卯' },
  { dynasty: '隋朝', emperor: '隋文帝杨坚', eraName: '开皇', startYear: 581, endYear: 600, ganzhi: '辛丑' },
  { dynasty: '隋朝', emperor: '隋炀帝杨广', eraName: '大业', startYear: 605, endYear: 618, ganzhi: '乙丑' },
  { dynasty: '唐朝', emperor: '唐太宗李世民', eraName: '贞观', startYear: 627, endYear: 649, ganzhi: '丁亥' },
  { dynasty: '唐朝', emperor: '唐高宗李治', eraName: '显庆', startYear: 656, endYear: 661, ganzhi: '丙辰' },
  { dynasty: '武周', emperor: '女皇武则天', eraName: '天授', startYear: 690, endYear: 692, ganzhi: '庚寅' },
  { dynasty: '唐朝', emperor: '唐玄宗李隆基', eraName: '开元', startYear: 713, endYear: 741, ganzhi: '癸丑' },
  { dynasty: '唐朝', emperor: '唐玄宗李隆基', eraName: '天宝', startYear: 742, endYear: 756, ganzhi: '壬午' },
  { dynasty: '北宋', emperor: '宋太祖赵匡胤', eraName: '建隆', startYear: 960, endYear: 963, ganzhi: '庚申' },
  { dynasty: '北宋', emperor: '宋仁宗赵祯', eraName: '嘉祐', startYear: 1056, endYear: 1063, ganzhi: '丙申' },
  { dynasty: '南宋', emperor: '宋高宗赵构', eraName: '绍兴', startYear: 1131, endYear: 1162, ganzhi: '辛亥' },
  { dynasty: '元朝', emperor: '元世祖忽必烈', eraName: '至元', startYear: 1264, endYear: 1294, ganzhi: '甲子' },
  { dynasty: '明朝', emperor: '明太祖朱元璋', eraName: '洪武', startYear: 1368, endYear: 1398, ganzhi: '戊申' },
  { dynasty: '明朝', emperor: '明成祖朱棣', eraName: '永乐', startYear: 1403, endYear: 1424, ganzhi: '癸未' },
  { dynasty: '明朝', emperor: '明神宗朱翊钧', eraName: '万历', startYear: 1573, endYear: 1620, ganzhi: '癸酉' },
  { dynasty: '明朝', emperor: '明思宗朱由检', eraName: '崇祯', startYear: 1628, endYear: 1644, ganzhi: '戊辰' },
  { dynasty: '清朝', emperor: '清圣祖玄烨', eraName: '康熙', startYear: 1662, endYear: 1722, ganzhi: '壬寅' },
  { dynasty: '清朝', emperor: '清世宗胤禛', eraName: '雍正', startYear: 1723, endYear: 1735, ganzhi: '癸卯' },
  { dynasty: '清朝', emperor: '清高宗弘历', eraName: '乾隆', startYear: 1736, endYear: 1795, ganzhi: '丙辰' },
  { dynasty: '清朝', emperor: '清宣宗旻宁', eraName: '道光', startYear: 1821, endYear: 1850, ganzhi: '辛巳' },
  { dynasty: '清朝', emperor: '清德宗载湉', eraName: '光绪', startYear: 1875, endYear: 1908, ganzhi: '乙亥' },
  { dynasty: '清朝', emperor: '宣统帝溥仪', eraName: '宣统', startYear: 1909, endYear: 1911, ganzhi: '己酉' }
];

// 计算公历年份的干支纪年工具函数
const TIAN_GAN = ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸'];
const DI_ZHI = ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥'];
const SHENG_XIAO = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];

export function calculateGanzhi(year: number): { ganzhi: string; shengxiao: string } {
  // 公元 4 年为甲子年；公历无“公元 0 年”：公元前 1 年的次年即公元 1 年。
  // 输入约定：公元前年份用负数（如公元前 140 年记为 -140），
  // 需先换算为天文纪年（公元前 n 年 = 天文年 -(n-1)），否则公元前会整体错位一年。
  const astronomicalYear = year < 0 ? year + 1 : year;
  const offset = ((astronomicalYear - 4) % 60 + 60) % 60;
  const ganIndex = offset % 10;
  const zhiIndex = offset % 12;
  return {
    ganzhi: `${TIAN_GAN[ganIndex]}${DI_ZHI[zhiIndex]}年`,
    shengxiao: `${SHENG_XIAO[zhiIndex]}年`
  };
}
