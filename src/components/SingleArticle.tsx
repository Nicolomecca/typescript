import { Card, Button } from "react-bootstrap";

interface SingleArticle {
  title: string;
  date: string;
  image: string;
}

const SingleArticle = ({ title, date, image }: SingleArticle) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{date}</Card.Text>
        <Button variant="primary">View Details</Button>
      </Card.Body>
    </Card>
  );
};

export default SingleArticle;