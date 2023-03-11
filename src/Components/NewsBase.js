import React, { Component } from 'react'
import NewsItems from './NewsItems'
import Spin from './Spin'
// import n from '../resource/newsData.json'

export default class NewsBase extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            page: 1,
            loading : false,
            start : 0,
            end : 5
        }
    }

    async fetchNewsAPI(){
        // this.setState({articles: n.articles.slice(this.state.start,this.state.end)})
        // console.log(this.state.articles);
        // console.log(this.state.start)
        // console.log(this.state.end)
        // let url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&apiKey=dc8f8e01d7c54a07be12ae0ef2e8a70c&page=${this.state.page}&pageSize=5`;
        this.setState({loading: true})
        let url = `https://api.thenewsapi.com/v1/news/all?api_token=cy7XMUBpcdP51ylI1LVnhINWPDdhALt3eeCHKsK9&language=en&categories=${this.props.category}&page=${this.state.page}`
        console.log(url);
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse.data);
        this.setState({articles : jsonResponse.data, loading:false})
    }

    async componentDidMount(){
        this.fetchNewsAPI();
    }

    nextpage = async()=>{
        this.setState({
            page : this.state.page+1,
            start : this.state.start+5,
            end : this.state.end+5
        })
        this.fetchNewsAPI();
    }

    previouspage = async()=>{
        if(this.state.page >1){
            this.setState({
                page : this.state.page-1,
                start : this.state.start-5,
                end : this.state.end-5
            })
        }
        this.fetchNewsAPI();
    }


    render() {
        return (
            <div>
                <div className="container my-3 " style={(this.props.bg === "dark")?{background: "#20201b"}:{background: "#ffffff"}}>
                    <h2 className="text-success">Trending {this.props.category} News </h2>
                    <div className="row my-3" >
                    {this.state.loading && <Spin/>}
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                        <NewsItems title={element.title.slice(0,40)} desc={(element.description)?element.description.slice(0,80):""} imgUrl={element.image_url} url={element.url} bg={this.props.bg} color={this.props.color}/>
                    </div>
                    })}
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                <button disabled={this.state.page<2} onClick={this.previouspage} type="button" className="btn btn-dark border border-white">&larr; Previous</button>
                <h5 className={`text-${this.props.color}`}>PAGE:{this.state.page}</h5>
                <button onClick={this.nextpage} type="button" className="btn btn-dark border border-white">Next &rarr;</button>
                </div>
                <div className={`my-3`}>
                </div>
            </div>
        )
    }
}
