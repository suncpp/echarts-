xAxis : [
  {
      splitLine:{show:false},
      type : 'category',
      data : ['社交人际','沟通交流','心理认知','游戏玩耍','大小运动','生活自理','执行管控','知识常识'],
      splitArea:{show:false},
      axisLabel: {
          show: true,
          interval:0,
          formatter:function(params) {
              var newParamsName = "";
              var paramsNameNumber = params.length;
              var provideNumber = 2;  //一行显示几个字
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
  },