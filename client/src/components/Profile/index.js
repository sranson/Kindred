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
  console.log(data);
  if (loading) {
    return <h2>Loading...</h2>;
  }
  const filteredCategory = (chosenCategory) => {
    const filter = data.me.savedCategories.filter((category) => {
      return category.type === chosenCategory;
    });

    console.log(filter);

    return filter;
  };

  const createCardGrid = (chosenCategory) => {
    return (
      <div>
        {data.me.savedCategories.length > 0 ? (
          <ul>
            {filteredCategory(chosenCategory).map((category) => {
              if (category.youtubeUrl === null) {
                return (
                  <Card
                    type={category.type}
                    image={category.image}
                    title={category.title}
                    description={category.description}
                    moreInfo={category.wikiUrl}
                    profile={true}
                    key={category.title}
                  ></Card>
                );
              } else {
                return (
                  <SimilarResultCard
                    type={category.type}
                    image={category.image}
                    title={category.title}
                    description={category.description}
                    moreInfo={category.wikiUrl}
                    video={category.youtubeUrl}
                    profile={true}
                    key={category.title}
                  ></SimilarResultCard>
                );
              }
            })}
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
          style={{
            backgroundImage:
              "url(https://pbs.twimg.com/profile_images/1047268283374850050/OBy8k6AX_400x400.jpg)",
          }}
        ></div>
        <h3 className="username">{data.me.username}</h3>
      </div>
      <div className="about">I just really love {data.me.username}</div>
      <div className="interests">
        <Collapsible title="Music">{createCardGrid("Music")}</Collapsible>
        <Collapsible title="Movies">{createCardGrid("Movies")}</Collapsible>
        <Collapsible title="TV Shows">
          <ul>
            <li>I Think You Should Leave</li>
            <li>It's Always Sunny in Philadelphia</li>
          </ul>
        </Collapsible>
        <Collapsible title="Books">
          <ul>
            <li>The Hobbit</li>
            <li>Neuromancer</li>
          </ul>
        </Collapsible>
        <Collapsible title="Authors">
          <ul>
            <li>HP Lovecraft</li>
            <li>William Gibson</li>
          </ul>
        </Collapsible>
        <Collapsible title="Games">
          <ul>
            <li>Bloodborne</li>
            <li>Monster Hunter World</li>
          </ul>
        </Collapsible>
        <Collapsible title="Podcasts">
          <ul>
            <li>Your Kickstarter Sucks</li>
            <li>Episode One</li>
          </ul>
        </Collapsible>
      </div>
    </div>
  );
};

export default Profile;
