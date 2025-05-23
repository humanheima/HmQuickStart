import { CourseLearning } from 'learning';
import { KnowledgeMap, KnowledgeMapContent } from 'map';
import { QuickStartPage } from 'quickstart';

@Entry
@Component
struct Index {
  private tabsController: TabsController = new TabsController()
  @State message: string = 'Hello World';
  @State currentIndex: number = 0

  @Builder
  tabBarBuilder(title: string, targetIndex: number, selectedIcon: Resource, unselectIcon: Resource) {

    Column() {
      Image(this.currentIndex === targetIndex ? selectedIcon : unselectIcon)
        .width(24)
        .height(24)

      Text(title)
        .fontFamily('HarmonyHeiTi-Medium')
        .fontSize(10)
        .fontColor(this.currentIndex === targetIndex ? '#0A59F7' : 'rgba(0,0,0,0.60)')
        .textAlign(TextAlign.Center)
        .lineHeight(14)
        .fontWeight(500)

    }
    .width('100%')
    .height('100%')
    .justifyContent(FlexAlign.Center)
    .alignItems(HorizontalAlign.Center)
    .onClick(() => {
      this.currentIndex = targetIndex;
      this.tabsController.changeIndex(targetIndex)
    })

  }

  build() {
    //设置barPosition为BarPosition.End时，页签栏会位于应用界面的下方进行显示。
    Tabs({ barPosition: BarPosition.End, controller: this.tabsController }) {
      TabContent() {
        QuickStartPage()
      }
      .tabBar(this.tabBarBuilder('快速入门', 0, $r('app.media.ic_01_on'), $r('app.media.ic_01_off')))

      TabContent() {
        Text('TabContent2')
      }
      .tabBar(this.tabBarBuilder('课程学习', 1, $r('app.media.ic_01_on'), $r('app.media.ic_01_off')))

      TabContent() {
        KnowledgeMap()
      }
      .tabBar(this.tabBarBuilder('知识地图', 2, $r('app.media.ic_01_on'), $r('app.media.ic_01_off')))

    }
    .scrollable(false)
    .vertical(false)
    .divider({ strokeWidth: 0.5, color: '#0D182431' })
    .backgroundColor('#F1F3F5')
    .padding({ top: 36, bottom: 28 })

  }
}