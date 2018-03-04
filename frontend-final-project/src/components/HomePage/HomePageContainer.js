import React from 'react';
import { connect } from "react-redux";
import { fetchPhotos } from "../../actions";
import Loading from '../Loading';
import PhotoList from '../Photo/PhotoList';
import TagsContainer from '../TagList/TagsContainer';
import '../../CSS/Home.css';

class HomePageContainer extends React.Component {

  componentDidMount = () => {
    this.props.fetchPhotos()
  }

  render = () => {
    if (!!this.props.loading){
      return <Loading />
    }

    return (
      <div className="homepage">
        <PhotoList />
        <TagsContainer />
      </div>
    )
  }

}



const mapStateToProps = (state) => {
  return {
    loading: state.photographers.loading
  }
}

export default connect((mapStateToProps), { fetchPhotos })(HomePageContainer)
