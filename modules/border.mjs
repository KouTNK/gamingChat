//ボーダーに関するモジュール。
//現在、ボーダーのオンオフ、ボーダーを動かす関数がある。
const borderStyle = {
    solid: 'solid',
    none: 'none'
}
const arrow = {
    down: 'ArrowDown',
    right: 'ArrowRight',
    left: 'ArrowLeft',
    up: 'ArrowUp'
}
function border(element, style) {
    element.style.borderStyle = style
}
//同時押し用。
function pressKeyAndOtherKey(tmpKeydown, key, otherKey) {
    return tmpKeydown[0] === key && tmpKeydown[1] === otherKey || tmpKeydown[0] === otherKey && tmpKeydown[1] === key
}
//今後、ボタンの数が縦3x横3、4x4などでも対応できるような関数を作る。
function moveFromTop1(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            border(buttons.top1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (event.key === arrow.right) {
            border(buttons.top1, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.top1, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            return
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            border(buttons.top1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            return
        }
        else {
            if (event.key === arrow.down) {
                border(buttons.top1, borderStyle.none)
                border(buttons.middle1, borderStyle.solid)
            }
            else if (event.key === arrow.right) {
                border(buttons.top1, borderStyle.none)
                border(buttons.top2, borderStyle.solid)
            }
            else if (event.key === arrow.left) {
                return
            }
            else if (event.key === arrow.up) {
                return
            }
            else return
        }
    }
}
function moveFromTop2(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            border(buttons.top2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (event.key === arrow.right) {
            border(buttons.top2, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.top2, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            return
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            border(buttons.top2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            return
        }
        else {
            if (event.key === arrow.down) {
                border(buttons.top2, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else if (event.key === arrow.right) {
                border(buttons.top2, borderStyle.none)
                border(buttons.top3, borderStyle.solid)
            }
            else if (event.key === arrow.left) {
                border(buttons.top2, borderStyle.none)
                border(buttons.top1, borderStyle.solid)
            }
            else if (event.key === arrow.up) {
                return
            }
            else return
        }
    }
}
function moveFromTop3(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            border(buttons.top3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (event.key === arrow.right) {
            border(buttons.top3, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.top3, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            return
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            border(buttons.top3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            return
        }
        else {
            if (event.key === arrow.down) {
                border(buttons.top3, borderStyle.none)
                border(buttons.middle3, borderStyle.solid)
            }
            else if (event.key === arrow.right) {
            }
            else if (event.key === arrow.left) {
                border(buttons.top3, borderStyle.none)
                border(buttons.top2, borderStyle.solid)
            }
            else if (event.key === arrow.up) {
                return
            }
            else return
        }
    }
}
function moveFromMiddle1(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (event.key === arrow.right) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            border(buttons.middle1, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else {
            if (event.key === arrow.down) {
                border(buttons.middle1, borderStyle.none)
                border(buttons.bottom1, borderStyle.solid)
            }
            else if (event.key === arrow.right) {
                border(buttons.middle1, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else if (event.key === arrow.left) {
                return
            }
            else if (event.key === arrow.up) {
                border(buttons.middle1, borderStyle.none)
                border(buttons.top1, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromMiddle2(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (event.key === arrow.right) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            border(buttons.middle2, borderStyle.none)
            border(buttons.top2, borderStyle.solid)
        }
        else {
            if (event.key === arrow.down) {
                border(buttons.middle2, borderStyle.none)
                border(buttons.bottom2, borderStyle.solid)
            }
            else if (event.key === arrow.right) {
                border(buttons.middle2, borderStyle.none)
                border(buttons.middle3, borderStyle.solid)
            }
            else if (event.key === arrow.left) {
                border(buttons.middle2, borderStyle.none)
                border(buttons.middle1, borderStyle.solid)
            }
            else if (event.key === arrow.up) {
                border(buttons.middle2, borderStyle.none)
                border(buttons.top2, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromMiddle3(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (event.key === arrow.right) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            border(buttons.middle3, borderStyle.none)
            border(buttons.top3, borderStyle.solid)
        }
        else {
            if (event.key === arrow.down) {
                border(buttons.middle3, borderStyle.none)
                border(buttons.bottom3, borderStyle.solid)
            }
            else if (event.key === arrow.right) {
                return
            }
            else if (event.key === arrow.left) {
                border(buttons.middle3, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else if (event.key === arrow.up) {
                border(buttons.middle3, borderStyle.none)
                border(buttons.top3, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromBottom1(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            return
        }
        else if (event.key === arrow.right) {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            return
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            border(buttons.bottom1, borderStyle.none)
            border(buttons.middle1, borderStyle.solid)
        }
        else {
            if (event.key === arrow.down) {
                return
            }
            else if (event.key === arrow.right) {
                border(buttons.bottom1, borderStyle.none)
                border(buttons.bottom2, borderStyle.solid)
            }
            else if (event.key === arrow.left) {
                return
            }
            else if (event.key === arrow.up) {
                border(buttons.bottom1, borderStyle.none)
                border(buttons.middle1, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromBottom2(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            return
        }
        else if (event.key === arrow.right) {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.bottom3, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.bottom1, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            return
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            border(buttons.bottom2, borderStyle.none)
            border(buttons.middle2, borderStyle.solid)
        }
        else {
            if (event.key === arrow.down) {
                return
            }
            else if (event.key === arrow.right) {
                border(buttons.bottom2, borderStyle.none)
                border(buttons.bottom3, borderStyle.solid)
            }
            else if (event.key === arrow.left) {
                border(buttons.bottom2, borderStyle.none)
                border(buttons.bottom1, borderStyle.solid)
            }
            else if (event.key === arrow.up) {
                border(buttons.bottom2, borderStyle.none)
                border(buttons.middle2, borderStyle.solid)
            }
            else return
        }
    }
}
function moveFromBottom3(buttons, event, tmpKeydown) {
    if (tmpKeydown.length === 1) {
        if (event.key === arrow.down) {
            return
        }
        else if (event.key === arrow.right) {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.top1, borderStyle.solid)
        }
        else if (event.key === arrow.left) {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.bottom2, borderStyle.solid)
        }
        else if (event.key === arrow.up) {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else return
    }
    if (tmpKeydown.length === 2) {
        if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.right)) {
            return
        }
        else if (pressKeyAndOtherKey(tmpKeydown, 'Enter', arrow.left)) {
            border(buttons.bottom3, borderStyle.none)
            border(buttons.middle3, borderStyle.solid)
        }
        else {
            if (event.key === arrow.down) {
                return
            }
            else if (event.key === arrow.right) {
                return
            }
            else if (event.key === arrow.left) {
                border(buttons.bottom3, borderStyle.none)
                border(buttons.bottom2, borderStyle.solid)
            }
            else if (event.key === arrow.up) {
                border(buttons.bottom3, borderStyle.none)
                border(buttons.middle3, borderStyle.solid)
            }
            else return
        }
    }
}
function getBorderStyle(element) {
    return element.style.borderStyle
}
function findBorderButton(obj, borderStyle) {
    for (let element in obj) {
        if (borderStyle === getBorderStyle(obj[element])) return element
    }
}
export {
    moveFromTop1,
    moveFromTop2,
    moveFromTop3,
    moveFromMiddle1,
    moveFromMiddle2,
    moveFromMiddle3,
    moveFromBottom1,
    moveFromBottom2,
    moveFromBottom3,
    border,
    borderStyle,
    findBorderButton
}