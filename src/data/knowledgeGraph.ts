import { KnowledgeNode } from '../types';

export const KNOWLEDGE_NODES: KnowledgeNode[] = [
  // 政治核心节点
  {
    id: 'shangyang',
    label: '商鞅变法',
    category: 'system',
    dynasty: '战国·秦',
    description: '废井田重农战，推行县制与军功爵制，奠定秦富强之基',
    connections: [
      { targetId: 'qin-unify', relation: '奠定实力基础' },
      { targetId: 'junxian-zhi', relation: '率先推行县制' }
    ]
  },
  {
    id: 'qin-unify',
    label: '秦灭六国大一统',
    category: 'event',
    dynasty: '秦朝',
    description: '扫平东方六国，建立中国首个大一统专制中央集权封建帝国',
    connections: [
      { targetId: 'junxian-zhi', relation: '全面推行全国' },
      { targetId: 'han-cheng-qin', relation: '制度被汉朝全面继承' }
    ]
  },
  {
    id: 'junxian-zhi',
    label: '郡县制度',
    category: 'system',
    dynasty: '秦汉至明清',
    description: '官僚制取代贵族世袭分封制，中央垂直任命长官，维系大一统千年基石',
    connections: [
      { targetId: 'tuien-ling', relation: '地方官僚化深化' },
      { targetId: 'xingsheng-zhi', relation: '后世演进为行省制' }
    ]
  },
  {
    id: 'han-cheng-qin',
    label: '汉承秦制',
    category: 'system',
    dynasty: '两汉',
    description: '汉朝继承秦代皇帝制度、郡县制度与法律体系，并以黄老及儒家予以温和调整',
    connections: [
      { targetId: 'tuien-ling', relation: '解决郡国并行弊端' },
      { targetId: 'duzun-ruxue', relation: '确立官方意识形态' }
    ]
  },
  {
    id: 'tuien-ling',
    label: '推恩令',
    category: 'system',
    dynasty: '西汉',
    description: '汉武帝采纳主父偃之策，和平拆解诸侯封国，专制集权达西汉顶峰',
    connections: [
      { targetId: 'silk-road', relation: '腾出手经略西域' }
    ]
  },
  {
    id: 'duzun-ruxue',
    label: '罢黜百家·独尊儒术',
    category: 'culture',
    dynasty: '西汉',
    description: '董仲舒天人感应大一统儒学，被汉武帝立为正统，塑造两千年中国传统文化内核',
    connections: [
      { targetId: 'keju-zhi', relation: '儒家经典成为科举考试科目' },
      { targetId: 'song-lixue', relation: '宋代演化为程朱理学' }
    ]
  },
  {
    id: 'silk-road',
    label: '丝绸之路',
    category: 'event',
    dynasty: '西汉至盛唐',
    description: '张骞凿空西域，沟通欧亚大陆的商贸走廊与中西文明交流大动脉',
    connections: [
      { targetId: 'tang-open', relation: '盛唐万国朝宗渊源' }
    ]
  },
  {
    id: 'keju-zhi',
    label: '科举制度',
    category: 'system',
    dynasty: '隋唐至清末',
    description: '隋创唐备宋盛，以考试成绩选拔文官，打破门阀垄断，中国古代第五大发明',
    connections: [
      { targetId: 'sansheng-liubu', relation: '为三省六部输送文官' },
      { targetId: 'song-wenguan', relation: '催生宋代士大夫文官黄金时代' }
    ]
  },
  {
    id: 'sansheng-liubu',
    label: '三省六部制',
    category: 'system',
    dynasty: '隋唐',
    description: '中书省草拟、门下省审核、尚书省执行并下辖六部，分工制衡',
    connections: [
      { targetId: 'tang-zhenguan', relation: '保障政令审慎与清明' }
    ]
  },
  {
    id: 'tang-zhenguan',
    label: '贞观之治',
    category: 'event',
    dynasty: '唐朝',
    description: '唐太宗任贤纳谏，轻徭薄赋，民族融合“天可汗”，古代政治典范',
    connections: [
      { targetId: 'tang-open', relation: '造就盛唐气象' },
      { targetId: 'anshan-chaos', relation: '后世天宝走向怠政' }
    ]
  },
  {
    id: 'tang-open',
    label: '盛唐包容气象与唐诗',
    category: 'culture',
    dynasty: '唐朝',
    description: '兼收并蓄海纳百川，李白杜甫唐诗繁荣达中国古代文学高峰',
    connections: [
      { targetId: 'anshan-chaos', relation: '巅峰后遭遇战乱摧残' }
    ]
  },
  {
    id: 'anshan-chaos',
    label: '安史之乱',
    category: 'event',
    dynasty: '唐朝',
    description: '安禄山史思明起兵摧毁长安洛阳，唐朝由盛转衰，北方经济重心加速南移',
    connections: [
      { targetId: 'beijiushi-bingquan', relation: '宋初深刻反思藩镇作乱' }
    ]
  },
  {
    id: 'beijiushi-bingquan',
    label: '杯酒释兵权与崇文抑武',
    category: 'system',
    dynasty: '北宋',
    description: '赵匡胤收回宿将节度使兵权，立誓不杀士大夫，文官治国消除武人篡权后患',
    connections: [
      { targetId: 'song-wenguan', relation: '造就纯粹文治雅宋' },
      { targetId: 'song-lixue', relation: '理学思辨兴盛' }
    ]
  },
  {
    id: 'song-wenguan',
    label: '宋代平民商业与科技',
    category: 'culture',
    dynasty: '两宋',
    description: '坊市合一夜市繁荣，活字印刷与指南针应用，清明上河图真实写照',
    connections: [
      { targetId: 'xingsheng-zhi', relation: '蒙元南下继承版图' }
    ]
  },
  {
    id: 'song-lixue',
    label: '程朱理学',
    category: 'culture',
    dynasty: '南宋至明清',
    description: '朱熹集大成，存天理灭人欲，以《四书章句集注》成为封建社会后期统治哲学',
    connections: [
      { targetId: 'wang-xinxue', relation: '王阳明心学反思批判突破' }
    ]
  },
  {
    id: 'xingsheng-zhi',
    label: '行省制度',
    category: 'system',
    dynasty: '元朝',
    description: '元世祖创设行中书省，管辖浩瀚疆域，成为现代中国省份建制之滥觞',
    connections: [
      { targetId: 'ming-feixiang', relation: '明代承袭行省并改三司' }
    ]
  },
  {
    id: 'ming-feixiang',
    label: '朱元璋废丞相设内阁',
    category: 'system',
    dynasty: '明朝',
    description: '诛杀胡惟庸废除千年中书省宰相，权分六部，成祖设内阁辅政，皇权集权登峰',
    connections: [
      { targetId: 'qing-junji', relation: '清承明制并演变出军机处' }
    ]
  },
  {
    id: 'wang-xinxue',
    label: '王阳明心学',
    category: 'culture',
    dynasty: '明朝中后期',
    description: '龙场悟道创立“心即理、知行合一、致良知”，解放束缚思想，影响深远',
    connections: [
      { targetId: 'modern-revolution', relation: '激励近代志士救亡图存' }
    ]
  },
  {
    id: 'qing-junji',
    label: '雍正创设军机处',
    category: 'system',
    dynasty: '清朝',
    description: '“跪受笔录承旨遵办”，君主专制中央集权制度达到古代封建社会终极极峰',
    connections: [
      { targetId: 'modern-revolution', relation: '最终在辛亥革命中崩溃' }
    ]
  },
  {
    id: 'modern-revolution',
    label: '辛亥革命与走向共和',
    category: 'event',
    dynasty: '近代 (清末民国)',
    description: '推翻清朝与两千年君主专制制度，创立民主共和国，开启中华民族伟大复兴序幕',
    connections: []
  }
];
