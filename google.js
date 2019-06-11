//Count of Articles
let allArticles=document.getElementsByTagName('div');
let article_count=0;
for(i=0;i<allArticles.length;i++){
	if(allArticles[i].getAttribute('jscontroller')=='d0DtYd'){
		article_count++;
	}
}
console.log(article_count);

//All KINDS OF Images
let all_imgs=document.getElementsByTagName('img')
console.log(all_imgs.length)//Total Number of Images on the Page

allLinks=document.links;
exitLinks=0;
for(i=0;i<allLinks.length;i++){
	let link_href=allLinks[i].getAttribute('href');
	if(link_href.startsWith("./articles") || link_href.startsWith("./publication")){
		console.log(allLinks[i].getAttribute('href'));//Exit Link Print
		exitLinks++;
	}
}
console.log(exitLinks);//Count of Exit Links