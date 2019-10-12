"tooltip": {
       "trigger": "axis",
       "axisPointer": {
        "type": "shadow",
        "textStyle": {
        "color": "#fff"
},
"label": {
        "precision": 2,
    }
},
formatter : function(params, ticket, callback) {
    let obj = params.map((item, index) => {
        if (item.value == undefined || item.value !== item.value) {
                item.value = 0;
        }
        // 小圆点显示
        let dotColor = '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:' + item.color + '"></span>'
        return dotColor + item.seriesName + ":" + item.value + '</br>'
    })
    return obj.join('') // 去除','
    }
},