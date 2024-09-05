import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";

interface Article {
  id: string;
  title: string;
  publishedAt: string;
  coverImage: string;
}

const ArticleList = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    fetch("https://api.spaceflightnewsapi.net/v4/articles")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Network response was not ok");
        }
      })
      .then((data) => {
        setArticles(data.results);
      })
      .catch((err) => {
        console.log("Error fetching articles:", err);
      });
  };

  return (
    <div >
      {articles.map((article) => (
        <SingleArticle
          key={article.id}
          id={article.id}
          title={article.title}
          date={article.publishedAt}
          image={article.coverImage}
         
        />
      ))}
    </div>
  );
};

export default ArticleList;