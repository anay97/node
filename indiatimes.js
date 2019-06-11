//Total Articles
let total_articles=document.getElementsByClassName('big-card')
let article_count=0;
for(i=0;i<total_articles.length;i++){
if(!total_articles[i].innerText.startsWith("AD")){
	article_count++;
}
};
console.log(article_count);//Total Articles without Ads

//Number of Images
let all_imgs=document.getElementsByTagName('img')
console.log(all_imgs.length)//Total Number of Images on the Page

//Total Exit Links
allLinks=document.links;
exitLinks=0;
for(i=0;i<allLinks.length;i++){
	let link_href=allLinks[i].getAttribute('href');
	if(!link_href.includes("indiatimes.com") && !link_href.includes("void") && !link_href.startsWith("#")){
		console.log(allLinks[i].getAttribute('href'));//Exit Link Print
		exitLinks++;
	}
}
console.log(exitLinks);//Count of Exit Links