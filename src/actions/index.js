class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    fetch("https://api.dailysmarty.com/posts")
    .then(response => response.json())
    .then(data => console.log{(data: data.posts[0]}));

  }

  renderPosts = () => {
    return this.state.data.map(post => {
      return <p>{post.title}</p>
    })
  }

  render() {
    console.log(this.state.data)
    return <div className="App">{this.renderPosts}></div>
  }
}