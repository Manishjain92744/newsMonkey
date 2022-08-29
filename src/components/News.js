import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';



export default class News extends Component {
  static defaultProps = {
    pageSize : 8,
    country : 'in',
    category : 'general'
  }
  static propTypes = { 
    pageSize : PropTypes.number,
    country :PropTypes.string,
    category : PropTypes.string,

  }
  capitalizeFirstLetter =(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }

  constructor(props) {
    super(props);
    console.log("this is news constructor ");
    this.state = {
      articles: [],
      loading: true,
      page : 1,
      totalResults : 0

    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`;
  }
    async updateNews(){
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading : true});
    let data =  await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , 
      totalResults : parsedData.totalResults ,
       loading : false,

      })
    }

   async componentDidMount () {
  this.updateNews();

   }
   handlePreviousClick = async() => {
  this.setState({page : this.state.page - 1});
  this.updateNews();

   }
    handleNextClick = async() =>{
   this.setState({page:this.state.page+1});
    this.updateNews();
  }

  fetchMoreData = async () => {
   this.setState({page : this.state.page+1})
   const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
  //  this.setState({loading : true});
    let data =  await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({
      articles: this.state.articles.concat(parsedData.articles) , 
      totalResults : parsedData.totalResults ,
      //  loading : false,

      })
  };

  render() {
    return (
      <>
        <h2 className="text-center " style={{marginTop : '4rem' , marginBottom:'2rem'}}> NewsMonkey - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
         dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}
             >
       <div className="container">
        <div className="row">
          { this.state.articles.map((element) => {
             return  <div className="col-md-4" key={element.url} >
              <NewsItem  
                title={element.title?element.title:" "}
                description={element.description?element.description:" "}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
                author={element.author}
                date={element.publishedAt}
                source={element.source}/>
            </div>;
          })}
        </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}
