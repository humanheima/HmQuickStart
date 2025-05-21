import { NavBarItemType } from '../model/NavBarItemType';

@Component
export struct NavBarItem {
  @Consume('knowledgeMapPageStack') knowledgeMapPageStack: NavPathStack;
  @Prop navBarItem: NavBarItemType;
  @Link currentNavBarIndex: number;

  build() {

    Row() {
      Text(this.navBarItem.order)
        .margin({ right: 6 })
        .fontFamily('HarmonyHeiTi-Bold')
        .fontSize(21)
        .fontColor('#182431')
        .textAlign(TextAlign.Start)
        .lineHeight(22)
        .fontWeight(700)

      Text(this.navBarItem.title)
        .fontFamily('HarmonyHeiTi-Medium')
        .fontSize(16)
        .fontColor('#182431')
        .textAlign(TextAlign.Start)
        .lineHeight(22)
        .fontWeight(500)

      Blank()

      Image($r('app.media.ic_arrow'))
        .width(12)
        .height(24)

    }
    .width('100%')
    .height(48)
    .borderRadius(16)
    .alignItems(VerticalAlign.Center) //竖直方向上居中
    .padding({ left: 12, right: 12 })
    .onClick(() => {
      const index = Number(this.navBarItem.order) - 1;
      this.currentNavBarIndex = index;
      this.knowledgeMapPageStack.replacePath({ name: 'KnowledgeMapContent' })
    })
    .backgroundColor(
      this.currentNavBarIndex === Number(this.navBarItem.order) - 1 ?
        '#1A0A59F7' :
      Color.Transparent
    )

  }
}