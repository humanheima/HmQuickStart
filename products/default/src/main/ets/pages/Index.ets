import { CourseLearning } from 'learning';
import { KnowledgeMap, KnowledgeMapContent } from 'map';
import { QuickStartPage } from 'quickstart';

@Entry
@Component
struct Index {
  @State message: string = 'Hello World';

  build() {

    // Scroll(){
    //   Column() {
    //     //QuickStartPage()
    //     //CourseLearning()
    //     KnowledgeMap()
    //   }
    // }
    // .backgroundColor('#F1F3F5')
    // .align(Alignment.TopStart)
    // .constraintSize({minHeight:'100%'})
    // .edgeEffect(EdgeEffect.Spring)


    Column() {
      KnowledgeMapContent()
    }.backgroundColor('#F1F3F5')
    .padding({ top: 36, bottom: 28 })

  }
}