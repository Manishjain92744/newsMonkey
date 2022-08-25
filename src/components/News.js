import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "engadget",
        name: "Engadget",
      },
      author: "Mat Smith",
      title:
        "The Morning After: Apple’s big iPhone event is happening September 7th",
      description:
        'Apple has just sent invites for its next hardware event. As expected, the company will share what it\'s been working on for the past year on September 7th, with a live broadcast from Apple Park starting at 1 PM ET. The invite features the words "Far out", so h…',
      url: "https://www.engadget.com/the-morning-after-apples-big-i-phone-event-is-happening-september-7th-111503752.html",
      urlToImage:
        "https://s.yimg.com/os/creatr-uploaded-images/2022-08/0839c060-23c7-11ed-bcda-2b52e94f3743",
      publishedAt: "2022-08-25T11:15:03Z",
      content:
        "Apple has just sent invites for its next hardware event. As expected, the company will share what it's been working on for the past year on September 7th, with a live broadcast from Apple Park starti… [+2892 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Sami Fathi",
      title:
        "Apple Collects the Least Amount of User Data Out of Major Tech Companies, Study Suggests",
      description:
        "A new analysis has found that out of major tech giants, Apple collects the least amount of private user data from its users, with Google, Twitter, Amazon, and Facebook, collecting much more data from its users than the iPhone maker.\n\n\n\n\n\nThe study measured ho…",
      url: "https://www.macrumors.com/2022/08/25/apple-least-data-major-tech-companies/",
      urlToImage:
        "https://images.macrumors.com/t/x0J0Adc7tCuvsGs72r-q-EGQxYQ=/1727x/article-new/2021/06/tim-cook-privacy.jpg",
      publishedAt: "2022-08-25T10:21:37Z",
      content:
        "A new analysis has found that out of major tech giants, Apple collects the least amount of private user data from its users, with Google, Twitter, Amazon, and Facebook, collecting much more data from… [+1307 chars]",
    },
    {
      source: {
        id: null,
        name: "MacRumors",
      },
      author: "Tim Hardwick",
      title:
        "Apple Stops Signing iOS 15.6 Following iOS 15.6.1 Release, Downgrading No Longer Possible",
      description:
        "Following the launch of iOS 15.6.1 last Wednesday, Apple has stopped signing iOS 15.6, the previously available version that came out in mid-July. Since iOS 15.6 is no longer being signed, it is not possible to downgrade to that version of iOS after installin…",
      url: "https://www.macrumors.com/2022/08/25/apple-stops-signing-ios-15-6/",
      urlToImage:
        "https://images.macrumors.com/t/lHKafW2IrX2_EXwwOqB992a5j6c=/2574x/article-new/2022/08/iOS-15.6.1-feature-4.jpg",
      publishedAt: "2022-08-25T09:03:35Z",
      content:
        "Following the launch of iOS 15.6.1 last Wednesday, Apple has stopped signing iOS 15.6, the previously available version that came out in mid-July. Since iOS 15.6 is no longer being signed, it is not … [+772 chars]",
    },
    {
      source: {
        id: null,
        name: "CNET",
      },
      author: "Mark Serrels",
      title: "Everyone Should Watch the Best TV Show on Apple TV Plus - CNET",
      description: "It could be the best show of 2022.",
      url: "https://www.cnet.com/culture/entertainment/everyone-should-watch-the-best-tv-show-on-apple-tv-plus/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/9b91a74f25c01f6c16cf032c168ef26c05150cdf/2022/08/22/6b3c4a98-785d-495c-9781-8d9d2c7e85ed/severance.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-08-25T01:19:00Z",
      content:
        'Remember the "golden age" of TV?\r\nTV\'s golden age most likely kicked off with The Sopranos in 1999, but it really got rolling with shows like The Wire, Lost and Deadwood in the mid-2000s. Big-time pr… [+4345 chars]',
    },
  ];
  constructor() {
    super();
    console.log("this is news constructor ");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }
  render() {
    return (
      <div className="container my-3">
        <h2> NewsMonkey - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
             return  <div className="col-md-4" key={element.url} >
              <NewsItem  
                title={element.title.slice(0,45)}
                description={element.description.slice(0,70)}
                imageUrl={element.urlToImage}
                newsUrl={element.url}/>
            </div>;
          })}
        </div>
      </div>
    );
  }
}
