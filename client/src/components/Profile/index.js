import React from "react";
import "./profile.css";
import Card from "../Card/index";
import SimilarResultCard from "../Card/SimilarResultCard";

import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

class Collapsible extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  render() {
    return (
      <div>
        <div onClick={(e) => this.togglePanel(e)} className="interestHeader">
          {this.props.title}
        </div>
        {this.state.open ? (
          <div className="content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

const Profile = () => {
  const { loading, data } = useQuery(QUERY_ME);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const filteredCategory = (chosenCategory) => {
    const filter = data.me.savedCategories.filter((category) => {
      return category.type === chosenCategory;
    });

    return filter;
  };

  const createCardGrid = (chosenCategory) => {
    return (
      <div>
        {data.me.savedCategories.length > 0 ? (
          <ul>

            <div className="row" >
            {filteredCategory(chosenCategory).map((category) => {
              if (category.youtubeUrl === null) {
                return (
                  <div className="col-md-3" style={{ marginTop: "2%", marginBottom:"2%" }}>
                    <Card type={category.type} image={category.image} title={category.title} description={category.description} moreInfo={category.wikiUrl} profile={true} key={category.title}></Card>
                  </div>
                );
              } else if (category.youtubeUrl) {
                return (
                  <div className="col-md-3" style={{ marginTop: "2%", marginBottom:"2%" }}>
                    <SimilarResultCard type={category.type} title={category.title} description={category.description} moreInfo={category.wikiUrl} video={category.youtubeUrl} profile={true} key={category.title}></SimilarResultCard>
                  </div>
                );
              } 
            })}
            </div>

          </ul>
        ) : (
          <div className="ml-2">No interest saved for this category!</div>
        )}
      </div>
    );
  };

  return (
    <div className="profile">
      <div className="profileHeader">
        <div
          className="profPic"
          style={{ backgroundImage: "url(https://pbs.twimg.com/profile_images/1047268283374850050/OBy8k6AX_400x400.jpg)", }} ></div>
        <h3 className="username">{data.me.username}</h3>
      </div>
      <div className="about">I just really love {data.me.username}</div>
      <div className="interests">
        <Collapsible title="Music">{createCardGrid("Music")}</Collapsible>
        <Collapsible title="Movies">{createCardGrid("Movies")}</Collapsible>
        <Collapsible title="TV Shows">{createCardGrid("shows")}</Collapsible>
        <Collapsible title="Books">{createCardGrid("books")}</Collapsible>
        <Collapsible title="Authors">{createCardGrid("Authors")}</Collapsible>
        <Collapsible title="Games">{createCardGrid("Games")}</Collapsible>
        <Collapsible title="Podcasts">{createCardGrid("podcasts")}</Collapsible>
      </div>
    </div>
  );
};

export default Profile;
