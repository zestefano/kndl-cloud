import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAllUsersSongs } from "../../store/profileReducer";


const Profile = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const songs = useSelector((state) => Object.values(state.songs))

    useEffect(() => {
        dispatch(getAllUsersSongs(sessionUser.id))
    }, [dispatch, sessionUser.id])


    return (
        <div>
            <h2>helloWorld</h2>
        </div>
    )
}

export default Profile;