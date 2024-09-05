import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  interface Article {
    title: string;
    coverImage: string;
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
    fetch(`https://api.spaceflightnewsapi.net/v4/article/${id}`)
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
    <div className="article-detail">
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {!article && !loading && !error && <div>Articolo non trovato...</div>}
      {article && (
        <>
          <h1>{article.title}</h1>
          <img src={article.coverImage} alt={article.title} />
          <p>{article.content}</p>
          <p>Published on: {article.publishedAt}</p>
        </>
      )}
    </div>
  );
};

export default ArticleDetail;