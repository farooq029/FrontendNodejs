import React from "react";

const style = {
  fontSize: 55,
  paddingRight: 20
};

const Widgets = ({
  media_object_icon,
  media_object_heading,
  media_object_text
}) => {
  return (
    <div className="container widgetsContainer">
      <div className="row">
        <div className="col-md-6">
          <div className="media">
            <li className={media_object_icon} style={style} />
            <div className="media-body">
              <h5 className="mt-0">{media_object_heading}</h5>
              {media_object_text}
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="media">
            <li className="fa fa-cogs" style={style} />
            <div className="media-body">
              <h5 className="mt-0">Media heading</h5>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus
              scelerisque ante sollicitudin. Cras purus odio, vestibulum in
              vulputate at, tempus viverra turpis. Fusce condimentum nunc ac
              nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default Widgets;
