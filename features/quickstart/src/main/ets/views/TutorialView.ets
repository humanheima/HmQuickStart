import { ArticleClass } from '../model/ArticleClass';
import { bufferToString } from '../util/BufferUtil';
import { TutorialItem } from './TutorialItem';

/**
 * 竖直列表组件
 */
@Component
export struct TutorialView {
  @State tutorialList: Array<ArticleClass> = [];

  aboutToAppear(): void {
    this.getTutorialDataFromJSON()
  }

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

  getTutorialDataFromJSON() {
    getContext(this).resourceManager.getRawFileContent('TutorialData.json').then(value => {

      // 转换为字符串
      let res: string = bufferToString(value);
      // 解析为数据结构
      this.tutorialList = JSON.parse(res) as ArticleClass[];
    })

  }
}


