export class BannerClass {
  id: string = ""
  imageSrc: string = ""
  url: string = '' //点击后跳转到的在线网页地址，在之后的跳转功能中会用到。

  constructor(id: string, imageSrc: string, url: string) {
    this.id = id
    this.imageSrc = imageSrc
    this.url = url
  }


}