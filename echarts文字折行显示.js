xAxis: [{
    splitLine: {
        show: false
    },
    type: 'category',
    data: ['社交人际', '沟通交流', '心理认知', '游戏玩耍', '大小运动', '生活自理', '执行管控', '知识常识'],
    splitArea: {
        show: false
    },
    axisLabel: {
        show: true,
        interval: 0,
        formatter: function (params) {
            var newParamsName = "";
            var paramsNameNumber = params.length;
            var provideNumber = 2; //一行显示几个字
            var rowNumber = Math.ceil(paramsNameNumber / provideNumber);
            if (paramsNameNumber > provideNumber) {
                for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";
                    var start = p * provideNumber;
                    var end = start + provideNumber;
                    if (p == rowNumber - 1) {
                        tempStr = params.substring(start, paramsNameNumber);
                    } else {
                        tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;
                }

            } else {
                newParamsName = params;
            }
            return newParamsName
        },
        textStyle: {
            color: '#6861a6' //文字颜色
        }
    }
}]

formatter: function (params, index) {
    //============================================================== */
    // 对特定的文字做处理
    if (index == 0 || index == 1 || index == 3 || index == 6) {
        var temp = params.substring(2);
        return params.substring(0, 2) + "\n" + temp;
    }
    //============================================================== */
    var newParamsName = ""; // 最终拼接成的字符串
    var paramsNameNumber = params.length; // 实际标签的个数
    //============================================================== */
    var provideNumber = Math.ceil(paramsNameNumber/2); // 每行能显示的字的个数
    //============================================================== */
    var rowNumber = Math.ceil(paramsNameNumber / provideNumber); // 换行的话，需要显示几行，向上取整
    /**
     * 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
     */
    // 条件等同于rowNumber>1
    if (paramsNameNumber > provideNumber) {
        /** 循环每一行,p表示行 */
        for (var p = 0; p < rowNumber; p++) {
            var tempStr = ""; // 表示每一次截取的字符串
            var start = p * provideNumber; // 开始截取的位置
            var end = start + provideNumber; // 结束截取的位置
            // 此处特殊处理最后一行的索引值
            if (p == rowNumber - 1) {
                tempStr = params.substring(start, paramsNameNumber);
            } else {
                // 每一次拼接字符串并换行
                tempStr = params.substring(start, end) + "\n";
            }
            newParamsName += tempStr; // 最终拼成的字符串
        }
    } else {
        // 将旧标签的值赋给新标签
        // newParamsName = params;
    }
    //将最终的字符串返回
    return newParamsName;
}