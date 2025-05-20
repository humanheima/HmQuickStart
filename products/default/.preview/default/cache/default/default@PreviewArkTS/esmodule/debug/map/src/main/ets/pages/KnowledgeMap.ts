if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface KnowledgeMap_Params {
    navBarList?: NavBarItemType[];
}
import { NavBarItem } from "@normalized:N&&&map/src/main/ets/pages/NavBarItem&1.0.0";
import type { NavBarItemType } from "@normalized:N&&&map/src/main/ets/pages/NavBarItem&1.0.0";
export class KnowledgeMap extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__navBarList = new ObservedPropertyObjectPU([
            { order: '01', title: '准备与学习' },
            { order: '02', title: '构建应用' },
            { order: '03', title: '应用测试' },
            { order: '04', title: '上架' },
            { order: '05', title: '运营增长' },
            { order: '06', title: '商业变现' },
            { order: '07', title: '更多' }
        ], this, "navBarList");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: KnowledgeMap_Params) {
        if (params.navBarList !== undefined) {
            this.navBarList = params.navBarList;
        }
    }
    updateStateVars(params: KnowledgeMap_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__navBarList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__navBarList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __navBarList: ObservedPropertyObjectPU<NavBarItemType[]>;
    get navBarList() {
        return this.__navBarList.get();
    }
    set navBarList(newValue: NavBarItemType[]) {
        this.__navBarList.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(18:5)", "map");
            Column.padding({
                top: 12,
                right: 16,
                bottom: 12,
                left: 16
            });
            Column.backgroundColor('#F1F3F5');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('知识地图');
            Text.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(19:7)", "map");
            Text.fontFamily('HarmonyHeiTi-Bold');
            Text.fontSize(24);
            Text.fontColor(Color.Black);
            Text.textAlign(TextAlign.Start);
            Text.lineHeight(33);
            Text.fontWeight(700);
            Text.width('100%');
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777257, "type": 20000, params: [], "bundleName": "com.example.quickstart", "moduleName": "default" });
            Image.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(28:7)", "map");
            Image.width('100%');
            Image.borderRadius(16);
            Image.margin({ top: 19, bottom: 8 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('通过循序渐进的学习路径，无经验和有经验的开发者都可以轻松掌握ArkTS语言声明式开发范式，体验更简洁、更友好的HarmonyOS应用开发旅程。');
            Text.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(33:7)", "map");
            Text.fontFamily('HarmonyHeiTi');
            Text.fontSize(14);
            Text.fontColor('rgba(0,0,0,0.60)');
            Text.fontWeight(400);
            Text.textAlign(TextAlign.Start);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: 12 });
            List.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(40:7)", "map");
            List.width('100%');
            List.margin({ top: 24 });
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
                        ListItem.width('100%');
                        ListItem.debugLine("features/map/src/main/ets/pages/KnowledgeMap.ets(44:11)", "map");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        {
                            this.observeComponentCreation2((elmtId, isInitialRender) => {
                                if (isInitialRender) {
                                    let componentCall = new NavBarItem(this, { navBarItem: item }, undefined, elmtId, () => { }, { page: "features/map/src/main/ets/pages/KnowledgeMap.ets", line: 45, col: 13 });
                                    ViewPU.create(componentCall);
                                    let paramsLambda = () => {
                                        return {
                                            navBarItem: item
                                        };
                                    };
                                    componentCall.paramsGenerator_ = paramsLambda;
                                }
                                else {
                                    this.updateStateVarsOfChildByElmtId(elmtId, {
                                        navBarItem: item
                                    });
                                }
                            }, { name: "NavBarItem" });
                        }
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.navBarList, forEachItemGenFunction, (item: NavBarItemType): string => item.title, true, false);
        }, ForEach);
        ForEach.pop();
        List.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
if (getPreviewComponentFlag()) {
    storePreviewComponents(1, "KnowledgeMap", new KnowledgeMap(undefined, {}));
    previewComponent();
}
else {
}
