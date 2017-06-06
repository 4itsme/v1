require.config({
  paths: {
    "jquery": 'lib/jquery.min', //"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    							//'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
    "underscore": 'lib/lodash.min', //"lib/underscore",
    							//"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min"
    "bootstrapjs": "libcss/bootstrap-3.3.7-dist/js/bootstrap.min", 
    							//"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
    "vue": location.origin !== "http://localhost:8080" ? 'lib/vue.min' : 'lib/vue',
    							//"https://unpkg.com/vue/dist/vue"
    "vue-router": 'lib/vue-router',			
    							//"https://unpkg.com/vue-router/dist/vue-router.js" or specific version one:
    							//"https://unpkg.com/vue-router@2.0.0/dist/vue-router.js."
    "moment": 'lib/moment.min',

    "jqueryMark": 'lib/jquery.mark.min',
    							//"http://www.jsdelivr.com/projects/mark"
    							//"https://cdnjs.com/libraries/mark"
    "vue-awesome": 'lib/vue-awesome', //see: https://github.com/Justineo/vue-awesome

    //module code file paths							
    "qMain": 'lib/modules/qMain',
    "Q": 'lib/modules/Q', 
	"qUtil": 'lib/modules/qUtil',
	"qSearch": 'lib/modules/qSearch.1.0',

    "qAsbab": 'lib/modules/qAsbab', 
	"qSynonyms": 'lib/modules/qSynonyms',
    "qCorpus": 'lib/modules/qCorpus.0.4',
    "qRootLemDict": 'lib/modules/qRootLemDict',
    "qRootMeanings": 'lib/modules/qRootMeanings',

    "qRoot": 'lib/modules/qRoot',
	"qSarf": 'lib/modules/qSarf',
	"qSarfGenerator": 'lib/modules/qSarfGenerator',
	"qAntonyms": 'lib/modules/qAntonyms',


	//data files paths
	"qBuck": 'data/qBuckFull',
	"qTrans": 'data/TANZIL.en.sahih',
	"qTranslit": 'data/TANZIL.en.transliteration',

	"asbabDATA": 'data/asbabDATA',
	"synonymsDATA": 'data/synonymsDATA',
	//"qCorpus1": 'data/manzil1,7',
	//"qCorpus2": 'data/manzil2,3,4',
	//"qCorpus3": 'data/manzil5,6',

	"w2wEn": 'data/w2wEn',
	"w2wCorpus": 'data/w2wCorpus',
	"w2wCorpusV2": 'data/w2wCorpus.v2',

	"content-A": ['data/content/A', 'https://4itsme.github.io/v1/data/content/A'],
	"content-AA": ['data/content/AA', 'https://4itsme.github.io/v1/data/content/AA'],
	"content-appendix": ['data/content/appendix', 'https://4itsme.github.io/v1/data/content/appendix'],
	"content-b": ['data/content/b', 'https://4itsme.github.io/v1/data/content/b'],

	"content-ch": ['data/content/ch', 'https://4itsme.github.io/v1/data/content/ch'],
	"content-d": ['data/content/d', 'https://4itsme.github.io/v1/data/content/d'],
	"content-DA": ['data/content/DA', 'https://4itsme.github.io/v1/data/content/DA'],
	"content-dd": ['data/content/dd', 'https://4itsme.github.io/v1/data/content/dd'],
	
	"content-dh": ['data/content/dh', 'https://4itsme.github.io/v1/data/content/dh'],
	"content-E": ['data/content/E', 'https://4itsme.github.io/v1/data/content/E'],
	"content-f": ['data/content/f', 'https://4itsme.github.io/v1/data/content/f'],
	"content-gg": ['data/content/gg', 'https://4itsme.github.io/v1/data/content/gg'],
	
	"content-gh": ['data/content/gh', 'https://4itsme.github.io/v1/data/content/gh'],
	"content-h": ['data/content/h', 'https://4itsme.github.io/v1/data/content/h'],
	"content-HA": ['data/content/HA', 'https://4itsme.github.io/v1/data/content/HA'],
	"content-j": ['data/content/j', 'https://4itsme.github.io/v1/data/content/j'],
	
	"content-k": ['data/content/k', 'https://4itsme.github.io/v1/data/content/k'],
	"content-kh": ['data/content/kh', 'https://4itsme.github.io/v1/data/content/kh'],
	"content-l": ['data/content/l', 'https://4itsme.github.io/v1/data/content/l'],
	"content-m": ['data/content/m', 'https://4itsme.github.io/v1/data/content/m'],
	
	"content-n": ['data/content/n', 'https://4itsme.github.io/v1/data/content/n'],
	"content-p": ['data/content/p', 'https://4itsme.github.io/v1/data/content/p'],
	"content-q": ['data/content/q', 'https://4itsme.github.io/v1/data/content/q'],
	"content-r": ['data/content/r', 'https://4itsme.github.io/v1/data/content/r'],
	
	"content-s": ['data/content/s', 'https://4itsme.github.io/v1/data/content/s'],
	"content-SA": ['data/content/SA', 'https://4itsme.github.io/v1/data/content/SA'],
	"content-sh": ['data/content/sh', 'https://4itsme.github.io/v1/data/content/sh'],
	"content-t": ['data/content/t', 'https://4itsme.github.io/v1/data/content/t'],
	
	"content-TA": ['data/content/TA', 'https://4itsme.github.io/v1/data/content/TA'],
	"content-th": ['data/content/th', 'https://4itsme.github.io/v1/data/content/th'],
	"content-tt": ['data/content/tt', 'https://4itsme.github.io/v1/data/content/tt'],
	"content-w":  ['data/content/w', 'https://4itsme.github.io/v1/data/content/w'],
	
	"content-y": ['data/content/y', 'https://4itsme.github.io/v1/data/content/y'],
	"content-z": ['data/content/z', 'https://4itsme.github.io/v1/data/content/z'],
	"content-ZA": ['data/content/ZA', 'https://4itsme.github.io/v1/data/content/ZA'],

  },
  shim: {
	/* Set bootstrap dependencies (just jQuery) */
	'bootstrapjs' : ['jquery'],
  }

});


var reqjsLoadHistory = [];
requirejs.onResourceLoad = function (context, map, depArray) {
	reqjsLoadHistory.push( arguments );
	console.log( map && map.url );
}


	var _dependencies = [
					 'vue', 'vue-router', 'qMain'
					,'underscore' ,'jquery', 'jqueryMark', 'moment'
					,'bootstrapjs'
					,'Q' ,'qUtil' 
					,'qSearch'
					,'w2wEn'
					//,'w2wCorpus'
					//,'qCorpus'
					//,'qAsbab' ,'qSynonyms'
					
					//below ones not really dependencies of this module; just adding for temporary debugging purpose
					//, 'qRoot', 'qRootLemDict', 'qRootMeanings', 'qSearch'
					//, 'qSarf', 'qAntonyms'
		];
