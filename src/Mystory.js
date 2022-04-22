import React from 'react';
import './Story.css';
import AddIcon from '@mui/icons-material/Add';

function Mystory({ image , iconSrc ,title }) {
  return (
    <div style = {{ backgroundImage : `url(${image})`, backgroundRepeat: "no-repeat"}} className = "mystory">
    <AddIcon 
    className = "story__Addicon"
                src = {iconSrc} />
    <h4>{title}</h4>
</div>
  )
}

export default Mystory