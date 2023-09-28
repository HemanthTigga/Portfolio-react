// import React from 'react';

// class ImageTrack extends React.Component {
//   render(){
//     return (
//       <React.Fragment>
// 		<div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
//   <img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
// </div>
//       </React.Fragment>
//     );
//   }
// }

// export default ImageTrack;


// import React, { Component } from 'react';

// class ImageTrack extends Component {
//   state = {
//     mouseDownAt: 0,
//     prevPercentage: 0,
//     percentage: 0,
//   };

//   handleOnDown = (e) => {
//     this.setState({ mouseDownAt: e.clientX });
//   };

//   handleOnUp = () => {
//     this.setState({ mouseDownAt: 0, prevPercentage: this.state.percentage });
//   };

//   handleOnMove = (e) => {
//     if (this.state.mouseDownAt === 0) return;

//     const mouseDelta = this.state.mouseDownAt - e.clientX;
//     const maxDelta = window.innerWidth / 2;

//     const percentage =
//       (mouseDelta / maxDelta) * -100;
//     const nextPercentageUnconstrained =
//       this.state.prevPercentage + percentage;
//     const nextPercentage = Math.max(
//       Math.min(nextPercentageUnconstrained, 0),
//       -100
//     );

//     this.setState({ percentage: nextPercentage });
//   };

//   componentDidMount() {
//     window.addEventListener('mousedown', this.handleOnDown);
//     window.addEventListener('touchstart', (e) => this.handleOnDown(e.touches[0]));
//     window.addEventListener('mouseup', this.handleOnUp);
//     window.addEventListener('touchend', (e) => this.handleOnUp(e.changedTouches[0]));
//     window.addEventListener('mousemove', this.handleOnMove);
//     window.addEventListener('touchmove', (e) => this.handleOnMove(e.touches[0]));
//   }

//   componentWillUnmount() {
//     window.removeEventListener('mousedown', this.handleOnDown);
//     window.removeEventListener('touchstart', (e) => this.handleOnDown(e.touches[0]));
//     window.removeEventListener('mouseup', this.handleOnUp);
//     window.removeEventListener('touchend', (e) => this.handleOnUp(e.changedTouches[0]));
//     window.removeEventListener('mousemove', this.handleOnMove);
//     window.removeEventListener('touchmove', (e) => this.handleOnMove(e.touches[0]));
//   }

//   render() {
//     return (
//       <div
//         id="image-track"
//         style={{
//           transform: `translate(${this.state.percentage}%, -50%)`,
//           display: 'flex',
//           gap: '4vmin',
//           position: 'absolute',
//           left: '50%',
//           top: '50%',
//         }}
//         data-mouse-down-at={this.state.mouseDownAt}
//         data-prev-percentage={this.state.prevPercentage}
//         user-select="none"
//       >
//         {/* Your images go here */}
//         <div id="image-track" data-mouse-down-at="0" data-prev-percentage="0">
//   <img className="image" src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1610194352361-4c81a6a8967e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1618202133208-2907bebba9e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1495805442109-bf1cf975750b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1548021682-1720ed403a5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1496753480864-3e588e0269b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1613346945084-35cccc812dd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1759&q=80" draggable="false" />
//   <img className="image" src="https://images.unsplash.com/photo-1516681100942-77d8e7f9dd97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80" draggable="false" />
// </div>
//       </div>
//     );
//   }
// }

// export default ImageTrack;
{/* <img
        className="w-40 h-56 object-cover"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Your Image"
      />
      <img
        className="w-40 h-56 object-cover"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Your Image"
      />
      <img
        className="w-40 h-56 object-cover"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Your Image"
      />
      <img
        className="w-40 h-56 object-cover"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Your Image"
      />
      <img
        className="w-40 h-56 object-cover"
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        alt="Your Image"
      /> */}
      

      import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

function ImageTrack() {
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [downX, setDownX] = useState(0);
  const [prevX, setPrevX] = useState(0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setDownX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    const deltaX = e.clientX - downX;
    const maxDelta = window.innerWidth / 2;
    const percentageDelta = (deltaX / maxDelta) * -100;
    setPrevX(percentageDelta);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    setPrevX(0);
  };

  const { x } = useSpring({
    x: isMouseDown ? prevX : 0,
  });

  return (
    <div
      id="image-track"
      className="flex gap-4"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {Array.from({ length: 4 }).map((_, index) => (
        <animated.img
          key={index}
          className="w-40 h-56 object-cover"
        //   src={`https://via.placeholder.com/150?text=Image${index + 1}`}
        src="https://images.unsplash.com/photo-1524781289445-ddf8f5695861?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
      
          alt={`Image ${index + 1}`}
          style={{
            transform: x.interpolate((x) => `translateX(${x}%)`),
          }}
        />
      ))}
    </div>
  );
}

export default ImageTrack;
