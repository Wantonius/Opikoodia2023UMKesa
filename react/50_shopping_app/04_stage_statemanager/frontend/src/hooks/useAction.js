import ActionContext from '../context/ActionContext';
import {useState,useEffect,useContext} from 'react';
import * as actionConstants from '../context/actionConstants';
import useAppState from './useAppState';

const useAction = () => {
	
	const [state,setState] = useState({
		url:"",
		request:{},
		action:""
	})
	
	const {dispatch} = useContext(ActionContext);
	
	const {token} = useAppState();
	
	useEffect(() => {}, [state]);

	//FUNCTIONS
	
	const register = (user) => {
		setState({
			"url":"/register",
			"request":{
				"method":"POST",
				"headers":{
					"Content-Type":"application/json"
				},
				"body":JSON.stringify(user)
			},
			"action":"register"
		})
	}
	
	const login = (user) => {
		dispatch({
			"type":actionConstants.SET_USERNAME,
			"user":user.username
		})
		setState({
			"url":"/login",
			"request":{
				"method":"POST",
				"headers":{
					"Content-Type":"application/json"
				},
				"body":JSON.stringify(user)
			},
			"action":"login"
		})
	}
	
	const logout = () => {
		setState({
			"url":"/logout",
			"request":{
				"method":"POST",
				"headers":{
					"token":token
				}
			},
			"action":"logout"
		})
	}
	
	const setError = (error) => {
		dispatch({
			"type":actionConstants.REGISTER_FAILED,
			"error":error
		})
	}
	
	return [register,login,logout,setError]
}

export default useAction;