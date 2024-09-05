import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

interface SingleArticleProps {
  id: string; 
  title: string;
  date: string;
  image: string;
}

// Definizione del componente come funzione normale
const SingleArticle = ({ id, title, date, image }: SingleArticleProps) => {
  const navigate = useNavigate(); 

  const handleViewDetails = () => {
    navigate(`/articles/${id}`); 
  };

  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Button variant="primary" onClick={handleViewDetails}>
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;