import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


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

  constructor() {
    super();
    console.log("this is news constructor ");
    this.state = {
      articles: [],
      loading: false,
      page : 1,
    };
  }
  // refactoring of handleNextClick and handlePreviousClick
    async updateNews(){
  const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a40c69b16d93438e9b05a3f785ef625b&page=${this.state.page}&pageSize=${this.props.pageSize}`;
   this.setState({loading : true});
    let data =  await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles , 
      totalResults : parsedData.totalResults ,
       loading : false})
    }

   async componentDidMount () {
  //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a40c69b16d93438e9b05a3f785ef625b&page=1&pageSize=${this.props.pageSize}`;
  //  this.setState({loading : true});
  //   let data =  await fetch(url);
  //   let parsedData= await data.json();
  //   console.log(parsedData);
  //   this.setState({articles: parsedData.articles , 
  //     totalResults : parsedData.totalResults ,
  //      loading : false})
  this.updateNews();

   }
   handlePreviousClick = async() => {
   console.log("prev clicked");

  //  let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a40c69b16d93438e9b05a3f785ef625b&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
  //  this.setState({loading:true}) ;
  //  let data =  await fetch(url);
  //   let parsedData= await data.json();
  //   console.log(parsedData);
  //   this.setState({
  //     page : this.state.page - 1,
  //     articles: parsedData.articles,
  //     loading : false ,
  //   })
  this.setState({page : this.state.page - 1});
  this.updateNews();

   }
    handleNextClick = async() =>{
    console.log("next clicked");
    //  if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a40c69b16d93438e9b05a3f785ef625b&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    // this.setState({loading : true});
    // let data =  await fetch(url);
    // let parsedData= await data.json();
    // console.log(parsedData);
    // this.setState({
    //   page : this.state.page + 1,
    //   articles: parsedData.articles,
    //   loading : false ,
    // })
    // }
   this.setState({page:this.state.page+1});
    this.updateNews();
  }

  render() {
    return (
      <div className="container my-3">
        <h2 className="text-center my-3"> NewsMonkey - Top Headlines</h2>
        {this.state.loading && <Spinner />}
        <div className="row">
          {!this.state.loading && this.state.articles.map((element) => {
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
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>Previous &larr;</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSizes)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}
