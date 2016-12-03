import React from 'react';
import arrow from '../images/arrow@2x.png';

const Landing = props => {
  const landing = {
    height: window.innerHeight,
    width: window.innerWidth,
    backgroundImage: 'url(' + props.currentBgUrl + ')', // don't use css 'background' shorthand here, will wipe out attachment and size properties
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center top',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
  };
  // const extraInfo = props.extraInfo.split('. ').map(sentence => {
  //   return (
  //     <div className="extra-info">{sentence}</div>
  //   )
  // });
  return (
    <div style={landing}>
      <div className="extra-info">{props.extraInfo}</div>
      <div className="mini-landing-title">{props.miniTitle}</div>
      <div className="landing-arrow"><img src={arrow} /></div>
    </div>
  )
}

export default Landing;