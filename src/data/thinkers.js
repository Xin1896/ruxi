const thinkers = [
  { name:'老子', nameEn:'Laozi', birthYear:-571, era:'约前6世纪', category:'哲学家', tradition:'道家', color:'#8b6cc9',
    entries:[
      { keywords:'自由,无为,自然,道,顺应,放下', topic:'自由与无为', quote:'「人法地，地法天，天法道，道法自然。」', insight:'老子的自由不是「我想做什么就做什么」，而是「不再被欲望驱使」。无为不是不行动，而是像水一样自然地流动，不强求。' },
      { keywords:'简单,欲望,知足,幸福,满足', topic:'知足与欲望', quote:'「知足不辱，知止不殆，可以长久。」', insight:'当整个时代都在追逐更多，老子指向一个相反的方向：真正的富有不是拥有更多，而是需要更少。' }
    ]},
  { name:'释迦牟尼', nameEn:'Siddhartha Gautama', birthYear:-563, era:'约前563—前483', category:'哲学家', tradition:'佛教', color:'#8b6cc9',
    entries:[
      { keywords:'苦难,痛苦,欲望,执着,解脱,苦', topic:'苦难与解脱', quote:'「一切有为法，如梦幻泡影，如露亦如电，应作如是观。」', insight:'佛陀不问「为什么有苦难」，而是问「苦难怎么运作」。苦来自渴爱，渴爱来自无明，无明可以被洞察瓦解。' },
      { keywords:'自我,无我,身份,存在,我是谁', topic:'无我', quote:'「无我——你所认为的自我，不过是五蕴的暂时聚合。」', insight:'那个在思考的「我」是空的。不是一个稳定的自我在感知世界，而是色、受、想、行、识五个流动过程的暂时聚合。' },
      { keywords:'意义,人生,虚幻,放下', topic:'存在的本质', quote:'「诸行无常，诸法无我，涅槃寂静。」', insight:'意义不是被找到的，而是被放下的。当你不再执着于「意义」这个概念本身，反而获得了一种更深的自在。' }
    ]},
  { name:'孔子', nameEn:'Confucius', birthYear:-551, era:'前551—前479', category:'哲学家', tradition:'儒家', color:'#d4a017',
    entries:[
      { keywords:'意义,道,人生,使命,学习', topic:'人生的意义', quote:'「朝闻道，夕死可矣。」', insight:'意义不在于你获得了什么，而在于你是否触碰到了某种更大的真实。如果早晨领悟了道，即使晚上死去也无憾。' },
      { keywords:'爱,仁,善,人性,道德,关怀', topic:'仁与爱', quote:'「仁者爱人。」', insight:'孔子把「爱」从私人情感扩展为人格的基底——不只爱你喜欢的人，而是对所有人保持温暖的关切。' },
      { keywords:'孤独,友谊,同道,坚持', topic:'孤独与同道', quote:'「德不孤，必有邻。」', insight:'孤独不是宇宙的本质，而是你尚未遇到共鸣的暂时状态。走在正道上，最终会遇到同路人。' }
    ]},
  { name:'孙子', nameEn:'Sun Tzu', birthYear:-544, era:'约前544—前496', category:'思想大成者', tradition:'兵家', color:'#c0392b',
    entries:[
      { keywords:'竞争,策略,战争,胜利,智慧,博弈', topic:'不战而胜', quote:'「百战百胜，非善之善者也；不战而屈人之兵，善之善者也。」', insight:'最高明的胜利不是打赢，而是让对方放弃抵抗。这个思想远超军事领域。' },
      { keywords:'认识自己,自知,知己知彼,真理', topic:'自知之明', quote:'「知己知彼，百战不殆。」', insight:'一切策略的基础是认识：认识自己和认识对手。大多数失败不是因为对手太强，而是因为对自己的判断有误。' }
    ]},
  { name:'苏格拉底', nameEn:'Socrates', birthYear:-470, era:'前470—前399', category:'哲学家', tradition:'古希腊', color:'#2980b9',
    entries:[
      { keywords:'真理,无知,智慧,认识,知识,谦虚', topic:'无知之知', quote:'「我唯一知道的，就是我一无所知。」', insight:'苏格拉底发现所有自称有智慧的人其实什么都不知道却以为自己知道。「知其不知」是认识论的最坚实起点。' },
      { keywords:'反思,生活,意义,审视,人生', topic:'经过审视的人生', quote:'「未经审视的人生不值得过。」', insight:'苏格拉底在被判死刑时说出这句话。他宁愿死也不愿停止追问。' }
    ]},
  { name:'柏拉图', nameEn:'Plato', birthYear:-428, era:'前428—前348', category:'哲学家', tradition:'古希腊', color:'#2980b9',
    entries:[
      { keywords:'爱,美,灵魂,欲望,升华', topic:'爱的阶梯', quote:'「爱是从对个别肉体之美的欣赏，上升到对美本身的永恒沉思。」', insight:'柏拉图描绘了爱的阶梯：从爱一个美丽的身体，到爱心灵之美，最终到达「美本身」。' },
      { keywords:'真理,洞穴,幻觉,认知,现实,觉醒', topic:'洞穴隐喻', quote:'「洞穴中的人以为影子就是全部的真实，直到有人走出洞穴看到了太阳。」', insight:'大多数人活在洞穴里，把墙上的影子当作现实。哲学家的使命是走出洞穴，然后回来告诉其他人。' }
    ]},
  { name:'亚里士多德', nameEn:'Aristotle', birthYear:-384, era:'前384—前322', category:'哲学家', tradition:'古希腊', color:'#2980b9',
    entries:[
      { keywords:'幸福,意义,德性,人生,目的,卓越', topic:'灵魂的繁荣', quote:'「幸福是灵魂合乎德性的活动。人的功能不是活着，而是活得好。」', insight:'人生的意义在于实现 eudaimonia——通过理性和德性，让你的潜能完全展开。' },
      { keywords:'习惯,品格,重复,训练,道德', topic:'习惯与品格', quote:'「我们反复做的事情造就了我们。卓越不是一种行为，而是一种习惯。」', insight:'你不是天生善良或邪恶。你是你的习惯的总和。每天的小选择，累积起来就是你的品格。' }
    ]},
  { name:'孟子', nameEn:'Mencius', birthYear:-372, era:'前372—前289', category:'哲学家', tradition:'儒家', color:'#d4a017',
    entries:[
      { keywords:'善,人性,善恶,道德,本性,同情', topic:'人性本善', quote:'「人皆有不忍人之心。无恻隐之心，非人也。」', insight:'看到孩子要掉进井里，任何人都会本能地惊恐和同情——这不是教出来的，而是人性中善的种子。' },
      { keywords:'苦难,使命,磨练,成长,挫折,失败', topic:'苦难与使命', quote:'「天将降大任于是人也，必先苦其心志，劳其筋骨。」', insight:'苦难不是惩罚而是准备。天要把重大使命交给你之前，先用苦难锻造你。' }
    ]},
  { name:'庄子', nameEn:'Zhuangzi', birthYear:-369, era:'约前369—前286', category:'哲学家', tradition:'道家', color:'#8b6cc9',
    entries:[
      { keywords:'自我,梦,身份,真实,幻觉,我是谁', topic:'庄周梦蝶', quote:'「不知周之梦为蝴蝶与？蝴蝶之梦为周与？」', insight:'你怎么知道现在的你不是蝴蝶梦出来的？这动摇了「我」的根基。' },
      { keywords:'死亡,变化,接受,自然,超越', topic:'死亡是变化', quote:'「庄子妻死，鼓盆而歌。」', insight:'妻子死后庄子敲盆唱歌——变化而有生，现在又变化而死，不过是四季运转。' },
      { keywords:'真理,相对,是非,认识,知识', topic:'齐物论', quote:'「以有涯随无涯，殆已。」', insight:'是非、美丑、大小——一切判断都取决于立场。真理超越了所有语言和分类。' }
    ]},
  { name:'伊壁鸠鲁', nameEn:'Epicurus', birthYear:-341, era:'前341—前270', category:'哲学家', tradition:'古希腊', color:'#2980b9',
    entries:[
      { keywords:'死亡,恐惧,消亡,面对死亡', topic:'死亡与我们无关', quote:'「当我们存在时，死亡不存在；当死亡来临时，我们已不存在。」', insight:'你和死亡永远不会「见面」——这是哲学史上最优雅的论证之一。' },
      { keywords:'快乐,幸福,简单,欲望,享乐,满足', topic:'简单的快乐', quote:'「不是饮宴和享受使人快乐，而是清醒的推理和对欲望原因的追究。」', insight:'最高的快乐是朋友、面包、思考——不是更多，而是恰好。' }
    ]},
  { name:'荀子', nameEn:'Xunzi', birthYear:-310, era:'前310—前235', category:'哲学家', tradition:'儒家', color:'#d4a017',
    entries:[
      { keywords:'善恶,人性,教育,文明,秩序,恶', topic:'人性本恶', quote:'「人之性恶，其善者伪也。」', insight:'人的本性自私贪婪，「善」是后天教化的结果。礼义法度是防止人类退回丛林的必要堤坝。' }
    ]},
  { name:'塞内卡', nameEn:'Seneca', birthYear:-4, era:'前4—公元65', category:'哲学家', tradition:'斯多葛', color:'#27ae60',
    entries:[
      { keywords:'死亡,时间,活着,当下,短暂', topic:'每天都在死', quote:'「我们不是突然死去，而是每天都在死去。」', insight:'你此刻度过的这一分钟已经死了。真正可怕的不是死亡，而是从未真正活过。' },
      { keywords:'时间,浪费,短暂,珍惜,人生', topic:'论生命之短暂', quote:'「人生足够长，如果你知道如何使用它。」', insight:'我们不是没有足够的时间，而是浪费了太多。' }
    ]},
  { name:'爱比克泰德', nameEn:'Epictetus', birthYear:50, era:'约50—135', category:'哲学家', tradition:'斯多葛', color:'#27ae60',
    entries:[
      { keywords:'自由,控制,内心,选择,判断', topic:'内在自由', quote:'「有些事在我们控制之内，有些不在。自由属于前者。」', insight:'爱比克泰德是奴隶出身。真正的自由不是改变世界，而是改变你的回应方式。' }
    ]},
  { name:'马可·奥勒留', nameEn:'Marcus Aurelius', birthYear:121, era:'121—180', category:'思想大成者', tradition:'斯多葛', color:'#27ae60',
    entries:[
      { keywords:'苦难,判断,心态,痛苦,情绪,控制', topic:'痛苦在于判断', quote:'「你感到痛苦，不是因为事物本身，而是因为你对事物的判断。」', insight:'苦难不在事件中，而在你对事件的解读中。' },
      { keywords:'时间,当下,未来,焦虑,专注', topic:'活在当下', quote:'「不要让未来扰乱你。如果必须面对它，你将用同样的理性武器来面对。」', insight:'你唯一拥有的是此刻。后悔和焦虑都是把注意力浪费在你无法触及的地方。' }
    ]},
  { name:'龙树', nameEn:'Nagarjuna', birthYear:150, era:'约150—250', category:'哲学家', tradition:'中观佛教', color:'#8b6cc9',
    entries:[
      { keywords:'真理,空,语言,认知,概念,相对', topic:'空与真实', quote:'「我们不说空，也不说不空——这只是为了指示而说。」', insight:'一切概念都是相对的，包括「相对」本身。恰恰在语言瓦解的地方，真实显露。' }
    ]},
  { name:'奥古斯丁', nameEn:'Saint Augustine', birthYear:354, era:'354—430', category:'思想大成者', tradition:'基督教', color:'#e67e22',
    entries:[
      { keywords:'时间,记忆,心灵,过去,现在,未来', topic:'时间的困惑', quote:'「时间是什么？如果没有人问我，我知道；想要解释时，我就不知道了。」', insight:'过去已不存在，未来尚未存在——那时间到底在哪里？也许只在心灵之中。' },
      { keywords:'善恶,恶,光,善的缺失', topic:'恶的本质', quote:'「恶不是一种存在，而是善的缺失。」', insight:'恶没有自己的实体，如同黑暗不是一种东西，只是光的缺失。' }
    ]},
  { name:'苏轼', nameEn:'Su Shi', birthYear:1037, era:'1037—1101', category:'作家', tradition:'中国文学', color:'#d4a017',
    entries:[
      { keywords:'时间,短暂,永恒,渺小,宇宙,感悟', topic:'须臾与无穷', quote:'「寄蜉蝣于天地，渺沧海之一粟。」', insight:'人在时间面前渺小。但换一个角度看，绝望变成了安慰。' },
      { keywords:'逆境,坚韧,乐观,人生,态度,豁达', topic:'一蓑烟雨任平生', quote:'「竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。」', insight:'苏轼一生被贬谪多次，却在每一次逆境中活出洒脱。' }
    ]},
  { name:'鲁米', nameEn:'Rumi', birthYear:1207, era:'1207—1273', category:'作家', tradition:'苏菲派', color:'#c0392b',
    entries:[
      { keywords:'爱,恐惧,壁垒,内心,阻碍', topic:'爱与壁垒', quote:'「你的任务不是去寻找爱，而是去发现你为抵抗爱而筑起的所有壁垒。」', insight:'爱不是缺失的东西，而是你本来就有但不断逃避的东西。' },
      { keywords:'孤独,伤口,光,痛苦,成长', topic:'伤口与光', quote:'「伤口是光进入你内心的地方。」', insight:'正是因为你不完整，光才能照进来。' }
    ]},
  { name:'王阳明', nameEn:'Wang Yangming', birthYear:1472, era:'1472—1529', category:'哲学家', tradition:'心学', color:'#d4a017',
    entries:[
      { keywords:'知行合一,实践,知识,行动,道德', topic:'知行合一', quote:'「知是行的主意，行是知的功夫。知而不行，只是未知。」', insight:'真正的知道和行动是同一件事。知识不存在于头脑中，而存在于行动中。' },
      { keywords:'良知,内心,自我,本心,光明', topic:'致良知', quote:'「吾心光明，亦复何言。」', insight:'良知人人本有，不需要外求。你内心深处已经知道什么是对的。' }
    ]},
  { name:'蒙田', nameEn:'Michel de Montaigne', birthYear:1533, era:'1533—1592', category:'作家', tradition:'文艺复兴', color:'#e67e22',
    entries:[
      { keywords:'死亡,恐惧,哲学,活着,充实', topic:'学会死亡', quote:'「学习哲学就是学习如何去死。」', insight:'与其不断想着死，不如充分地活。一个活得充实的人，自然不惧怕终点。' },
      { keywords:'自我,认识自己,反思,我是谁', topic:'认识自己', quote:'「世界上最重要的事情就是认识自己。」', insight:'蒙田用三十年写《随笔集》，主题只有一个：我。' }
    ]},
  { name:'莎士比亚', nameEn:'William Shakespeare', birthYear:1564, era:'1564—1616', category:'作家', tradition:'英国文学', color:'#2980b9',
    entries:[
      { keywords:'存在,选择,犹豫,行动,命运,勇气', topic:'存在与选择', quote:'「To be, or not to be, that is the question.」', insight:'哈姆雷特的犹豫不是懦弱，而是人类面对荒诞处境的真实反应。' },
      { keywords:'人生,戏剧,角色,虚幻,意义', topic:'人生如戏', quote:'「全世界是一座舞台，所有的男男女女不过是演员。」', insight:'如果人生只是表演，那观众是谁？' }
    ]},
  { name:'笛卡尔', nameEn:'René Descartes', birthYear:1596, era:'1596—1650', category:'哲学家', tradition:'理性主义', color:'#2980b9',
    entries:[
      { keywords:'自我,存在,思考,我是谁,意识,确定性', topic:'我思故我在', quote:'「我思，故我在。」', insight:'怀疑一切之后，唯一无法怀疑的是：正在怀疑的那个「我」必须存在。' },
      { keywords:'真理,怀疑,方法,知识,批判', topic:'方法论怀疑', quote:'「为了寻找真理，每个人一生中必须有一次把所有事物都彻底怀疑一遍。」', insight:'从绝对确定的基点出发，重建知识大厦。' }
    ]},
  { name:'帕斯卡', nameEn:'Blaise Pascal', birthYear:1623, era:'1623—1662', category:'思想大成者', tradition:'法国哲学', color:'#e67e22',
    entries:[
      { keywords:'孤独,独处,不幸,逃避,娱乐,分心', topic:'独处的恐惧', quote:'「人类所有的不幸，都源于不能安静地独自坐在房间里。」', insight:'一切忙碌都是为了不和自己独处。这种逃避本身才是真正的苦难来源。' },
      { keywords:'信仰,赌注,风险,理性,上帝', topic:'帕斯卡的赌注', quote:'「信仰上帝如果输了，你什么也没失去；如果赢了，你获得一切。」', insight:'用概率思维讨论终极问题——历史上第一次。' }
    ]},
  { name:'休谟', nameEn:'David Hume', birthYear:1711, era:'1711—1776', category:'哲学家', tradition:'经验主义', color:'#27ae60',
    entries:[
      { keywords:'自我,知觉,身份,我是谁,意识', topic:'没有自我', quote:'「我向内审视时，找到的只是一连串的知觉——找不到自我。」', insight:'和佛陀惊人相似的结论：没有自我这个实体，只有一束不断变化的知觉。' }
    ]},
  { name:'卢梭', nameEn:'Jean-Jacques Rousseau', birthYear:1712, era:'1712—1778', category:'思想大成者', tradition:'启蒙运动', color:'#e67e22',
    entries:[
      { keywords:'自由,枷锁,社会,文明,天性,束缚', topic:'自由与枷锁', quote:'「人生而自由，却无往不在枷锁之中。」', insight:'人天生自由，但社会层层锁链把人裹住。出路是通过「社会契约」创造新的自由。' },
      { keywords:'教育,自然,成长,儿童,天性', topic:'自然教育', quote:'「出自造物主之手的东西都是好的，一到人的手里就变坏了。」', insight:'教育应该顺应儿童的自然天性，而不是强行灌输成人的规则。' }
    ]},
  { name:'亚当·斯密', nameEn:'Adam Smith', birthYear:1723, era:'1723—1790', category:'思想大成者', tradition:'政治经济学', color:'#27ae60',
    entries:[
      { keywords:'市场,利益,经济,自私,合作,社会', topic:'看不见的手', quote:'「我们的晚餐不是来自屠夫的善意，而是来自他们对自身利益的关注。」', insight:'个人追逐私利，可以通过市场机制导向公共利益。自私不需要被消灭，只需要被引导。' }
    ]},
  { name:'康德', nameEn:'Immanuel Kant', birthYear:1724, era:'1724—1804', category:'哲学家', tradition:'德国唯心主义', color:'#2980b9',
    entries:[
      { keywords:'善恶,道德,法则,义务,原则', topic:'绝对命令', quote:'「你的行为准则能否成为普遍法则？如果能，它就是善的。」', insight:'判断行为是否道德不看后果，只看原则能不能推广到所有人。' },
      { keywords:'真理,认知,知识,现象,物自体,局限', topic:'认知的边界', quote:'「我们永远无法认识事物本身，只能认识事物向我们显现的方式。」', insight:'你看到的「世界」已经被你的认知框架过滤了。' }
    ]},
  { name:'歌德', nameEn:'Goethe', birthYear:1749, era:'1749—1832', category:'作家', tradition:'德国文学', color:'#2980b9',
    entries:[
      { keywords:'行动,知识,实践,人生,浮士德,追求', topic:'行动高于知识', quote:'「理论是灰色的，而生命之树常青。」', insight:'真正的智慧不在象牙塔里，而在与世界的搏斗中。' }
    ]},
  { name:'达尔文', nameEn:'Charles Darwin', birthYear:1809, era:'1809—1882', category:'近代学者', tradition:'自然科学', color:'#27ae60',
    entries:[
      { keywords:'变化,适应,进化,生存,自然,竞争', topic:'适者生存', quote:'「最终存活下来的，不是最强壮的，也不是最聪明的，而是最能适应变化的。」', insight:'变化是唯一的常态，适应能力比力量更重要。' }
    ]},
  { name:'梭罗', nameEn:'Henry David Thoreau', birthYear:1817, era:'1817—1862', category:'作家', tradition:'超验主义', color:'#27ae60',
    entries:[
      { keywords:'孤独,独处,自然,简单,社交', topic:'孤独的力量', quote:'「我从未找到过比独处更忠实的伴侣。」', insight:'真正的孤独恰恰发生在人群之中。独处时，整个自然界都是你的同伴。' },
      { keywords:'简单,生活,本质,多余,消费', topic:'简单生活', quote:'「我到林中去，因为我想要有意识地生活。」', insight:'你真正需要的东西少得惊人。' }
    ]},
  { name:'马克思', nameEn:'Karl Marx', birthYear:1818, era:'1818—1883', category:'思想大成者', tradition:'政治经济学', color:'#c0392b',
    entries:[
      { keywords:'劳动,异化,工作,意义,价值,资本', topic:'劳动异化', quote:'「工人在劳动中不是肯定自己，而是否定自己。」', insight:'劳动本应是人实现自我的方式，但变成了与自我分离的痛苦。' },
      { keywords:'历史,变革,阶级,社会,冲突,权力', topic:'历史唯物主义', quote:'「至今一切社会的历史都是阶级斗争的历史。」', insight:'思想和制度不是凭空产生的，它们反映的是物质利益的斗争。' }
    ]},
  { name:'陀思妥耶夫斯基', nameEn:'Fyodor Dostoevsky', birthYear:1821, era:'1821—1881', category:'作家', tradition:'俄国文学', color:'#2980b9',
    entries:[
      { keywords:'苦难,上帝,孩子,正义,信仰,恶', topic:'苦难的质问', quote:'「即使最终有天堂，他也要恭恭敬敬地把入场券退回去。」', insight:'伊凡拒绝接受一个允许孩子受苦的上帝。' },
      { keywords:'自由,地下室,反抗,理性,人性', topic:'地下室的反抗', quote:'「人可以有意识地渴望对自己有害的东西——仅仅是为了证明自己有权渴望。」', insight:'人类最深层的需求不是幸福而是自由。' }
    ]},
  { name:'托尔斯泰', nameEn:'Leo Tolstoy', birthYear:1828, era:'1828—1910', category:'作家', tradition:'俄国文学', color:'#2980b9',
    entries:[
      { keywords:'意义,危机,信仰,绝望,人生,活着', topic:'存在的危机', quote:'「我可以呼吸、吃饭、睡觉，但没有生命——因为没有任何愿望值得我去满足。」', insight:'意义不在思考中，而在行动和爱之中。' },
      { keywords:'幸福,家庭,不幸,爱,婚姻', topic:'幸福与不幸', quote:'「幸福的家庭都相似，不幸的家庭各有各的不幸。」', insight:'维持幸福需要所有条件同时满足，而毁掉它只需要一个条件出问题。' }
    ]},
  { name:'尼采', nameEn:'Friedrich Nietzsche', birthYear:1844, era:'1844—1900', category:'哲学家', tradition:'德国哲学', color:'#c0392b',
    entries:[
      { keywords:'苦难,命运,力量,接受,爱,超越', topic:'命运之爱', quote:'「凡不能杀死我的，都使我更强。」', insight:'「amor fati」要求你不仅接受命运中的苦难，甚至渴望它重复发生。' },
      { keywords:'善恶,道德,权力,价值,传统', topic:'超越善恶', quote:'「没有道德现象，只有对现象的道德解释。」', insight:'道德不是永恒的，而是权力斗争的产物。' },
      { keywords:'孤独,伟大,独行,创造', topic:'孤独与创造', quote:'「对伟大事物的追求者而言，孤独是必经之路。」', insight:'创造者必须独行。孤独不是被遗弃，而是你走得太远。' }
    ]},
  { name:'弗洛伊德', nameEn:'Sigmund Freud', birthYear:1856, era:'1856—1939', category:'近代学者', tradition:'精神分析', color:'#8b6cc9',
    entries:[
      { keywords:'潜意识,自我,欲望,梦,心理,隐藏', topic:'潜意识的力量', quote:'「自我不是自己家中的主人。」', insight:'真正驱动你的是你不愿面对的欲望、恐惧和童年记忆。' },
      { keywords:'文明,压抑,自由,代价,秩序', topic:'文明的代价', quote:'「文明建立在对本能的压抑之上。」', insight:'你无法同时完全自由和完全文明。' }
    ]},
  { name:'泰戈尔', nameEn:'Rabindranath Tagore', birthYear:1861, era:'1861—1941', category:'诺贝尔奖得主', tradition:'印度文学', color:'#e67e22',
    entries:[
      { keywords:'生命,死亡,感恩,美,存在,自然', topic:'生命的感恩', quote:'「生如夏花之绚烂，死如秋叶之静美。」', insight:'活着时尽情绽放，死去时平静优雅。' },
      { keywords:'爱,给予,自由,关系,放手', topic:'爱与自由', quote:'「如果你因为怕失去而把花紧握在手里，花反而会枯萎。」', insight:'真正的爱是给予自由，而不是占有。' }
    ]},
  { name:'甘地', nameEn:'Mahatma Gandhi', birthYear:1869, era:'1869—1948', category:'思想大成者', tradition:'非暴力运动', color:'#e67e22',
    entries:[
      { keywords:'改变,自我,行动,世界,力量,责任', topic:'成为改变', quote:'「你必须成为你希望在世界上看到的改变。」', insight:'改变世界的起点是先改变自己。' },
      { keywords:'非暴力,力量,抵抗,勇气,和平', topic:'非暴力', quote:'「非暴力是人类可以使用的最强大的力量。」', insight:'非暴力不是怯懦——它需要比暴力更大的勇气。' }
    ]},
  { name:'罗素', nameEn:'Bertrand Russell', birthYear:1872, era:'1872—1970', category:'诺贝尔奖得主', tradition:'分析哲学', color:'#2980b9',
    entries:[
      { keywords:'怀疑,确信,愚蠢,智慧,认知', topic:'确信与怀疑', quote:'「这个世界的问题在于：愚蠢的人充满自信，而聪明的人充满怀疑。」', insight:'最该说话的人在犹豫，最不该说话的人在高声宣扬。' },
      { keywords:'幸福,活动,兴趣,参与,投入', topic:'幸福的秘诀', quote:'「幸福的秘诀在于：让你的兴趣尽量广泛，对人和物的反应尽量友善。」', insight:'幸福不是目标而是副产品——全神贯注于有趣的事情时，幸福自然到来。' }
    ]},
  { name:'荣格', nameEn:'Carl Gustav Jung', birthYear:1875, era:'1875—1961', category:'近代学者', tradition:'分析心理学', color:'#8b6cc9',
    entries:[
      { keywords:'自我,阴影,整合,成长,我是谁,面对', topic:'成为你自己', quote:'「你的任务不是变成别人，而是成为你自己——这是世上最艰难的事。」', insight:'成为你自己，意味着面对你一直逃避的那些部分。' },
      { keywords:'潜意识,集体,原型,神话,梦,命运', topic:'集体无意识', quote:'「你没有认识到的潜意识内容，会以命运的形式出现在你的生活中。」', insight:'你以为你在自主选择，但你可能只是在重复一个古老的原型模式。' }
    ]},
  { name:'里尔克', nameEn:'Rainer Maria Rilke', birthYear:1875, era:'1875—1926', category:'作家', tradition:'德语文学', color:'#8b6cc9',
    entries:[
      { keywords:'孤独,爱,保护,两个人,关系', topic:'两个孤独', quote:'「爱，就是两个孤独相互保护、触碰、问候。」', insight:'真正的爱不是融为一体，而是两个完整的孤独彼此守望。' },
      { keywords:'困难,问题,耐心,答案,等待', topic:'活在问题中', quote:'「要耐心地对待心中未解的疑惑，试着去爱问题本身。」', insight:'最深刻的问题不需要立刻解答。让答案在未来自然生长。' }
    ]},
  { name:'爱因斯坦', nameEn:'Albert Einstein', birthYear:1879, era:'1879—1955', category:'诺贝尔奖得主', tradition:'理论物理', color:'#27ae60',
    entries:[
      { keywords:'想象,知识,创造,好奇,学习', topic:'想象力', quote:'「想象力比知识更重要。知识是有限的，想象力能拥抱整个世界。」', insight:'知识告诉你世界是什么样的，想象力让你看到它还能是什么样的。' },
      { keywords:'简单,优雅,复杂,真理', topic:'简单之美', quote:'「一切应该尽可能简单，但不能过于简单。」', insight:'如果你不能简单地解释一件事，说明你还没有真正理解它。' }
    ]},
  { name:'鲁迅', nameEn:'Lu Xun', birthYear:1881, era:'1881—1936', category:'作家', tradition:'中国文学', color:'#d4a017',
    entries:[
      { keywords:'希望,绝望,行动,路,勇气,前行', topic:'希望之路', quote:'「其实地上本没有路，走的人多了，也便成了路。」', insight:'希望不是等来的，路不是发现的，它们都是被创造出来的。' },
      { keywords:'觉醒,铁屋,麻木,叫醒,社会,真相', topic:'铁屋中的呐喊', quote:'「假如一间铁屋子，万难破毁，里面的人们都昏睡——你该不该叫醒他们？」', insight:'鲁迅选择了呐喊——因为不叫醒他们，连破毁的可能都没有。' }
    ]},
  { name:'卡夫卡', nameEn:'Franz Kafka', birthYear:1883, era:'1883—1924', category:'作家', tradition:'德语文学', color:'#8b6cc9',
    entries:[
      { keywords:'异化,荒诞,身份,变形,社会,孤立', topic:'异化', quote:'「一天早晨，格里高尔从不安的睡梦中醒来，发现自己变成了一只巨大的甲虫。」', insight:'当你不再有用，你就不再是人。家人的爱是有条件的。' },
      { keywords:'权力,官僚,迷宫,无力,制度,荒诞', topic:'权力的迷宫', quote:'「正确理解一件事和误解同一件事，两者并不完全相互排斥。」', insight:'权力没有面孔，规则没有逻辑，但你必须服从。' }
    ]},
  { name:'海德格尔', nameEn:'Martin Heidegger', birthYear:1889, era:'1889—1976', category:'哲学家', tradition:'现象学', color:'#c0392b',
    entries:[
      { keywords:'死亡,存在,本真,觉醒,活着', topic:'向死而生', quote:'「向死而生——只有直面死亡，存在才获得本真性。」', insight:'只有真正意识到「我会死」，你才能从庸常中醒来。' },
      { keywords:'技术,世界,思考,现代,危机', topic:'技术的追问', quote:'「技术的本质绝不是技术的。」', insight:'技术把一切都变成可计算、可利用的「资源」，包括人本身。' }
    ]},
  { name:'维特根斯坦', nameEn:'Ludwig Wittgenstein', birthYear:1889, era:'1889—1951', category:'哲学家', tradition:'分析哲学', color:'#27ae60',
    entries:[
      { keywords:'语言,沉默,真理,界限,表达,不可说', topic:'沉默的边界', quote:'「凡可以说的，都可以说清楚；凡不可说的，就必须保持沉默。」', insight:'人生中最重要的事情恰恰是语言无法触及的。' },
      { keywords:'语言,游戏,意义,规则,理解', topic:'语言游戏', quote:'「一个词的意义就是它在语言中的用法。」', insight:'理解一种语言就是理解一种生活形式。' }
    ]},
  { name:'海明威', nameEn:'Ernest Hemingway', birthYear:1899, era:'1899—1961', category:'诺贝尔奖得主', tradition:'美国文学', color:'#27ae60',
    entries:[
      { keywords:'坚强,勇气,压力,优雅,坚韧', topic:'压力下的优雅', quote:'「勇气就是在压力下保持优雅。」', insight:'不是不害怕，而是害怕的同时保持尊严。' },
      { keywords:'失败,坚持,毁灭,不屈,力量', topic:'不可被打败', quote:'「一个人可以被毁灭，但不能被打败。」', insight:'只要你不在精神上投降，你就没有真正失败。' }
    ]},
  { name:'弗洛姆', nameEn:'Erich Fromm', birthYear:1900, era:'1900—1980', category:'近代学者', tradition:'人本心理学', color:'#27ae60',
    entries:[
      { keywords:'爱,艺术,能力,学习,努力,关系', topic:'爱的艺术', quote:'「爱是一门艺术，需要知识和努力——正如任何其他艺术一样。」', insight:'爱是一种能力而非运气。大多数人失败不是因为没遇到对的人，而是没有学会爱。' },
      { keywords:'自由,逃避,孤独,权威,归属', topic:'逃避自由', quote:'「现代人从传统束缚中获得了自由，却不知道用自由做什么。」', insight:'很多人为了逃避自由的重担，主动投向权威主义或盲目从众。' }
    ]},
  { name:'弗兰克尔', nameEn:'Viktor Frankl', birthYear:1905, era:'1905—1997', category:'近代学者', tradition:'存在心理学', color:'#27ae60',
    entries:[
      { keywords:'意义,苦难,选择,态度,集中营,人生', topic:'意义的意志', quote:'「生命向人提出问题，人必须用自己的生命来回答。」', insight:'即使在极端苦难中，人仍可以选择自己的态度。意义是生命对你的提问。' },
      { keywords:'幸福,目的,追求,副产品', topic:'幸福是副产品', quote:'「幸福不可追求——它是投身于比自己更大的事业的副产品。」', insight:'直接追求幸福会让你更不幸。幸福来自于全身心投入有意义的目标。' }
    ]},
  { name:'萨特', nameEn:'Jean-Paul Sartre', birthYear:1905, era:'1905—1980', category:'诺贝尔奖得主', tradition:'存在主义', color:'#c0392b',
    entries:[
      { keywords:'自由,选择,责任,本质,存在', topic:'被判了自由之刑', quote:'「人是被判了自由之刑的。」', insight:'你没有本质，没有天命。你必须在每一刻重新选择成为谁。' },
      { keywords:'他人,地狱,注视,关系,眼光', topic:'他人即地狱', quote:'「他人即地狱。」', insight:'我们永远无法控制别人怎么看自己。别人的目光让你无处可逃。' }
    ]},
  { name:'汉娜·阿伦特', nameEn:'Hannah Arendt', birthYear:1906, era:'1906—1975', category:'近代学者', tradition:'政治哲学', color:'#27ae60',
    entries:[
      { keywords:'恶,平庸,思考,服从,善恶,官僚', topic:'恶的平庸性', quote:'「艾希曼不是恶魔，他只是停止了思考。」', insight:'最大的恶不需要恶意，只需要服从。' },
      { keywords:'行动,自由,开始,新生,政治,勇气', topic:'行动的勇气', quote:'「行动的意义在于开始——每一个新生命都是一个新的开始的可能。」', insight:'人的本质是能够开始新事物。每一个出生都是一个全新的开始。' }
    ]},
  { name:'波伏瓦', nameEn:'Simone de Beauvoir', birthYear:1908, era:'1908—1986', category:'思想大成者', tradition:'存在主义', color:'#c0392b',
    entries:[
      { keywords:'爱,自由,独立,关系,女性', topic:'爱与自由', quote:'「真正的爱应该建立在两个人相互承认自由的基础之上。」', insight:'爱如果要求放弃自我，那就是另一种奴役。' },
      { keywords:'性别,女性,身份,社会,建构', topic:'第二性', quote:'「女人不是天生的，而是后天被塑造成的。」', insight:'你以为的「天性」，可能只是被反复灌输的角色。' }
    ]},
  { name:'以赛亚·伯林', nameEn:'Isaiah Berlin', birthYear:1909, era:'1909—1997', category:'近代学者', tradition:'自由主义', color:'#2980b9',
    entries:[
      { keywords:'自由,消极自由,积极自由,暴政,政治', topic:'两种自由', quote:'「消极自由是不被干涉；积极自由是自我做主。两者都可能走向暴政。」', insight:'「积极自由」常被滥用——以「帮你获得真正的自由」之名压迫你。' },
      { keywords:'价值,多元,冲突,选择,取舍', topic:'价值多元论', quote:'「人类追求的终极价值之间可能根本无法调和。」', insight:'选择一种价值意味着牺牲另一种——这是人类处境的本质。' }
    ]},
  { name:'加缪', nameEn:'Albert Camus', birthYear:1913, era:'1913—1960', category:'诺贝尔奖得主', tradition:'存在主义', color:'#c0392b',
    entries:[
      { keywords:'意义,荒诞,西西弗斯,幸福,反抗', topic:'荒诞与反抗', quote:'「我们必须想象西西弗斯是幸福的。」', insight:'即使石头永远会滚下山，推石头本身就是对荒诞的胜利。' },
      { keywords:'反抗,活着,自杀,哲学,存在', topic:'唯一严肃的哲学问题', quote:'「真正严肃的哲学问题只有一个：自杀。」', insight:'生活值得过——不是因为有意义，而是因为你选择赋予它意义。' }
    ]},
  { name:'索尔仁尼琴', nameEn:'Aleksandr Solzhenitsyn', birthYear:1918, era:'1918—2008', category:'诺贝尔奖得主', tradition:'俄国文学', color:'#2980b9',
    entries:[
      { keywords:'善恶,人性,界线,心灵,道德', topic:'善恶的界线', quote:'「善与恶的界线不是画在国家之间，而是画在每个人的心中。」', insight:'没有纯粹的好人或坏人。每个人心中都有善恶的交战。' },
      { keywords:'真相,谎言,暴力,语言,权力,勇气', topic:'一句真话的力量', quote:'「一句真话比整个世界的分量还重。」', insight:'每说出一句真话，你就在拆除谎言系统的一块砖。' }
    ]},
  { name:'马尔克斯', nameEn:'Gabriel García Márquez', birthYear:1927, era:'1927—2014', category:'诺贝尔奖得主', tradition:'拉美文学', color:'#e67e22',
    entries:[
      { keywords:'孤独,家族,命运,重复,历史', topic:'百年孤独', quote:'「这个家族的第一个人被捆在树上，最后一个人正被蚂蚁吃掉。」', insight:'孤独不是个人命运，而是人类的集体处境。' },
      { keywords:'记忆,时间,故事,过去,怀旧', topic:'记忆与时间', quote:'「生活不是我们活过的日子，而是我们记住的日子。」', insight:'你的人生等于你从中留住的故事。记忆在每次回忆时被重新创作。' }
    ]},
  { name:'马丁·路德·金', nameEn:'Martin Luther King Jr.', birthYear:1929, era:'1929—1968', category:'诺贝尔奖得主', tradition:'民权运动', color:'#27ae60',
    entries:[
      { keywords:'正义,黑暗,光明,希望,行动,爱', topic:'黑暗与光明', quote:'「黑暗不能驱走黑暗，只有光明可以；仇恨不能消灭仇恨，只有爱可以。」', insight:'暴力只会产生更多暴力，爱是唯一能打破循环的力量。' }
    ]},
  { name:'丹尼尔·卡尼曼', nameEn:'Daniel Kahneman', birthYear:1934, era:'1934—2024', category:'诺贝尔奖得主', tradition:'行为经济学', color:'#27ae60',
    entries:[
      { keywords:'决策,偏见,思考,理性,直觉,判断,认知', topic:'快思考与慢思考', quote:'「我们对自己思考过程的信心，远远超出了它应得的程度。」', insight:'大多数时候我们用直觉做决定然后用理性编造理由。' },
      { keywords:'损失,恐惧,风险,选择,厌恶', topic:'损失厌恶', quote:'「失去100元的痛苦大约是得到100元快乐的两倍。」', insight:'人类对损失的敏感度远高于收益，这解释了无数非理性行为。' }
    ]},
  { name:'莫言', nameEn:'Mo Yan', birthYear:1955, era:'1955—', category:'诺贝尔奖得主', tradition:'中国文学', color:'#d4a017',
    entries:[
      { keywords:'讲故事,真相,文学,记忆,乡村,中国', topic:'讲故事的人', quote:'「文学最大的用处，也许就是它没有用处。」', insight:'文学的价值在于它的「无用」——它让你看到你自己，看到你一直逃避的那些真相。' }
    ]}
];

export default thinkers;
