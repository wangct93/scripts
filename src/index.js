
const {logInfo} = require("@wangct/node-util/lib/log");
const {getCmdParams} = require("@wangct/node-util/lib/system");

start();


function start(){
  const params = getCmdParams();
  const scriptMap = {
    createDefineComponent:require('./create/DefineComponent'),
  };
  const scriptType = params.t || params[0];
  const scriptTarget = scriptMap[scriptType];
  if(scriptTarget && scriptTarget.start){
    scriptTarget.start(params);
  }else{
    logInfo('未找到执行脚本');
  }

}
