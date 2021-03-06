import React, { Component } from 'react';
import "./Userprofile.css";
import  HomePageNavbar  from '../HomePage/HomePageNavbar';
import {BASEURL} from '../../Constants/BaseURL'

/** Class Userprofile 
 * @category Userprofile
 * @extends Component
 */
class Userprofile extends Component {
  constructor(props){
    super(props);
    this.state = 
    {
        /**username in user profile
        * @memberof Userprofile
        * @type {string}
        */
        username:"Mohammed_Nader",

        /**Number of playlists that the user create
        * @memberof Userprofile
        * @type {number}
        */
        playlists:15,

        /**Text on follow button
        * @memberof Userprofile
        * @type {string}
        */
        ButtonText:"Follow",

        /**Array of playlists
        * @memberof Userprofile
        * @type {Array<playlists>}
        */
        playlistTargets:[]
    }
  }

  /**Function to Handle follow button
   * @memberof Userprofile
   * @func FollowButton
   */
  FollowButton = () => {
   if ( this.state.ButtonText === "Follow" ) {
    var url =  BASEURL+"/user/follow";    
    const requestOptions = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json' }, 
      body: JSON.stringify({
         playlistName: this.state.userid
        }) ,
  
    };    
       fetch(url,requestOptions)
        .then((res) => {
          if(res.status===200){
            console.log("response is ok")
            this.setState({ButtonText: "UnFollow"});
          }
     })
        .then((data) =>{})
        .catch((err)=>console.log(err))
   }
   else if ( this.state.ButtonText === "UnFollow" ) {
    var url =  BASEURL+"/user/unfollow";    
    const requestOptions = {
      method: 'POST', 
      headers: {'Content-Type': 'application/json' }, 
      body: JSON.stringify({
         playlistName: this.state.userid
        }) ,
  
    };    
       fetch(url,requestOptions)
        .then((res) => {
          if(res.status===200){
            console.log("response is ok")
            this.setState({ButtonText: "Follow"});
          }
     })
        .then((data) =>{})
        .catch((err)=>console.log(err))
   }
 }

 /**Function to Handle Like ad unlike
   * @memberof Userprofile
   * @func Like
   * @param e
   */
 Like = e => {
    const {id} = e.target;
  /** heart icon
   * @memberof Userprofile
   * @type {string}
   */
    var heart=document.getElementById(id);
  
  var url =  BASEURL+"/playlist/like";    
  const requestOptions = {
    method: 'POST', 
    headers: {'Content-Type': 'application/json' }, 
    body: JSON.stringify({
       playlistName: this.state.playlistTargets[id].id
      }) ,

  };    
     fetch(url,requestOptions)
      .then((res) => {
        if(res.status===200){
          console.log("response is ok")
          heart.classList.toggle("far");
          heart.classList.toggle("fas");
          heart.classList.toggle("red");
        }
   })

      .then((data) =>{})
      .catch((err)=>console.log(err))
    
 }

 /**Function that is called when the component renders
   * @memberof Userprofile
   * @func componentDidMount
   */
 componentDidMount(){
    const url=BASEURL + "/get-playlists"
    const requestOptions = {
        method: 'GET',
      };
    fetch(url,requestOptions)
              .then((response) => { return response.json()})
              .then((data) => {
                this.setState({ 
                  playlistTargets:data.playlists,
                });
              })
              .catch((error)=>{console.log(error);
    })
 }
  render(){
    return (
        <div>
            <HomePageNavbar/>
        <div className="user ">
          <div className="user-profile row">
            <div className="col-xl-2 col-lg-12 d-flex align-items-center justify-content-center">
                <img className="user-image" src="https://www.designhub.today/wp-content/uploads/2019/06/tumblr_m6hi9o09m31rve3tbo1_1280.gif" />
            </div>
            <div className="col-xl-8 col-lg-12 d-flex align-items-center">
                <ul className="list-unstyled list">
                    <li className="profile">PROFILE</li>
                    <li className="username">{this.state.username}</li>
                    <li className="playlists">{this.state.playlists} Playlist</li>
                </ul>
            </div>
            <div className="col-xl-2 col-lg-12 d-flex align-items-center justify-content-center">
            <button onClick={this.FollowButton} className="follow btn btn-success rounded-pill text-center px-5 py-2 mt-3 font-weight-bold">{this.state.ButtonText}</button>
            </div>
          </div>
        
          <div className="public row pl-5">
            <h3>Public Playlists</h3>
          </div>

          <div className="row mt-3 pl-5">
          { this.state.playlistTargets.map((Card,index)=>(
            <div className="card">
                <a href="/webplayer/playlist"><img src={Card.playlistImg} className="card-img-top" alt="..."></img></a>
                <div className="card-body" id="playlists-cards">
                    <h5 className="card-title">{Card.playlistName}</h5>
                    <p className="card-text">{this.state.username}</p>
                    
                    <button id={index} onClick={this.Like} className="play-btn far fa-heart"></button>
                    
                </div> 
            </div>
          ))}
          </div>
          </div>
        </div> 
    );
  }
}
export default Userprofile;