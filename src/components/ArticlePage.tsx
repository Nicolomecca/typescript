// src/components/ArticlePage.tsx
import { Container, Row, Col } from 'react-bootstrap';
import ArticleList from './ArticleList';

const ArticlePage = () => {
  return (
    <Container>
      <Row>
        <Col xs={12} md={10} lg={8} className="mx-auto">
          <ArticleList />
        </Col>
      </Row>
    </Container>
  );
};

export default ArticlePage;