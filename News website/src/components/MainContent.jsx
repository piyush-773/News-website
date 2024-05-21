import React, { useEffect, useState } from "react";
import axios from "axios";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const MainContent = ({ category, country, searchQuery }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      try {
        let url = "https://newsapi.org/v2/top-headlines";
        let params = {
          apiKey: "1465a4f94c9c4002870f7d68528fd0c7",
        };

        if (searchQuery) {
          url = "https://newsapi.org/v2/everything";
          params.q = searchQuery;
        } else {
          params.country = country;
          params.category = category;
        }

        const response = await axios.get(url, { params });
        setArticles(
          response.data.articles.filter((art) => art.urlToImage !== "")
        );
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [category, country, searchQuery]);

  if (error)
    return (
      <p style={{ fontSize: "44px" }}>Error loading news: {error.message}</p>
    );

  const skeletonLoader = (
    <Row xs={1} md={3} className="g-4">
      {Array.from({ length: 6 }).map((_, index) => (
        <Col key={index}>
          <Card>
            <Skeleton height={200} />
            <Card.Body>
              <Card.Title>
                <Skeleton />
              </Card.Title>
              <Card.Text>
                <Skeleton count={3} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <main>
      {category === "general" && !searchQuery && (
        <Carousel>
          {loading
            ? Array.from({ length: 3 }).map((_, index) => (
                <Carousel.Item key={index}>
                  <Skeleton height={400} />
                </Carousel.Item>
              ))
            : articles.slice(0, 3).map((article, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="newsImage"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                  <Carousel.Caption>
                    <h3>{article.title}</h3>
                    <p>{article.description}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
        </Carousel>
      )}
      <div className="card-list">
        {loading ? (
          skeletonLoader
        ) : (
          <Row xs={1} md={3} className="g-5">
            {}
            {articles.map((article, index) => (
              <Col key={index}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={article.urlToImage}
                    alt={article.title}
                  />
                  <Card.Body>
                    <Card.Title>{article.title}</Card.Title>
                    <Card.Text>{article.description}</Card.Text>
                    <Card.Link
                      href={article.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read More
                    </Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </main>
  );
};

export default MainContent;
