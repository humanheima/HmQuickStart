/**
 * 赋能套件和竖直列表item用到的数据结构
 */
export class ArticleClass {
  id: string = '';
  imageSrc: string = '';
  title: string = '';
  brief: string = '';
  webUrl: string = ''; //跳转链接

  constructor(id: string, imageSrc: string, title: string, brief: string, webUrl: string) {
    this.id = id;
    this.imageSrc = imageSrc;
    this.title = title;
    this.brief = brief;
    this.webUrl = webUrl;
  }
}