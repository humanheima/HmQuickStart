import { BannerClass } from "../model/BannerClass"
import { bufferToString } from "../util/BufferUtil"
import { hilog } from "@kit.PerformanceAnalysisKit"

const TAG = 'Banner';

@Component
export struct Banner {
  // @State bannerList: Array<BannerClass> = [
  //   new BannerClass('pic0', 'app.media.banner_pic0',
  //     'https://developer.huawei.com/consumer/cn/training/course/video/C101718352529709527'),
  //   new BannerClass('pic1', 'app.media.banner_pic1',
  //     'https://developer.huawei.com/consumer/cn/'),
  //   new BannerClass('pic2', 'app.media.banner_pic2',
  //     'https://developer.huawei.com/consumer/cn/deveco-studio/'),
  //   new BannerClass('pic3', 'app.media.banner_pic3',
  //     'https://developer.huawei.com/consumer/cn/arkts/'),
  //   new BannerClass('pic4', 'app.media.banner_pic4',
  //     'https://developer.huawei.com/consumer/cn/arkui/'),
  //   new BannerClass('pic5', 'app.media.banner_pic5',
  //     'https://developer.huawei.com/consumer/cn/sdk')
  // ]


  @State bannerList: Array<BannerClass> = []
  @Consume('articlePathStack') articlePathStack: NavPathStack;

  aboutToAppear(): void {

    this.getBannerDataFromJSON()
  }

  getBannerDataFromJSON() {

    //由于ResourceManager获取到的是Uint8Array类型的内容，
    //所以需要将对应的内容转换为字符串，并将字符串解析为对应的数据结构
    getContext(this).resourceManager.getRawFileContent('BannerData.json')
      .then(value => {
        // 转换为字符串
        let res: string = bufferToString(value)
        // 解析为数据结构
        this.bannerList = JSON.parse(res) as BannerClass[];
        hilog.debug(0x0000, TAG, 'this.bannerList.size  =  %{public}s', this.bannerList.toString())
      })
  }

  build() {

    Swiper() {
      ForEach(this.bannerList, (item: BannerClass) => {

        Image($r(item.imageSrc))
          .objectFit(ImageFit.Contain)
          .width('100%')
          .padding({ top: 11, left: 16, right: 16 })
          .borderRadius(16)
          .onClick(()=>{
            this.articlePathStack.pushPathByName('bannerDetailPage',item)
          })
      },
        (item: BannerClass) => {
          return item.id
        }
      )
    }

    .autoPlay(true)
    .loop(true)
    .indicator(new DotIndicator().color('#1a000000').selectedColor('#0A59F7'))

  }
}