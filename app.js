const articleList = document.getElementById("article-list");
const articleTemplate = (article) => {
  return `<div class="article">
<p class="keyword">${article.keyword}</p>
<h3>${article.title}</h3>
<p class="article-content">
  ${article.summary}</p>
</div>`;
};

let articleData = "";

const data = [
  {
    keyword: "hands on",
    title: "Criando um projeto full stack com HTML, CSS e API Python",
    summary:
      "Montes, lacus, laoreet commodo egestas amet eget laoreet. Amet et",
  },
  {
    keyword: "Heads Off",
    title: "Live",
    summary: "lorem lorem lorem lorem",
  },
];

for (const article of data) {
  console.log(article);
  articleData += articleTemplate(article);
}

articleList.innerHTML = articleData;
