/**
 * 赋能组件
 */
import { ArticleClass } from '../model/ArticleClass';
import { bufferToString } from '../util/BufferUtil';
import { EnablementItem } from './EnablementItem';

@Component
export struct EnablementView {

  @Consume('articlePathStack') articlePathStack: NavPathStack;

  @State enablementList: Array<ArticleClass> = [];

  aboutToAppear(): void {
    this.getEnablementDataFromJSON()
  }

  build() {

    Column() {
      Text('赋能套件')
        .fontColor('#182431')
        .fontSize(16)
        .fontWeight(500)
        .fontFamily('HarmonyHeiTi-medium')
        .textAlign(TextAlign.Start)
        .padding({ left: 16 })
        .margin({ bottom: 8.5 })
      Grid() {

        ForEach(this.enablementList, (item: ArticleClass) => {
          GridItem() {
            EnablementItem({ enablementItem: item })
              .onClick(() => {
                this.articlePathStack.pushPathByName('articleDetail', item)
              })
          }
        }, (item: ArticleClass) => item.id)
      }
      .rowsTemplate('1fr')
      .columnsGap(8)
      .scrollBar(BarState.Off)
      .height(169)
      .padding({ top: 2, left: 16, right: 16 })
    }
    .margin({ top: 18 })
    .alignItems(HorizontalAlign.Start)
    .width('100%')

  }

  getEnablementDataFromJSON() {
    getContext(this).resourceManager.getRawFileContent('EnablementData.json').then(value => {

      // 转换为字符串
      let res: string = bufferToString(value);
      // 解析为数据结构
      this.enablementList = JSON.parse(res) as ArticleClass[];
    })

  }
}


