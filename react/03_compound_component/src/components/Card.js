import {useState} from 'react';
import Square from './Square';
import Label from './Label';

const Card = (props) => {

	const [state,setState] = useState({
		color:"red"
	})
	
	let cardStyle = {
		height:200,
		width:150,
		backgroundColor:"#FFFFFF",
		filter:"drop-shadow(0px 0px 5px #666)",
		WebkitFilter:"drop-shadow(0px 0px 5px #666)"
	}
	
	return (
		<div style={cardStyle}>
			<Square color={state.color}/>
			<Label color={state.color}/>
		</div>
	)
}

export default Card;