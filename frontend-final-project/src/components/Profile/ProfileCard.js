import React from 'react'
import { connect } from "react-redux";
import { Card, Icon, Image } from 'semantic-ui-react'

const ProfileCard = (props) => {
  if (props.selectedPhotographer) {
    return (
      <div>
        <div className="profile-card">

          <Card fluid={true} color="black">

            <div className="profile-card-image">
              <Image src={props.selectedPhotographer.profile_photo}/>
            </div>

            <Card.Content>
              <Card.Header>
                @{props.selectedPhotographer.username}
              </Card.Header>

              <Card.Meta>
                <span className='date'>
                  Joined in 2018
                </span>
              </Card.Meta>

              <Card.Description>
                Some small information about the Photographer
              </Card.Description>
            </Card.Content>

            <Card.Content extra>
              <a> <Icon name='user' />
                {props.selectedPhotographer.booked_photo_sessions.length} Sessions Booked
              </a>
              <div className="profile-card-button-container">
                {profileButton(props)}
              </div>
            </Card.Content>

          </Card>
        </div>
      </div>
    )
  } else {
    return (<div/>)
  }
}

const profileButton = (props) => {
  if (props.booking) {
    return <button className="profile-card-button" onClick={props.handleScheduleSession} value="Profile">Profile</button>
  } else {
    return <button className="profile-card-button" onClick={props.handleScheduleSession} value="Reserve">Reserve</button>
  }
}


const mapStateToProps = (state) => {
  return {
    selectedPhotographer: state.photographers.selectedPhotographer
  }
}

export default connect((mapStateToProps),null)(ProfileCard)
