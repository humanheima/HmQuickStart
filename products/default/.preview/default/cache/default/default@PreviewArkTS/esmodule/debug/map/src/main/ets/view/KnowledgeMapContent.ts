if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface KnowledgeMapContent_Params {
    section?: Section;
}
interface KnowledgeBlockLine_Params {
    knowledgeBaseItem?: KnowledgeBaseItem;
}
interface KnowledgeBlock_Params {
    material?: Material;
}
interface KnowledgeBaseItem {
    type: string;
    title: string;
}
interface Material {
    subtitle: string;
    knowledgeBase: KnowledgeBaseItem[];
}
export interface Section {
    title: string;
    brief: string;
    materials: Material[];
}
const TypeMapIcon: Record<string, string> = {
    '指南': 'app.media.ic_guide',
    '准备': 'app.media.ic_prepare',
    '学习与获取证书': 'app.media.ic_medals',
    '视频教程': 'app.media.ic_video',
};
export class KnowledgeBlock extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__material = new SynchedPropertyObjectOneWayPU(params.material, this, "material");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeBlock_Params) {
    }
    updateStateVars(params: KnowledgeBlock_Params) {
        this.__material.reset(params.material);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__material.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__material.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __material: SynchedPropertySimpleOneWayPU<Material>;
    get material() {
        return this.__material.get();
    }
    set material(newValue: Material) {
        this.__material.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(34:5)", "map");
            Column.width('100%');
            Column.margin({ top: 28 });
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.material.subtitle);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(35:7)", "map");
            Text.fontFamily('HarmonyHeiTi-Medium');
            Text.fontSize(14);
            Text.fontWeight(500);
            Text.margin({ bottom: 8 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 12 });
            List.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(41:7)", "map");
            List.backgroundColor(Color.White);
            List.borderRadius(16);
            List.padding({ left: 12, right: 12 });
            List.divider({
                strokeWidth: 0.5,
                startMargin: 38,
                endMargin: 0,
                color: '#F2F2F2'
            });
        }, List);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = (_item, index: number) => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(43:11)", "map");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new KnowledgeBlockLine(this, { knowledgeBaseItem: item }, undefined, elmtId, () => { }, { page: "features/map/src/main/ets/view/KnowledgeMapContent.ets", line: 44, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            knowledgeBaseItem: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        knowledgeBaseItem: item
                                    });
                                }
                            }, { name: "KnowledgeBlockLine" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.material.knowledgeBase, forEachItemGenFunction, (item: KnowledgeBaseItem, index: number) => item.title, true, true);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class KnowledgeBlockLine extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__knowledgeBaseItem = new SynchedPropertyObjectOneWayPU(params.knowledgeBaseItem, this, "knowledgeBaseItem");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeBlockLine_Params) {
    }
    updateStateVars(params: KnowledgeBlockLine_Params) {
        this.__knowledgeBaseItem.reset(params.knowledgeBaseItem);
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__knowledgeBaseItem.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__knowledgeBaseItem.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    // @State navBarItem: NavBarItemType = {
    //   order: '01',
    //   title: '准备与学习'
    // }
    private __knowledgeBaseItem: SynchedPropertySimpleOneWayPU<KnowledgeBaseItem>;
    get knowledgeBaseItem() {
        return this.__knowledgeBaseItem.get();
    }
    set knowledgeBaseItem(newValue: KnowledgeBaseItem) {
        this.__knowledgeBaseItem.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(77:5)", "map");
            Row.width('100%');
            Row.height(64);
            Row.alignItems(VerticalAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": -1, "type": -1, params: [TypeMapIcon[this.knowledgeBaseItem.type]], "bundleName": "com.example.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(79:7)", "map");
            Image.width(20);
            Image.height(20);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(83:7)", "map");
            Column.alignItems(HorizontalAlign.Start);
            Column.margin({ left: 18 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Text(this.knowledgeBaseItem.type)
            //   .margin({ right: 6 })
            //   .fontFamily('HarmonyHeiTi-Bold')
            //   .fontSize(21)
            //   .fontColor('#182431')
            //   .textAlign(TextAlign.Start)
            //   .lineHeight(22)
            //   .fontWeight(700)
            Text.create(this.knowledgeBaseItem.title);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(94:9)", "map");
            // Text(this.knowledgeBaseItem.type)
            //   .margin({ right: 6 })
            //   .fontFamily('HarmonyHeiTi-Bold')
            //   .fontSize(21)
            //   .fontColor('#182431')
            //   .textAlign(TextAlign.Start)
            //   .lineHeight(22)
            //   .fontWeight(700)
            Text.fontFamily('HarmonyHeiTi-Medium');
            // Text(this.knowledgeBaseItem.type)
            //   .margin({ right: 6 })
            //   .fontFamily('HarmonyHeiTi-Bold')
            //   .fontSize(21)
            //   .fontColor('#182431')
            //   .textAlign(TextAlign.Start)
            //   .lineHeight(22)
            //   .fontWeight(700)
            Text.fontSize(16);
            // Text(this.knowledgeBaseItem.type)
            //   .margin({ right: 6 })
            //   .fontFamily('HarmonyHeiTi-Bold')
            //   .fontSize(21)
            //   .fontColor('#182431')
            //   .textAlign(TextAlign.Start)
            //   .lineHeight(22)
            //   .fontWeight(700)
            Text.fontColor('#182431');
            // Text(this.knowledgeBaseItem.type)
            //   .margin({ right: 6 })
            //   .fontFamily('HarmonyHeiTi-Bold')
            //   .fontSize(21)
            //   .fontColor('#182431')
            //   .textAlign(TextAlign.Start)
            //   .lineHeight(22)
            //   .fontWeight(700)
            Text.fontWeight(500);
        }, Text);
        // Text(this.knowledgeBaseItem.type)
        //   .margin({ right: 6 })
        //   .fontFamily('HarmonyHeiTi-Bold')
        //   .fontSize(21)
        //   .fontColor('#182431')
        //   .textAlign(TextAlign.Start)
        //   .lineHeight(22)
        //   .fontWeight(700)
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(103:7)", "map");
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777258, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(105:7)", "map");
            Image.width(12);
            Image.height(24);
        }, Image);
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
export class KnowledgeMapContent extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__section = new ObservedPropertyObjectPU({
            "title": "准备与学习",
            "brief": "加入HarmonyOS生态，注册成为开发者，通过HarmonyOS课程了解基本概念和基础知识，轻松开启HarmonyOS的开发旅程。",
            "materials": [
                {
                    "subtitle": "HarmonyOS简介",
                    "knowledgeBase": [
                        { "type": "准备", "title": "注册账号" },
                        { "type": "准备", "title": "实名认证" },
                        { "type": "学习与获取证书", "title": "HarmonyOS第一课" },
                        { "type": "学习与获取证书", "title": "HarmonyOS应用开发者基础认证" }
                    ]
                },
                {
                    "subtitle": "赋能套件介绍",
                    "knowledgeBase": [
                        { "type": "指南", "title": "开发" },
                        { "type": "指南", "title": "最佳实践" },
                        { "type": "指南", "title": "API参考" },
                        { "type": "指南", "title": "视频课程" },
                        { "type": "指南", "title": "Codelabs" },
                        { "type": "指南", "title": "FAQ" }
                    ]
                }
            ]
        }, this, "section");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeMapContent_Params) {
        if (params.section !== undefined) {
            this.section = params.section;
        }
    }
    updateStateVars(params: KnowledgeMapContent_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__section.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__section.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __section: ObservedPropertyObjectPU<Section>;
    get section() {
        return this.__section.get();
    }
    set section(newValue: Section) {
        this.__section.set(newValue);
    }
    // @Builder
    // KnowledgeBlockLine(knowledgeBaseItem:KnowledgeBaseItem){
    //
    //
    //
    // }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Scroll.create();
            Scroll.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(157:5)", "map");
            Scroll.align(Alignment.TopStart);
            Scroll.constraintSize({ minHeight: '100%' });
            Scroll.edgeEffect(EdgeEffect.Spring);
            Scroll.scrollable(ScrollDirection.Vertical);
            Scroll.scrollBar(BarState.Auto);
            Scroll.backgroundColor('#F1F3F5');
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(158:7)", "map");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.section?.title);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(159:9)", "map");
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(20);
            Text.fontWeight(700);
            Text.fontColor(Color.Black);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.section?.brief);
            Text.debugLine("features/map/src/main/ets/view/KnowledgeMapContent.ets(166:9)", "map");
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new KnowledgeBlock(this, { material: item }, undefined, elmtId, () => { }, { page: "features/map/src/main/ets/view/KnowledgeMapContent.ets", line: 169, col: 11 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {
                                    material: item
                                };
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {
                                material: item
                            });
                        }
                    }, { name: "KnowledgeBlock" });
                }
            };
            this.forEachUpdateFunction(elmtId, this.section.materials, forEachItemGenFunction, (item: Material) => item.subtitle, false, false);
        }, ForEach);
        ForEach.pop();
        Column.pop();
        Scroll.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "KnowledgeMapContent", new KnowledgeMapContent(undefined, {}));
    previewComponent();
}
else {
}
