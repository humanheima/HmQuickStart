if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface EnablementItem_Params {
    enablementItem?: ArticleClass;
    title?: string;
    brief?: string;
}
interface EnablementView_Params {
    enablementList?: Array<ArticleClass>;
}
import { ArticleClass } from "@normalized:N&&&entry/src/main/ets/model/ArticleClass&";
export class EnablementView extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__enablementList = new ObservedPropertyObjectPU([
            new ArticleClass('1', { "id": 16777235, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, 'HarmonyOS第一课', '基于真实的开发场景，提供向导式学习，多维度融合课程等内容，给开发者提供全新的学习体验。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-video-courses/video-tutorials-0000001443535745'),
            new ArticleClass('2', { "id": 16777239, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, '开发指南', '提供系统能力概述、快速入门，用于指导开发者进行场景化的开发。指南涉及到的知识点包括必要的背景知识、符合开发者实际开发场景的操作任务流（开发流程、开发步骤、调测验证）以及常见问题等。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/application-dev-guide-0000001630265101'),
            new ArticleClass('3', { "id": 16777248, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, '最佳实践', '针对新发布特性及热点特性提供详细的技术解析和开发最佳实践。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-guides/topic-architecture-0000001678045510'),
            new ArticleClass('4', { "id": 16777236, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, 'Codelabs', '以教学为目的的代码样例及详细的开发指导，帮助开发者一步步地完成指定场景的应用开发并掌握相关知识。Codelabs将最新的鸿蒙生态应用开发技术与典型场景结合，让开发者快速地掌握开发高质量应用的方法。同时支持互动式操作，通过文字、代码和效果联动为开发者带来更佳的学习体验。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-codelabs/codelabs-0000001443855957'),
            new ArticleClass('5', { "id": 16777237, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, 'Sample', '面向不同类型的开发者提供的鸿蒙生态应用开发优秀实践，每个Sample Code都是一个可运行的工程，为开发者提供实例化的代码参考。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-samples/samples-0000001162414961'),
            new ArticleClass('6', { "id": 16777244, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, 'API参考', '面向开发者提供鸿蒙系统开放接口的全集，供开发者了解具体接口使用方法。API参考详细地描述了每个接口的功能、使用限制、参数名、参数类型、参数含义、取值范围、权限、注意事项、错误码及返回值等。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-references/development-intro-0000001580026066'),
            new ArticleClass('7', { "id": 16777240, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, 'FAQ', '开发者常见问题的总结，开发者可以通过FAQ更高效地解决常见问题。FAQ会持续刷新，及时呈现最新的常见问题。', 'https://developer.huawei.com/consumer/cn/doc/harmonyos-faqs/faqs-development-0000001753952202'),
            new ArticleClass('8', { "id": 16777249, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "entry" }, '开发者论坛', '和其他应用开发者交流技术、共同进步。', 'https://developer.huawei.com/consumer/cn/forum/home?all=1'),
        ], this, "enablementList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EnablementView_Params) {
        if (params.enablementList !== undefined) {
            this.enablementList = params.enablementList;
        }
    }
    updateStateVars(params: EnablementView_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__enablementList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__enablementList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __enablementList: ObservedPropertyObjectPU<Array<ArticleClass>>;
    get enablementList() {
        return this.__enablementList.get();
    }
    set enablementList(newValue: Array<ArticleClass>) {
        this.__enablementList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/EnablementView.ets(33:5)", "entry");
            Column.margin({ top: 18 });
            Column.alignItems(HorizontalAlign.Start);
            Column.width('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('赋能套件');
            Text.debugLine("entry/src/main/ets/view/EnablementView.ets(34:7)", "entry");
            Text.fontColor('#182431');
            Text.fontSize(16);
            Text.fontWeight(500);
            Text.fontFamily('HarmonyHeiTi-medium');
            Text.textAlign(TextAlign.Start);
            Text.padding({ left: 16 });
            Text.margin({ bottom: 8.5 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Grid.create();
            Grid.debugLine("entry/src/main/ets/view/EnablementView.ets(43:7)", "entry");
            Grid.rowsTemplate('1fr');
            Grid.columnsGap(8);
            Grid.scrollBar(BarState.Off);
            Grid.height(169);
            Grid.padding({ top: 2, left: 16, right: 16 });
        }, Grid);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        GridItem.create(() => { }, false);
                        GridItem.debugLine("entry/src/main/ets/view/EnablementView.ets(46:11)", "entry");
                    };
                    const observedDeepRender = () => {
                        this.observeComponentCreation2(itemCreation2, GridItem);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new EnablementItem(this, { enablementItem: item }, undefined, elmtId, () => { }, { page: "entry/src/main/ets/view/EnablementView.ets", line: 47, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            enablementItem: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        enablementItem: item
                                    });
                                }
                            }, { name: "EnablementItem" });
                        }
                        GridItem.pop();
                    };
                    observedDeepRender();
                }
            };
            this.forEachUpdateFunction(elmtId, this.enablementList, forEachItemGenFunction, (item: ArticleClass) => item.id, false, false);
        }, ForEach);
        ForEach.pop();
        Grid.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
class EnablementItem extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__enablementItem = new SynchedPropertyObjectOneWayPU(params.enablementItem, this, "enablementItem");
        this.title = 'HarmonyOS第一课';
        this.brief = '基于真实的开发场景，提供向导式学习，多维度融合课程等内容，给开发者提供全新的学习体验。';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: EnablementItem_Params) {
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.brief !== undefined) {
            this.brief = params.brief;
        }
    }
    updateStateVars(params: EnablementItem_Params) {
        this.__enablementItem.reset(params.enablementItem);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__enablementItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__enablementItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __enablementItem: SynchedPropertySimpleOneWayPU<ArticleClass>;
    get enablementItem() {
        return this.__enablementItem.get();
    }
    set enablementItem(newValue: ArticleClass) {
        this.__enablementItem.set(newValue);
    }
    private title: string;
    private brief: string;
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("entry/src/main/ets/view/EnablementView.ets(73:5)", "entry");
            Column.width(160);
            Column.height(169);
            Column.borderRadius(16);
            Column.backgroundColor(Color.White);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.enablementItem.imageSrc);
            Image.debugLine("entry/src/main/ets/view/EnablementView.ets(74:7)", "entry");
            Image.width('100%');
            Image.height(96);
            Image.objectFit(ImageFit.Cover);
            Image.borderRadius({ topLeft: 16, topRight: 16 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.enablementItem.title);
            Text.debugLine("entry/src/main/ets/view/EnablementView.ets(80:7)", "entry");
            Text.height(19);
            Text.width('100%');
            Text.fontSize(14);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(1);
            Text.fontWeight(400);
            Text.padding({ left: 12, right: 12 });
            Text.margin({ top: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.enablementItem.brief);
            Text.debugLine("entry/src/main/ets/view/EnablementView.ets(91:7)", "entry");
            Text.height(32);
            Text.fontSize(12);
            Text.textAlign(TextAlign.Start);
            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
            Text.maxLines(2);
            Text.fontWeight(400);
            Text.fontColor('rgab(0,0,0,0.6)');
            Text.padding({ left: 12, right: 12 });
            Text.margin({ top: 2 });
        }, Text);
        Text.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
