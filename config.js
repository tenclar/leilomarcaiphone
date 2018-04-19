define( function ( require ) {

	"use strict";

	return {
		app_slug : 'app-iphone',
		wp_ws_url : 'http://www.leilomarca.com.br/portal/wp-appkit-api/app-iphone',
		wp_url : 'http://www.leilomarca.com.br/portal',
		theme : 'wpak-theme-bootstrap-master',
		version : '1.0',
		app_type : 'phonegap-build',
		app_title : 'Leilo Marca Leilões Rurais',
		app_platform : 'ios',
		app_path: '',
		gmt_offset : -5,
		debug_mode : 'off',
		auth_key : 'P%C|b ze~%|f{FJkBL$WnU3K}lPJ r-v<|bzH;Rkq899hw{]XCR}(2n,U/jVpFW%',
		options : {"refresh_interval":0,"pushwoosh":{"pwid":"B6166-5B76B","googleid":""}},
		theme_settings : [],
		addons : [{"name":"Pushwoosh for WP-AppKit","slug":"wpak-addon-pushwoosh","url":"http:\/\/www.leilomarca.com.br\/portal\/wp-content\/plugins\/wpak-addon-pushwoosh","js_files":[{"file":"js\/wpak-pushwoosh.js","type":"module","position":""},{"file":"js\/wpak-pushwoosh-app.js","type":"init","position":"before"}],"css_files":[],"html_files":[],"template_files":[],"app_data":null}]
	};

});
