import { ArticleClass } from "../model/ArticleClass";
import { TutorialItem } from "./TutorialItem";

/**
 * 竖直列表组件
 */
@Component
export struct TutorialView {
  @State tutorialList: Array<ArticleClass> = [];

  build() {
    Column() {
      Text('入门教程')
        .fontColor('#182431')
        .fontSize(16)
        .fontWeight(500)
        .fontFamily('HarmonyHeiTi-medium')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .margin({ bottom: 8.5 })

      List({ space: 12 }) {
        ForEach(this.tutorialList, (item: ArticleClass) => {
          ListItem() {
            TutorialItem({ tutorialItem: item })
          }
        }, (item: ArticleClass) => item.id)
      }
      .scrollBar(BarState.Off)
      .padding({ left: 16, right: 16 })

    }.margin({ top: 18 })
    .alignItems(HorizontalAlign.Start)

  }
}


