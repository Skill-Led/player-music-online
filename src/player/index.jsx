import React, {useEffect} from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Button from 'react-bootstrap/Button'

function Player () {
  useEffect(
    () => {
      // const subscription = props.source.subscribe();
      // return () => {
      //   // Clean up the subscription
      //   subscription.unsubscribe();
      // };
      //connect to deezer 
    },
    []
  )
  return (
    <ButtonGroup>
      <Button>play</Button> <Button>pause</Button> <Button>stop</Button> <Button>list</Button>
    </ButtonGroup>);
}

export default Player;