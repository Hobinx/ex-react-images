import React from 'react';

const ImageScore = (props) => {
  // props.ups is the number of upvotes
  // props.downs is the number of downvotes
  const { ups, downs } = props;

  const upsPercent = 100 * (ups / (ups + downs));
  const downsPercent = 100 - upsPercent;

  return (
    <div>
      Ups/Downs
      <div className="progress">
        <div style={{ width: `${upsPercent}%` }}
             className="progress-bar progress-bar-success progress-bar-striped">
        </div>
        <div style={{ width: `${downsPercent}%` }}
             className="progress-bar progress-bar-danger progress-bar-striped">
        </div>
      </div>
    </div>
  )
};

export default ImageScore;