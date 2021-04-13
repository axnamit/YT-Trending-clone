import { Col, Container, Row } from "reactstrap";
import ReactPlayer from "react-player";
import { useContext, useEffect, useState } from "react";
import Store from "../store/index";
import { useHistory } from "react-router-dom";

const SingleItem = () => {
  const history = useHistory();

  const [url, setUrl] = useState("");
  const { state } = useContext(Store);

  useEffect(() => {
    if (state != null) {
      let ur = `https://www.youtube.com/watch?v=${state.videoId}`;
      setUrl(ur);
    } else {
      return history.push(`/`);
    }
  }, [state]);

  return (
    <div>
      <Col>
        <Container fluid="md">
          <div className="player-wrapper">
            <ReactPlayer className="react-player" url={url} width="80%" />
          </div>
        </Container>
      </Col>
      <Col>
        <Container>
          <Row>
            <Col>
              <h4>{state?.title}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h4>{state?.author}</h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>{state?.description}</h5>
            </Col>
          </Row>

          <Row>
            <Col>
              <h5>Views:{state?.viewCount}</h5>
            </Col>
            <Col>
              <h5>Duration:{state?.timeText}s</h5>
            </Col>
          </Row>
        </Container>
      </Col>
    </div>
  );
};

export default SingleItem;
