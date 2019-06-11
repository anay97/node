//Task 2 Links
let all_links=document.links;
for(i=0;i<all_links.length;i++) {
    all_links[i].onclick=function () {
        alert(this.innerHTML);
    }
}

//Task 2 Wikipedia open links in popup

let all_links=document.links;
for(i=0;i < all_links.length; i++) {
    all_links[i].onclick=function () {
        window.open(this.getAttribute('href'),'popup','width=600,height=600');
		return false;
    }
}
