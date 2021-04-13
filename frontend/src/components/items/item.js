import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Item = ({ object }) => {
  return (
    <div className="jkakdjs">
      <div className="top">
        <Card>
          <CardImg
            top
            width="100%"
            src={object.videoThumbnails[2].url}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{object.title}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              {object.author}
            </CardSubtitle>
            <CardText>{object.description}</CardText>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default Item;
