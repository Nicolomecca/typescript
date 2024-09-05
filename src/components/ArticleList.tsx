import { useEffect, useState } from "react";
import SingleArticle from "./SingleArticle";
import { Row, Col } from "react-bootstrap";

interface Article {
    id: string
    title: string;
    image_url: string;
    content: string;
    publishedAt: string;
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
    <Row>
      {articles.map((article) => (
        <Col xs={12} sm={6} md={4} lg={2} key={article.id}>
          <SingleArticle
            id={article.id}
            title={article.title}
            date={article.publishedAt}
            image={article.image_url}
          />
        </Col>
      ))}
    </Row>
  );
};

export default ArticleList;