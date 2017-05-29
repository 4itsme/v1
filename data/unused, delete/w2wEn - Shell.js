var moduleName = '';

var oMod = (function(){
	var publicApi = {};
	var _words = [],
		maxWordsInLine = 128; //_.reduce(_.map(_words, function(r){ return r.length; }), 
							  //	function(a,b){ return a > b ? a : b; }
							  //);
	
	function lookup(verse, word){
		if(verse && verse > 0 && verse < _words.length &&
		   word && word > 0 && word < maxWordsInLine){
			return _words[verse][word - 1];
		}
	}
	
	function setData(data){ 
		if(data && data.length > 0){ _words = data; } 
		else throw Error('no data'); 
	}
	
	function test(){
		console.log([
			lookup(1, 1),
			lookup(9, 4),
		]);
	}
	
	publicApi = {
		lookup: lookup,
		setData: setData,
		test: test,
	}
	
	return publicApi;
})();


if ( typeof define === "function" && define.amd ) {
	define( [], function() {
		return oMod;
	});
}


//oMod.test()