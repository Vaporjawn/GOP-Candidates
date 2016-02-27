function GOP(i,g){this.ratio=i, this.imageurl=g}
function Randomize(i){return Math.floor(Math.random()*i.length)}
function imageRatio(i){var g=i.height/i.width; return g>1?"vertical":1===g?"square":1>g?"horizontal":void 0}
var getGOP={init:function(i){this.myGOP=i}, horizontal:function()
return this.myGOP.filter(function(i){return"horizontal"===i.ratio})}, vertical:function(){return this.myGOP.filter(function(i)
	{return"vertical"===i.ratio})}, square:function()
	{return this.myGOP.filter(function(i)
	{return"square"===i.ratio})}},myGOP=[
new GOP("horizontal", "http://heygirl.io/img/gosling-horiz-1.png"),
new GOP("horizontal", "http://www.gannett-cdn.com/-mm-/cfd2949a6bc4f7e98cc6a3fae3f80d64a910519e/c=0-159-4926-2942&r=x1683&c=3200x1680/local/-/media/2015/06/27/USATODAY/USATODAY/635710194244161615-XXX-CAPITAL-DOWNLOAD-SEN.-TED-CRUZ-JMG-40121-74074276.JPG"),
new GOP("horizontal", "http://www.trbimg.com/img-55401a01/turbine/la-oe-0429-mcmanus-jeb-bush-moderation-20150429"),
new GOP("horizontal", "http://blogs-images.forbes.com/robertwood/files/2015/03/Chris-Christie.jpg"),
new GOP("horizontal", "http://www.motherjones.com/files/jeb_630_0.jpg"),
new GOP("horizontal", "http://www.gannett-cdn.com/-mm-/1f57a842874261f1d1bc39f90a40dc64a0900a26/c=0-847-3271-2695&r=x1683&c=3200x1680/local/-/media/2015/04/01/USATODAY/USATODAY/635634956003435504-XXX-CAP-Down-Carly-Fiorina-hdb385.JPG"),
new GOP("horizontal", "http://i.kinja-img.com/gawker-media/image/upload/lr1foau8zsxbsfjmjxli.jpg"),
new GOP("horizontal", "http://www.thepoliticalinsider.com/wp-content/uploads/2015/08/bal-ben-carson.jpg"),
new GOP("horizontal", "http://40.media.tumblr.com/805f6ed6c06f7ec65eace2ed4da00935/tumblr_mzgmcnL0AF1rn1isao1_500.jpg"),
new GOP("horizontal", "http://cdn.theatlantic.com/assets/media/img/mt/2015/07/AP_473596995531/lead_960.jpg?1437760759"),
new GOP("horizontal", "https://img.washingtonpost.com/wp-apps/imrs.php?src=https://img.washingtonpost.com/blogs/answer-sheet/files/2014/09/bencarson.jpg&w=1484"),
new GOP("horizontal", "https://cmgddnohiopolitics.files.wordpress.com/2015/08/john-kasich.jpg"),
new GOP("horizontal", "http://crooksandliars.com/files/primary_image/16/01/tedcruz3_0.jpg"),
new GOP("horizontal", "http://www.arcamax.com/newspics/140/14045/1404595.jpg"),
new GOP("horizontal", "http://i.huffpost.com/gen/2532322/thumbs/o-JOHN-KASICH-facebook.jpg"),
new GOP("horizontal", "http://media.bizj.us/view/img/611211/john-kasich*750xx600-338-0-131.jpg"),
new GOP("vertical", "https://upload.wikimedia.org/wikipedia/commons/8/87/Ted_Cruz,_official_portrait,_113th_Congress.jpg"),
new GOP("vertical", "https://upload.wikimedia.org/wikipedia/commons/3/3d/Donald_Trump_by_Gage_Skidmore_4.jpg"),
new GOP("vertical", "http://www.gannett-cdn.com/-mm-/7ca264a63e5b873c345420406c4bd9d1f2928cea/c=0-40-1086-1488&r=537&c=0-0-534-712/local/-/media/2015/06/06/IAGroup/DesMoines/635692101841338124-RoastAndRide-KK-042.JPG"),
new GOP("vertical", "http://a2.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,q_80,w_620/MTIxNDI3MjkzNDE1MTc5Nzg5.jpg"),
new GOP("vertical", "https://upload.wikimedia.org/wikipedia/commons/a/ab/Governor_John_Kasich.jpg"),
new GOP("vertical", "http://static6.businessinsider.com/image/55918b77ecad04a3465a0a63/nbc-fires-donald-trump-after-he-calls-mexicans-rapists-and-drug-runners.jpg"),
new GOP("vertical", "https://pbs.twimg.com/profile_images/673911067664187392/5JbmxRD6.jpg"),
new GOP("vertical", "http://dcxposed.com/wp-content/uploads/2013/01/chris-christie-sellout.jpg"),
new GOP("vertical", "https://saboteur365.files.wordpress.com/2015/10/ben-carson-dakr.jpg"),
new GOP("vertical", "http://upload.wikimedia.org/wikipedia/commons/5/51/Rand_Paul_portrait_by_Gage_Skidmore.jpg"),
new GOP("vertical", "https://upload.wikimedia.org/wikipedia/commons/7/78/Rand_Paul,_official_portrait,_112th_Congress_alternate.jpg"),
new GOP("vertical", "http://cdn.thedailybeast.com/content/dailybeast/articles/2015/04/09/why-does-the-nra-suddenly-hate-rand/jcr:content/image.crop.800.500.jpg/47619644.cached.jpg"),
new GOP("vertical", "http://crooksandliars.com/files/primary_image/15/10/o-rand-paul-facebook.jpg"),
new GOP("vertical", "http://www.teaparty.org/wp-content/uploads/2013/02/RandPaul450x285.gif"),
new GOP("vertical", "http://media.salon.com/2015/04/rand_paul19.jpg"),
new GOP("square", "http://media.salon.com/2016/01/ted-cruz.jpg"),
new GOP("square", "http://www.slate.com/content/dam/slate/articles/news_and_politics/politics/2015/04/150413_POL_Rubio.jpg.CROP.promo-mediumlarge.jpg"),
new GOP("square", "http://static6.businessinsider.com/image/56340d8dbd86ef17008c6230/billionaire-mega-donor-paul-singer-just-threw-his-support-to-marco-rubio.jpg"),
new GOP("square", "http://static1.businessinsider.com/image/55ca4540371d22462c8bcb17/donald-trump-is-still-soaring-in-iowa--but-there-are-now-some-clear-warning-signs.jpg"),
new GOP("square", "http://static5.businessinsider.com/image/51ae3e56eab8eaf053000003/chris-christie-proves-again-that-hes-a-political-genius.jpg"),
new GOP("square", "https://fortunedotcom.files.wordpress.com/2015/02/462051012.jpg?quality=80&w=1024"),
new GOP("square", "http://assets.nydailynews.com/polopoly_fs/1.2209215!/img/httpImage/image.jpg_gen/derivatives/article_635/carly5n-1-web.jpg"),
new GOP("square", "http://www.newsmax.com/CMSPages/GetFile.aspx?guid=a4d486b6-b30b-4659-954b-371e721c26cd&SiteName=Newsmax"),
new GOP("square", "http://s1.ibtimes.com/sites/www.ibtimes.com/files/styles/v2_article_large/public/2015/04/10/marco-rubio-water.jpg"),
new GOP("square", "http://cdn.theatlantic.com/assets/media/img/mt/2015/07/RTX1GZ5C/lead_960.jpg?1438106670"),
new GOP("square", "http://www.dispatch.com/content/graphics/2015/04/02/john-kasich.jpg"),
new GOP("square", "http://www.unionleader.com/storyimage/UL/20150616/NEWS0605/150619286/AR/0/AR-150619286.jpg?q=100"),
new GOP("square", "http://www.theravive.com/today/imageFiles/2015/07/1369949609000-jeb-bush-001.jpg"),
new GOP("square", "http://www.joemygod.com/wp-content/uploads/2016/02/RandPaulLS.jpg"),
new GOP("square", "http://crooksandliars.com/files/primary_image/15/05/rand-paul.jpg")
	];
	!function(i){getGOP.init(myGOP); for(var g=i.getElementsByTagName("img"),
		o=g.length,n=0; o>n;n++){var l=imageRatio(g[n]), t=Randomize(getGOP[l]()),
	e=getGOP[l]()[t];g[n].src=e.imageurl}}(document);