//require(['onResourceLoad'], function () {
	require(_dependencies, function( 
					Vue, VueRouter, qMain
					,_ ,$, jqueryMark, moment
					,bootstrapjs
					,Q ,qUtil 
					,qSearch
					,w2wEn
					//,w2wCorpus
					//,qCorpus 
					//,qAsbab ,qSynonyms

					//below ones not really dependencies of this module; just adding for temporary debugging purpose
					//,qRoot ,qRootLemDict ,qRootMeanings ,qSearch
					//,qSarf ,qAntonyms
		){

	const User = {
	  template: '<div>User {{ $route.params.id }}</div>'
	}


	var vm = { data: {}, }, comps = {};

	comps = _.extend(comps, initializeVueComponents(Vue) );

	comps = _.extend(comps, initializeVueComponents2(Vue) );

	Vue.use(VueRouter);

	const router = new VueRouter({
	  mode: (location.origin === "http://localhost:8080" || location.origin.indexOf('surge.sh') != -1) ? 'history' : null,
	  routes: [
	  	{
	  		path: '/',
	  		component: comps.quranDashboard,
	  		props: (route) => ({ suras: vm.suras }),
	  	},
	  	{
	  		path: '/page/:pageno(\\d+)',
	  		component: comps.quranPageComp, //quranPage,
	  		props: ($route) => ({ page: +$route.params.pageno, showTrans: true, showTranslit: true, showWord2Word: true, XayahsListFromPage: /*(vm.verseNo = +($route.params.pageno) ) &&*/ vm.data.ayahsListFromPage }),
	  	},
	  	{
	  		path: '/search/:keyword',
	  		component: comps.quranSearch,
	  		props: ($route) => ({ keyword: $route.params.keyword }),
	  	},
	  	{
	  		path: '/search',
	  		component: comps.quranSearch,
	  		props: ($route) => ({ keyword: $route.query.keyword }),
	  	},
	  	{
	  		path: '/sarf',
	  		component: comps.quranSarf,
	  		props: (route) => ({ root: route.query.root, form: route.query.form }),
	  	},
	  	{
	  		path: '/related',
	  		component: comps.quranGrammarConcordance,
	  		props: (route) => ({ root: route.query.root, lem: route.query.lem }),
	  	},
	  	{
	  		path: '/:sura(\\d+)', //only if all numbers. see ref: https://github.com/vuejs/vue-router/blob/dev/examples/route-matching/app.js
	  		component: comps.quranSuraComp,
	  		props: ($route) => ({ sura: +$route.params.sura, showTrans: true, showTranslit: true, showWord2Word: true, ayahsListFromPage: /*(vm.verseNo = +($route.params.pageno) ) &&*/ vm.data.ayahsListFromPage }),
	  	},
	  	{
	  		path: '/:sura(\\d+)/:ayah(\\d+)',
	  		component: comps.quranAyahComp,
	  		props: (route) => ({ sura: route.params.sura, ayah: route.params.ayah, showTrans: true, showTranslit: true, showWord2Word: true, }),
	  	},
	  	{
	  		path: '/:sura(\\d+)/:ayah(\\d+)/:word(\\d+)',
	  		component: comps.quranGrammar,
	  		props: (route) => ({ sura: route.params.sura, ayah: route.params.ayah, word: route.params.word }),
	  	},
	  	{
	  		path: '/default',
	  		component: comps.twoPaneView,
	  		props: ($route) => ({ data: vm.data, ayahsListFromPage: vm.data.ayahsListFromPage, isLoading: vm.isLoading,  }),
	  	},
	  	/*{
	  		path: '/:id', 
	  		component: comps.quranMain,
	  		props:{
	  			ayahsListFromPage: vm.data.ayahsListFromPage,
				showTrans: vm.showTrans, //:show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="!showAr"
				//show-asbab="showAsbab" :show-synonyms="showSynonyms"
				//current-page-asbab="currentPageAsbab"
				//current-page-synonyms="currentPageSynonyms"
				//w2w-en="w2wEn"
				//w2w-corpus="w2wCorpus"
	  		}
	  	},*/
	  	{
	  		path: '*', //catch all
	  		component: comps.quranDashboard,
	  		props: (route) => ({ suras: vm.suras }),
	  	},

	  ]
	})

	//Now, check if we are on a bookmarked or clean URL like /search/foo thats been redirected to 200.html page. if so try to route properly.
	var currentSuffix = location.href.replace(location.origin + location.pathname, '' );
	if( currentSuffix !== '' && location.pathname !== '/' && location.pathname !== '' && location.pathname.indexOf('200.html') == -1 ){
		console.log( ['redirectng ', currentSuffix, location.pathname].join(' -- ') );
		router.replace( location.pathname ); //TODO: ensure not stuck in infinite loop.
		//return;
	}

	var bus = new Vue();

	bus.$on('onClickSura', function( surano ){
		console.log( ['onClickSura', JSON.stringify( surano ) ] );
		router.push({ path: '' + surano });
	});

	bus.$on('onSearch', function(query){
		console.log( ['onSearch', JSON.stringify( query ) ] );
		router.push({ path: 'search/' + query.keyword }); //, params: query})
	});

	bus.$on('onClickWord', function (word) {
	  console.log(JSON.stringify(word));
	  vm.tab = 'misc';
	  require(['qCorpus'], function(qCorpus){
	  	if(!word.corpus){
	  		require(['w2wCorpusV2'], function(w2wCorpusV2){
	  			word.corpus = w2wCorpusV2.lookup( word.surah, word.ayah, word.word );
	  			console.log( word.corpus ); console.log('\n');
			  	word.corpus = qCorpus.parse(word.corpus);
			  	word.corpus.pretty = qCorpus.pretty( word.corpus );
			  	if( word.corpus.lemma ){ word.corpus.lemmaAr = qUtil.EnToAr( word.corpus.lemma ); }
			  	if( word.corpus.root ){ word.corpus.rootAr = qUtil.EnToAr( word.corpus.root.split('').join(' ') ); }

			  	require(['qRootMeanings'], function( qRootMeanings ){
			  		word.corpus.rootMeaning = qRootMeanings.lookup( word.corpus.root );

			  		require(['qRootLemDict'], function( qRootLemDict ){
			  			word.corpus.rootTree = qRootLemDict.lookup({lem: word.corpus.lemma, root: word.corpus.root });
			  			vm.wordCorpusResults = word;
			  		});
			  		//vm.wordCorpusResults = word;
			  	})
			    //vm.wordCorpusResults = word;
	  		});
	  	}//end of if
	  });
	});

	bus.$on('onClickAsbab', function (surah, ayah) {
		console.log(['onclickAsbab', arguments]);
		vm.tab = 'asbab';
		vm.showAsbabFor(surah, ayah);
	});

	bus.$on('onClickSynonym', function (syn, surah, ayah) {
		console.log(['onClickSynonym', arguments]);
		vm.tab = 'synonyms';
		vm.showSynonymsFor(syn, surah, ayah);
	});

	vm = initializeVM( router );
	vm.reqjsLoadHistory = reqjsLoadHistory;
	vm._ = _;
	vm.w2wEn = w2wEn;
	vm.w2wCorpus = typeof( w2wCorpus ) !== 'undefined' ? w2wCorpus : null;
	vm.qUtil = qUtil;
	vm.suras = _.chain( _.range(1, 115) )
				.map( function(s){
					var det = Q.surah.detail( s );
					return _.extend( det, { 
						name: s + '. ' + det.english_name +'  '+ det.arabic_name,
						value: s
					} );
				 })
				.value() || [];
	//vm.qCorpus = qCorpus; //dont load until needed
	

	/* BEGIN: THIS BLOCK IS FOR DEBUGGING; remove once all stable */
	window.vm = vm;
	window.vmArgs = arguments;
	window.vmDependencies = _dependencies;
	_dependencies.forEach(function(d, i){
		window[d] = window.vmArgs[i];
	});
	/* END: THIS BLOCK IS FOR DEBUGGING; remove once all stable */

	qMainBootstrapRun();
	//qMain.go();


	function qMainBootstrapRun(){
		if(qMain){
			var remote = 'https://4itsme.github.io',
				isLocalhost = (location.origin === "http://localhost:8080" || location.href.startsWith('http://localhost:8080') ),
				origin = isLocalhost ? location.origin : remote;
				vm.showAsbab = vm.showSynonyms = isLocalhost;
			//if(isLocalhost){ vm.showCorpus = true; }
			qMain.init(origin + '/', 'data/');
			qMain.go(function(){
				vm.isLoading = false;
				//vm && vm.go();
				
				vm.goPage(1);
			});
			if(vm){
				
				onChangeSura = function(vm){
					vm.queryData.page = Q.ayah.page(vm.queryData.sura, vm.queryData.ayah ? vm.queryData.ayah : 1);
	//				vm.ayahsListFromPage = Q.ayah.listFromPage( vm.queryData.page );
	//				vm.ayahsCount = Q.surah.detail( vm.queryData.sura ).ayahs;
					vm.goPage(vm.queryData.page);
				}
				
				vm.$watch(/*'queryData.sura'*/ 'ref', function(newVal, oldVal){
					onChangeSura(this);
				});
				
				vm.getVerse = function(verseNo){
					var result = typeof(qSearch) !== 'undefined' && qSearch.lookup(verseNo); 
					if(result){
						result.TRANS = !result.TRANS ? '' : result.TRANS.split('|')[2];
						result.TRANSLIT = !result.TRANSLIT ? '' : result.TRANSLIT.split('|')[2];
					}
					return result;
				};
				
				vm.onChange = function(evtSource){//debugger;
					console.log('onChange::' +evtSource +' ' );
					switch(evtSource){
						case 'sura':
							onChangeSura(this);
							/*this.ayahsListFromPage = Q.ayah.listFromSurah( this.queryData.sura );
							this.ayahsCount = Q.surah.detail( this.queryData.sura ).ayahs;
							this.queryData.ayah = 1;*/
							break;
						
						case 'ayah':
							debugger;
							break;
						
						case 'page':
							this.goPage(this.queryData.page);
							break;
						
						default:
							break;
					}
				}
		
				vm.goPage = function(XXXpage){
					//this.ayahsListFromPage = Q.ayah.listFromPage(page);
					//this.queryData.sura = _.first(this.ayahsListFromPage).surah;
					//this.queryData.ayah = _.first(this.ayahsListFromPage).ayah;
					
					//now populate the ayah details for each ayah
					_.each(this.data.ayahsListFromPage, function(verse){
						//existing verse properties: ayah, surah, verseNo
						var verseEx = vm.getVerse(verse.verseNo);

						var basmallah = 'bisomi {ll~ahi {lr~aHoma`ni {lr~aHiymi ',
							basmallah2 = 'b~isomi {ll~ahi {lr~aHoma`ni {lr~aHiymi',
							isBasmallah = verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah ),
							isBasmallah2 = verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah2 );
						if(isBasmallah || isBasmallah2){ verseEx.BUCK = verseEx.BUCK.substring( basmallah.length + (isBasmallah2 ? 1 : 0) ); }
						
						verseEx.AR = qUtil.EnToAr( verseEx.BUCK );
						verseEx.BARE = qUtil.BuckToBare( verseEx.BUCK );

						verse = _.extend(verse, {isBasmallah: isBasmallah, /*isHighlighted: false, isSelected: false*/}, verseEx );
					});

					//now find out if any Asbab for this page as an async call
					if(vm.showAsbab){
						require(['qAsbab'], function(qAsbab){
							qAsbab.findForPageAsync( vm.data.page )
								  .then(function(data){
									vm.currentPageAsbab = (data || '').split(' ');
							});
						});
					}
					
					//now find out if any Asbab for this page as an async call
					if(vm.showSynonyms){
						require(['qSynonyms', 'synonymsDATA'], function(qSynonyms, synonymsDATA){
							qSynonyms.setData( synonymsDATA );
							qSynonyms.findForPageAsync( vm.data.page )
								  .then(function(data){
									vm.currentPageSynonyms = (data || []);
									currentPageSynonymsDetails = [];
							});
						});
					}
				}
				
				vm.goSearchResult = function(match, result){ //single string like this 5|12|sdfsfs fsdfsdfs
					var tmp = match ? match.split('|') : ['-', '-', '-'],
						loc = {
								sura: +tmp[0],
								ayah: +tmp[1],
								word: +tmp[2]
						},
						verseNo = Q.verseNo.ayah(loc.sura, loc.ayah),
						//pageNo = Q.ayah.page(loc.sura, loc.ayah),
						keyword = result.keyword,
						category = result.category,
						count = result.matches.length,
						hilites = [ keyword ];
					vm.verse = verseNo; //vm.goPage( pageNo );
					

					//first un-highlight all ayahs on page
					//vm.ayahsListFromPage.forEach(function(v){
					//	console.log(v.isHighlighted = false);
					//});

					//also highlight that ayah on the page
					//var verse = _.find( vm.data.ayahsListFromPage, {surah: loc.sura, ayah: loc.ayah});
					//verse && (verse.isHighlighted = true);


					setTimeout(function(){
						//mark the sura:ayah as isHighlighted in the model, and rest all unmark.
	            		_.each(vm.data.ayahsListFromPage, function(i){ i.isHighlighted = (i.surah === loc.sura && i.ayah === loc.ayah); });

						// and bring that ayah into view (scrollIntoview)
						$('.aya.highlight').length > 0 && typeof( $('.aya.highlight')[0].scrollIntoView ) != 'undefined'
							&& $('.aya.highlight')[0].scrollIntoView();

						// and finally hilite the search keyword on that Quran page
					}, 0);


					//clear out old keywords and set new ones.
					 $('.quranpage').unmark({ "done": function(){
					 										$('.quranpage').mark( hilites );
					 							 }
					 });


				}
				
				vm.goRootToLem = function(match, key, index){
					vm.keyword = 'LEM:' + match.lem;
					vm.go();
				}
				
				
				vm.goLem = function(match, key, index){
					vm.keyword = [match.surah, match.ayah, match.word].join(':');
					vm.go();
				}
		
				
				vm.go = function () {
				  vm.message = "";
				  vm.searchResults = {};
				  var keyword = (vm.keyword || "").trim(); //this will break IE compat; needs polyfill
				  if(!keyword || keyword === ""){ return; }
				  var regEx = new RegExp(/^(\d*)\:(\d*)(?:(?:\:(\d*))?)$/);
				  if( regEx.test(keyword) ){//the search keyword is an ayah reference.. display it.
					var temp = keyword.match(regEx); // /(\d*)\:(\d*)\:(\d*)/),
						loc ={sura: +temp[1], ayah: +temp[2], word: temp.length >= 3 ? +temp[3] : null };
					vm.queryData.ayah = loc.ayah; //also change numAyahs
					vm.queryData.sura = loc.sura;
					//vm.queryData.page = Q.ayah.page(loc.surah, loc.ayah);	
					//vm.onChange('page');
				  }
				  else if(keyword.indexOf('LEM:') != -1){//keyword is a Lemma search
				  	vm.tab = 'misc';
					//potential Lemma search
					var pattern = keyword,				
						//pattern = 'LEM:tasomiyap', //'LEM:m~usam~FY|ROOT:smw', //'LEM:sam~aY`|ROOT:smw'; //'ROOT:smw'; //'LEM:r~aHiym|ROOT:rHm';

						results = [];
					_.chain(gq.Q)
					 .each(function(c, index){
						var temp, cummLength = 0;
						//return (temp = c.indexOf(pattern)) != -1 ? [index, temp, c] : null;
						temp = c.split(pattern);
						if(temp.length > 1){
						//else if(temp.length == 2){ ret = [index, temp[0].length, c] }
	//					else{	//ret = [];
							temp.forEach(function(item, indexTemp){
								if(indexTemp < temp.length-1){
									cummLength += (indexTemp==0 ? 0 : pattern.length);
									results.push([index, (cummLength += temp[indexTemp].length), c]);
								}
							});
						}
						//return ret;
					  })
					  .value();
					  results = 
						_.chain(results)
						 .filter()
						 .map(function(row, index){ 
							var verseNo = row[0],
								patternLoc = row[1],
								verse = row[2],
								snippet = verse.substring(0, patternLoc),
								o = Q.ayah.fromVerse( verseNo ),
								wordNo = ( snippet.split('★') || []).length;
							return _.extend(o, {word: wordNo, patternLoc: patternLoc, snippet: snippet, verse: verse});
						 })
						 //.tap(console.table)
						 .value();
					vm.lemResults = results;
					
				  }
				  else if(keyword.indexOf('ROOT:') != -1 ){//|| keyword.length === 3){
					vm.tab = 'misc';//potential Root Lem search...
					var query = { root: keyword.replace('ROOT:', '') };
					var o = typeof(qRootLemDict) !== 'undefined' && qRootLemDict.lookup(query);
					o = o && _.map(o.lems, function(lem, index){
						return {root: o.root, lem: lem, lemInstances: o.lemsInstances[index], rootInstances: o.rootInstances};
					});
					vm.rootLemResults = o;	
				  }
				  else if(keyword.indexOf('VERB:') != -1 ){
				  	vm.tab = 'misc';
				  	var o = qSarf.lookup( keyword.replace('VERB:', '') );
				  	vm.verbResults = o;
				  }
				  else{
				  	vm.tab = 'search'; vm.searchResults = {searching: true};
					var startTime = new moment(), endTime, message = '';
					  //vm.searchResults = qSearch.search(keyword);
					//console.log((message = 'Searching...' /*(startTime = new moment()) +' request fired. '*/) );
					vm.isSearching = true;
					//vm.message = message;
					qSearch.searchAsync(keyword).then(function(results){
						vm.isSearching = false;
						vm.searchResults = results || {};
						vm.searchResults.searching = false;
						endTime = new moment(); //console.log((vm.message += ((endTime = new moment()) +' results received') ) );
						if(!(endTime - startTime))debugger;
						vm.message = 'Search time: ' + endTime.diff(startTime, 'seconds') + ' seconds. (' + (endTime - startTime) + ' ms.) ';//moment(startTime).fromNow() + ' ' + vm.message;
						setTimeout(function(){
							var hilites = [];
							hilites.push( vm.searchResults.keyword );
							//hilites.push( qUtil.BuckToBare(vm.searchResults.keyword) );
							hilites.push( qUtil.EnToAr( vm.searchResults.keyword ) ); //TODO: conditionally do this
							hilites.push( qUtil.EnToAr( qUtil.BuckToBare(vm.searchResults.keyword) ) ); //TODO: conditionally do this

							//clear out old keywords and set new ones.
							$('.searchResults').unmark({ "done": function(){
																	$('.searchResults').mark( hilites );
														 }
							});
						}, 200);
					});
				  }

				}
			}
			
			vm.showAsbabFor = function(sura, ayah){
				require(['qAsbab', 'asbabDATA'], function(qAsbab, asbabDATA){
					qAsbab.setData( asbabDATA );
					var lookup = qAsbab.get(sura, ayah);
					vm.showAsbabDetail = true;
					vm.asbabDetail = lookup;
					console.log( lookup );
				});
			}
					
			vm.showSynonymsFor = function(item, sura, ayah){
				if(!item){
					var key = sura + ':' + ayah;
					var tmp = _.first( vm.currentPageSynonyms, key);
					tmp = 	  _.flatten( _.values( tmp ) );
					if(tmp && tmp.length > 0){
						item = tmp[0]; //just pick the first topic among the topics for this ayah and cause it to be opened.
					}
				}
				if(item){
					var details = vm.getSynonymsDetailsFor(item, sura, ayah);
				}
			}
			

			vm.fnGrabHtmlBody = function(htmlText){
				var tmp;
				var regexGrabHtmlBody = /(<body[^\>]*>|<\/body>)/ig;
				return (tmp = htmlText.split(regexGrabHtmlBody)) && tmp && tmp.length >= 2 ? tmp[2] : tmp;
			}

			vm.getSynonymsDetailsFor = function(item, sura, ayah){
				if(!item){ return; }
				var key = sura + ':' + ayah;
				var name = item.n,
					topicId = item.t,
					topicUrl = item.u; //ex: content/HA/HA8.html
				require(['qSynonyms'], function(qSynonyms){
					var lookup = qSynonyms.get(topicId);
					var content = '';
					var details = {
						name: name,
						topicId: topicId,
						topicUrl: topicUrl,
						words: lookup,
						ref: key,
						content: content,
					};
					vm.showSynonymsDetail = true;
					vm.synonymsDetail = details;

					var tmp = topicUrl.split('/'),
						module = tmp.length > 1 && tmp[0] + '-' + tmp[1],
						moduleKey = topicUrl;
					require([ module ], function( content ){
					//$.get( topicUrl )
					// .then(function(content){
							content = content && content[ moduleKey ];
							if(!content){ debugger; return; }
							var iContent = vm.fnGrabHtmlBody(content);
							console.log([topicUrl, content.length, iContent.length] );

							vm.synonymsDetail.content = iContent;
							setTimeout(function(){
								//hilite the full reference or atleast the sura # matches.
								var hilites = [];
								hilites.push( vm.synonymsDetail.ref );
								hilites.push( vm.synonymsDetail.ref.split(':')[0] + ':' ); //the sura ref, ex: '3:'
								$('.synonymsDetailContent').unmark({ "done": function(){//now turn on highlighting of sura
																		$('.synonymsDetailContent').mark( hilites );
															 }
								});
							}, 100);
					});
				});
			}
			
			//ref: https://jsfiddle.net/228d4snb/
			vm.feedbackOnSubmit = function(){
				vm.feedbackEmail = vm.feedbackEmail ? vm.feedbackEmail : '4gutsy+formautofillin@gmail.com';

				$.ajax({
				        url: "//formspree.io/4gutsy+formspree@gmail.com", 
				        method: "POST",
				        data: {email: vm.feedbackEmail, message: vm.feedbackMessage},
				        dataType: "json"
				});
				alert('Thanks for the email, we\'ll be in touch promptly.');
				return false;
			}
			//if(typeof(qSearch)!= 'undefined'){ qSearch.initCorpus() };
		}

	}


	function initializeVM( router ){
		vm = new Vue({
		  router: router,
		  el: '#app-1',
		  data: {
			verse: 1,
		    data: {
		      sura: 1,
		      ayah: 1,
		      page: 1,
		      juz: 1,
		      ayahsCount: 7,
		      ayahsListFromPage:  [ { "surah": 1, "ayah": 1, "verseNo": 1, isSelected: true }, { "surah": 1, "ayah": 2, "verseNo": 2 }, { "surah": 1, "ayah": 3, "verseNo": 3 }, { "surah": 1, "ayah": 4, "verseNo": 4 }, { "surah": 1, "ayah": 5, "verseNo": 5 }, { "surah": 1, "ayah": 6, "verseNo": 6 }, { "surah": 1, "ayah": 7, "verseNo": 7 } ] ,
		    },
		    debug: {},
		    pageChanged: null,

		  	showAr: true,
			sura:1,
			page:1,
			keyword: null,
			searchResults: {},
			rootLemResults: {},
			lemResults: {},
			verbResults: {},
			verbSearchQuery: '',
			wordCorpusResults: {},
			
			isLoading: true,
			isSearching: false,
			message: '',
			debug: false,
			showArabic: true,
			showTrans: true,
			showTranslit: false,
			showCorpus: false,
			showAsbab: false,
			showAsbabPretty: true,
			showSynonyms: false,
			showSynonymsPretty: true,
			currentPageAsbab: [],
			showAsbabDetail: false,
			asbabDetail: "",
			currentPageSynonyms: [],
			showSynonymsDetail: false,
			synonymsDetail: "",
			_: { find:function(){} },
			qUtil:{},
			w2wEn:{},
			w2wCorpus: {},
			qCorpus:{},
			currentPageSynonymsDetails: [],
			tab: 'about',
			feedbackEmail: '',
			feedbackMessage: '',
			feedbackOnSubmit: function(){},

			currentVerse: 1,
			queryData: {sura: 1, ayah: 1, word: 1, page: 1},
			ayahsCount: 7,
			//ayahsListFromPage: [{sura: 1, ayah: 1, verse: 1}],
			
		    S: [],
			corpus: {},
			suras: [],
			//currentSura: 44, //'1. Al-Faatiha',
			//currentAyah: 58,
			//page: 1,
		  },
		  
		  computed: {
			ref: function(){
				return this.queryData.sura +':'+ this.queryData.ayah; // + this.queryData.word ? ':'+ this.queryData.word : '';
			},
			ayahs: function(){
				return [ this.currentSura ]; //_.range(1, 11); //this.currentSura
			},
			currentSura: {
				get: function(){
					return 1; //typeof(Q)==='undefined' || !Q? 1 : Q.ayah.fromVerse( this.currentVerse ).surah;
				},
				set: function(val){
					this.currentVerse = 1; //typeof(Q)==='undefined' || !Q? 1 : Q.verseNo.surah(val);
				}
			},
			currentAyah: {
				get: function(){
					return 1; //Q.ayah.fromVerse( this.currentVerse ).ayah;
				},
				set: function(val){
					this.currentVerse = 1; //Q.verseNo.ayah(this.currentSura, val);
				}
			},
			currentPage: {
				get: function(){
					return 1; //Q.ayah.page(this.currentSura, this.currentAyah);
				},
				set: function(val){debugger;
					var o = {surah: 1, ayah: 1}; //Q.ayah.fromPage(val);
					this.queryData.sura = o.surah;
					this.queryData.ayah = o.ayah;
				}
			},
			page: function(){
				return this.queryData.page;
			},
			<!-- ayahsListFromPage: function(){ -->
				<!-- return Q.ayah.listFromPage(this.currentPage); -->
			<!-- }, -->
			//getCorpus: function(){	
			//}
		  },
		  
		  methods: {
			ayahchange: function(diff){
	          	var verse = vm.verse + diff;
	            if(verse < 1){ verse = 1; }
	            else if(verse > 6236){ verse = 6236; }
	            if(verse){ vm.verse = verse; console.log(['ayahchange', verse ] ); }
	          	/*var verse = (diff == -1) ? Q.ayah.prev(vm.data.sura, vm.data.ayah)
	            					: (diff == +1) ? Q.ayah.next(vm.data.sura, vm.data.ayah)
	                      : null;
	            if(verse){ vm.verse = verse; }*/
	        },
	          
	        versechange: function(diff){
	          	var verse;
	          	console.log(['versechange', JSON.stringify( arguments ) ] );
	            if(diff.sura){ //corner case: current ayah selected is > what new sura
	            	// has.. then reset it to 1.
	            	var tmp = Q.surah.detail( +diff.sura ),
	              		ayah = vm.data.ayah > tmp.ayahs ? 1 : vm.data.ayah; 
	            	verse = Q.verseNo.ayah( +diff.sura, ayah );
	            }else if(diff.ayah){
	            	verse = Q.verseNo.ayah( vm.data.sura, +diff.ayah );
	            }else if(diff.page){
	            	verse = Q.verseNo.page( +diff.page );
	            }else if(diff.juz){
	            	verse = Q.verseNo.juz( +diff.juz );
	            }
	            if(verse){ vm.verse = verse; }
	        },

		    go: function () {
		      var keyword = vm.keyword;
			  //vm.searchResults = qSearch.search(keyword);
		    },
			goLem: function(match, key, index){},
			getCorpus: function(sura, ayah){
				return qCorpus.parseEx( S[ayah] );
			},
			getVerse: function(){},
			onChange: function(){},
			//applyAsbab: function(){},
			showAsbabFor: function(){},
			showSynonymsFor: function(){},
			getSynonymsDetailsFor: function(){},
		  },
		  
		  watch: {
	        verse: function(val){
	            var tmp = Q.ayah.fromVerse( +vm.verse ), //Ex: { "surah": 2, "ayah": 26 }
	                tmp2 = Q.surah.detail( tmp.surah ),
	                page = Q.ayah.page(tmp.surah, tmp.ayah),
	                juz = Q.ayah.juz(tmp.surah, tmp.ayah),
	                oldpage = vm.data.page,
	                pageChanged = (oldpage !== page);
	            vm.debug = tmp2;
	            vm.data.sura = tmp.surah;
	            vm.data.ayah = tmp.ayah;
	            vm.data.page = page;
	            vm.data.juz =  juz;
	            vm.data.ayahsCount = tmp2.ayahs;
	            if(pageChanged){
	              vm.data.ayahsListFromPage = Q.ayah.listFromPage( page );
	              vm.pageChanged = true;
	            }

				//mark the sura:ayah as isSelected in the model, and rest all unmark.
	            _.each(vm.data.ayahsListFromPage, function(i){ i.isSelected = (i.surah === vm.data.sura && i.ayah === vm.data.ayah); });
	        },

	        pageChanged: function(val){
	        	if(!vm.pageChanged){ return; }
	        	vm.pageChanged = false;

	        	//TODO: now load up the content
	        	console.log('watch: pageChanged: now preparing page content!')
	        	vm.goPage();
	        },


			ref: function(newRef){
				console.log('WATCH::ref ' + this.ref +' '+ newRef);
				this.queryData.page = Q.ayah.page( this.queryData.sura, this.queryData.ayah);
				//this.onChange('page');
				//this.corpus = qCorpus.parseEx( S[ this.currentAyah] ); //TODO: reload S if currentSura has changed
				//this.page = Q.ayah.page(this.currentSura, this.currentAyah);
			},
			
			page: function(newPage){
				console.log('WATCH::page ' + this.page +' '+ newPage); //debugger;
				vm.goPage(newPage);
			}
		  }
			 }).$mount('#app-1');
		vm.router = router;
		return vm;
	}


	function initializeVueComponents(Vue){
		var vGrid = 
		// register the grid component
		Vue.component('v-grid', {
		  template: '#grid-template',
		  props: {
		    data: Array,
		    columns: Array,
		    filterKey: String
		  },
		  data: function () {
		    var sortOrders = {}
		    this.columns.forEach(function (key) {
		      sortOrders[key] = 1
		    })
		    return {
		      sortKey: '',
		      sortOrders: sortOrders
		    }
		  },
		  computed: {
		    filteredData: function () {
		      var sortKey = this.sortKey
		      var filterKey = this.filterKey && this.filterKey.toLowerCase()
		      var order = this.sortOrders[sortKey] || 1
		      var data = this.data
		      if (filterKey) {
		        data = data.filter(function (row) {
		          return Object.keys(row).some(function (key) {
		            return String(row[key]).toLowerCase().indexOf(filterKey) > -1
		          })
		        })
		      }
		      if (sortKey) {
		        data = data.slice().sort(function (a, b) {
		          a = a[sortKey]
		          b = b[sortKey]
		          return (a === b ? 0 : a > b ? 1 : -1) * order
		        })
		      }
		      return data
		    }
		  },
		  filters: {
		    capitalize: function (str) {
		      return str.charAt(0).toUpperCase() + str.slice(1)
		    }
		  },
		  methods: {
		    sortBy: function (key) {
		      this.sortKey = key
		      this.sortOrders[key] = this.sortOrders[key] * -1
		    }
		  }
		})

		return {vGrid: vGrid};
	}

	function initializeVueComponents2(Vue){

		// register
		Vue.component('q-sura', {
		  template: 
					'<span v-if="suras && suras.length > 0">\
					    <select v-model="iSura" @change="onChange">\
					      <option v-for="s in suras" :value="s.value">\
						    {{ s.name }}\
					      </option>\
					    </select>\
					  </span>\
					<span v-else>S: \
		  						<select v-model="iSura" @change="onChange">\
		        				<option v-for="s in 114" :value="s">{{s}}</option>\
		      				</select>\
		             </span>',
		  data: function(){
		  	return{ }; // isura: this.sura };
		  },
		  computed: {
		  	iSura: function () {
		  		return this.sura;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ console.log('from child: onchange triggered: ' +$event +' '+$event.target.value); this.$emit('versechange', {sura: $event.target.value });}
		  },
		  props: ['sura', 'suras'],
		})


		Vue.component('q-ayah', {
		  template: '<span>A: \
		  						<select v-model="iAyah" @change="onChange">\
		        				<option v-for="a in ayahsCount" :value="a">{{a}}</option>\
		      				</select>\
		             </span>',
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iAyah: function () {
		  		return this.ayah;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ console.log('from child: onchange triggered: ' +$event +' '+$event.target.value); this.$emit('versechange', {ayah: $event.target.value });}
		  },
		  props: ['ayah', 'ayahsCount'],
		})


		Vue.component('q-page', {
		  template: '<span>Page: \
		  						<a class="arrow-link arrow-left" href=# v-on:click.stop.prevent="onChange( -1 );" title="Previous page">◄</a>\
		  						<select v-model="iPage" @change="onChange">\
		        					<option v-for="p in 604" :value="p">{{p}}</option>\
		      					</select>\
		      					<a class="arrow-link arrow-right" href=# v-on:click.stop.prevent="onChange( +1 );" title="Next page">►</a>\
		             </span>',
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iPage: function () {
		  		return this.page;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ 
		  		var val = $event && $event.target && $event.target.value ? $event.target.value : (this.iPage + $event);
		  		console.log('from child: onchange triggered: '+ val); 
		  		this.$emit('versechange', {page: val });
		  	}
		  },
		  props: ['page'],
		})


		Vue.component('q-juz', {
		  template: '<span>Juz: \
		  						<select v-model="iJuz" @change="onChange">\
		        				<option v-for="j in 30" :value="j">{{j}}</option>\
		      				</select>\
		             </span>',
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iJuz: function () {
		  		return this.juz;
		  	}
		  },
		  methods: {
		  	onChange: function($event){ console.log('from child: onchange triggered: ' +$event +' '+$event.target.value); this.$emit('versechange', {juz: $event.target.value });}
		  },
		  props: ['juz'],
		})



		//////////////////////////////////////////////////////////////////////////////
		var quranPage = 
		Vue.component('quran-page', {
		  template: '<div dir=rtl class=\'quranpage clearfix\' style="text-align: justify; Xoverflow:scroll; Xmax-height:550px; XXXwhite-space: nowrap;">\
		  				<span v-for="(verse, verseIndex) in iList">\
							<quran-ayah :verse="verse" :show-trans="showTrans" :show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="hideAr" \
								:show-asbab="showAsbab"\
								:show-synonyms="showSynonyms"\
								:current-page-asbab="currentPageAsbab"\
								:current-page-synonyms="currentPageSynonyms"\
								:words="w2wEn && w2wEn.lookup && w2wEn.lookup( verse.verseNo )"\
								:corpus="w2wCorpus && w2wCorpus.lookup && w2wCorpus.lookup( verse.verseNo )"\
							>\
								\
							</quran-ayah>\
						</span>\
		  			 </div>',
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iList: function () {
		  		return this.ayahsListFromPage;
		  	}
		  },
		  props: ['ayahsListFromPage', 'showTrans', 'showTranslit', 'showCorpus', 'showAsbab', 'showSynonyms', 'currentPageAsbab', 'currentPageSynonyms', 'hideAr', 'w2wEn', 'w2wCorpus'],
		});


		var quranAyah = 
		Vue.component('quran-ayah', {
		  template: '<span>\
						<!-- show basmallah -->\
						<span v-if="!hideAr && verse.isBasmallah">\
							<div id="bismillah" class="bismillah text-center word-font" style="text-align:center; font-size: 42px;" title="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" >\
								<HR/>\
								﷽\
								<HR/>\
							</div>\
						</span>\
						<!-- show arabic ayah -->\
						<span v-if="verse.BUCK" dir="rtl">\
							\
							<span v-if="showTrans || showTranslit || showCorpus" style=font-size:.96em >\
								{{ verse.surah }}:{{ verse.ayah }} &nbsp; \
							</span>\
							<span style=direction:rtl;font-size:2.35em v-bind:class="{ aya: true, highlight: verse.isHighlighted, select: verse.isSelected }">\
								<span v-for="word in segmentify(verse, words, corpus)">\
									<quran-word :word="word"></quran-word>\
								</span>\
							</span>\
							<span v-if="false" style=direction:rtl;font-size:2.35em v-bind:class="{ aya: true, highlight: verse.isHighlighted, select: verse.isSelected }">\
								{{ !hideAr ? verse.AR : verse.BUCK }}\
							</span>\
							<span v-if="true || (!showTrans && !showTranslit && !showCorpus)" :title="\'Ayah ref: \' + verse.surah + \':\'+ verse.ayah"  style=font-size:.96em >\
								<span>﴿</span>{{ verse.ayah }}<span>﴾</span>\
							</span>\
							\
						</span>\
						\
						\
						<!-- show translation, translit etc -->\
						<span v-if="verse.BARE" v-html="">	\
						</span>\
						<span v-if="verse.TRANS" >\
							<div v-if="showTrans" dir=ltr>{{ verse.TRANS }}</div>\
						</span>\
						<span v-if="verse.TRANSLIT" >\
							<div v-if="showTranslit" dir=ltr v-html="verse.TRANSLIT"></div>\
						</span>\
						\
						<span v-show="showAsbab && currentPageAsbab && currentPageAsbab.join(\' \').indexOf(\' \' + verse.surah + \':\' + verse.ayah + \' \') != -1">\
							<A HREF="#" v-on:click.stop.prevent="showAsbabFor(verse.surah, verse.ayah);" title="Click to see Sabab Nuzul for this Ayah" style=font-size:.8em >\
								<!-- [A] -->\
								<span style="cursor:pointer" class="label label-warning" >ASB</span>\
							</A>\
						</span>\
						<span v-show="showSynonyms && _.find(currentPageSynonyms, verse.surah + \':\' + verse.ayah)">\
							<A HREF="#" v-on:click.stop.prevent="showSynonymsFor(null, verse.surah, verse.ayah)" title="Click to see Near Synonyms for some words in this Ayah." style=font-size:.8em >\
								<!-- [S] -->\
								<span style="cursor:pointer" class="label label-info" >SYN</span>\
							</A>\
						</span>\
						<span v-if="showTrans || showTranslit" >\
							<BR/>\
						</span>\
						\
		  			</span>',

		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iVerse: function () {
		  		return this.verse;
		  	}
		  },
		  props: ['verse', 'showTrans', 'showTranslit', 'showCorpus', 'showAsbab', 'showSynonyms', 'currentPageAsbab', 'currentPageSynonyms', 'hideAr', 'words', 'corpus'],
		  methods:{
		  	showAsbabFor: function(surah, ayah){
		  		bus.$emit('onClickAsbab', surah, ayah);
		  	},
		  	showSynonymsFor: function(syn, surah, ayah){
		  		bus.$emit('onClickSynonym', syn, surah, ayah);
		  	},

		  	segmentify: function(verse, words, corpus){
				var count = 0;
				return _.map(verse.AR.split(' '), function(w){
					var isStopLetter = /[ۚۖۛۗۙ]/.test( w ),
						isOtherLetter = /[۞۩]/.test( w ),
						no = (isStopLetter || isOtherLetter) ? null : ++count,
						resp = {w: w};
					if(isStopLetter || isOtherLetter){ resp.isStopLetter = true; }
					else{ resp.surah = verse.surah; resp.ayah = verse.ayah; resp.word = no; resp.w2w = words && words[ no - 1 ]; resp.corpus = corpus && corpus[ no - 1 ]; };
					return resp;
				})
		  	}
		  	/*segmentify: function(BUCK, words){
		  		//var stopletters = "ۚۖۛۗۙ";
		  		var splitWordsRegex = /[ ]([ۚۖۛۗۙ] ?)?/g;
		  		var bucks = BUCK.replace(/(۞ )|( ۩)/g, '').replace( splitWordsRegex, '\n' ).split('\n');
		  		return _.zip(bucks, words);
		  	}*/
		  },
		});


		var quranWord = 
		Vue.component('quran-word', {
			template: '<span v-if="word.isStopLetter" class=sign>\
							{{ word.w }} \
					   </span>\
					   <span v-else>\
					   		<span :title="word.w2w" class=w2w v-on:click.stop.prevent="onClickWord( word )">\
					   			{{ word.w }} \
					   		</span>\
					   </span>',
			data: function(){
				return {};
			},
			props: ['word'], //'w', 'no', 'w2w', 'isStopLetter'],
			methods:{
				onClickWord: function(word){
					//console.log(JSON.stringify(word));
					bus.$emit('onClickWord', word);
				},
			},
		});

		var quranSuraname = Vue.component('quran-suraname', {
			template: //'<span>{{ metadata.name }}</span>',
						'<li class="sura-menu-class1">\
							<a class="sura-menu-class2 row" href=# v-on:click.stop.prevent="onClickSura( metadata.value )">\
								<div class="col-xs-2 text-muted">{{ metadata.value }}</div>\
								<div class="col-xs-7">{{ metadata.english_name }}</div>\
								<div class="col-xs-3 text-left sura-menu-class3 arr2">\
									<span class="icon-surah">{{ metadata.arabic_name }}</span>\
								</div>\
								<div class="col-xs-10 col-xs-offset-2 sura-menu-class4">\
									<span class="text-uppercase english">{{ metadata.english_meaning }}</span>\
								</div>\
							</a>\
						</li>',
			props: ['metadata'], //ex: { "start": 7, "ayahs": 286, "order": 87, "rukus": 40, "arabic_name": "البقرة", "english_name": "Al-Baqara", "english_meaning": "The Cow", "type": "Medinan", "name": "2. Al-Baqara البقرة", "value": 2 }
			data: function(){
				return {  };
			},
			methods:{
				onClickSura: function( surano ){
					bus.$emit('onClickSura', surano );
				},
			},
		});

		var quranDashboard = Vue.component('quran-dashboard', {
			template: '<div>\
						<div class="dashboardheader" style="background-image:url(/images/background.jpg);">\
							<div class="container">\
								<div class="row"><div class="col-md-10 col-md-offset-1 text-center">\
									<a class="dashboardIndexHeader" data-metrics-event-name="IndexHeader:Link:Index" href="/">\
										<img src="/images/logo_lg_w.png" class="dashboardClass3" alt="logo">\
									</a>\
									<h4 class="dashboardClass2">THE NOBLE QUR\'AN</h4>\
									<div class="right-inner-addon searchinput undefined">\
										<a :click="onSearch" tabindex="-1">\
										<i class="fa fa-search ss-icon ss-search"></i></a>\
										<input type="search" v-model="keyword" v-on:keyup.enter="onSearch" placeholder="Search &quot;Noah&quot;">\
									</div>\
								</div>\
							</div>\
						 </div>\
						</div>\
						<div class=container>\
						  <div class=row>\
						    <div class="col-md-10 col-md-offset-1" >\
						    	<div class="dashboardClass4 text-muted">\
									SURAHS (CHAPTERS)<BR/><BR/>\
								</div>\
								<div v-if="suras" class="row suras-menu-row">\
								  <div class="col-md-4">\
								  	<ul class="list-unstyled" v-for="sura in suras.slice(0, 38)">\
										<quran-suraname :metadata="sura"></quran-suraname>\
										<BR/>\
									</ul>\
								  </div>\
								  <div class="col-md-4">\
								  	<ul class="list-unstyled" v-for="sura in suras.slice(38, 76)">\
										<quran-suraname :metadata="sura"></quran-suraname>\
										<BR/>\
									</ul>\
								  </div>\
								  <div class="col-md-4">\
								  	<ul class="list-unstyled" v-for="sura in suras.slice(76)">\
										<quran-suraname :metadata="sura"></quran-suraname>\
										<BR/>\
									</ul>\
								  </div>\
								</div>\
							</div>\
						</div>\
						</div>\
					   </div>',
			props: ['suras'],
			data: function(){
				return { keyword: null };
			},
			methods:{
				onSearch: function(){
					console.log(JSON.stringify( this.keyword ));
					bus.$emit('onSearch', {keyword: this.keyword});
				},
			},
		});







		// /#/related?root=smw&lem=samaA%5E%27
		// /#/related?root=smw&lem=%7Bsom
		// /#/related?lem=%7Bsom
		// /#/related?root=smw
		var quranGrammarConcordance = Vue.component('quran-grammar-concordance', {
			template: '<div>Qur\'aan grammar concordance test {{ [root, lem] }}\
							<H4>Qur\'aan Word details</H4>\
							<div v-if=\'loading\'>Loading...</div>\
							<div class=well v-else>\
								<div class=text-muted>{{ data }}</div>\
							</div>\
					   </div>',
			props: ['root', 'lem'],
			data: function(){
				return {
					loading: false,
					data: null,
					error: null,
				};
			},
			created: function(){
				this.fetchData();
			},
			watch: {
				$route: function(to, from){
					this.fetchData();
				}
			},
			methods: {
				fetchData: function(){
		    		this.error = this.data = null;
		    		this.loading = true;
		    		var comp = this; //save a reference
		    		require(['Q', /*'w2wCorpus',*/ 'w2wCorpusV2'], function(Q, /*w2wCorpus,*/ w2wCorpusV2){
		    			var data = w2wCorpusV2.lookup( { root: comp.root, lem: comp.lem } );
		    			comp.data = data;
		    			comp.loading = false;
		    			comp.error = null;
		    		});//TODO: add error handling code here
				},
			}
		});


		//	/#/44/10/6
		var quranGrammar = Vue.component('quran-grammar', {
			template: '<div>quran grammar test {{ [+sura, +ayah, +word] }}\
							<H4>Qur\'aan Word details</H4>\
							<div v-if=\'loading\'>Loading...</div>\
							<div class=well v-else>\
								{{  data[ +word - 1 ] }}<BR/>\
								<div class=text-muted>{{ data }}</div>\
							</div>\
							<BR/><BR/>\
							<quran-ayah-comp :sura="sura" :ayah="ayah" :showTrans="true" :showTranslit="true" :showWord2Word="true" >\
							</quran-ayah-comp>\
					   </div>',
			props: ['sura', 'ayah', 'word'],
			data: function(){
				return {
					loading: false,
					data: null,
					error: null,
				};
			},
			created: function(){
				this.fetchData();
			},
			watch: {
				$route: function(to, from){
					this.fetchData();
				}
			},
			methods: {
				fetchData: function(){
		    		this.error = this.data = null;
		    		this.loading = true;
		    		var comp = this; //save a reference
		    		require(['Q', /*'w2wCorpus',*/ 'w2wCorpusV2'], function(Q, /*w2wCorpus,*/ w2wCorpusV2){
		    			var verseNo = Q.verseNo.ayah( +comp.sura, +comp.ayah ),
		    				//data = w2wCorpus.lookup( +verseNo ),
		    				data2 = w2wCorpusV2.lookup( +comp.sura, +comp.ayah );
		    			comp.data = data2; //{data: data, data2: data2};
		    			comp.loading = false;
		    			comp.error = null;
		    		});//TODO: add error handling code here
				},
			}
		});

		//  /#/sarf?root=xwf&form=2
		var quranSarf = Vue.component('quran-sarf', {
			template: '<div xclass="well">\
							<H4>Sarf Sagheer (for enhanced verbs)</H4>\
							<div v-if=\'loading\'>Loading...</div>\
							<div class=well v-else>\
								<div class="row">\
								  <div class="col-md-3"><span class=arr2>{{data.faail}}</span> <BR/><span class="label label-info">Faail</span><BR/><span class=text-muted> (Active Participle)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.masdr}}</span> <BR/><span class="label label-info">Masdr</span><BR/><span class=text-muted> (Verbal Noun)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.present}}</span> <BR/><span class="label label-info">Fi\'l mudari\'</span><BR/><span class=text-muted> (Present, Future)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.past}}</span> <BR/><span class="label label-info">Fi\'l maDiy</span><BR/><span class=text-muted> (Past)</span></div>\
								</div>\
									<BR/>\
								<div class="row">\
								  <div class="col-md-3"><span class=arr2>{{data.mafool}}</span> <BR/><span class="label label-info">Maf\'ool</span><BR/><span class=text-muted> (Passive Participle)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.masdr}}</span> <BR/><span class="label label-info">Masdr</span><BR/><span class=text-muted> (Verbal Noun)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.presentP}}</span> <BR/><span class="label label-info">Majhool Fi\'l mudari\'</span><BR/><span class=text-muted> (Passive Present, Future)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.pastP}}</span> <BR/><span class="label label-info">Majhool Fi\'l maDiy</span><BR/><span class=text-muted> (Passive Past)</span></div>\
								</div>\
									<BR/>\
								<div class="row">\
								  <div class="col-md-3"></div>\
								  <div class="col-md-3"><span class=arr2>{{data.tharf}}</span> <BR/><span class="label label-info">Tharf</span><BR/><span class=text-muted>(Time/Location Adverb)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.forbid}}</span> <BR/><span class="label label-info">Nahi</span><BR/><span class=text-muted> (Forbid)</span></div>\
								  <div class="col-md-3"><span class=arr2>{{data.command}}</span> <BR/><span class="label label-info">Amr</span><BR/><span class=text-muted> (Command)</span></div>\
								</div>\
							</div>\
							<BR/>\
						</div>',
			props: ['root', 'form'],
			data: function(){
				return {
					loading: false,
					data: null,
					error: null,
				};
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	//root: function(){ debugger; this.fetchData(); },
		    	//form: function(){ debugger; this.fetchData(); },
		    	$route: function(to, from) {
			      // react to route changes...
			      this.fetchData();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		this.error = this.data = null;
		    		this.loading = true;
		    		var root = this.root, form = this.form, 
		    			comp = this; //save a reference
		    		require(['qSarfGenerator'], function(qSarfGenerator){
		    			comp.data = qSarfGenerator.lookup(root, form);
		    			comp.loading = false;
		    			comp.error = null;
		    		});//TODO: add error handling code here
		    	},
		    },

		});

		var twoPaneView = Vue.component('two-pane-view', {
			template: '<div :key="data.id" class=row>\
							<quran-header :isLoading="isLoading"></quran-header>\
							<quran-nav :data="data"></quran-nav>\
							<div class="col-md-7">\
								<quran-page \
									:ayahs-list-from-page="data.ayahsListFromPage"\
									:show-trans="showTrans" :show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="!showAr"\
									:show-asbab="showAsbab" :show-synonyms="showSynonyms"\
									:current-page-asbab="currentPageAsbab"\
									:current-page-synonyms="currentPageSynonyms"\
									:w2w-en="w2wEn"\
									:w2w-corpus="w2wCorpus"\
								>\
								</quran-page>\
			  				</div><!-- end col-md-7 left pane-->\
							\
							<div class="col-md-5">\
								<ul class="nav nav-tabs" id="myTab">\
									<li v-if="showAsbab" v-bind:class="{ active: tab === \'asbab\' }" @click="tab = \'asbab\'"><a data-target="#asbab" data-toggle="tab">Asbab</a></li>\
									<li v-if="showSynonyms" v-bind:class="{ active: tab === \'synonyms\' }" @click="tab = \'synonyms\'"><a data-target="#synonyms" data-toggle="tab">Synonyms</a></li>\
			  						<li v-bind:class="{ active: tab === \'search\' }" @click="tab = \'search\'"><a data-target="#search" data-toggle="tab">Search results</a></li>\
			  						<li v-if="true" v-bind:class="{ active: tab === \'misc\' }" @click="tab = \'misc\'"><a data-target="#misc" data-toggle="tab">Misc</a></li>\
			  						<li v-bind:class="{ active: tab === \'about\' }" @click="tab = \'about\'"><a data-target="#about" data-toggle="tab">About</a></li>\
								</ul>\
									\
									\
								<div class="tab-content">\
	 								\
	  								<div v-if="showAsbab" v-bind:class="{ \'tab-pane\': true, active: tab === \'asbab\' }" id="asbab">\
	  									<div>\
	  										Asbab-un-Nuzul in current page:\
	  										<span v-for="asbab in currentPageAsbab">\
	  											<span v-if="asbab">\
	  												<A HREF="#" v-on:click.stop.prevent="showAsbabFor(asbab.split(\':\')[0], asbab.split(\':\')[1]); tab=\'asbab\';" title="Click to see Sabab Nuzul for this Ayah" style=font-size:.93em >\
														<span class="label label-warning" style="cursor: pointer;">{{asbab}}</span> &nbsp;\
													</A>\
	  											</span>\
	  										</span>\
	  									</div>\
	  										\
										<div v-if="showAsbabDetail">\
										<BR/>\
										Sabab Nuzul details for selected Ayah: \
										<button class="btn btn-default btn-xs pull-right" v-on:click.stop.prevent=\'showAsbabPretty = !showAsbabPretty\'>Show {{ showAsbabPretty ? \'raw\' : \'formatted\' }}</button><BR/><HR/>\
										<span v-if=\'showAsbabPretty\'>\
												<span v-html=\'asbabDetail.pretty\'></span>\
										</span>\
										<span v-else>\
											<PRE>{{ asbabDetail.raw }}</PRE>\
										</span>\
									</div>\
									<div v-else>Asbab shown here if available</div>\
		  							</div>\
		  							\
									\
	  								<div v-if="showSynonyms" v-bind:class="{ \'tab-pane\': true, active: tab === \'synonyms\' }" id="synonyms">\
	  									<div>\
	  										Near-Synonyms in current page:\
											<span v-for="(first, index1) in currentPageSynonyms">\
												<span v-for="(subItem, subKey) in first">\
													<BR/>{{ subKey }}: \
													<span v-for="(item, key) in subItem">\
														<A HREF="#" v-on:click.stop.prevent="tab = \'synonyms\'; showSynonymsFor(item, subKey.split(\':\')[0], subKey.split(\':\')[1])">\
															<span class="label label-info">\
																{{item.n}}\
																<!--<span class="badge">{{ getSynonymsDetailsFor(item, key.split(\':\')[0], key.split(\':\')[1]).words.length }}</span>-->\
															</span>\
														</A>&nbsp; &nbsp;\
													</span>\
												</span>\
											</span>\
	  									</div>\
	  									\
										<div class=synonymsDetail v-if="showSynonymsDetail && synonymsDetail">\
											<BR/> 	<!-- vm.synonymsDetail = {name: name, topicId: topicId, topicUrl: topicUrl, 	words: lookup, ref: key }; -->	\
											<div class=clearfix>\
												Ayah <span class="label label-default">{{ synonymsDetail.ref }}</span> -- Topic: <span class="label label-info">{{ synonymsDetail.name}}</span> \
												<span class="text-muted">(id: {{ synonymsDetail.topicId}})</span>\
												<span xclass="pull-right">\
													<A :HREF="\'./\' + synonymsDetail.topicUrl" target=_ title=\'Open in new window\'>\
														<i class="fa fa-external-link" aria-hidden="true"></i>\
													</A>\
												</span>\
												<button class="btn btn-default btn-xs pull-right" v-on:click.stop.prevent=\'showSynonymsPretty = !showSynonymsPretty\'>Show {{ showSynonymsPretty ? \'raw\' : \'formatted\' }}</button>\
											</div>\
											<span v-if=\'showSynonymsPretty\'>\
												<HR/><span class=\'synonymsDetailContent\' v-html=\'synonymsDetail.content\'></span><HR/>\
											</span>\
											<span v-else><!-- for raw -->\
												<!-- 16:9 aspect ratio -->\
												<!-- <div class="embed-responsive embed-responsive-16by9"> -->\
				  								<!-- <iframe class="embed-responsive-item" :src="\'./\' + synonymsDetail.topicUrl"></iframe> -->\
												<!-- </div>					 -->\
												<!-- 4:3 aspect ratio -->\
												<div class="embed-responsive embed-responsive-4by3">\
				  										<iframe class="embed-responsive-item" :src="\'./\' + synonymsDetail.topicUrl"></iframe>\
												</div>\
											</span>\
											\
											<BR/>\
											\
											<span v-for="word in synonymsDetail.words">\
												<A HREF="#" v-on:click.stop.prevent="showSynonymsFor(word, item, verse.surah, verse.ayah)">\
													<span class="label label-success" :title="word.word">\
														{{word.wordEn}}\
													</span>\
												</A>\
												&nbsp;\
											</span>\
											\
			<!-- <PRE>{{synonymsDetail.words}}</PRE> -->\
			<BR/>\
		</div>\
		<div v-if=\'!showSynonymsDetail\'>Synonyms info shown here if available</div>\
	  </div>\
\
	  <div v-bind:class="{ \'tab-pane\': true, active: tab === \'search\' }" id="search">\
	  	<div class=well>\
		  <div Xclass=searchResults v-if="searchResults && Object.keys(searchResults).length > 1">\
			  <HR/>Search results: <BR/>\
			  {{searchResults.matchesCount}} matches found searching for: {{searchResults.keyword}}<BR/><BR/>\
\
			  <!-- <div v-for="(matches, key, index) in searchResults"> -->\
			  <div v-for="result in searchResults.results">\
			  	{{ result.matches.length }} matches found searching for: {{ result.keyword }} in: {{result.category}} category:\
\
				<div class=searchResults v-if="result.matches && result.matches.length" style="overflow:scroll; max-height:200px; white-space: nowrap;" :dir="result.category.indexOf( \'Arabic\' ) != -1 ? \'rtl\' : \'ltr\'">\
					<div v-for="match in result.matches">\
						<!-- {{match}} -->\
						<A href=# v-on:click.stop.prevent=\'goSearchResult(match, result);\' v-bind:title=\'match.verse\'>\
							{{ match.split(\'|\')[0] }}:{{ match.split(\'|\')[1] }}\
						</A>\
						{{ result.category.indexOf( \'Arabic\' ) != -1 ? qUtil.EnToAr( match.split(\'|\')[2] ) : match.split(\'|\')[2] }}\
					</div>\
				</div>\
			  </div>\
			  <HR/>\
		  </div>\
		  <div v-else>Search results shown here if available</div>\
		  <div v-if="isSearching || (searchResults && searchResults.searching)">\
		  	<i class="fa fa-spinner fa-pulse"></i>Searching...\
		  </div>\
		  <h6><small><span v-cloak v-if=message class=text-muted>\
		  	{{message}}\
		  </span></small></h6>\
		</div>\
	  </div>\
\
\
\
\
\
\
	  <div v-if="true" v-bind:class="{ \'tab-pane\': true, active: tab === \'misc\' }" id="misc">\
	  	  <div v-if="wordCorpusResults">\
	  	  	<div class=well>\
	  	  		\
	  	  		<div class=\'text-center arr2\'> {{ wordCorpusResults.w }} </div>\
	  	  		<HR/>\
	  	  		{{ [wordCorpusResults.surah, wordCorpusResults.ayah, wordCorpusResults.word].join(\':\') }}\
\
	  	  		<h3> Translation </h3>\
	  	  		{{ wordCorpusResults.w2w }}\
	  	  		<HR/>\
\
				    <h3> Root word </h3>\
	  	  		Lemma: \
	  	  			<div class=\'text-center arr2\'> {{ wordCorpusResults.corpus && wordCorpusResults.corpus.lemmaAr }}</div>\
\
	  	  		Root: \
	  	  			<div class=\'text-center arr2\'> {{ wordCorpusResults.corpus && wordCorpusResults.corpus.rootAr }}</div>\
	  	  			<b><div class=Xtext-center> {{ wordCorpusResults.corpus && wordCorpusResults.corpus.rootMeaning }}</div></b>\
	  	  			<div class=\'text-muted text-center\'> {{ wordCorpusResults.corpus && wordCorpusResults.corpus.rootTree }}</div>\
	  	  		<HR/>\
\
				    <h3> Grammar </h3>\
				    <div v-if="wordCorpusResults.corpus" class=well v-html=" wordCorpusResults.corpus && wordCorpusResults.corpus.pretty "></div>\
	  	  		<span class=text-muted>{{ wordCorpusResults.corpus }}</span>\
	  	  		<HR/>\
\
				    <h3> Transliteration </h3>\
	  	  		<span>{{ wordCorpusResults.w2w }}</span>\
	  	  		<HR/>\
\
	  	  		<HR/>\
\
	  	  		<HR/>\
	  	  		<span class=text-muted>{{ wordCorpusResults }}</span>\
\
	  	  	</div>\
	  	  </div>\
\
\
\
\
\
	  	  <div v-if="false && verbResults">\
	  	  	<HR/>Verbs lookup results: <BR/>\
	  	  	<form id="searchVerb">\
			       Search verb<input name="query" v-model="verbSearchQuery">\
			    </form>\
	  	  	<!-- <v-grid\
			    :data="verbResults"\
			    :columns=" _.without( _.keys(_.first( verbResults ) ), \'sarf\' )"\
			    :filter-key="verbSearchQuery">\
			</v-grid> -->\
	  	  	<!-- {{ verbResults }} -->\
	  	  </div>\
\
\
\
\
\
\
		  <div v-if="lemResults && Object.keys(lemResults).length > 0">\
			<HR/>Dictionary Lemma lookup results: {{ Object.keys(lemResults).length}}<BR/>\
				<!-- {{ lemResults }} -->\
				\
				<div v-if="lemResults && Object.keys(lemResults).length > 0" style="overflow:scroll; max-height:200px; white-space: nowrap;">\
					<div v-for="(match, key, index) in lemResults">\
						<A href=# v-on:click.stop.prevent=\'goLem(match, key, index);\' v-bind:title=\'match.verse\'>\
							{{match.surah}}:{{match.ayah}}:{{match.word}}\
						</A>\
						{{match.snippet.substring(0,100)}}\
					</div>\
				</div>\
			 <HR/>\
		  </div>\
\
		  <div v-else>Misc details shown here if available</div>\
\
	  </div>\
\
\
\
\
\
	  <div v-bind:class="{ \'tab-pane\': true, active: tab === \'about\' }" id="about">\
	  	<div class=well>\
		  	* Offline searchable Qur\'aan <BR/>\
		  	* Lot of Qur\'aan related info in one single place <BR/><BR/>\
		  	Feel free to leave feedback below.<BR/><BR/>\
\
			<div id=contact form>\
				<form method="POST">\
				  <!--<meta name="referrer" content="origin" /> -->\
				  <input v-model="feedbackEmail" type="email" name="email" placeholder="Your email (optional)"><BR/><BR/>\
				  <textarea v-model="feedbackMessage" name="message" placeholder="Your message"></textarea><BR/><BR/>\
				  <button v-on:click.stop.prevent="feedbackOnSubmit()" >Send</button>\
				</form>\
			</div>\
		</div>\
	  </div>\
\
\
\
\
\
<!--<div class=text-muted>{{data}}</div>-->\
	</div>\
</div>\
					   </div>',
			props: ['ayahsListFromPage', 'data', 'showTrans', 'showTranslit', 'showWord2Word', 'showCorpus', 'showAsbab', 'showSynonyms', 'hideAr',
					'currentPageAsbab', 'currentPageSynonyms', 'words', 'corpus',
					'showAr', 'w2wEn', 'w2wCorpus', 'tab', 'isSearching', 
					'searchResults', 'lemResults', 'wordCorpusResults', 'message',
					'feedbackEmail', 'feedbackMessage',
					'isLoading',
					 ],
			data: function(){
				return {
					loading: false,
					//data: null,
					error: null,
				};
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	//root: function(){ debugger; this.fetchData(); },
		    	//form: function(){ debugger; this.fetchData(); },
		    	$route: function(to, from) {
			      // react to route changes...
			      this.fetchData();
			    },
			    data: function(to, from){
			    	debugger;
			    	this.data.id = + new Date();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		this.data.id = + new Date();
		    		this.error = /*this.data =*/ null;
		    		this.loading = true;
		    		/*var root = this.root, form = this.form, 
		    			comp = this; //save a reference
		    		require(['qSarfGenerator'], function(qSarfGenerator){
		    			comp.data = qSarfGenerator.lookup(root, form);
		    			comp.loading = false;
		    			comp.error = null;
		    		});//TODO: add error handling code here
		    		*/
		    	},
		    },
		});


		
		var quranHeader = Vue.component('quran-header', {
			template: '<div>\
	<div class=row>\
		<div class="col-md-3 col-md-offset-4">\
			<H4 class=lead>Qur\'aan Viewer</H4>\
		</div>\
		<HR/>\
	</div>\
\
 	  <div v-if="isLoading" class=row>\
 	  	<div class="col-md-3 col-md-offset-4">\
		  	<BR/><BR/><BR/><BR/><BR/>\
			<!-- <i class="fa-li fa fa-spinner fa-pulse"></i>Loading... -->\
			<i class="fa fa-spinner fa-pulse fa-5x fa-fw"></i>\
			<span class="sr-only">Loading...</span>\
		</div>\
	   </div>\
\
					  </div>',
			props: ['isLoading'],
		});



		var quranNav = Vue.component('quran-nav', {
			template: '<div>\
	<div v-cloak class=row>\
       	 <div class=col-md-3>\
	         <button v-on:click="ayahchange(-1)">&lt;</button>\
	         <q-sura :sura="data.sura" :suras="suras" @versechange="versechange"></q-sura>\
	         <q-ayah :ayah="data.ayah" :ayahs-count="data.ayahsCount" @versechange="versechange"><</q-ayah>\
	         <button v-on:click="ayahchange(+1)">&gt;</button>\
	      </div>\
\
	      <div class=col-md-4>\
	         <q-page :page="data.page" @versechange="versechange"><</q-page>\
	         <q-juz :juz="data.juz" @versechange="versechange"><</q-juz>\
	         <span v-if=false>\
		         &nbsp;verse: <input v-model="verse" style=width:60px type=number min="1" max="6236">\
		     </span>\
		   </div>\
\
		   <div class=col-md-2>\
           <!-- Search: -->\
			<div class="input-group">\
		      <input v-model="keyword" v-on:keyup.enter="go" type="text" class="form-control" placeholder=\'Search for "Noah"...\'>\
		      <span class="input-group-btn">\
		        <button v-on:click="go" class="btn btn-default" type="button">Go</button>\
		      </span>\
		    </div><!-- /input-group -->\
			  <!-- <input v-model="keyword" v-on:keyup.enter="go" placeholder=\'Search "Noah"\' type=text />\
			  <button v-on:click="go">Go</button> -->\
			</div>\
\
			<div class=col-md-3>\
			  Options: \
			  <input type=checkbox v-model="showTrans" click="showTrans = !showTrans" title="show translation" />Translation\
			  <input type=checkbox v-model="showTranslit" click="showTranslit = !showTranslit" title="show transliteration" />Transliteration\
			  <input type=checkbox v-model="showAsbab" click="showAsbab = !showAsbab; tab = \'asbab\';" title="show Asbab (Sababun Nuzul)" />Asbab\
			  <input type=checkbox v-model="showSynonyms" click="showSynonyms = !showSynonyms; tab = \'synonyms\';" title="show transliteration" />Synonyms\
			  <!-- <input type=checkbox v-model="showCorpus" click="showCorpus = !showCorpus" title="show transliteration" />Grammar -->\
		 	</div>\
		 </div>\
    	 <HR/>\
					   </div>',
			props: ['data', 'keyword', 'suras', 'showTrans', 'showTranslit', 'showAsbab', 'showSynonyms', 'showCorpus'],
			data: function(){
				return{

				};
			},
			methods: {
				go: function(){

				},
				versechange: function(){

				},
				ayahchange: function(){

				},

			},
		});


		var quranAyahComp = Vue.component('quran-ayah-comp',{
			template: '<div>Qur\'aan Ayah {{ sura }}:{{ ayah }}\
							<div v-if=\'loading\'>Loading...</div>\
							<div :key="id" dir=rtl class=well v-else>\
						<span>\
						<!-- show basmallah -->\
						<span v-if="!hideAr && verse.isBasmallah">\
							<div id="bismillah" class="bismillah text-center word-font" style="text-align:center; font-size: 42px;" title="بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ" >\
								<HR/>\
								﷽\
								<HR/>\
							</div>\
						</span>\
						<!-- show arabic ayah -->\
						<span v-if="verse.BUCK" dir="rtl">\
							\
							<span v-if="showTrans || showTranslit || showCorpus" style=font-size:.96em >\
								{{ verse.surah }}:{{ verse.ayah }} &nbsp; \
							</span>\
							<span style=direction:rtl;font-size:2.35em v-bind:class="{ aya: true, highlight: verse.isHighlighted, select: verse.isSelected }">\
								<span v-for="word in segmentify(verse, words, corpus)">\
									<quran-word :word="word"></quran-word>\
								</span>\
							</span>\
							<span v-if="false" style=direction:rtl;font-size:2.35em v-bind:class="{ aya: true, highlight: verse.isHighlighted, select: verse.isSelected }">\
								{{ !hideAr ? verse.AR : verse.BUCK }}\
							</span>\
							<span v-if="true || (!showTrans && !showTranslit && !showCorpus)" :title="\'Ayah ref: \' + verse.surah + \':\'+ verse.ayah"  style=font-size:.96em >\
								<span>﴿</span>{{ verse.ayah }}<span>﴾</span>\
							</span>\
							\
						</span>\
						\
						\
						<!-- show translation, translit etc -->\
						<span v-if="verse.BARE" v-html="">	\
						</span>\
						<span v-if="verse.TRANS" >\
							<div v-if="showTrans" dir=ltr>{{ verse.TRANS }}</div>\
						</span>\
						<span v-if="verse.TRANSLIT" >\
							<div v-if="showTranslit" dir=ltr v-html="verse.TRANSLIT"></div>\
						</span>\
						\
						<span v-show="showAsbab && currentPageAsbab && currentPageAsbab.join(\' \').indexOf(\' \' + verse.surah + \':\' + verse.ayah + \' \') != -1">\
							<A HREF="#" v-on:click.stop.prevent="showAsbabFor(verse.surah, verse.ayah);" title="Click to see Sabab Nuzul for this Ayah" style=font-size:.8em >\
								<!-- [A] -->\
								<span style="cursor:pointer" class="label label-warning" >ASB</span>\
							</A>\
						</span>\
						<span v-show="showSynonyms && _.find(currentPageSynonyms, verse.surah + \':\' + verse.ayah)">\
							<A HREF="#" v-on:click.stop.prevent="showSynonymsFor(null, verse.surah, verse.ayah)" title="Click to see Near Synonyms for some words in this Ayah." style=font-size:.8em >\
								<!-- [S] -->\
								<span style="cursor:pointer" class="label label-info" >SYN</span>\
							</A>\
						</span>\
						<span v-if="showTrans || showTranslit" >\
							<BR/>\
						</span>\
						\
		  			</span>\
							</div>\
					   </div>',
			props: ['sura', 'ayah', 'showTrans', 'showTranslit', 'showWord2Word', 'showCorpus', 'showAsbab', 'showSynonyms', 'hideAr'],
			//props: ['verse', '', '', '', '', '', 'currentPageAsbab', 'currentPageSynonyms', '', 'words', 'corpus'],
			data: function(){
				return {
					loading: false,
					verse: null,
					error: null,
					id: + new Date(),
					words: null,
					corpus: null,
					currentPageAsbab: null,
					currentPageSynonyms: null,
				};
			},
			created: function(){
				this.fetchData();
			},
			watch: {
				$route: function(to, from){
					this.fetchData();
				},
			},
			methods: {
				fetchData: function(){
					this.error = this.data = null;
		    		this.loading = true;
		    		var comp = this; //save a reference
		    		comp.verse = {
		    			surah: +this.sura,
		    			ayah: +this.ayah,
		    			verseNo: null,
		    		};
		    		require(['Q', 'qSearch'], function(Q, qSearch){
		    			comp.verse.verseNo = Q.verseNo.ayah( comp.verse.surah, comp.verse.ayah );
						//existing verse properties: ayah, surah, verseNo
						var verseEx = qSearch.lookup( comp.verse.verseNo );
						if(verseEx){
							verseEx.TRANS = !verseEx.TRANS ? '' : verseEx.TRANS.split('|')[2];
							verseEx.TRANSLIT = !verseEx.TRANSLIT ? '' : verseEx.TRANSLIT.split('|')[2];
						}

						var basmallah = 'bisomi {ll~ahi {lr~aHoma`ni {lr~aHiymi ',
							basmallah2 = 'b~isomi {ll~ahi {lr~aHoma`ni {lr~aHiymi',
							isBasmallah = comp.verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah ),
							isBasmallah2 = comp.verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah2 );
						if(isBasmallah || isBasmallah2){ verseEx.BUCK = verseEx.BUCK.substring( basmallah.length + (isBasmallah2 ? 1 : 0) ); }
						
						verseEx.AR = qUtil.EnToAr( verseEx.BUCK );
						verseEx.BARE = qUtil.BuckToBare( verseEx.BUCK );

						comp.verse = _.extend(comp.verse, {isBasmallah: isBasmallah, /*isHighlighted: false, isSelected: false*/}, verseEx );
			    		comp.loading = false;
			    		comp.error = null;

			    		if(comp.showWord2Word && !comp.words){
			    			//TODO: show loading only for words tooltips
			    			require(['w2wEn'], function( w2wEn ){
			    				comp.words = w2wEn.lookup( comp.verse.verseNo );
			    				comp.id = + new Date(); //update the unique ID to hopefully trigger a refresh

			    				setTimeout(function(){
			    					$('span').tooltip(); //now turn on tooltips after delay.
			    				}, 0);
			    			});
			    		}
			    	});
				},

				segmentify: function(verse, words, corpus){
					var count = 0;
					return _.map(verse.AR.split(' '), function(w){
						var isStopLetter = /[ۚۖۛۗۙ]/.test( w ),
							isOtherLetter = /[۞۩]/.test( w ),
							no = (isStopLetter || isOtherLetter) ? null : ++count,
							resp = {w: w};
						if(isStopLetter || isOtherLetter){ resp.isStopLetter = true; }
						else{ resp.surah = verse.surah; resp.ayah = verse.ayah; resp.word = no; resp.w2w = words && words[ no - 1 ]; resp.corpus = corpus && corpus[ no - 1 ]; };
						return resp;
					})
			  	},
			}, //end of methods
		});


		
		var quranPageComp = Vue.component('quran-page-comp',{
			template: '<div>Qur\'aan Page# {{page}}\
						<div dir=rtl class=\'quranpage clearfix\' style="text-align: justify; Xoverflow:scroll; Xmax-height:550px; XXXwhite-space: nowrap;">\
		  				<span v-for="(verse, verseIndex) in iList">\
							<quran-ayah-comp :sura="verse.surah" :ayah="verse.ayah" \
								:verse="verse.verseNo" :show-trans="showTrans" :show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="hideAr" \
								:show-asbab="showAsbab"\
								:show-synonyms="showSynonyms"\
								:current-page-asbab="currentPageAsbab"\
								:current-page-synonyms="currentPageSynonyms"\
								:words="w2wEn && w2wEn.lookup && w2wEn.lookup( verse.verseNo )"\
								:corpus="w2wCorpus && w2wCorpus.lookup && w2wCorpus.lookup( verse.verseNo )"\
							>\
							</quran-ayah-comp>\
						</span>\
		  			 </div>\
					   </div>',
			props: ['page', 'sura', 'ayahsListFromPage', 'showTrans', 'showTranslit', 'showCorpus', 'showAsbab', 'showSynonyms', 'currentPageAsbab', 'currentPageSynonyms', 'hideAr', 'w2wEn', 'w2wCorpus'],
			data: function(){
				return {
					loading: false,
					//data: null,
					error: null,
					iList: this.ayahsListFromPage,
					// computed: {
					//   	iList: function () {
				 //  			return this.ayahsListFromPage;
					//   	}
					// },
				};
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	$route: function(to, from) {
		    	  this.iList = null;
			      // react to route changes...
			      this.fetchData();
			    },
			    data: function(to, from){
			    	debugger;
			    	this.data.id = + new Date();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		//this.data.id = + new Date();
		    		this.error = /*this.data =*/ null;
		    		this.loading = true;
		    		if(!this.iList || !this.ayahsListFromPage || this.ayahsListFromPage.length == 0){
		    			var comp = this;
		    			require(['Q', 'qSearch', 'underscore'], function(Q, qSearch, _){
		    				comp.iList = Q.ayah.listFromPage( +comp.page );

		    				if(comp.sura){//optionally, if sura is set.. either scroll to that sura or only start page from sura
		    					comp.iList = _.filter(comp.iList, {surah: +comp.sura} );
		    				}
			    			/*comp.verse.verseNo = Q.verseNo.ayah( comp.verse.surah, comp.verse.ayah );
							//existing verse properties: ayah, surah, verseNo
							var verseEx = qSearch.lookup( comp.verse.verseNo );
							if(verseEx){
								verseEx.TRANS = !verseEx.TRANS ? '' : verseEx.TRANS.split('|')[2];
								verseEx.TRANSLIT = !verseEx.TRANSLIT ? '' : verseEx.TRANSLIT.split('|')[2];
							}

							var basmallah = 'bisomi {ll~ahi {lr~aHoma`ni {lr~aHiymi ',
								basmallah2 = 'b~isomi {ll~ahi {lr~aHoma`ni {lr~aHiymi',
								isBasmallah = comp.verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah ),
								isBasmallah2 = comp.verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah2 );
							if(isBasmallah || isBasmallah2){ verseEx.BUCK = verseEx.BUCK.substring( basmallah.length + (isBasmallah2 ? 1 : 0) ); }
							
							verseEx.AR = qUtil.EnToAr( verseEx.BUCK );
							verseEx.BARE = qUtil.BuckToBare( verseEx.BUCK );

							comp.verse = _.extend(comp.verse, {isBasmallah: isBasmallah, *//*isHighlighted: false, isSelected: false*//*}, verseEx );*/
				    		comp.loading = false;
				    		comp.error = null;

				    		// if(comp.showWord2Word && !comp.words){
				    		// 	//TODO: show loading only for words tooltips
				    		// 	require(['w2wEn'], function( w2wEn ){
				    		// 		comp.words = w2wEn.lookup( comp.verse.verseNo );
				    		// 		comp.id = + new Date(); //update the unique ID to hopefully trigger a refresh

				    		// 		setTimeout(function(){
				    		// 			$('span').tooltip(); //now turn on tooltips after delay.
				    		// 		}, 0);
				    		// 	});
				    		// }
				    	});
		    		}
		    	},
			},
		});


		var quranSuraComp = Vue.component('quran-sura-comp',{
			template: '<div>Qur\'aan Sura {{sura}}\
							<quran-page-comp \
								:page="page"\
								:sura="sura"\
								:show-trans="showTrans" :show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="hideAr" \
								:show-asbab="showAsbab"\
								:show-synonyms="showSynonyms"\
							>\
							</quran-page-comp>\
							<HR/><div class=text-muted>Next Page</div><HR/>\
							<quran-page-comp \
								:page="page + 1"\
								:sura="sura"\
								:show-trans="showTrans" :show-translit="showTranslit" :show-corpus="showCorpus" :hide-ar="hideAr" \
								:show-asbab="showAsbab"\
								:show-synonyms="showSynonyms"\
							>\
							</quran-page-comp>\
					   </div>',
			props: [ 'sura', 'ayahsListFromPage', 'showTrans', 'showTranslit', 'showCorpus', 'showAsbab', 'showSynonyms', 'currentPageAsbab', 'currentPageSynonyms', 'hideAr', 'w2wEn', 'w2wCorpus'],
			data: function(){
				return {
					page: Q.ayah.page(+this.sura, 1), //TODO: add more pages as user scrolls down
				}
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	$route: function(to, from) {
			      // react to route changes...
			      this.fetchData();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		//this.data.id = + new Date();
		    		this.error = /*this.data =*/ null;
		    		this.loading = true;
		    		this.sura = +this.sura;
		    		this.page = Q.ayah.page(+this.sura, 1);
		    	},
		    }
		});




		var quranMain = Vue.component('quran-main', {
			template: '',
			props: [''],

		});


		var quranSearch = Vue.component('quran-search',{
			template: '<div>Qur\'aan Search results for: {{ keyword }}\
							<div v-if="loading"><BR/>Searching...</div>\
							<div class=text-muted v-else>\
								{{searchResults}} <BR/><BR/> {{data}}\
							</div>\
					   </div>',
			props: [ 'keyword', ],
			data: function(){
				return {
					error: null,
					loading: false,
					data: null,
					message: null,
					searchResults: null,
				}
			},
			created: function() {
			    // fetch the data when the view is created and the data is
			    // already being observed
			    this.fetchData()
		    },
		    watch: {
		    	$route: function(to, from) {
			      // react to route changes...
			      this.fetchData();
			    },
		    },
		    methods: {
		    	fetchData: function(){
		    		//this.data.id = + new Date();
		    		this.error = /*this.data =*/ null;
		    		this.loading = true;
		    		this.data = null;
		    		var comp = this, startTime = new Date(), endTime;
	    			require(['Q', 'qSearch', 'underscore'], function(Q, qSearch, _){
	    				qSearch.searchAsync( comp.keyword ).then(function(data){
	    					comp.data = data;
	    					comp.loading = false;
	    					comp.error = null;
							comp.searchResults = results || {};
							comp.searchResults.searching = false;
							endTime = new moment(); //console.log((vm.message += ((endTime = new moment()) +' results received') ) );
							if(!(endTime - startTime))debugger;
							comp.message = 'Search time: ' + endTime.diff(startTime, 'seconds') + ' seconds. (' + (endTime - startTime) + ' ms.) ';//moment(startTime).fromNow() + ' ' + vm.message;
							setTimeout(function(){
								var hilites = [];
								hilites.push( comp.searchResults.keyword );
								//hilites.push( qUtil.BuckToBare(vm.searchResults.keyword) );
								hilites.push( qUtil.EnToAr( comp.searchResults.keyword ) ); //TODO: conditionally do this
								hilites.push( qUtil.EnToAr( qUtil.BuckToBare(comp.searchResults.keyword) ) ); //TODO: conditionally do this

								//clear out old keywords and set new ones.
								$('.searchResults').unmark({ "done": function(){
																		$('.searchResults').mark( hilites );
															 }
								});
							}, 200);
	    				});//TODO: add error handling
	    			});
		    	},
		    }
		});

		return {
			quranHeader: quranHeader,
			quranNav: quranNav,
			twoPaneView: twoPaneView,
			quranSuraComp: quranSuraComp,
			quranPageComp: quranPageComp,

			quranAyahComp: quranAyahComp,
			quranDashboard: quranDashboard,
			quranMain: quranMain,
			quranSearch: quranSearch,
			quranPage: quranPage,
			quranAyah: quranAyah,
			quranWord: quranWord,
			quranSarf: quranSarf,
			quranGrammar: quranGrammar,
			quranGrammarConcordance: quranGrammarConcordance,
		};

	}
}, function(){//error callback for requireJS
	console.log('ERROR');
	console.log( arguments );
});