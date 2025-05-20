import { ArticleClass } from '../model/ArticleClass';
import { EnablementItem } from './EnablementItem';

/**
 * 测试Grid 的用法
 */
@Component
export struct GridTestView {
  @State columnCount: number = 4
  @State rowCount: number = 2

  /**
   * fr 是 "fraction"（分数）的缩写
   * @returns
   *
   * 1fr 1fr 的具体含义：表示将可用空间分成2等份，每一列(或行)占据相同的空间
   */
  getColumnTemplate(): string {
    return Array(this.columnCount).fill('1fr').join(' ')
  }

  getRowTemplate(): string {
    return Array(this.rowCount).fill('1fr').join(' ')
  }

  @State enablementList: Array<ArticleClass> = [
    new ArticleClass('1', $r('app.media.tutorial_pic1'), 'Step1 环境的搭建',
      '本篇教程实现了快速入门——一个用于了解和学习HarmonyOS的应用程序。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('2', $r('app.media.tutorial_pic2'), 'Step2 使用Swiper构建运营广告位',
      'Swiper组件提供滑动轮播显示的能力。Swiper本身是一个容器组件，当设置了多个子组件后，可以对这些子组件进行轮播显示。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('3', $r('app.media.tutorial_pic3'), 'Step3 创建和组合视图',
      'Item定义子组件相关特征。相关组件支持使用条件渲染、循环渲染、懒加载等方式生成子组件。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('4', $r('app.media.tutorial_pic4'), 'Step4 网格和列表组建的使用',
      '网格和列表组件中，当Item达到一定数量，内容超过屏幕大小时，可以自动提供滚动功能，适合用于呈现同类数据类型或数据类型集',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('5', $r('app.media.tutorial_pic5'), 'Step5 应用架构设计基础',
      'ArkUI采取MVVM = Model + View + ViewModel模式，将数据与视图绑定在一起，更新数据的时候直接更新视图。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('6', $r('app.media.tutorial_pic6'), 'Step6 ArkWeb页面适配',
      'ArkWeb（方舟Web）提供了Web组件，用于在应用程序中显示Web页面内容，为开发者提供页面加载、页面交互、页面调试等能力。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('7', $r('app.media.tutorial_pic7'), 'Step7 数据驱动UI更新', '数据更新的同时会直接驱动UI的改变',
      'xxx'),
    new ArticleClass('8', $r('app.media.tutorial_pic8'), 'Step8 设置组件导航',
      'Navigation组件适用于模块内页面切换，一次开发，多端部署场景。通过组件级路由能力实现更加自然流畅的转场体验，并提供多种标题栏样式来呈现更好的标题和内容联动效果。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('9', $r('app.media.tutorial_pic8'), 'Step9 原生智能：AI语音朗读',
      '文本转语音服务提供将文本信息转换为语音并进行播报的能力，便于用户与设备进行互动，实现实时语音交互，文本播报。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('10', $r('app.media.tutorial_pic8'), 'Step10 原生互联：分布式流转',
      '流转能力打破设备界限，多设备联动，使用户应用程序可分可合、可流转，实现如邮件跨设备编辑、多设备协同健身、多屏游戏等分布式业务。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
    new ArticleClass('11', $r('app.media.tutorial_pic8'), 'Step11 一次开发，多端部署',
      '一套代码工程，一次开发上架，多端按需部署。支撑开发者快速高效的开发支持多种终端设备形态的应用，实现对不同设备兼容的同时，提供跨设备的流转、迁移和协同的分布式体验。',
      'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
  ];

  build() {

    //this.horizontalNewLocalBuilder()
    this.verticalNewLocalBuilder()

  }

  /**
   * 两行横向滑动
   */
  @Builder
  horizontalNewLocalBuilder() {
    Grid() {

      ForEach(this.enablementList, (item: ArticleClass) => {
        GridItem() {
          //单个高度，180
          EnablementItem({ enablementItem: item });
        };
      }, (item: ArticleClass) => item.id);
    }
    .rowsTemplate(this.getRowTemplate()) //两行

    //.columnsTemplate('1fr 1fr 1fr') //两行
    .columnsGap(8)
    .rowsGap(18)
    //.layoutDirection(GridDirection.Column)
    .scrollBar(BarState.Off)
    .height(378) //注意 height，要 = 两行的高度 + rowsGap，或者更多
    .padding({ top: 2, left: 16, right: 16 })
    .width('100%')
  }

  /**
   * 竖直方向滑动
   */
  @Builder
  verticalNewLocalBuilder() {
    Grid() {

      ForEach(this.enablementList, (item: ArticleClass) => {
        GridItem() {
          //单个高度，180
          EnablementItem({ enablementItem: item });
        };
      }, (item: ArticleClass) => item.id);
    }
    .columnsTemplate('1fr 1fr')
    .columnsGap(8)
    .rowsGap(18)
    .layoutDirection(GridDirection.Row)
    .scrollBar(BarState.Off)
    .height(378) //注意 height，要 = 两行的高度 + rowsGap，或者更多
    .padding({ top: 2, left: 16, right: 16 })
    .width('100%')
  }
}