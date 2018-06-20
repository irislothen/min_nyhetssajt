
const key = "e6ef2cde327f46e3820d0344025b79fc"
const vrurl = `https://newsapi.org/v2/everything?sources=wired&q=VR&apiKey=${key}`
const universeurl = `https://newsapi.org/v2/everything?sources=wired&q=universe&apiKey=${key}`

const vrLinkDiv = document.querySelector(".vr");
const universeLinkDiv = document.querySelector(".universe");
const articlesDiv = document.querySelector(".articles");
const largeArticlesDiv = document.querySelector(".large-article");

const recievedNews = (newsdata) => {
    articlesDiv.innerHTML = null;
    newsdata.articles.forEach((article, index) => {

      const enlargeArticle = () => {
        	largeArticlesDiv.className = "large-news";
        	largeArticlesDiv.innerHTML = `
        			  <h2>${article.title}</h2>
        			  <img src="${article.urlToImage}"/>`
        	}

      if(index === 0) {
          largeArticlesDiv.className = "large-news";
          largeArticlesDiv.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}"/>`
          }

          //Here we create and add html elements to our html file
      if(index < 20 && index > 0) {

          /*const div = document.createElement("div")
          div.className = "news "
          div.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.urlToImage}"/>`
          div.onclick = enlargeArticle;
          articlesDiv.appendChild(div)*/

          const div = document.createElement("div");
          const div2 = document.createElement("div");
		      const button = document.createElement("div");

		      div2.className = "hide-details";
	     	  div2.innerHTML = `<p>${article.description}</p>`

	    	  button.innerHTML = "Read more";
	    	  button.onclick = () => {div2.classList.toggle("hide-details");}
          button.className = "readmore"

	        div.className = "news"
	        div.innerHTML = `
		  		<h2>${article.title}</h2>
			  	<img src="${article.urlToImage}"/>
			   	`
		      div.onclick = enlargeArticle;
		      div.appendChild(button);
		      div.appendChild(div2)

	        articlesDiv.appendChild(div);
          }
    })
  }

const fetchvrNews = () => {
  	fetch(vrurl)
  	  .then(response => response.json())
  	  .then(recievedNews)
  }

const fetchuniverseNews = () => {
  	fetch(universeurl)
  	  .then(response => response.json())
  	  .then(recievedNews)
  }

  vrLinkDiv.onclick = fetchvrNews;
  universeLinkDiv.onclick = fetchuniverseNews;

  fetchvrNews();
