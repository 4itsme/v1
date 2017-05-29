require.config({
  paths: {
    "jquery": 'lib/jquery.min', //"https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min",
    							//'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min',
    "underscore": 'lib/lodash.min', //"lib/underscore",
    							//"https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min"
    "bootstrap": "libcss/bootstrap-3.3.7-dist/js/bootstrap.min", 
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
	"qAntonyms": 'lib/modules/qAntonyms',


	//data files paths
	"qBuck": 'data/qBuckFull',
	"qTrans": 'data/TANZIL.en.sahih',
	"qTranslit": 'data/TANZIL.en.transliteration',

	"asbabDATA": 'data/asbabDATA',
	"synonymsDATA": 'data/synonymsDATA',
	"qCorpus1": 'data/manzil1,7',
	"qCorpus2": 'data/manzil2,3,4',
	"qCorpus3": 'data/manzil5,6',

  }
});


	var _dependencies = [
					 'vue', 'vue-router', 'qMain'
					,'underscore' ,'jquery', 'jqueryMark', 'moment'
					,'Q' ,'qUtil' 
					,'qSearch'
					//,'qCorpus'
					//,'qAsbab' ,'qSynonyms'
					
					//below ones not really dependencies of this module; just adding for temporary debugging purpose
					//, 'qRoot', 'qRootLemDict', 'qRootMeanings', 'qSearch'
					//, 'qSarf', 'qAntonyms'
		];

	require(_dependencies, function( 
					Vue, VueRouter, qMain
					,_ ,$, jqueryMark, moment
					,Q ,qUtil 
					,qSearch
					//,qCorpus 
					//,qAsbab ,qSynonyms

					//below ones not really dependencies of this module; just adding for temporary debugging purpose
					//,qRoot ,qRootLemDict ,qRootMeanings ,qSearch
					//,qSarf ,qAntonyms
		){


	const User = {
	  template: '<div>User {{ $route.params.id }}</div>'
	}

	const router = new VueRouter({
	  routes: [
	    // dynamic segments start with a colon
	    { path: '/user/:id', component: User }
	  ]
	})


	var vm;

	initializeVueComponents(Vue);

	initializeVueComponents2(Vue);

	vm = initializeVM();

	vm._ = _;
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
							isBasmallah = verse.ayah == 1 && verseEx.BUCK && verseEx.BUCK.startsWith( basmallah );
						if(isBasmallah){ verseEx.BUCK = verseEx.BUCK.substring( basmallah.length ); }
						
						verseEx.AR = qUtil.EnToAr( verseEx.BUCK );
						verseEx.BARE = qUtil.BuckToBare( verseEx.BUCK );

						verse = _.extend(verse, {isBasmallah: isBasmallah, /*isHighlighted: false, isSelected: false*/}, verseEx );
					});

					//now find out if any Asbab for this page as an async call
					if(vm.showAsbab) 
					qAsbab.findForPageAsync( vm.data.page )
						  .then(function(data){
							vm.currentPageAsbab = (data || '').split(' ');
					});
					
					//now find out if any Asbab for this page as an async call
					if(vm.showSynonyms)
					qSynonyms.findForPageAsync( vm.data.page )
						  .then(function(data){
							vm.currentPageSynonyms = (data || []);
							currentPageSynonymsDetails = [];
					});
					
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
					vm.isLoading = true;
					//vm.message = message;
					qSearch.searchAsync(keyword).then(function(results){
						vm.isLoading = false;
						vm.searchResults = results || {};
						vm.searchResults.searching = false;
						console.log((vm.message += ((endTime = new moment()) +' results received') ) );
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
				var lookup = qAsbab.get(sura, ayah);
				vm.showAsbabDetail = true;
				vm.asbabDetail = lookup;
				console.log( lookup );
			}
					
			vm.showSynonymsFor = function(item, sura, ayah){
				if(item){
					var details = vm.getSynonymsDetailsFor(item, sura, ayah);
					vm.showSynonymsDetail = true;
					vm.synonymsDetail = details;
				}else{
					var key = sura + ':' + ayah;
					_.first( vm.currentPageSynonyms, key);
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
					topicUrl = item.u;
				var lookup = qSynonyms.get(topicId);
				var content = '';
				$.get( topicUrl )
					.then(function(content){
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
				return {
					name: name,
					topicId: topicId,
					topicUrl: topicUrl,
					words: lookup,
					ref: key,
					content: content,
				};
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


	function initializeVM(){
		vm = new Vue({
		  router,
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
			message: '',
			debug: false,
			showArabic: true,
			showTrans: false,
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
	            if(verse){ vm.verse = verse; }
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
		return vm;
	}


	function initializeVueComponents(Vue){

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
		  						<a class="arrow-link arrow-left" @click="onChange( -1 );" title="Previous page">◄</a>\
		  						<select v-model="iPage" @change="onChange">\
		        					<option v-for="p in 604" :value="p">{{p}}</option>\
		      					</select>\
		      					<a class="arrow-link arrow-right" @click="onChange( +1 );" title="Next page">►</a>\
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
		Vue.component('quran-page', {
		  template: '<div>quran-page: <div v-for="item in iList">\
		  								<quran-ayah :ayah-from-page="item">\
		  									\
		  								</quran-ayah>\							\
		  							  </div>\
		  			 </div>',
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iList: function () {
		  		return this.ayahsListFromPage;
		  	}
		  },
		  props: ['ayahsListFromPage'],
		});


		Vue.component('quran-ayah', {
		  template: '<div>quran-ayah: {{ iAyahFromPage }}</div>',
		  data: function(){
		  	return {};
		  },
		  computed: {
		  	iAyahFromPage: function () {
		  		return this.ayahFromPage;
		  	}
		  },
		  props: ['ayahFromPage'],
		});



	}
});