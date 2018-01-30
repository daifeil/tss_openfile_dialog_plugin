cordova.define("cordova/plugin/progressdialog", function(require, exports, module) { 

	var exec = require('cordova/exec');
	
	module.exports = {

		/**  
31.     * һ��5������  
32.       ��һ�� :�ɹ��ص�  
33.       �ڶ��� :ʧ�ܻص�  
34.       ������ :��Ҫ���õ������������(��config.xml������ �Ժ�������ὲ��)  
35.       ���ĸ� :���õķ�����(һ����������ж������ �������������)  
36.       ����� :���ݵĲ���  ��json�ĸ�ʽ  
37.     */ 
		
		show : function(message,successCB,failCB) {
	        exec(successCB, failCB, "ProgressDialog", "show", message);
		},
		
		hide : function(message,successCB,failCB) {
			exec(successCB, failCB, "ProgressDialog", "hide", message);
		}
	
	};

});

if (!window.plugins) {
	window.plugins = {};
}

console.log("�����ע��cordova...");
window.plugins.progressdialog = cordova.require("cordova/plugin/progressdialog");
console.log("ע������" + typeof(window.plugins.progressdialog));