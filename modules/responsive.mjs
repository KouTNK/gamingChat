// スマートフォンかPCかタブレットか判別する。
// PCであれば、トップを調整し、OSごとにショートカットキーの説明文を変える。
// スマートフォンであれば、指示枠、動画、前後の表示枠、入力枠以外は全て消し、全ての要素の横幅を１００％にしてtopを調整する。
//エレメントをリサイズするためのクラス。document.getElementById(id)を代入して使えばいい。
class ResponsiveWebDesign {
    constructor(elementById) {
        this.id = elementById
    }
    get element() {
        return document.getElementById(this.id)
    }
    get style() {
        return document.getElementById(this.id).style
    }
    getHeight() {
        return this.element.getBoundingClientRect().height
    }
    getWidth() {
        return this.element.getBoundingClientRect().width
    }
    getPlayerHeight(aspect) {
        //aspect={height:num,width:num}を作って代入すれば良い．
        return this.getWidth() / aspect.width * aspect.height
    }
    getTop() {
        return this.element.getBoundingClientRect().top
    }
    setHeight(size) {
        this.style.height = size
    }
    setWidth(size) {
        this.style.width = size
    }
    setTop(size) {
        this.style.top = size
    }
    setLeft(size) {
        this.style.left = size
    }
    setInsertAdjacentHTML(position, HTML) {
        this.element.insertAdjacentHTML(position, HTML)
    }
}

function getDeviceType() {
    const isTabletOrPC = "(min-width:768px)"
    if (window.matchMedia(isTabletOrPC).matches) {
        return 'tabletOrPC'
    }
    else {
        return 'smartphone'
    }
}

function responsiveWebDesign(element, top, left, width, aspect) {
    const Frame = new ResponsiveWebDesign(element)
    if (left !== null) {
        Frame.setLeft(left)
    }
    if (width !== null) {
        Frame.setWidth(width)
    }
    if (aspect !== null) {
        const height = Frame.getPlayerHeight(aspect)
        Frame.setHeight(height)
    }
    if (top !== null) {
        Frame.setTop(top)
    }
}

function getTop(element) {
    const Frame = new ResponsiveWebDesign(element)
    return Frame.getTop()
}
function getHeight(element) {
    const Frame = new ResponsiveWebDesign(element)
    return Frame.getHeight()
}

export { getDeviceType, getTop, getHeight, responsiveWebDesign }