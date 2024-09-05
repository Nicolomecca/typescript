// src/components/ArticleDetail.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "react-bootstrap";

const ArticleDetail = () => {
  interface Article {
    title: string;
    image_url: string;
    content: string;
    publishedAt: string;
  }

  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchArticle();
  }, [id]);

  const fetchArticle = () => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella risposta della rete");
        }
      })
      .then((data) => {
        setArticle(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!article && !loading && !error && <div>Articolo non trovato...</div>}
      {article && (
        <>
          <Card>
            <Card.Img variant="top" src={article.image_url} style={{ width: '100px' }} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                {article.content}
                {article.publishedAt}
              </Card.Text>
            </Card.Body>
          </Card>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;
